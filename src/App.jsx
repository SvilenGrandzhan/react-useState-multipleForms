import "./App.css";
import { useState } from "react";
import Display from "./Display.jsx";
import Form from "./Form.jsx";

function App() {
  // Managing state in parent component
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  });

  return (
    <>
      {/* Passing managing state function as props to child */}
      <Form setForm={setForm}/>
      {/* Passing input date as props to other child */}
      <Display form={form}/>
    </>
  );
}

export default App;