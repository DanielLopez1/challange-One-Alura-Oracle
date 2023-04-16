function encriptacion(texto){
    let textoEncriptado = [];
    let textoSeparado = texto.split("");
    console.log(textoSeparado);
            for(let i = 0; i < textoSeparado.length; i++){
                let letra = textoSeparado[i];
                if(letra == "o"){
                    textoEncriptado.push("ober");
                }else if(letra == "a"){
                    textoEncriptado.push("ai");
                }else if(letra == "e"){
                    textoEncriptado.push("enter");
                }else if(letra == "i"){
                    textoEncriptado.push("imes");
                }else if(letra == "u"){
                    textoEncriptado.push("ufat");
                }else{
                    textoEncriptado.push(letra);
                }
            }    

            textoEncriptado = textoEncriptado.join("");
            console.log(textoEncriptado);
}

encriptacion("hola como estas");

// function desencriptado (texo){
//     let palabraClave = [];
//     let textoDesencriptado = [];
//     let textoEncriptado = texo.split("");
//         for(let i = 0; i < textoEncriptado.length; i++){
//             let letra = textoEncriptado[i];
//             if(letra == "o"){
//                 palabraClave.push(letra);
//             }else if(letra == "a"){
//                 palabraClave.push(letra);
//             }else if(letra == "e"){
//                 palabraClave.push(letra);
//             }else if(letra == "i"){
//                 palabraClave.push(letra);
//             }else if(letra == "u"){
//                 palabraClave.push(letra);
//             }else{
//                 textoEncriptado.push(letra);
//             }
//         }    

// }
function desencriptado (texo){
    let textoSinOber = texo.replaceAll("ober", "o");
    let textoSinAi = textoSinOber.replaceAll("ai", "a");
    let textoSinEnter = textoSinAi.replaceAll("enter", "e");
    let textoSinImes = textoSinEnter.replaceAll("imes", "i");
    let textoDesencriptado = textoSinImes.replaceAll("ufat", "u");

    console.log(textoDesencriptado);

}



desencriptado("fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!");
