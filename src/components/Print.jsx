export default function Print({ form }) {
  return (
    <section className="flex flex-col gap-y-1">
      This is empty section html tag.
      <p>{form.firstName}</p>
      <p>{form.lastName}</p>
      <p>{form.email}</p>
      <p>{form.phone}</p>
      <p>{form.address}</p>
    </section>
  );
}
