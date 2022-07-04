import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

export default function Pin(props) {
  const setActive = () => {
    props.setActive(false);
  };

  const [pin, setPin] = useState({});
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [form, setForm] = useState({ pin: null });
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

  const onSubmit = async () => {
    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
    try {
      setForm({ pin: Number(allPin) });
      console.log(form);
      const result = await axios.get(`/user/pin?pin=${form.pin}`);
      setIsError(false);
      setMessage(result.data.msg);
      props.setTransfer(true);
      setActive();
    } catch (error) {
      console.log(error);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };

  return (
    <>
      <div className="col-12 modal_container">
        <div className="card col-4 modal_card">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h4>Top Up</h4>
              </div>
              <div className="col-6 text-end">
                <p onClick={setActive}>close</p>
              </div>
            </div>
            <br />
            <br />
            <p>
              Enter your 6 digits PIN for confirmation to continue transferring
              money.{" "}
            </p>
            {!message ? null : isError ? (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            ) : (
              <div className="alert alert-primary" role="alert">
                {message}
              </div>
            )}
            <div className="row text-center">
              <div className="col-2">
                <input
                  type="text"
                  style={{
                    height: "100%",
                    width: "27px",
                    padding: "1px 8px",
                  }}
                  className="form-control"
                  maxLength={1}
                  id="pin-1"
                  onChange={(e) => {
                    addPin(e);
                  }}
                  name="1"
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  style={{
                    height: "100%",
                    width: "27px",
                    padding: "1px 8px",
                  }}
                  className="form-control"
                  maxLength={1}
                  id="pin-2"
                  onChange={(e) => {
                    addPin(e);
                  }}
                  name="2"
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  style={{
                    height: "100%",
                    width: "27px",
                    padding: "1px 8px",
                  }}
                  className="form-control"
                  maxLength={1}
                  id="pin-3"
                  onChange={(e) => {
                    addPin(e);
                  }}
                  name="3"
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  style={{
                    height: "100%",
                    width: "27px",
                    padding: "1px 8px",
                  }}
                  className="form-control"
                  maxLength={1}
                  id="pin-4"
                  onChange={(e) => {
                    addPin(e);
                  }}
                  name="4"
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  style={{
                    height: "100%",
                    width: "27px",
                    padding: "1px 8px",
                  }}
                  className="form-control"
                  maxLength={1}
                  id="pin-5"
                  onChange={(e) => {
                    addPin(e);
                  }}
                  name="5"
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  style={{
                    height: "100%",
                    width: "27px",
                    padding: "1px 8px",
                  }}
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
            <div className="text-end">
              <button className="btn btn-primary" onClick={() => onSubmit()}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
