import React, { useState } from "react";
import IconDashboard from "../Icon/Dashboard";
import IconTransfer from "../Icon/Transfer";
import IconTopUp from "../Icon/TopUp";
import IconUser from "../Icon/User";
import IconLogOut from "../Icon/logout";
import { useRouter } from "next/router";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import Modal from "../Modal";

export default function Sidebar(props) {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(props.menu);
  const [active, setActive] = useState(false);

  const handleLogout = async () => {
    await axios.post("/auth/logout");
    Cookies.remove("token");
    Cookies.remove("id");
    localStorage.clear();
    router.push("/auth/login");
  };

  function openModals() {
    setActive(true);
  }
  return (
    <>
      {active ? <Modal setActive={setActive} /> : null}
      <div
        style={{ minHeight: "80vh" }}
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
                  setActive(true);
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
                  router.push(`/user/profile`);
                }}
              >
                <IconUser
                  color={menuActive === "Profile" ? "#6379F4" : "#3A3D42"}
                />{" "}
                Profile
              </div>
            </li>
          </ul>
          <hr />
          <div
            className="d-flex align-items-end"
            onClick={() => {
              handleLogout();
            }}
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
    </>
  );
}
