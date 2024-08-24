var nome = 'Matheus'
var idade = 19
var salario = 15000

if (idade > 30) {
    result = "Idade maior que 30";
} else if (salario < 10000) {
    result = "Salário menor que 10.000";
}
else if (idade < 30 && salario > 10000) {
    result = "Nome: " + nome + "\nIdade: " + idade + "\nSalário: " + salario;
}

console.log(result);