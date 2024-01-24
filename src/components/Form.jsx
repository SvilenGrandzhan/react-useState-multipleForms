export default function Form({ setForm }) {
  const handleChange = (e) => {
    setForm((previousState) => {
      return {
        // taking previous state of form object
        ...previousState,
        // ! Important part of code snippet
        // if key values in state object are same
        // as name attributes in input forms
        // can use following syntax for all
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <form className="flex flex-col gap-y-2">
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        placeholder="first name"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        placeholder="last name"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="password"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="email"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="tel"
        onChange={handleChange}
        name="phone"
        placeholder="phone"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="text"
        onChange={handleChange}
        name="address"
        placeholder="address"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <button className="bg-sky-500 border-double border-2 border-sky-500 hover:border-rose-600 rounded-md w-64 mt-2 ml-2 px-4 py-2">Submit</button>
    </form>
  );
}
