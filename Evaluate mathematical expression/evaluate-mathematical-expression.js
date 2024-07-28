// Instructions
// Given a mathematical expression as a string you must return the result as a number.

// Numbers
// Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

// Operators
// You need to support the following mathematical operators:

// Multiplication *
// Division / (as floating point division)
// Addition +
// Subtraction -
// Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

// Parentheses
// You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

// Whitespace
// There may or may not be whitespace between numbers and operators.

// An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10
// And the following are invalid expressions

// 1 - - 1    // Invalid
// 1- - 1     // Invalid
// 6 + - (4)  // Invalid
// 6 + -(- 4) // Invalid
// Validation
// You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

// Restricted APIs
// NOTE: Both eval and Function are disabled.

// Solutions:
function calc(expr) {
	var expressionToParse = expr.replace(/\s+/g, "").split("");

	function peek() {
		return expressionToParse[0] || "";
	}

	function get() {
		return expressionToParse.shift();
	}

	function number() {
		var result = get();
		while ((peek() >= "0" && peek() <= "9") || peek() == ".") {
			result += get();
		}
		return parseFloat(result);
	}

	function factor() {
		if (peek() >= "0" && peek() <= "9") {
			return number();
		} else if (peek() == "(") {
			get(); // '('
			var result = expression();
			get(); // ')'
			return result;
		} else if (peek() == "-") {
			get();
			return -factor();
		}
		return 0; // error
	}

	function term() {
		var result = factor();
		while (peek() == "*" || peek() == "/") {
			if (get() == "*") {
				result *= factor();
			} else {
				result /= factor();
			}
		}
		return result;
	}

	function expression() {
		var result = term();
		while (peek() == "+" || peek() == "-") {
			if (get() == "+") {
				result += term();
			} else {
				result -= term();
			}
		}
		return result;
	}

	return expression();
}