function CalculoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura*altura);
    console.log(imc);

    if(imc<20)
    {
        document.getElementById("mensagem").innerHTML = "Você está com o <strong>peso abaixo do ideal!</strong>";
        document.getElementById("imagem").src="images/magro_mais.gif";
    }
    else if(imc >=25)
    {
        document.getElementById("mensagem").innerHTML = "Você está com o <strong>peso acima do ideal!</strong>";
        document.getElementById("imagem").src="images/seu_barriga.gif";
    }
    else{
        document.getElementById("mensagem").innerHTML = "Você está com o <strong>peso ideal!</strong";
        document.getElementById("imagem").src="images/normal.gif";
    }
}