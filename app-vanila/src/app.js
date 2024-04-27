import './assets/style.css';

/*async function addSticky() {
  const stickyNote = await miro.board.createStickyNote({
    content: 'Hello, World!',
  });

  await miro.board.viewport.zoomTo(stickyNote);
}

addSticky();*/

document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tabs-header-list .tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove a classe 'tab-active' de todas as guias
      tabs.forEach((t) => t.classList.remove("tab-active"));
      // Adiciona a classe 'tab-active' à guia clicada
      tab.classList.add("tab-active");

      // Esconde todos os conteúdos das guias
      tabContents.forEach((content) => {
        content.style.display = "none";
      });

      // Mostra o conteúdo correspondente à guia clicada
      tabContents[index].style.display = "block";
    });
  });
});



async function init() {
  await miro.board.ui.on('drop', async ({x, y , target}) =>{
    if(target instanceof HTMLImageElement){

      await miro.board.createImage({
        url: `${target.src}`,
        x,
        y
      })

    }
  })
}

init();