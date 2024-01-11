import { useState } from "react";

function ComponentB({ getRefFrom }) {
  const [value, setValue] = useState("");

  const submit = () => setValue(getRefFrom.current?.value);

  return (
    <p>
      <button type="button" onClick={submit}>
        Submit Here
      </button>{" "}
      to get the COMPONENT A value via ref: {value}
    </p>
  );
}

export default ComponentB