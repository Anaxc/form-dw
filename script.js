const botao = document.getElementById("botao");

botao.addEventListener("click",()=> {

    const profiss = document.getElementById("profiss").value;
    const data = document.getElementById("data").value;
    const link = document.getElementById("link");
    const nome = document.getElementById("nome").value;

     if(nome  === "" || profiss  === "" || data  === "") {
        alert("Preencha todos os campos!")
        return;
     }
    
     const img = URL.createObjectURL(link.files[0]);
     const resultado = document.getElementById("form2");
    
   console.log(nome)

     resultado.innerHTML = `
       <img src="${img}" alt="Foto do usuário" width="200" height="150" class="foto">
       <p>Nome: ${nome} </p>
       <p>Profissão: ${profiss} </p>
       <p class="dt">Data de nascimento: ${data} </p>
      

     `;
});