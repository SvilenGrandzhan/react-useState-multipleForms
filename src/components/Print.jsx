export default function Print({ form }) {
  return (
    <section className="flex flex-col gap-y-1">
      This is empty section html tag.
      <p>{`First name: ${form.firstName}`}</p>
      <p>{`Last name: ${form.lastName}`}</p>
      <p>{`Email: ${form.email}`}</p>
      <p>{`Phone: ${form.phone}`}</p>
      <p>{`Address: ${form.address}`}</p>
    </section>
  );
}
