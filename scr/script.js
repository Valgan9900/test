let firstValue=prompt('Введите первое число','')
let sign=prompt('Введите знак (+ , - , / , * )','')
let secondValue=prompt('Введите второе число','')
let result
switch (sign) {
	case '+': 
	result=+firstValue + +secondValue;
	break;
	case '-':
	result=+firstValue - +secondValue;
	break;
	case '/':
	result=+firstValue / +secondValue;
	break;
	case '*':
	result=+firstValue * +secondValue;
	break;
}

alert(result)


