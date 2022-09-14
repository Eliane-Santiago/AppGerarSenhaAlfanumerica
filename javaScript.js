//Selecionando os elementos no html
let inputSenha = document.querySelector("#inputSenha");
let buttonGerar = document.querySelector("#buttonGerar");
let buttonCopiar = document.querySelector("#buttonCopiar");

// FUNÇÕES

    //Função - Gerando Letras Minúsculas
    const getLetterLowerCase = () => {

        let LetterLowerCase = String.fromCharCode(Math.floor(Math.random() *26) + 97);
         return LetterLowerCase
    }
    //console.log(document.getElementById("inputSenha").value = getLetterLowerCase());  
    

    //Função - Gerando letras Maiúsculas
    const getLetterUpperCase = () => {

	let LetterUpperCase = String.fromCharCode(Math.floor(Math.random() *26) + 65);
    return LetterUpperCase

    }
    //console.log(document.getElementById("inputSenha").value = getLetterUpperCase());
    

    //Função - Gerando Simbolos
    const getSymbols = () => {

	const symbols = "()[]{}<>;:/?\|!.,@#$%&*_-+"

    return symbols[Math.floor(Math.random()*symbols.length)] // Retornando um caracter aleatório do array e multiplicando pelo tamanho do array

    }
    
    //console.log(document.getElementById("inputSenha").value = getSymbols());
    

    //Função - Gerando Números
    const getNumber = () => {

    let number = Math.floor(Math.random()*10).toString(); //Gerando valores randômicos e convertendo para String
    return number;
        
    }
    
    //console.log(document.getElementById("inputSenha").value = getNumber());


    //Função - Gerar Senha
    let gerarSenha = (getLetterLowerCase, getLetterUpperCase, getSymbols, getNumber) => {

        let senha = " ";
        
        let tamanhoSenha = 12; //tamanho da senha
        
        //Arrey de senha
        let geradorSenha =[
            getLetterLowerCase, 
            getLetterUpperCase, 
            getSymbols, 
            getNumber
        ]
        
        for(i=0; i<tamanhoSenha; i=i+4){
            geradorSenha.forEach(() => {
                let valorAleatorio = geradorSenha[Math.floor(Math.random() * geradorSenha.length)]();
                
               // console.log(senha);

                senha += valorAleatorio;

                
            })

                senha = senha.slice( 0, tamanhoSenha+1) // Para deixar a senha do tamanho escolhido
                
                document.getElementById("inputSenha").value = senha;

                console.log(tamanhoSenha);


        }
    
    }
    

    //Função - Copiar Senha
    let copiaSenha = () => {
        navigator.clipboard.writeText(document.getElementById("inputSenha").value)
    }

// Eventos

// Escutador de evento do botão Gerar
buttonGerar.addEventListener("click",  (event) =>{

    gerarSenha(getLetterLowerCase, getLetterUpperCase, getSymbols, getNumber);

});

// Escutador de evento do botão Copiar
buttonCopiar.addEventListener("click",  (event) =>{

    copiaSenha();

});





