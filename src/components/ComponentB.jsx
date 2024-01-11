import { useState } from "react";

function ComponentB({ getRefFrom }) {
  const [value, setValue] = useState("");

  const submit = () => setValue(getRefFrom.current?.value);

  return (
    <p>
      <button className="border border-black" type="button" onClick={submit}>
        Click Here
      </button>{" "}
      to get the COMPONENT A value via ref: {value}
    </p>
  );
}

export default ComponentB