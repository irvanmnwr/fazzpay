import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div
        className="project_background"
        style={{ height: "900px", paddingBottom: "40px" }}
      >
        <Navbar />
        <div className="container">
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9" style={{ maxHeight: "100%" }}>
              {props.children}
            </div>
          </div>
        </div>
        <footer
          className="footer mt-auto py-3 bg_primary"
          style={{
            position: "absolute",
            width: "100%",
            left: "0",
            bottom: "0",
          }}
        >
          <Footer />
        </footer>
      </div>
    </>
  );
}
