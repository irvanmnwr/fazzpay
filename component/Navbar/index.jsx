import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector((state) => state.user.data);
  console.log(user);
  return (
    <>
      <nav className="py-4 sticky-top navbar-light bg-white">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <p className="fw-bold fs-3">FazzPay</p>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-2">
                  <Image
                    src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${user.image}`}
                    alt=""
                    width={60}
                    height={60}
                    className="img_profile"
                  />
                </div>
                <div className="col-10">
                  <h5>
                    {user.firstName} {user.lastName}
                  </h5>
                  <small>{user.noTelp}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
