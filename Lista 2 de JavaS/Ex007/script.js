var valor1 = Number(prompt("Digite 3 valores monetários." + "\nDigite o primeiro valor: "));
var valor2 = Number(prompt("Digite o segundo valor: "));
var valor3 = Number(prompt("Digite o terceiro valor: "));

var media = (valor1 + valor2 + valor3) / 3;
var valorFormatado = media.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
alert(valorFormatado);
