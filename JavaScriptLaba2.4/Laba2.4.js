var num1;
var num2;
var num3;
var maxNum;

num1 = prompt ("Введите первое число:");
num2 = prompt ("Введите второе число:");
num3 = prompt ("Введите третье число:");

maxNum = num1;

if (maxNum < num2)
{
   maxNum = num2;
}

if (maxNum < num3)
{
   maxNum = num3;
}

alert(maxNum);
