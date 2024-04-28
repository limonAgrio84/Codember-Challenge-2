const text = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";
const prueba = "##*&";
function decrypt(text){
  let result = "";
  let numValue = 0;
  for (let i = 0; i<text.length; i++){
    let letter = text[i];
    if (letter === "#"){
       numValue++;
    } else if (letter === "@") {
       numValue--;
    } else if (letter === "*"){
      numValue = numValue*numValue; 
    }else if (letter === "&"){
      result += numValue;
    }
    else{
      console.log("hola");
    }
  }
  return result;

}

let result = decrypt(text);
console.log(result);


