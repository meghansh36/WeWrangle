import { Component, Output } from "rete";
import socket from "../../services/socket.service";

export class InputCSVComponent extends Component {
  constructor() {
    super("CSV Input");
  }

  builder(node: any) {
    const out1 = new Output("any", "Output", socket);

    return node.addOutput(out1);
  }

  worker(node: any, inputs: any, outputs: any) {}
}
