// modwin
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modwin");
  const closeBtn = document.getElementsByClassName("close_modwin")[0];
  const formContent = document.getElementById("modwin_form-content");

  const forms = {
    "appointment-form": `
          <h2>Make an appointment</h2>
          <form id="appointmentForm">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
              <label for="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required>
            
          
              <label for="message">Additional Notes:</label>
               <textarea id="message" name="message" rows="4"></textarea>

            
               <button class="btn submit-btn" type="submit">Submit</button>
          </form>
      `,
    "buy-real-estate": `
          <h2>Reserve a property</h2>
          <form id="buy-form">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
              <label for="property-type">Property Type:</label>
              <select id="property-type" name="property-type" required>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="land">Land</option>
                  <option value="commercial">Commercial</option>
              </select>
          
              <label for="message">Additional Notes:</label>
               <textarea id="message" name="message" rows="4"></textarea>

            
               <button class="btn submit-btn" type="submit">Submit</button>
          </form>
      `,
    "order-consultation": `
          <h2>Order a consultation</h2>
          <form id="consultation-form">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
              <label for="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required>
              <label for="service-type">Service Type:</label>
              <select id="service-type" name="service-type" required>
                  <option value="sale">Sale</option>
                  <option value="purchase">Purchase</option>
                  <option value="rent">Rent</option>
              </select>
              <label for="message">Additional Notes:</label>
               <textarea id="message" name="message" rows="4"></textarea>
              <button class="btn submit-btn" type="submit">Submit</button>
          </form>
      `,
  };

  document.querySelectorAll(".open-form").forEach((button) => {
    button.addEventListener("click", () => {
      const formType = button.getAttribute("data-form");
      formContent.innerHTML = forms[formType];
      modal.style.display = "block";
      addFormValidation();
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function addFormValidation() {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          alert(
            "Please fill out all required fields and enter a valid email address."
          );
        }
      });
    });
  }
});
