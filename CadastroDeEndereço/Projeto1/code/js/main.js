document.addEventListener("DOMContentLoaded", function () {
    const cepInput = document.getElementById("cep");
    const streetInput = document.getElementById("street");
    const numberInput = document.getElementById("number");
    const neighborhoodInput = document.getElementById("neighborhood");
    const stateInput = document.getElementById("state");
    const cityInput = document.getElementById("city");
    const cepError = document.getElementById("cepError");
  
    cepInput.addEventListener("change", () => {
      const cep = cepInput.value.replace(/\D/g, "");
      if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => response.json())
          .then((data) => {
            if (!data.erro) {
              streetInput.value = data.logradouro;
              neighborhoodInput.value = data.bairro;
              stateInput.value = data.uf;
              cityInput.value = data.localidade;
              cepError.classList.add("hidden");
            } else {
              cepError.classList.remove("hidden");
            }
          })
          .catch((error) => {
            console.error("Erro na consulta à API do Via CEP:", error);
          });
      } else {
        cepError.classList.remove("hidden");
      }
    });
  });
  