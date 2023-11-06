import { useState } from "react";
import {useDispatch} from "react-redux"
import { createAdmin } from "../stores/actions/actionCreators";
import { useNavigate } from "react-router-dom"

export default function RegisterAdmin() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeHandler = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(createAdmin(form, navigate))
  }

  return (
    <>
      {/* <!-- Nested Row within Card Body --> */}
      <div className="p-5">
        <div className="text-center">
          <h1 className="h4 text-gray-900 mb-4">Register New Admin</h1>
        </div>
        <form className="user" onSubmit={submitHandler}>
          <div className="form-group">
            <input
            onChange={changeHandler}
            name="username"
              autoComplete="username"
              type="text"
              className="form-control form-control-user"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
            name="email"
            onChange={changeHandler}
              autoComplete="username"
              type="email"
              className="form-control form-control-user"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <input
            name="password"
            onChange={changeHandler}
              type="password"
              className="form-control form-control-user"
              placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <div className="form-group">
            <input
            name="phoneNumber"
            onChange={changeHandler}
              type="text"
              className="form-control form-control-user"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <input
            name="address"
            onChange={changeHandler}
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