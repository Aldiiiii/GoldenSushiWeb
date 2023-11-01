import useFetch from "../hooks/useFetch";
import Table from "../components/Table";

export default function Categories() {
  const { data: categories, error } = useFetch("categories");

  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Items</h1>
          <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            + Create Category
          </a>
        </div>
        {/* <!-- Categories --> */}
        <table className="table table-sm table-striped">
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th scope="col">NAME</th>
              <th scope="col">CREATED AT</th>
              <th scope="col">UPDATED AT</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, i) => (
              <Table
                category={category}
                key={category.id}
                columns={["name", "createdAt", "updatedAt"]}
                i={i}
              />
            ))}
          </tbody>
        </table>
        {/* <!-- End of Categories --> */}
      </div>
    </>
  );
}
