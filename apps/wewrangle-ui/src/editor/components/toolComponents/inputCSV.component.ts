import { Component, Output } from "rete";
// import { numSocket } from "../sockets";
// import { NumControl } from "../controls/number-control";
import { Socket } from "rete";

export class NumComponent extends Component {
  constructor() {
    super("Input CSV");
  }

  builder(node: any) {
    const out1 = new Output("num", "Output", new Socket('Any Type'));

    return node.addOutput(out1);
  }

  worker(node: any, inputs: any, outputs: any) {}
}
