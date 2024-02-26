import React, { memo } from "react";

const Child = () => {
  console.log("Child");
  return (
    <>
      <h3>Child</h3>
    </>
  );
};

export default memo(Child);
