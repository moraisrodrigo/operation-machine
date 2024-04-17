import { operationsLabels } from "./operations.mjs";

export class Queue {

  constructor() {
    this.accumulator = undefined
    this.elements = [];
  }

  getElements = () => {
    return this.elements;
  }
  
  getAccumulator = () => {
    return this.accumulator;
  }

  isEmpty = operationName => {
    const isEmptyQueue = this.elements.length === 0;

    if (isEmptyQueue) console.error(`Not enough elements in the queue for ${operationName ?? ''} operation.`);
    
    return isEmptyQueue;
  }

  push = value => {
    this.accumulator = value;
    this.elements.push(value)
  };  

  pop = operationName => {
    if (this.isEmpty(operationName)) return undefined;
    return this.accumulator = this.elements.pop();
  };  

  POP = () => {
    this.pop(operationsLabels.POP);
  };  

  PUSH = value => this.push(value);

  ADD = () => {
    const operand2 = this.pop(operationsLabels.ADD);
    if (operand2 == undefined) return;
    const operand1 = this.pop(operationsLabels.ADD);
    if (operand1 == undefined) return;
    this.push(operand1 + operand2);
  };

  SUB = () => {
    const operand2 = this.pop(operationsLabels.SUB);
    if (operand2 == undefined) return;
    const operand1 = this.pop(operationsLabels.SUB);
    if (operand1 == undefined) return;
    this.push(operand1 - operand2);
  };

  MUL = () => {
    const operand2 = this.pop(operationsLabels.MUL);
    if (operand2 == undefined) return;
    const operand1 = this.pop(operationsLabels.MUL);
    if (operand1 == undefined) return;
    this.push(operand1 * operand2);
  };

  DIV = () => {
    const operand2 = this.pop(operationsLabels.DIV);
    if (operand2 == undefined) return;
    const operand1 = this.pop(operationsLabels.DIV);
    if (operand1 == undefined) return;
    this.push(Math.floor(operand1 / operand2));
  };

  DUP = () => {
    if (this.isEmpty("DUP")) return;

    const topElement = this.elements[this.elements.length - 1];

    this.push(topElement);
  };

  SWAP = () => {
    const topElement = this.pop(operationsLabels.SWAP);
    if (topElement == undefined) return;
    const secondTopElement = this.pop(operationsLabels.SWAP);
    if (secondTopElement == undefined) return;

    this.push(topElement);
    this.push(secondTopElement);
  }

}