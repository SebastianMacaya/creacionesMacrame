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
  const URLGET = "../data/sandalias.json";
  $.get(URLGET, async function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      const data = await misDatos;
      pintarCards(data);

      // $("#cards").click(function () {
      //   $("#miModal").modal("show");

      //   pintarModalNew($(this).attr("id"));
      // });

      // $("#cards").click(() => {
      //   card = data.filter((data) => data.target.getAttribute("id"));
      //   let valores = Object.values(card);

      //   $("#miModal").modal("show");
      //   //pintarModal(data);
      //   // console.log(valores[0]);
      //   pintarModalNew(this.valores);
      // });

      // let cardSelect = document.querySelectorAll("#cards");
      // for(let i = 0; i < cardSelect.length; i++){
      //   cardSelect[0].addEventListener("click", function(e){
      //     let self = e.target
      //     console.log(self)

      //   })
      // }
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

// const pintarModal = (data) => {
//   for (item of data) {
//     document
//       .querySelector(".modalImage")
//       .setAttribute("src", item.thumbnailUrl);
//     document.querySelector(".modalTitle").textContent = item.title;
//     document.querySelector(".modalPrice").textContent = `$${item.price}`;
//     document.querySelector(
//       ".modalDescription"
//     ).textContent = `${item.description}`;
//   }
// };

// const pintarModalNew = (item) => {
//   document.querySelector(".modalImage").setAttribute("src", item.thumbnailUrl);
//   document.querySelector(".modalTitle").textContent = item.title;
//   document.querySelector(".modalPrice").textContent = `$${item.price}`;
//   document.querySelector(
//     ".modalDescription"
//   ).textContent = `${item.description}`;
// };
