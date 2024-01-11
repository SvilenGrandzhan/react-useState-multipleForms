
function ComponentA({ elRef }) {
    return (
      <p>
        COMPONENT A:
        <input className="border border-black rounded-md m-1" ref={elRef} />
      </p>
    );
  }

export default ComponentA