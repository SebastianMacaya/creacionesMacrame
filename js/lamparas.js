const cards = document.getElementById("cards");
const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

/* ------------ Traer productos (Reemplazo Js vanilla por Jquery) ----------- */
const fetchData = async () => {
  const URLGET = "../data/lamparas.json";
  $.get(URLGET, async function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      const data = await misDatos;
      pintarCards(data);
    }
  });
};

/* ---------------------------- Pintar productos ---------------------------- */
const pintarCards = (data) => {
  data.forEach((item) => {
    templateCard.querySelector("h5").textContent = item.title;
    templateCard.querySelector("p").textContent = `$${item.price}`;
    templateCard.querySelector("img").setAttribute("src", item.thumbnailUrl);
    templateCard.querySelector("h6").textContent = item.description
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
  pintarModalNew(data)
};
