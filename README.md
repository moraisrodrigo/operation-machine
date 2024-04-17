# Challenge Project

This project implements a machine for performing operations based on textual instructions.

## Instructions

This machine should support the following instructions:

- `PUSH` X: Pushes the value X onto the queue.
- `ADD`: Adds the top two values of the queue together and pushes the result back.
- `SUB`: Subtracts the value at the top of the queue from the next value and pushes the result back.
- `MUL`: Multiplies the top two values of the queue and pushes the result back.
- `DIV`: Divides the value at the top of the queue by the next value and pushes the result back.
- `DUP`: Duplicates the value at the top of the queue.
- `POP`: Removes the value at the top of the queue.
- `SWAP`: Swaps the position of the top two values in the queue.


## Getting Started

To run the program, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3.  Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
4. Run the program by executing `node index.mjs` in the terminal.
5. Follow the instructions to input the sequence of operations.

## File Structure

- `index.mjs`: The entry point of the program.
- `operations.mjs`: Defines the allowed operations and their actions.
- `queue.mjs`: Defines the Queue class used for executing operations.
- `README.md`: This file, providing an overview of the project.

## Usage

The user is prompted to enter a sequence of operations separated by spaces. The program then executes these operations and displays the intermediate results and the final result.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
