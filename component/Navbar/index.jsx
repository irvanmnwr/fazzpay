import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector((state) => state.user.data);
  console.log(user);
  return (
    <>
      <nav className="py-2 sticky-top navbar-light bg-white">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <p className="fw-bold fs-3 navbar_logo">FazzPay</p>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-md-6 text-end">
                  <Image
                    src={
                      user.image
                        ? `${process.env.CLAUDINARY}/${user.image}`
                        : "/assets/user.png"
                    }
                    alt=""
                    width={60}
                    height={60}
                    className="img_profile"
                  />
                </div>
                <div className="col-md-6 text-start">
                  <h6>
                    {user.firstName} {user.lastName}
                  </h6>
                  <small className="navbar_text">{user.noTelp}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
