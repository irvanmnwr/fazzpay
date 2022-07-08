import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../store/actions/user";
// import Modal from "react-modal";
import Layout from "../../../component/Layout";
import HandleChart from "../../../component/Chart";
import cookies from "next-cookies";
import axiosServer from "../../../utils/axiosServer";
import Image from "next/image";
import IconTransfer from "../../../component/Icon/Transfer";
import IconIncome from "../../../component/Icon/Income";
import { useRouter } from "next/router";
import Modal from "../../../component/Modal";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const id = dataCookies.id;
    const dataDashboard = await axiosServer.get(`dashboard/${id}`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    });
    const dataHistory = await axiosServer.get(
      `transaction/history?page=1&limit=4&filter=MONTH`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    return {
      props: {
        id: id,
        dataDashboard: dataDashboard.data.data,
        dataHistory: dataHistory.data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination:
          error.response.status === 403
            ? "/auth/login"
            : `/error?msg=${error.response.data.msg}`,
        permanent: false,
      },
    };
  }
}

export default function Dashboard(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const [active, setActive] = useState(false);
  console.log(props);

  useEffect(() => {
    getDataUserbyId();
  }, []);

  const getDataUserbyId = async () => {
    await dispatch(getUserById(props.id));
  };

  function openModals() {
    setActive(true);
  }

  return (
    <>
      {active ? <Modal setActive={setActive} /> : null}

      <Layout tittle="Dashboard">
        <div className="card text-white bg_primary">
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <p className="dashboard_text">Balace</p>
                <h2>Rp.{user.balance}</h2>
                <p className="dashboard_text">{user.noTelp}</p>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-secondary d-grid gap-2"
                  onClick={() => router.push(`/user/transfer/transferList`)}
                >
                  Transfer
                </button>
                <button
                  className="btn btn-secondary d-grid gap-2"
                  onClick={() => {
                    openModals();
                  }}
                >
                  Top Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card col-md-6" style={{ margin: "15px" }}>
            <div className="card-body">
              <h3 className="card-title">Chart</h3>
              <div className="row" style={{ margin: "50px 10px" }}>
                <div className="col-6 text-start">
                  <IconIncome color={"#1EC15F"} />
                  <small>INCOME</small>
                  <p>Rp.{props.dataDashboard.totalIncome}</p>
                </div>
                <div className="col-6 text-end">
                  <IconTransfer color={"#FF5B37"} />
                  <small>EXPENSE</small>
                  <p>Rp.{props.dataDashboard.totalExpense}</p>
                </div>
              </div>
              <HandleChart dataDashboard={props.dataDashboard} />
            </div>
          </div>
          <div className="card col-md-5" style={{ margin: "15px" }}>
            <div className="card-body">
              <h5 className="card-title">Transfer History</h5>
              {props.dataHistory.map((item) => (
                <div className="card" key={item.id}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2">
                        <Image
                          src={
                            item.image
                              ? `${process.env.CLAUDINARY}/${item.image}`
                              : "/assets/user.png"
                          }
                          alt=""
                          width={120}
                          height={120}
                          style={{ margin: "20px 0px" }}
                        />
                      </div>
                      <div className="col-6">
                        <h5>
                          {item.firstName} {item.lastName}
                        </h5>
                        <small>{item.type}</small>
                      </div>
                      <div className="col-4">
                        <p
                          className={
                            item.type === "send"
                              ? "text-end dashboard_red"
                              : "text-end dashboard_green"
                          }
                        >
                          RP. {item.amount}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <br />
            </div>
          </div>
        </div>
      </Layout>
      {/* <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="container">
          <h1>Add Product</h1>
          <h1>Add Product</h1>
          <h1>Add Product</h1>
          <input
            type="text"
            name="amount"
            className="form-control-plaintext col-md-4"
            placeholder="00.000"
            onChange={handleChangeText}
          />
          <button className="btn btn-primary" onClick={() => handleTopUp()}>
            Continue
          </button>
        </div>
      </Modal> */}
    </>
  );
}
