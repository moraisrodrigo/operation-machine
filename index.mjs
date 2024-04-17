import { getElements, getAccumulator, operationsAllowed } from "./operations.mjs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const executeOperations = commands => {

  if (!commands) return console.error('Operations invalid');
  
  let numberOfInstructions = 0;

  for (let index = 0; index < commands.length; index++) {

    let commandUpper = commands[index].toUpperCase();

    const operation = operationsAllowed.find(operation => operation.command === commandUpper);

    if (!operation) continue;

    let value = null;

    if (operation.hasInputValue) {      
      const number = Number(commands[index + 1]);
      if (isNaN(number)) {
        console.error(`Invalid value for ${operation.command} operation.`);
        continue;
      }
      index++; // Increment 'index' to skip the value in the next iteration
      value = number;
      commandUpper = commandUpper.concat(` '${number}'`)

    }

    operation.action(value)

    numberOfInstructions++;

    console.log(`${numberOfInstructions} instruction: ${commandUpper} => `, getElements());
  }

  console.log('Final Result = ', getAccumulator());
}

rl.question("Please enter the sequence of operations (separated by spaces): ", input => {

  const commands = input.split(" ");

  executeOperations(commands);

  rl.close();

});
