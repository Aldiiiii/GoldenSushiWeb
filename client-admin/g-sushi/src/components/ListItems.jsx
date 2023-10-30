export default function ListItems() {
  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Items</h1>
          <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            + Create Item
          </a>
        </div>
        {/* <!-- Items --> */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th scope="col">NAME</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">PRICE</th>
              <th scope="col">CREATED BY</th>
              <th scope="col">MAIN IMAGE</th>
              <th scope="col">IMAGES</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
