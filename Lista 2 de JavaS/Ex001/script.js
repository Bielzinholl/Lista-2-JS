var valor = Number(prompt("Digite um valor numérico: "));
var valorFormatado = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
alert(valorFormatado);
