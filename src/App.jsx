import { useState } from "react";
import Form from "./components/Form";
import Print from "./components/Print";

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
    <div className="flex flex-row gap-8 mx-4">
      {/* Passing managing state function as props to child A*/}
      <Form setForm={setForm} />
      {/* Passing input date as props to other child B*/}
      <Print form={form} />
    </div>
  );
}

export default App;
