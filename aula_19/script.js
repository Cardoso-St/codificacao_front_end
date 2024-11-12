function pegaDados(){

    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const idade = document.querySelector("#idade");
    const resultado = document.querySelector(".resultado");
    
    const nomeValor = nome.value;
    const sobrenomeValor = sobrenome.value;
    const nomeValor = idade.value;

    resultado.innerHTML = `<p>Nome ${nomeValor}</p>
                          <p>Sobrenome : ${sobrenomeValor}</p>
                          <p>Idade: ${idadeValor}</p>`
                          ;
}