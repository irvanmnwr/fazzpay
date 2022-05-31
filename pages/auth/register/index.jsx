import React, { useState } from "react";
import axios from "../../../utils/axios";
import "../../../styles/auth.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // console.log(form);
  const handleSubmit = async () => {
    try {
      await axios.post("/auth/register", form);
      router.push("/login");
      // console.log(result);
      // Cookies.set("token", result.data.data.token);
      // Cookies.set("id", result.data.data.id);
      // if (cek pin) {
      //   navigate ke create pin
      // } else {
      //   navigate ke home
      // }
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
            style={{ height: "100%", padding: "5% 0px 17% 0px" }}
          >
            <div className="container">
              <div className="text-end">
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

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChangeText}
                  />
                </div>
                <br />
                <div className="mb-3">
                  <input
                    type="Last Name"
                    className="form-control"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChangeText}
                  />
                </div>
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
                <br />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Register
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
