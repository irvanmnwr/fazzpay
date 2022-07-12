import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        class="footer mt-auto py-1 bg_primary"
        style={{ bottom: "0px", display: "block" }}
      >
        <div className="container">
          <div className="row" style={{ marginTop: "8px" }}>
            <div className="col-md-6">
              <h6 style={{ color: "white" }}>
                2020 FazzPay. Allright reserved
              </h6>
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
