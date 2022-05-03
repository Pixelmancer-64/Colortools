import React from "react";
import { useState } from "react";
import Alert from "./Alert";
import useToggle from "../../hooks/useToggle";

export default function AlertHandler({ children }) {
  const [visible, setToggle] = useToggle(false);
  const [text, setText] = useState("No text here yet");

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        openAlert: (text) => {
          setToggle();
          setText(text);
        },
      });
    }
    return child;
  });

  return (
    <>
      <Alert text={text} visible={visible} setToggle={setToggle} />
      {childrenWithProps}
    </>
  );
}
