/* Certifica-se que a página esteja carregada antes de executar o script */
document.addEventListener("DOMContentLoaded", function () {
  /* Variável muda avatar */
  const mudaAvatar = document.getElementById("avatar");

  /* Variáveis dos elementos a serem ocultados */
  const subPerfil = document.getElementById("subPerfil");
  const paraPerfil = document.getElementById("paraPerfil");
  const subComp = document.getElementById("subComp");
  const listComp = document.getElementById("listComp");
  const subForma = document.getElementById("subForma");
  const paraForma = document.getElementById("paraForma");
  const subXP = document.getElementById("subXP");
  const listXP = document.getElementById("listXP");
  const subContato = document.getElementById("subContato");
  const enderecoContato = document.getElementById("enderecoContato");
  const subXpPro = document.getElementById("subXpPro");
  const paraXpPro = document.getElementById("paraXpPro");

  /* Função muda avatar */
  mudaAvatar.addEventListener("click", function () {
    if (mudaAvatar.src.includes("avatar.png")) {
      mudaAvatar.src = "../ativprog5/images/avatar2.png";
    } else {
      mudaAvatar.src = "../ativprog5/images/avatar.png";
    }
  });

  /* Perfil */
  subPerfil.addEventListener("click", function () {
    paraPerfil.style.display = "none";
  });
  subPerfil.addEventListener("dblclick", function () {
    paraPerfil.style.display = "block";
  });

  /* Principais competências */
  subComp.addEventListener("click", function () {
    listComp.style.display = "none";
  });
  subComp.addEventListener("dblclick", function () {
    listComp.style.display = "block";
  });

  /* Formação acadêmica */
  subForma.addEventListener("click", function () {
    paraForma.style.display = "none";
  });
  subForma.addEventListener("dblclick", function () {
    paraForma.style.display = "block";
  });

  /* Experiência profissional */
  subXP.addEventListener("click", function () {
    listXP.style.display = "none";
  });
  subXP.addEventListener("dblclick", function () {
    listXP.style.display = "block";
  });

  /* Contato */
  subContato.addEventListener("click", function () {
    enderecoContato.style.display = "none";
  });
  subContato.addEventListener("dblclick", function () {
    enderecoContato.style.display = "block";
  });

  /* Experiências Profissionais */
  subXpPro.addEventListener("click", function () {
    paraXpPro.style.display = "none";
  });
  subXpPro.addEventListener("dblclick", function () {
    paraXpPro.style.display = "block";
  });
});
