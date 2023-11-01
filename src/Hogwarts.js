import React from "react";
import Hufflepuff from "./Houses/Hufflepuff";
import { colors, gryffMascot } from "./Houses/GryffMascot";

function Hogwarts() {
  return (
    <div>
      <Hufflepuff />
    </div>
  );
}
console.log(colors);

gryffMascot();

export const colors = "Scarlet and Gold"

function values(){
    console.log ("Courage, Bravery, Nerve and Chivalry");
}
export function gryffMascot(){
    console.log("the Lion");
}

export default Hogwarts;