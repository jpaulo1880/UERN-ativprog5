/* Certifica-se que a página esteja carregada antes de executar o script */
document.addEventListener("DOMContentLoaded", function () {
  /* Variável muda avatar */
  const mudaAvatarXp = document.getElementById("avatarXp");

  /* Variáveis dos elementos a serem ocultados */
  const subXpPro = document.getElementById("subXpPro");
  const paraXpPro = document.getElementById("paraXpPro");

  /* Função muda avatar */
  mudaAvatarXp.addEventListener("click", function () {
    if (mudaAvatarXp.src.includes("avatar.png")) {
      mudaAvatarXp.src = "../images/avatar2.png";
    } else {
      mudaAvatarXp.src = "../images/avatar.png";
    }
  });

  /* Experiências Profissionais */
  subXpPro.addEventListener("click", function () {
    paraXpPro.style.display = "none";
  });
  subXpPro.addEventListener("dblclick", function () {
    paraXpPro.style.display = "block";
  });
});
