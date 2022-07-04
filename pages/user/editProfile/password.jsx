import React, { useState } from "react";
import Layout from "../../../component/Layout";
import { useSelector } from "react-redux";
import axios from "../../../utils/axios";

export default function Password() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const user = useSelector((state) => state.user.data);
  // const date = new Date();
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
    try {
      const result = await axios.patch(`/user/password/${user.id}`, form);
      console.log(result);
      setIsError(false);
      setMessage(result.data.msg);
      setForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
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
        <div className="card">
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
            <h4>Change Password</h4>
            <br />
            <div>
              <p>
                You must enter your current password and then type your new
                password twice.
              </p>
            </div>
            <br />
            <br />
            <div className="col-4 text-center">
              <h5>
                <input
                  type="password"
                  className="form-control-plaintext text-start"
                  style={{
                    marginLeft: "100%",
                    borderBottomWidth: "2px",
                    borderBottomColor: "gray",
                  }}
                  name="oldPassword"
                  placeholder="Current Password"
                  onChange={handleChangeText}
                />
              </h5>
              <br />
              <h5>
                <input
                  type="password"
                  className="form-control-plaintext text-start"
                  style={{
                    marginLeft: "100%",
                    borderBottomWidth: "2px",
                    borderBottomColor: "gray",
                  }}
                  name="newPassword"
                  placeholder="new Password"
                  onChange={handleChangeText}
                />
              </h5>
              <br />
              <h5>
                <input
                  type="password"
                  className="form-control-plaintext text-start"
                  style={{
                    marginLeft: "100%",
                    borderBottomWidth: "2px",
                    borderBottomColor: "gray",
                  }}
                  name="confirmPassword"
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
                Change Password
              </button>
            </div>
            <br />
            <br />
          </div>
        </div>
      </Layout>
    </>
  );
}
