import axios from "../../../utils/axios";
import React, { useEffect, useState } from "react";
import cookies from "next-cookies";
import { useRouter } from "next/router";
import "../../../styles/auth.module.css";
import Image from "next/image";

export async function getServerSideProps(context) {
  const dataCookies = cookies(context);
  const id = dataCookies.id;
  return {
    props: {
      data: id,
    },
  };
}

export default function CreatePin(props) {
  const [pin, setPin] = useState({});
  const addPin = (e) => {
    if (e.target.value) {
      const nextSibling = document.getElementById(
        `pin-${parseInt(e.target.name, 10) + 1}`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
    setPin({ ...pin, [`pin${e.target.name}`]: e.target.value });
  };
  console.log(pin);

  const onSubmit = async () => {
    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
    // console.log(typeof Number(allPin));
    try {
      const result = await axios.patch(
        `/user/pin/${props.data}`,
        String(allPin)
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    // router.push("/user/dashboard");
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
            style={{ height: "100%", padding: "5% 0px 25% 0px" }}
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

                <div className="row text-center">
                  <div className="col-1">
                    <input
                      type="text"
                      className="form-control"
                      maxLength={1}
                      id="pin-1"
                      onChange={(e) => {
                        addPin(e);
                      }}
                      name="1"
                    />
                  </div>
                  <div className="col-1">
                    <input
                      type="text"
                      className="form-control"
                      maxLength={1}
                      id="pin-2"
                      onChange={(e) => {
                        addPin(e);
                      }}
                      name="2"
                    />
                  </div>
                  <div className="col-1">
                    <input
                      type="text"
                      className="form-control"
                      maxLength={1}
                      id="pin-3"
                      onChange={(e) => {
                        addPin(e);
                      }}
                      name="3"
                    />
                  </div>
                  <div className="col-1">
                    <input
                      type="text"
                      className="form-control"
                      maxLength={1}
                      id="pin-4"
                      onChange={(e) => {
                        addPin(e);
                      }}
                      name="4"
                    />
                  </div>
                  <div className="col-1">
                    <input
                      type="text"
                      className="form-control"
                      maxLength={1}
                      id="pin-5"
                      onChange={(e) => {
                        addPin(e);
                      }}
                      name="5"
                    />
                  </div>
                  <div className="col-1">
                    <input
                      type="text"
                      className="form-control"
                      maxLength={1}
                      id="pin-6"
                      onChange={(e) => {
                        addPin(e);
                      }}
                      name="6"
                    />
                  </div>
                </div>
                <br />
                <br />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={onSubmit}>
                    Confirm
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
