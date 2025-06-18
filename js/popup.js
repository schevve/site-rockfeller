function mostrarPopup() {
      if (!sessionStorage.getItem("popupMostrado")) {
        setTimeout(() => {
          document.getElementById("popup").style.display = "flex";
          sessionStorage.setItem("popupMostrado", "true");
        }, 3000); // mostra após 3 segundos
      }
    }

    function fecharPopup() {
      document.getElementById("popup").style.display = "none";
    }

    window.onload = mostrarPopup;