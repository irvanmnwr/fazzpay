import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserById } from "../../../store/actions/user";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import "../../../styles/auth.module.css";
import Image from "next/image";

export default function ForgetPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    linkDirect: "http://localhost:3000/changePassword",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // console.log(form);
  const handleSubmit = async () => {
    try {
      const result = await axios.post("/auth/forgot-password", form);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row auth">
          <div
            className="col-md-7"
            style={{
              height: "auto",
              padding: "5% 0px 12% 0px",
            }}
          >
            <div className="container">
              <h3>ZWALLET</h3>
              <h3>App that Covering Banking Needs.</h3>
              <div className="text-center">
                <Image
                  src="/assets/phone.png"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <p>
                Zwallet is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered in Zwallet everyday with
                worldwide users coverage.
              </p>
            </div>
          </div>
          <div
            className="col-md-5 bg-light align-self-stretch"
            style={{ height: "auto", padding: "5% 0px 19% 0px" }}
          >
            <div className="container">
              <div className="text-end">
                <div className="text-center">
                  <h5>
                    Did You Forgot Your Password? Don’t Worry, You Can Reset
                    Your Password In a Minutes.
                  </h5>
                  <small>
                    To reset your password, you must type your e-mail and we
                    will send a link to your email and you will be directed to
                    the reset password screens.
                  </small>
                </div>
                <br />
                <br />
                <br />
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChangeText}
                  />
                </div>
                <br />
                <small className="text-end">Back to Login Page?</small>
                <br />
                <br />
                <br />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Confirm
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
