import React, { useState } from "react";
import Layout from "../../../component/Layout";
import axiosServer from "../../../utils/axiosServer";
import axios from "../../../utils/axios";
import cookies from "next-cookies";
import Image from "next/image";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const params = context.query.id;
    // console.log(params);
    const result = await axiosServer.get(`user/profile/${params}`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    });
    return {
      props: {
        data: result.data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination:
          error.response.status === 403
            ? "/auth/login"
            : `/error?msg=${error.response.data.msg}`,
        permanent: false,
      },
    };
  }
}

export default function transferUser(props) {
  const router = useRouter();
  console.log(props);
  const user = props.data;
  const [form, setForm] = useState({
    receiverId: user.id,
    amount: "",
    notes: "",
  });
  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //   console.log(form);
  const handleSubmit = async () => {
    try {
      const result = await axios.post("/transaction/transfer", form);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout tittle="Dashboard">
        <div className="card">
          <div className="card-body">
            <h4>Search Receiver</h4>
            <br />
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-1">
                    <Image
                      src={
                        user.image
                          ? `${process.env.CLAUDINARY}/${user.image}`
                          : "/assets/phone.png"
                      }
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
            <div>
              <small>
                Type the amount you want to transfer and then press continue to
                the next steps.
              </small>
            </div>

            <br />
            <br />
            <div className="text-center">
              <h2>
                <input
                  type="text"
                  name="amount"
                  className="form-control-plaintext col-md-4"
                  placeholder="00.000"
                  onChange={handleChangeText}
                />
              </h2>
              <h5>
                <input
                  type="text"
                  className="form-control-plaintext col-md-4"
                  name="notes"
                  placeholder="Add some Notes"
                  onChange={handleChangeText}
                />
              </h5>
            </div>
            <br />
            <br />
            <button className="btn btn-primary" onClick={() => handleSubmit()}>
              Continue
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
