import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <div className="project_background">
        <Head>
          <title>{props.title}</title>
        </Head>
        <main>
          <Navbar />
          <div
            className="container"
            style={{
              padding: "40px 0px",
            }}
          >
            <div className="row" style={{ minHeight: "80vh" }}>
              <div className="col-md-3">
                <Sidebar menu={props.menu} />
              </div>
              <div className="col-md-9">{props.children}</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
