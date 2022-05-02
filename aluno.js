var botoesAluno = document.querySelectorAll(".btn").length;

for (var i = 0; i< botoesAluno; i++){

    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        alert("Seu status foi enviado");
    })
}
