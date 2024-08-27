import React from "react";

const Tabs = ({ buttons, children, ElementType }) => {
  // It should be always uppercase to be distinguish the variable name

  return (
    <>
      <ElementType>{buttons}</ElementType>
      {children}
    </>
  );
};

export default Tabs;
