import Table from "../components/Table";
// import useFetch from "../hooks/useFetch";
import CreateModal from "../components/CreateModal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchItemsStart } from "../stores/actions/actionFetchItems";
import { fetchCategoriesStart } from "../stores/actions/actionFetchCategories";

export default function ItemList() {
  // const { data: items, error } = useFetch("items");
  const items = useSelector(state => state.items.data)
  const categories = useSelector(state => state.categories.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItemsStart())
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Item List</h1>
          <CreateModal categories={categories} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" />
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
                  categories={categories}
                    columns={[
                      "name",
                      "Category",
                      "price",
                      "User",
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
