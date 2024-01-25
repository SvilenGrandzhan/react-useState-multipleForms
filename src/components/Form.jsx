export default function Form({ setForm }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Passing key-pairs values from form in FormData constructor
    // populating keys with name properties of form
    // and values with form input values
    // and store them in a variable
    const formData = new FormData(e.target);
    // Converting key-pairs values in object
    const inputObject = Object.fromEntries(formData);
    // Set state
    setForm(inputObject);
  };

  return (
    <form
      className="flex flex-col gap-y-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="firstName"
        placeholder="first name"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="text"
        name="lastName"
        placeholder="last name"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="tel"
        name="phone"
        placeholder="phone"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="text"
        name="address"
        placeholder="address"
        className="border border-black rounded-md w-64 mt-2 ml-2 px-4 py-2"
      />
      <button className="bg-sky-500 border-double border-2 border-sky-500 hover:border-rose-600 rounded-md w-64 mt-2 ml-2 px-4 py-2">Submit</button>
    </form>
  );
}
