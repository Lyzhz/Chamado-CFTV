function toggleDropdown() {
    const menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("open");
  }
  
  function selecionarCategoria(valor) {
    document.querySelector(".dropdown-btn").textContent = valor;
    document.getElementById("categoriaSelecionada").value = valor.toLowerCase();
    document.getElementById("dropdown-menu").classList.remove("open");
    mostrarOpcoes(); // chama a função que mostra os blocos, se você quiser manter a lógica antiga
  }
  