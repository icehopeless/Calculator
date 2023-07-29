//mudando cor 
var a = document.querySelector('.buttons');
    a.addEventListener("mouseenter", () => {
        a.style.color
    }); 

a.addEventListener("mouseout", () =>{
    a.style.color = "white";
});

//adiciona numeros ao display de resultado
function displaychar(num){
    if(document.querySelector('.displaytext').value == "Error Syn."
    || document.querySelector('.displaytext').value == "not yet available"
    ){
        clean();
    }
    document.querySelector('.displaytext').value += num;
}

 //limpa o resultado 
function clean(){
    document.querySelector('.displaytext').value = ""; //atualiza o valor por uma string vazia
}

//deleta o ultimo numero colocado
function result(charcount){ 
    document.querySelector('.displaytext').value = eval(charcount);
    if(charcount == ""){ //verifica se o resultado está vazio
        document.querySelector('.displaytext').value = "Error Syn.";
    }
}

//deleta o ultimo numero colocado
function del(valuestr){
    valuestr = valuestr.slice(0,-1); //retira a ultima posicao
    document.querySelector('.displaytext').value = valuestr; //atualiza o valor com a nova string cortada
}

function history(){
    document.querySelector('.displaytext').value = "not yet available";
}

function scientific(){
    document.querySelector('.displaytext').value = "not yet available";
}