import { Queue } from "./queue.mjs";

const queue = new Queue();

const operationsLabels = {
  PUSH: "PUSH",
  POP: "POP",
  ADD: "ADD",
  SUB: "SUB",
  MUL: "MUL",
  DIV: "DIV",
  DUP: "DUP",
  SWAP: "SWAP",
}

const operationsAllowed = [
  { command: operationsLabels.PUSH, action: (args) => queue.PUSH(args), hasInputValue: true },
  { command: operationsLabels.POP, action: () => queue.POP(), hasInputValue: false },
  { command: operationsLabels.ADD, action: () => queue.ADD(), hasInputValue: false },
  { command: operationsLabels.SUB, action: () => queue.SUB(), hasInputValue: false },
  { command: operationsLabels.MUL, action: () => queue.MUL(), hasInputValue: false },
  { command: operationsLabels.DIV, action: () => queue.DIV(), hasInputValue: false },
  { command: operationsLabels.DUP, action: () => queue.DUP(), hasInputValue: false },
  { command: operationsLabels.SWAP, action: () => queue.SWAP(), hasInputValue: false },
]

const getElements = () => queue.getElements();

const getAccumulator = () => queue.getAccumulator();

export { operationsAllowed, operationsLabels, getElements, getAccumulator };
