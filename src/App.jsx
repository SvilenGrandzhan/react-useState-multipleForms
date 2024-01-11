import "./App.css";
import { useState } from "react";
import Form from "./Form";
import Print from "./Print";

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
      <Print form={form}/>
    </>
  );
}

export default App;