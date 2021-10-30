import React from "react";

export default function NavButtons({ number, setNumber, database }) {
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          if (0 !== number) setNumber(number - 1);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          if (database.length - 1 !== number) setNumber(number + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
