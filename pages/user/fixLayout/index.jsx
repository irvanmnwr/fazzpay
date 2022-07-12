import React from "react";
import Image from "next/image";
import IconDashboard from "../../../component/Icon/Dashboard";
import IconTransfer from "../../../component/Icon/Transfer";
import IconTopUp from "../../../component/Icon/TopUp";
import IconUser from "../../../component/Icon/User";
import IconLogOut from "../../../component/Icon/logout";

export default function index() {
  return (
    <>
      <div className="project_background">
        <header>
          <nav className="py-1 sticky-top navbar-light bg-white">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <p className="fw-bold fs-3 navbar_logo">FazzPay</p>
                </div>
                <div className="col-4">
                  <div className="row" style={{ marginTop: "8px" }}>
                    <div className="col-md-6 text-end">
                      <Image
                        src={"/assets/user.png"}
                        alt=""
                        width={40}
                        height={40}
                        className="img_profile"
                      />
                    </div>
                    <div className="col-md-6 text-start">
                      <h6 style={{ marginBottom: "2px" }}>IRVAN MUNAWIR</h6>
                      <small className="navbar_text">081316673307</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div
            class="container"
            style={{
              padding: "40px 0px",
            }}
          >
            <div className="row" style={{ minHeight: "80vh" }}>
              <div className="col-md-3">
                <div className="col-lg-12 d-md-block bg-white sidebar_style">
                  <div className="position-sticky">
                    <ul className="nav nav-pills flex-column mb-auto">
                      <li className="nav-item">
                        <div className={"col-md-11"}>
                          <IconDashboard color="#3A3D42" />
                          Dashboard
                        </div>
                      </li>
                      <li>
                        <div className={"col-md-11"}>
                          <IconTransfer color="#3A3D42" />
                          Transfer
                        </div>
                      </li>
                      <li>
                        <div className={"col-md-11"}>
                          <IconTopUp color="#3A3D42" />
                          Top Up
                        </div>
                      </li>
                      <li>
                        <div className={"col-md-11"}>
                          <IconUser color="#3A3D42" />
                          Profile
                        </div>
                      </li>
                    </ul>
                    <hr />
                    <div
                      style={{
                        marginTop: "auto",
                        paddingBottom: "1px",
                        marginLeft: "2px",
                      }}
                    >
                      <IconLogOut color="#3A3D42" /> LogOut
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div
                  className="card"
                  style={{ padding: "20px 0px", height: "100%" }}
                >
                  <div className="card-body">
                    <h4>Transfer To</h4>
                    <h1 class="mt-5">Sticky footer with fixed navbar</h1>
                    <p class="lead">
                      Pin a footer to the bottom of the viewport in desktop
                      browsers with this custom HTML and CSS. A fixed navbar has
                      been added with{" "}
                      <code class="small">padding-top: 60px;</code> on the{" "}
                      <code class="small">main &gt; .container</code>.
                    </p>
                    <p>
                      Back to{" "}
                      <a href="/docs/5.0/examples/sticky-footer/">
                        the default sticky footer
                      </a>{" "}
                      minus the navbar.
                    </p>
                    <h4>Transfer To</h4>
                    <h1 class="mt-5">Sticky footer with fixed navbar</h1>
                    <p class="lead">
                      Pin a footer to the bottom of the viewport in desktop
                      browsers with this custom HTML and CSS. A fixed navbar has
                      been added with{" "}
                      <code class="small">padding-top: 60px;</code> on the{" "}
                      <code class="small">main &gt; .container</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
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
      </div>
    </>
  );
}
