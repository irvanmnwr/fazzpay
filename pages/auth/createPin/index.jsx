import React from "react";
import "../../../styles/auth.module.css";
import Image from "next/image";

export default function CreatePin() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <br />
            <br />
            <div className="container">
              <h3>ZWALLET</h3>
              <h3>App that Covering Banking Needs.</h3>
              <div className="text-center">
                <Image
                  src="/assets/phone.png"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <p>
                Zwallet is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered in Zwallet everyday with
                worldwide users coverage.
              </p>
            </div>
          </div>
          <div className="col-md-5 bg-light align-self-stretch">
            <div className="container">
              <div className="text-end">
                <br />
                <br />
                <br />
                <br />
                <div className="text-center">
                  <h5>
                    Start Accessing Banking Needs With All Devices and All
                    Platforms With 30.000+ Users
                  </h5>
                  <small>
                    Transfering money is eassier than ever, you can access
                    Zwallet wherever you are. Desktop, laptop, mobile phone? we
                    cover all of that for you!
                  </small>
                </div>
                <br />
                <br />
                <br />
                <form>
                  <div className="row text-center">
                    <div className="col-1">
                      <input type="text" class="form-control" id="pin1" />
                    </div>
                    <div className="col-1">
                      <input type="text" class="form-control" id="pin2" />
                    </div>
                    <div className="col-1">
                      <input type="text" class="form-control" id="pin3" />
                    </div>
                    <div className="col-1">
                      <input type="text" class="form-control" id="pin4" />
                    </div>
                    <div className="col-1">
                      <input type="text" class="form-control" id="pin5" />
                    </div>
                    <div className="col-1">
                      <input type="text" class="form-control" id="pin6" />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary">Confirm</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
