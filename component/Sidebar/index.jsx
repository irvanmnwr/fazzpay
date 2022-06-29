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
      <div
        id="sidebarMenu"
        className="col-lg-12 d-md-block bg-white sidebar_style"
      >
        <div className="position-sticky pt-3">
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <div
                className={
                  menuActive === "dashboard"
                    ? "col-md-11 sidebar_actived"
                    : "col-md-11"
                }
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
                className={
                  menuActive === "transfer"
                    ? "col-md-11 sidebar_actived"
                    : "col-md-11"
                }
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
                className={
                  menuActive === "topup"
                    ? "col-md-11 sidebar_actived"
                    : "col-md-11"
                }
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
                className={
                  menuActive === "Profile"
                    ? "col-md-11 sidebar_actived"
                    : "col-md-11"
                }
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
            <li className="align-bottom">
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
      </div>
    </>
  );
}
