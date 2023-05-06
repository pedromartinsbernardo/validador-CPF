document.querySelector('.busca').addEventListener('submit', (event)=>{
    event.preventDefault ();
    let input = document.querySelector('.cpf').value;   
console.log(TestaCPF(input))

if(TestaCPF(input)){
    document.querySelector('.resultado').innerHTML = 'CPF valido'

    }else{

        document.querySelector('.resultado').innerHTML = 'CPF invalido'    

    }

}


)






function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return falso;
    return verdadeiro;
}
