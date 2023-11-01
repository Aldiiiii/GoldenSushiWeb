import Table from "../components/Table";
import useFetch from "../hooks/useFetch";
import Create from "../components/CreateModal";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


export default function ItemList() {
  // const { data: items, error } = useFetch("items");

  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Item List</h1>
          <Create className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" />
        </div>
        {/* <!-- Items --> */}
        <div>
          <table className="table table-sm table-striped">
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">NAME</th>
                <th scope="col">CATEGORY</th>
                <th scope="col">PRICE</th>
                <th scope="col">CREATED BY</th>
                <th scope="col">MAIN IMAGE</th>
                <th scope="col">INGREDIENTS</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <Table
                  columns={[
                    "name",
                    "categoryId",
                    "price",
                    "authorId",
                    "imgUrl",
                  ]}
                  key={item.id}
                  item={item}
                  i={i}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
