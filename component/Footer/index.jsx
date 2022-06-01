import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="py-3 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p style={{ color: "white" }}>2020 FazzPay. Allright reserved</p>
            </div>
            <div className="col-md-3 text-end">
              <p style={{ color: "white" }}>082326673307</p>
            </div>
            <div className="col-md-3">
              <p style={{ color: "white" }}>contact@fazzpay</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
