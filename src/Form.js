import { useState, useRef } from "react";

export default function Form() {
  // initialize empty object for all input forms
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    tel: "",
    address: "",
  });
  // update input value function
  const handleChange = (e) => {
    setForm({
      // taking previous state of form object
      ...form,
      // ! Important part of code snippet
      // if key values in state object are same
      // as name attributes in input forms
      // can use following syntax for all
      [e.target.name]: e.target.value,
    });
  };

  const formInput = useRef(form);

  return (
    <form className="flex flex-col gap-y-2">
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        placeholder="first name"
        className="rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        placeholder="last name"
        className="rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="password"
        className="rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="email"
        className="rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="tel"
        onChange={handleChange}
        name="phone"
        placeholder="phone"
        className="rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="text"
        onChange={handleChange}
        name="address"
        placeholder="address"
        className="rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <button className="bg-sky-500 border-double border-2 border-sky-500 hover:border-rose-600 rounded-md w-64 mt-2 ml-2 px-4 py-2">Submit</button>
    </form>
  );
}
