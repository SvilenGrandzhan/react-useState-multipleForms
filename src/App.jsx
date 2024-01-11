import "./App.css";
import { useState, useRef } from "react";
import Form from "./components/Form";
import Print from "./components/Print";
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB";

function App() {
  const elementRef = useRef()

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
    <div className="App">
      {/* Passing managing state function as props to child */}
      <Form setForm={setForm}/>
      {/* Passing input date as props to other child */}
      <Print form={form}/>
      <ComponentA elRef={elementRef}/>
      <ComponentB getRefFrom={elementRef}/>
    </div>
  );
}

export default App;
