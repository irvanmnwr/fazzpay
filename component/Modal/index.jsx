import React from "react";

export default function Modal(props) {
  const setActive = () => {
    props.setActive(false);
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
            <p>Enter the Amount of Money and Click Submit</p>
            <input
              type="text"
              name="amount"
              className="form-control-plaintext col-md-4"
              style={{
                borderWidth: "1px",
                borderColor: "gray",
                borderRadius: "5px",
                padding: "10px 10px",
              }}
              placeholder="00.000"
              onChange={props.handleChangeText}
            />
            <br />
            <div className="text-end">
              <button className="btn btn-primary" onClick={props.handleTopUp}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
