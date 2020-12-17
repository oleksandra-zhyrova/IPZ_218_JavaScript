var name;
var password;
name     = prompt ("Введите имя:");
password = prompt ("Введите пароль:");

if ((name == "ivan" && password == "333")
  || (name == "ssss" && password == "666")
  || (name == "gibs" && password == "0000"))
{
  alert ("Добро пожаловать");
}
else
{
  alert ("Пользователь не найден");
}
