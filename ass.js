"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function calculate(num1, num2, operator) {
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const questions = [
            { type: 'input', name: 'num1', message: 'Enter the first number:' },
            { type: 'input', name: 'operator', message: 'Enter the operator (+, -, *, /):' },
            { type: 'input', name: 'num2', message: 'Enter the second number:' },
        ];
        const answers = yield inquirer_1.default.prompt(questions);
        const { num1, operator, num2 } = answers;
        const result = calculate(parseFloat(num1), parseFloat(num2), operator);
        console.log('Result:', result);
    });
}
main();
