import React from "react";

const Section = ({ title, children, ...props }) => {
  // 변수타입이 지정되어있지않으면 spread연산자로 같이 나오게된다.
  console.log({ ...props });
  return (
    <div {...props}>
      <h2>{title}</h2>

      {children}
    </div>
  );
};

export default Section;
