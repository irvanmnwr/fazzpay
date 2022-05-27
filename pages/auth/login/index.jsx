import React from "react";
import "../../../styles/auth.module.css";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
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
          <div className="col-md-5 bg-light align-self-stretch">
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
                <form>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <br />
                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <small className="text-end">forgot password?</small>
                  <br />
                  <br />
                  <br />
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary">login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
