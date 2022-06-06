function msgWhats (elemento) {
    let texto = elemento.firstElementChild.innerText;
    let numero = prompt('Qual é o número? - Exemplo: 032 9 1111 2222');
    let strNumero = numero.replace(/\s/g, '');;
    let n = strNumero.length;
    let WhatsLink = `https://api.whatsapp.com/send?phone=55${strNumero}&text=${texto}`;

    if (strNumero != "" & n == 12) {
        window.open(WhatsLink);
    } else {
        alert("Por favor digite o número correto!");
    }
}