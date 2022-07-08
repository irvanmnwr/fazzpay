import React, { useState } from "react";
import Layout from "../../../component/Layout";
import axiosServer from "../../../utils/axiosServer";
import cookies from "next-cookies";
import Image from "next/image";
import Pagination from "react-paginate";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const search = !params.search ? "" : params.search;
    console.log(params);
    console.log(search);
    const result = await axiosServer.get(
      `user?page=${page}&limit=5&search=${search}&sort=firstName ASC`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    return {
      props: {
        data: result.data.data,
        totalPage: result.data.pagination,
        page: page,
        search: search,
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

export default function transferList(props) {
  const router = useRouter();
  console.log(props);
  const [page, setPage] = useState(props.page);
  const [search, setSearch] = useState(props.search);
  const handlePagination = async (data) => {
    // console.log(data.selected + 1);
    await setPage(data.selected + 1);
    !search
      ? router.push(`/user/transfer/transferList?page=${data.selected + 1}`)
      : router.push(
          `/user/transfer/transferList?page=${
            data.selected + 1
          }&search=${search}`
        );
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    router.push(`/user/transfer/transferList?search=${search}`);
  };

  const handleTransfer = (id) => {
    router.push(`/user/transfer/${id}`);
  };

  return (
    <>
      <Layout tittle="Dashboard">
        <div className="card">
          <div className="card-body">
            <h4>Search Receiver</h4>
            <div className="input-group mb-3" style={{ margin: "20px 0px" }}>
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onKeyPress={handleChangeSearch}
              ></input>
            </div>
            <div
              className="overflow-auto"
              style={{ padding: "10px", height: "530px" }}
            >
              {props.data.map((item) => (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => handleTransfer(item.id)}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-1">
                        <Image
                          src={
                            item.image
                              ? `${process.env.CLAUDINARY}/${item.image}`
                              : "/assets/user.png"
                          }
                          alt=""
                          width={60}
                          height={60}
                          className="img_profile"
                        />
                      </div>
                      <div className="col-10">
                        <h5>
                          {item.firstName} {item.lastName}
                        </h5>
                        <small>{item.noTelp}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-10">
              <Pagination
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageCount={props.totalPage.totalPage}
                onPageChange={handlePagination}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
