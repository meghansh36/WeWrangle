import { Component, Input } from "rete";
import socket from "../../services/socket.service";

export class OutputCSVComponent extends Component {
  constructor() {
    super("CSV Output");
  }

  builder(node: any) {
    const in1 = new Input("any", "Input", socket);

    return node.addInput(in1);
  }

  worker(node: any, inputs: any, outputs: any) {}
}