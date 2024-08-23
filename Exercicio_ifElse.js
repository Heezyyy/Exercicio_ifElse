var nota = 8.5
if (nota < 2.5) {
    result = "Conceito D";
}
else if (nota < 5.0) {
    result = "Conceito C";
}
else if (nota < 7.5) {
    result = "Conceito B";
}
else if (nota < 10.0) {
    result = "Conceito A";
}
else {
    result = "Desconhecido";
}
console.log(result);