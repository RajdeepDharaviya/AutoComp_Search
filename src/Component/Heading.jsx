import React from "react";

const Heading = ({ text, align }) => {
  return (
    <div>
      <h1 style={{ textAlign: align }}>{text}</h1>
    </div>
  );
};

export default Heading;
