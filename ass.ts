import inquirer from 'inquirer';

function calculate(num1: number, num2: number, operator: string): number {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                console.log("Error: Division by zero");
                process.exit(1);
            }
            return num1 / num2;
        default:
            console.log("Error: Invalid operator");
            process.exit(1);
    }
}

async function main() {
    const questions = [
        { type: 'input', name: 'num1', message: 'Enter the first number:' },
        { type: 'input', name: 'operator', message: 'Enter the operator (+, -, *, /):' },
        { type: 'input', name: 'num2', message: 'Enter the second number:' },
    ];

    const answers = await inquirer.prompt(questions);
    const { num1, operator, num2 } = answers;

    const result = calculate(parseFloat(num1), parseFloat(num2), operator);

    console.log('Result:', result);
}

main();
