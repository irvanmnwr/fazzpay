import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserById } from "../../../store/actions/user";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import "../../../styles/auth.module.css";
import Image from "next/image";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // console.log(form);
  const handleSubmit = async () => {
    try {
      const result = await axios.post("/auth/login", form);
      console.log(result);
      Cookies.set("token", result.data.data.token);
      Cookies.set("id", result.data.data.id);
      if (!result.data.data.pin) {
        router.push("/auth/createPin");
      } else {
        await dispatch(getUserById(result.data.data.id));
        router.push("/user/dashboard");
      }
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
              height: "100%",
              padding: "5% 0px 12% 0px",
            }}
          >
            <br />
            <br />
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
            style={{ height: "100%", padding: "5% 0px 19% 0px" }}
          >
            <div className="container">
              <div className="text-end">
                <br />
                <br />
                <br />
                <br />
                <div className="text-center">
                  <h5>
                    Start Accessing Banking Needs With All Devices and All
                    Platforms With 30.000+ Users
                  </h5>
                  <small>
                    Transfering money is eassier than ever, you can access
                    Zwallet wherever you are. Desktop, laptop, mobile phone? we
                    cover all of that for you!
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
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={handleChangeText}
                  />
                </div>
                <small className="text-end">forgot password?</small>
                <br />
                <br />
                <br />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
