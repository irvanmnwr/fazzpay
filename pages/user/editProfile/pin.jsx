import React, { useState } from "react";
import Layout from "../../../component/Layout";
import { useSelector } from "react-redux";
import axios from "../../../utils/axios";

export default function Password() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [pin, setPin] = useState({});
  const user = useSelector((state) => state.user.data);
  const [pinCorrect, setPinCorrect] = useState(false);
  // const date = new Date();
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
      setPinCorrect(true);
      setMessage(result.data.msg);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };

  const onSubmitChange = async () => {
    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
    try {
      setForm({ pin: Number(allPin) });
      const result = await axios.patch(`/user/pin/${user.id}`, form);
      console.log(result);
      setIsError(false);
      setPinCorrect(false);
      setMessage(result.data.msg);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };
  console.log(form);

  return (
    <>
      <Layout tittle="Dashboard" menu="Profile">
        <div className="card" style={{ padding: "20px 0px", height: "100%" }}>
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
            <h4 style={{ marginLeft: "20px" }}>Change Pin</h4>
            <div style={{ marginLeft: "20px" }}>
              <small>
                Enter your current 6 digits Zwallet PIN below to continue to the
                next steps.
              </small>
            </div>
            {pinCorrect === false ? (
              <>
                <div className="row" style={{ marginTop: "20%" }}>
                  <div className="col-4"></div>
                  <div className="col-4 text-center">
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
                            padding: "10px 8px",
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
                    <br />
                    <div className="text-center">
                      <button
                        className="btn btn-secondary gap-2 col-12"
                        onClick={() => onSubmit()}
                      >
                        Continue
                      </button>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="row">
                  <div className="col-4"> </div>
                  <div className="col-4 text-center">
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
                            padding: "10px 8px",
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
                    <br />
                    <div className="text-center">
                      <button
                        className="btn btn-primary col-12"
                        onClick={() => onSubmitChange()}
                      >
                        Change Pin
                      </button>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
