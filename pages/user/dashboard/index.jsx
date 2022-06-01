import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import Layout from "../../../component/Layout";
import cookies from "next-cookies";
import axiosServer from "../../../utils/axiosServer";
import axios from "../../../utils/axios";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const id = dataCookies.id;
    const dataDashboard = await axiosServer.get(`dashboard/${id}`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    });
    return {
      props: {
        id: id,
        dataDashboard: dataDashboard.data.data,
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
  const user = useSelector((state) => state.user.data);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [topUp, setTopUp] = useState({ amount: "" });
  console.log(props);

  const handleTopUp = () => {};

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Layout tittle="Dashboard">
        <div className="card text-white bg-primary">
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <p>Balace</p>
                <h2>Rp.{user.balance}</h2>
                <p>{user.noTelp}</p>
              </div>
              <div className="col-4">
                <button className="btn btn-secondary d-grid gap-2">
                  Transfer
                </button>
                <button
                  className="btn btn-secondary d-grid gap-2"
                  onClick={() => {
                    openModal();
                  }}
                >
                  Top Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </Layout>
      <Modal
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
          <h1>Add Product</h1>
          <h1>Add Product</h1>
          <h1>Add Product</h1>
          <h1>Add Product</h1>
          <h1>Add Product</h1>
          <h1>Add Product</h1>
          <h1>Add Product</h1>
          <h1>Add Product</h1>
        </div>
      </Modal>
    </>
  );
}
