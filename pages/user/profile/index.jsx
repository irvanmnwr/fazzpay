import React, { useState } from "react";
import Layout from "../../../component/Layout";
import cookies from "next-cookies";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../store/actions/user";

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
  const dispatch = useDispatch();
  const router = useRouter();
  const [actived, setActive] = useState(false);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  console.log(props);
  const user = useSelector((state) => state.user.data);

  const handleEdit = () => {
    if (actived === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const getDataByUserId = async () => {
    try {
      await dispatch(getUserById(user.id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const result = await axios.delete(`/user/image/${user.id}`);
      console.log(result.data.msg);
      setIsError(false);
      setMessage(result.data.msg);
      getDataByUserId();
    } catch (error) {
      console.log(error);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };

  const handleFormImage = (e) => {
    e.preventDefault();
    const { name, files } = event.target;
    setForm({ [name]: files[0] });
  };

  const handleImage = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (const data in form) {
        formData.append(data, form[data]);
      }
      const result = await axios.patch(`/user/image/${user.id}`, formData);
      console.log(result.data.msg);
      setIsError(false);
      setMessage(result.data.msg);
      getDataByUserId();
    } catch (error) {
      console.log(error);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };

  const handleLogout = async () => {
    await axios.post("/auth/logout");
    Cookies.remove("token");
    Cookies.remove("id");
    localStorage.clear();
    router.push("/auth/login");
  };

  console.log(form);

  return (
    <>
      <Layout tittle="Dashboard">
        <div className="card">
          <div className="card-body">
            <h4>Search Receiver</h4>
            <br />
            <br />
            <br />
            {!message ? null : isError ? (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            ) : (
              <div className="alert alert-primary" role="alert">
                {message}
              </div>
            )}
            <div className="row">
              <div className="col-5"></div>
              <div className="col-2 text-center">
                <Image
                  src={
                    user.image
                      ? `${process.env.CLAUDINARY}/${user.image}`
                      : "/assets/user.png"
                  }
                  alt=""
                  width={100}
                  height={100}
                  style={{ borderRadius: "15px" }}
                />
                <br />
                <small onClick={handleEdit}>edit</small>
              </div>
              <div className="col-5"></div>
              {actived === true ? (
                <div className="row">
                  <input
                    type="file"
                    name="image"
                    style={{ marginLeft: "35%" }}
                    onChange={handleFormImage}
                  />
                  <div className="col-4"></div>
                  <div className="col-2 text-end">
                    <br />
                    <button
                      className="btn btn-primary d-grid gap-2 col-12"
                      style={{ marginLeft: "15px" }}
                      onClick={handleImage}
                    >
                      Upload
                    </button>
                  </div>
                  <div className="col-2 text-start">
                    <br />
                    <button
                      className="btn btn-danger d-grid gap-2 col-12"
                      style={{ marginLeft: "10px" }}
                      onClick={() => handleDelete()}
                    >
                      Delete
                    </button>
                    <br />
                  </div>
                </div>
              ) : null}

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
