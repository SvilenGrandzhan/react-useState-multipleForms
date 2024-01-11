
function ComponentA({ elRef }) {
    return (
      <p>
        COMPONENT A:
        <input ref={elRef} />
      </p>
    );
  }

export default ComponentA