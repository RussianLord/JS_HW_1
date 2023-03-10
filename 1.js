const temp = Number.parseInt(prompt("Введите температуру в цельсиях"));
function getTemp(tempNum){
  return alert(`Цельсий: ${tempNum}, Фаренгейт: ${(tempNum*1.8+32).toFixed(1)} `);
}
getTemp(temp);
