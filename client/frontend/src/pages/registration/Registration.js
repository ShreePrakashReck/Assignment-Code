import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Registration() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const handlename = (e) => {
    setName(e.target.value);
    console.log("Value name : ", name);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log("Value name : ", email);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log("Value name : ", password);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
    console.log("Value name : ", role);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    console.log("Value name : ", address);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/signup", {
        name: name,
        email: email,
        password: password,
        role: role,
        address: address,
      });
      console.log("Registration Data is: ", response);
      setData(data);
      navigate("/login/:role");
      console.log("data : ", data);
    } catch (error) {
      console.log("Error message: ", error.message);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>
        <form onSubmit={handleSubmit} action="/api/v1/signup" method="post">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={name}
              onChange={handlename}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="role"
              value={role}
              onChange={handleRole}
            >
              <option value="Transporter">Transporter</option>
              <option value="Manufacturer">Manufacturer</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="address"
              value={address}
              onChange={handleAddress}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
