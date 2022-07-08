import React, { useState } from "react";
import Layout from "../../../component/Layout";
import { useSelector } from "react-redux";
import axios from "../../../utils/axios";

export default function Password() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.user.data);
  // const date = new Date();
  const [form, setForm] = useState({
    noTelp: "",
  });

  const getDataByUserId = async () => {
    try {
      await dispatch(getUserById(user.id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.patch(`/user/profile/${user.id}`, form);
      console.log(result);
      setIsError(false);
      setMessage(result.data.msg);
      getDataByUserId();
      setEdit(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  return (
    <>
      <Layout tittle="Dashboard">
        <div className="card" style={{ height: "700px" }}>
          <div className="card-body">
            {!message ? null : isError ? (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            ) : (
              <div className="alert alert-primary" role="alert">
                {message}
              </div>
            )}
            <h4>Personal Information</h4>
            <br />
            <br />
            <div className="col-6">
              <small>
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </small>
            </div>
            <br />
            <br />
            {edit === false ? (
              <>
                {" "}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-10">
                        <small>First Name</small>
                        <br />
                        <h6>{user.firstName}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-10">
                        <small>Last Name</small>
                        <br />
                        <h6>{user.lastName}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-10">
                        <small>Email</small>
                        <br />
                        <h6>{user.email}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-10">
                        <small>Phone Number</small>
                        <br />
                        <h6>{user.noTelp}</h6>
                      </div>
                      <div className="col-2">
                        <p
                          style={{ color: "blue", fontSize: "12px" }}
                          onClick={() => setEdit(true)}
                        >
                          Manage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <br />
                <br />
                <div className="col-4 text-center">
                  <h5>
                    <input
                      type="text"
                      className="form-control-plaintext text-start"
                      style={{
                        marginLeft: "100%",
                        borderBottomWidth: "2px",
                        borderBottomColor: "gray",
                      }}
                      name="noTelp"
                      placeholder="repeat new Password"
                      onChange={handleChangeText}
                    />
                  </h5>
                  <br />
                  <br />
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary col-6"
                    onClick={() => handleSubmit()}
                  >
                    Change Phone Number
                  </button>
                </div>
              </>
            )}

            <br />
            <br />
          </div>
        </div>
      </Layout>
    </>
  );
}
