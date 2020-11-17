import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto mb-2 text-center">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong style={{ color: "#5f27cd" }}>{title}</strong>
        </h1>
      </div>
    </div>
  );
}
