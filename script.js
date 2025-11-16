const textarea = document.querySelector("#conteudo");

textarea.addEventListener("input", () => {
     textarea.style.height = "auto";
     textarea.style.height = textarea.scrollHeight + "px";
});

class Usuario {
        constructor(nome, mensagem, userId) {
             this.nome = nome;
             this.mensagem = mensagem;
             this.userId = userId;
  }
       getNome() {
            return this.nome;
  }
       getMensagem() {
            return this.mensagem;
  }
       getUserId() {
             return this.userId;  
  }
}

const form = document.querySelector("#form");
const nomeOutput = document.querySelector("#info-nome");
const textoOutput = document.querySelector("#info-texto");

form.addEventListener("submit", event => {
    event.preventDefault();
  
    const nome = document.querySelector("#titulo").value;
    const mensagem = document.querySelector("#conteudo").value;
    const usuario = new Usuario(nome, mensagem, 1);

const data = {
      title: usuario.getNome(),
      body: usuario.getMensagem(),
      userId: usuario.getUserId()
};
   fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
           "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(post => {
    nomeOutput.textContent = "Nome: " + post.title;
    textoOutput.textContent = "Mensagem: " + post.body;
   })
   .catch(error => console.log.error("Erro ao enviar: ", error));

form.reset();
});