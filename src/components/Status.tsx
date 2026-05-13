import React, { Fragment, useContext } from "react";
import { StoreContext } from "../store";

interface StatusProps {
  children?: React.ReactNode;
}

const Status = ({ children }: StatusProps) => {
  const {
    right: [right],
    wrong: [wrong],
  } = useContext(StoreContext);

  return (
    <p className="status-text">
      {!right && !wrong && "What do you think?"}
      {right && (
        <Fragment>
          <span className="font-bold text-green-800">✔ Correct!</span>{" "}
          {children}
        </Fragment>
      )}
      {wrong && (
        <span className="text-purple-900">
          Not quite. Try again.{" "}
          <span role="img" aria-hidden="true">
            👍
          </span>
        </span>
      )}
    </p>
  );
};

export { Status };
