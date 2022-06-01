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
      <div className="bg-light">
        <Navbar />
        <div className="container">
          <div className="row" style={{ margin: "40px 0px" }}>
            <Sidebar />
            <div className="col-md-8">{props.children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
