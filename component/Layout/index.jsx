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
      <div className="project_background">
        <Navbar />
        <div className="container">
          <div className="row" style={{ margin: "40px 0px" }}>
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">{props.children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
