import React from "react";

export default function SpinningIcons(args) {
  return (
    <img
      class={args.imageClass}
      style={{ width: "200px", height: "auto" }}
      src={args.image}
    ></img>
  );
}
