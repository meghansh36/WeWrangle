import { Component, Output, Input } from "rete";
import socket from "../../services/socket.service";

export class FilterComponent extends Component {
  constructor() {
    super("Filter");
  }

  builder(node: any) {
    const in1 = new Input('input', "Input", socket)
    const out1 = new Output("true_output", "True Output", socket);
    const out2 = new Output("false_output", "False Output", socket);


    return node.addOutput(out1).addInput(in1).addOutput(out2);
  }

  worker(node: any, inputs: any, outputs: any) {}
}
