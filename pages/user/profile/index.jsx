import React, { useState } from "react";
import Layout from "../../../component/Layout";
import cookies from "next-cookies";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const id = dataCookies.id;
    return {
      props: {
        id: id,
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

export default function Profile(props) {
  const router = useRouter();
  console.log(props);
  const user = useSelector((state) => state.user.data);

  const handleLogout = async () => {
    await axios.post("/auth/logout");
    Cookies.remove("token");
    Cookies.remove("id");
    localStorage.clear();
    router.push("/auth/login");
  };

  return (
    <>
      <Layout tittle="Dashboard">
        <div className="card">
          <div className="card-body">
            <h4>Search Receiver</h4>
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-5"></div>
              <div className="col-2 text-center">
                <Image
                  src={
                    user.image
                      ? `${process.env.CLAUDINARY}/${user.image}`
                      : "/assets/phone.png"
                  }
                  alt=""
                  width={100}
                  height={100}
                />
                <br />
                <small>edit</small>
              </div>
              <div className="col-5"></div>
              <div className="text-center">
                <h5>
                  {user.firstName} {user.lastName}
                </h5>
                <small>{user.noTelp}</small>
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4 align-center">
                  <button className="btn btn-secondary d-grid gap-2 col-12">
                    Personal Information
                  </button>
                  <button className="btn btn-secondary d-grid gap-2 col-12">
                    Change Password
                  </button>
                  <button className="btn btn-secondary d-grid gap-2 col-12">
                    Change Pin
                  </button>
                  <button
                    className="btn btn-secondary d-grid gap-2 col-12"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </button>
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
