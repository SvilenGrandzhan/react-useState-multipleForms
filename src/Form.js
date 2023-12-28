export default function Form() {
  return (
    <form className="flex flex-col gap-y-2">
      <input
        type="text"
        name="firstName"
        placeholder="first name"
        className="w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="text"
        name="lastName"
        placeholder="last name"
        className="w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        className="w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="tel"
        name="phone"
        placeholder="phone"
        className="w-64 mt-2 ml-2 px-4 py-2"
      />
      <input
        type="text"
        name="address"
        placeholder="address"
        className="w-64 mt-2 ml-2 px-4 py-2"
      />
    </form>
  );
}
