import { Component, Output, Input } from "rete";
import socket from "../../services/socket.service";

export class FunctionComponent extends Component {
  constructor() {
    super("Function");
  }

  builder(node: any) {
    const in1 = new Input('any', "Input", socket)
    const out1 = new Output("any", "Output", socket);

    return node.addOutput(out1).addInput(in1);
  }

  worker(node: any, inputs: any, outputs: any) {}
}
