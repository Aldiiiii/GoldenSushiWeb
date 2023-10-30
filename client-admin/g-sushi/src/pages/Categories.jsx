export default function Categories() {
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
        <table className="table table-striped">
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
            <tr></tr>
          </tbody>
        </table>
        {/* <!-- End of Categories --> */}
      </div>
    </>
  );
}
