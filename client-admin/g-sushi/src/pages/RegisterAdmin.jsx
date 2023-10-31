export default function RegisterAdmin() {
  return (
    <>
      {/* <!-- Nested Row within Card Body --> */}
      <div className="p-5">
        <div className="text-center">
          <h1 className="h4 text-gray-900 mb-4">Register New Admin</h1>
        </div>
        <form className="user">
          <div className="form-group">
            <input
              v-model="register.username"
              autoComplete="username"
              type="text"
              className="form-control form-control-user"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              v-model="register.email"
              autoComplete="username"
              type="email"
              className="form-control form-control-user"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-user"
              placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-user"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <input
              v-model="register.address"
              type="text"
              className="form-control form-control-user"
              placeholder="Address"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-user btn-block">
            Register Account
          </button>
          <hr />
        </form>
        <hr />
      </div>
    </>
  );
}