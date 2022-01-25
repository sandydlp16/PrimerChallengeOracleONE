   
   
   function copiartxt() {
        let copyText = document.getElementById("Resultado");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);

    }

    //encriptar

    function encriptartxt() {
        let textEntrada = document.getElementById("entrada").value;
        textEntrada = textEntrada
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat")
        let Resultado =
        document.getElementById("Resultado").value = textEntrada
        document.getElementById("entrada").value=" ";


    }

    //desencriptadr

    function Desencriptartext(){
        let textEntrada = document.getElementById("entrada").value;
        textEntrada = textEntrada
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u")
        let Resultado =
        document.getElementById("Resultado").value = textEntrada 
        document.getElementById("Entrada").value=" ";

    }
    
  