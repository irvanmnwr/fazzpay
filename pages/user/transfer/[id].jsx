import React, { useState } from "react";
import Layout from "../../../component/Layout";
import { useSelector } from "react-redux";
import axiosServer from "../../../utils/axiosServer";
import axios from "../../../utils/axios";
import cookies from "next-cookies";
import Image from "next/image";
import { useRouter } from "next/router";
import Modal from "../../../component/Modal/pin";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const params = context.query.id;
    // console.log(params);
    const result = await axiosServer.get(`user/profile/${params}`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    });
    return {
      props: {
        data: result.data.data,
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

export default function transferUser(props) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [active, setActive] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const user = props.data;
  // const date = new Date();
  const balance = useSelector((state) => state.user.data);
  const [form, setForm] = useState({
    receiverId: user.id,
    amount: "",
    notes: "",
  });

  const handleTransfer = async () => {
    try {
      const result = await axios.post("/transaction/transfer", form);
      console.log(result);
      setActive(false);
      setIsError(false);
      setMessage(result.data.msg);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };

  console.log(transfer);

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //   console.log(form);
  const handleSubmit = () => {
    setIsSubmit(true);
  };
  const handleClose = () => {
    setActive(true);
  };

  console.log(balance);

  return (
    <>
      {active ? (
        <Modal
          setActive={setActive}
          id={balance.id}
          setTransfer={setTransfer}
        />
      ) : null}
      <Layout tittle="Dashboard">
        {!message ? null : isError ? (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        ) : (
          <div className="alert alert-primary" role="alert">
            {message}
          </div>
        )}
        <div className="card">
          <div className="card-body">
            <h4>Transfer To</h4>
            <br />
            <div className="card" style={{ height: "100%" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-1">
                    <Image
                      src={
                        user.image
                          ? `${process.env.CLAUDINARY}/${user.image}`
                          : "/assets/phone.png"
                      }
                      alt=""
                      width={60}
                      height={60}
                      className="img_profile"
                    />
                  </div>
                  <div className="col-10">
                    <h5>
                      {user.firstName} {user.lastName}
                    </h5>
                    <small>{user.noTelp}</small>
                  </div>
                </div>
              </div>
            </div>
            {isSubmit === false ? (
              <>
                <div>
                  <small>
                    Type the amount you want to transfer and then press continue
                    to the next steps.
                  </small>
                </div>
                <br />
                <br />
                <div className="col-4 text-center">
                  <h2>
                    <input
                      type="text"
                      name="amount"
                      className="form-control-plaintext text-center"
                      style={{
                        marginLeft: "100%",
                      }}
                      placeholder="00.000"
                      onChange={handleChangeText}
                    />
                  </h2>
                  <br />
                  <h5>
                    <input
                      type="text"
                      className="form-control-plaintext text-center"
                      style={{
                        marginLeft: "100%",
                      }}
                      name="notes"
                      placeholder="Add some Notes"
                      onChange={handleChangeText}
                    />
                  </h5>
                </div>
                <br />
                <br />
                <div className="text-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSubmit()}
                  >
                    Continue
                  </button>
                </div>
              </>
            ) : (
              <>
                <h4>Detail</h4>
                <div className="card" style={{ height: "100%" }}>
                  <div className="card-body">
                    <p>Amount</p>
                    <h6>Rp. {form.amount}</h6>
                  </div>
                </div>
                <div className="card" style={{ height: "100%" }}>
                  <div className="card-body">
                    <p>Balance Left</p>
                    <h6>Rp. {balance.balance - form.amount}</h6>
                  </div>
                </div>
                <div className="card" style={{ height: "100%" }}>
                  <div className="card-body">
                    <p>Date and time</p>
                    {/* <h6>{date}</h6> */}
                  </div>
                </div>
                <div className="card" style={{ height: "100%" }}>
                  <div className="card-body">
                    <p>Notes</p>
                    <h6>{form.notes}</h6>
                  </div>
                </div>
                <div className="text-end">
                  {transfer === false ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleClose()}
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleTransfer()}
                    >
                      Transfer
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
