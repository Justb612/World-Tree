import React from "react";

export default function ChampionButton(args) {
  return <button onClick={args.buttonOnclick}>{args.name}</button>;
}
