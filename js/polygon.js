const spaces = [
  { id: "RD5", number: "1", status: "for sale", area: "120 м²" },
  { id: "RD6", number: "2", status: "reserve", area: "95 м²" },
  { id: "RD7", number: "3", status: "for sale", area: "120 м²" },
  { id: "RD8", number: "4", status: "sold out", area: "95 м²" }
];


document.querySelectorAll("svg polygon").forEach(polygon => {
  polygon.addEventListener("mouseenter", function (event) {
      const space = spaces.find(s => s.id === this.parentNode.id);
      if (space) {
          this.classList.add("highlight");
          const container = this.closest(".image-container");
          const tooltip = container.querySelector(".tooltip");
          tooltip.innerHTML = `Apartment ${space.number}<br>Status: ${space.status}<br>Area: ${space.area}`;
          tooltip.style.display = "block";
          
          let posX = event.offsetX + 10;
          let posY = event.offsetY + 10;
          let arrowClass = "arrow-right";
          
          if (event.offsetX > container.offsetWidth / 2) {
              posX = event.offsetX - tooltip.offsetWidth - 10;
              arrowClass = "arrow-left";
          }
          if (event.offsetY > container.offsetHeight / 2) {
              posY = event.offsetY - tooltip.offsetHeight - 10;
              arrowClass = "arrow-top";
          }
          if (event.offsetY < container.offsetHeight / 2 && event.offsetX < container.offsetWidth / 2) {
              arrowClass = "arrow-bottom";
          }
          
          tooltip.className = `tooltip ${arrowClass}`;
          tooltip.style.left = `${posX}px`;
          tooltip.style.top = `${posY}px`;
      }
  });

  polygon.addEventListener("mouseleave", function () {
      this.classList.remove("highlight");
      const container = this.closest(".image-container");
      container.querySelector(".tooltip").style.display = "none";
  });
});

// modal-plan

const plans = {
  plan1: {
    image: "./images/plan120.jpg",
    title: "Apartments №1",
    table:
      "<tr><th>Premises</th><th>Area</th></tr>" +
      "<tr><td>Living room</td><td>40 sq.m.</td></tr>" +
      "<tr><td>Kitchen</td><td>15 sq.m.</td></tr>" +
      "<tr><td>Room 1</td><td>20 sq.m.</td></tr>" +
      "<tr><td>Room 2</td><td>20 sq.m.</td></tr>" +
      "<tr><td>Room 3</td><td>25 sq.m.</td></tr>" +
      "<tr><td>Bathrooms</td><td>10 sq.m.</td></tr>" +
      "<tr><td>Total area</td><td>120 sq.m.</td></tr>",
  },
  plan2: {
    image: "./images/plan120.jpg",
    title: "Apartments №2",
    table:
      "<tr><th>Premises</th><th>Area</th></tr>" +
      "<tr><td>Living room</td><td>50 sq.m.</td></tr>" +
      "<tr><td>Kitchen</td><td>15 sq.m.</td></tr>" +
      "<tr><td>Room 1</td><td>20 sq.m.</td></tr>" +
      "<tr><td>Room 2</td><td>25 sq.m.</td></tr>" +
      "<tr><td>Room 3</td><td>15 sq.m.</td></tr>" +
      "<tr><td>Room 4</td><td>15 sq.m.</td></tr>" +
      "<tr><td>Bathrooms</td><td>10 sq.m.</td></tr>" +
      "<tr><td>Total area</td><td>140 sq.m.</td></tr>",
  },
  plan3: {
    image: "./images/plan120.jpg",
    title: "Apartments №3",
    table:
      "<tr><th>Premises</th><th>Area</th></tr>" +
      "<tr><td>Living room</td><td>35 sq.m.</td></tr>" +
      "<tr><td>Kitchen</td><td>12 sq.m.</td></tr>" +
      "<tr><td>Room 1</td><td>18 sq.m.</td></tr>" +
      "<tr><td>Room 2</td><td>22 sq.m.</td></tr>" +
      "<tr><td>Room 3</td><td>13 sq.m.</td></tr>" +
      "<tr><td>Bathrooms</td><td>10 sq.m.</td></tr>" +
      "<tr><td>Total area</td><td>100 sq.m.</td></tr>",
  },
  plan4: {
    image: "./images/plan140.jpg",
    title: "Apartments №4",
    table:
      "<tr><th>Premises</th><th>Area</th></tr>" +
      "<tr><td>Living room</td><td>55 sq.m.</td></tr>" +
      "<tr><td>Kitchen</td><td>18 sq.m.</td></tr>" +
      "<tr><td>Room 1</td><td>25 sq.m.</td></tr>" +
      "<tr><td>Room 2</td><td>20 sq.m.</td></tr>" +
      "<tr><td>Room 3</td><td>17 sq.m.</td></tr>" +
      "<tr><td>Bathrooms</td><td>15 sq.m.</td></tr>" +
      "<tr><td>Total area</td><td>150 sq.m.</td></tr>",
  },
};
document.querySelectorAll('.clickable').forEach(polygon => {
  polygon.addEventListener('click', () => {
    const planId = polygon.getAttribute('data-plan');
    document.getElementById('plan-image').src = plans[planId].image;
    document.getElementById('plan-table').innerHTML = plans[planId].table;
    document.getElementById('modal_plan-title').innerText = plans[planId].title;
    document.getElementById('modal_plan').style.display = 'block';
  });
});

document.querySelector('.close_plan').addEventListener('click', () => {
  document.getElementById('modal_plan').style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === document.getElementById('modal_plan')) {
    document.getElementById('modal_plan').style.display = 'none';
  }
});