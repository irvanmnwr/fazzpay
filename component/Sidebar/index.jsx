import React, { useState } from "react";
import IconDashboard from "../Icon/Dashboard";
import IconTransfer from "../Icon/Transfer";
import IconTopUp from "../Icon/TopUp";
import IconUser from "../Icon/User";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState("dashboard");
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse"
      >
        <div className="position-sticky pt-3" style={{ height: "700px" }}>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <div
                className="col-md-8"
                onClick={() => {
                  setMenuActive("dashboard");
                  router.push(`/user/dashboard`);
                }}
              >
                <IconDashboard
                  color={menuActive === "dashboard" ? "#6379F4" : "#3A3D42"}
                />{" "}
                Dashboard
              </div>
            </li>
            <li>
              <div
                className="col-md-8"
                onClick={() => {
                  setMenuActive("transfer");
                  router.push(`/user/transfer/transferList`);
                }}
              >
                <IconTransfer
                  color={menuActive === "transfer" ? "#6379F4" : "#3A3D42"}
                />{" "}
                Transfer
              </div>
            </li>
            <li>
              <div
                className="col-md-8"
                onClick={() => {
                  setMenuActive("topup");
                }}
              >
                <IconTopUp
                  color={menuActive === "topup" ? "#6379F4" : "#3A3D42"}
                />{" "}
                Top Up
              </div>
            </li>
            <li>
              <div
                className="col-md-8"
                onClick={() => {
                  setMenuActive("Profile");
                }}
              >
                <IconUser
                  color={menuActive === "Profile" ? "#6379F4" : "#3A3D42"}
                />{" "}
                Profile
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
