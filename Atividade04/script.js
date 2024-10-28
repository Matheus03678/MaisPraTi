async function fetchDataServices(){
    try {
        const data = await fetch("./data.json");
        const dataParse = await data.json()
        const servicesContainer = document.getElementById('services-cards');

        dataParse.servicos.forEach(service => {
            const serviceCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${service.name}</h5>
                    <p class="card-text">${service.description}</p>
                </div>
                </div>
            </div>
            `;
            servicesContainer.innerHTML += serviceCard;
        })
    } catch(error) {
        document.getElementById('services-cards').innerHTML = "<p class='text-danger'>Erro ao carregar os serviços.</p>";
        console.log(error)
    }
}

fetchDataServices();

async function fetchDataTestimony (){
    try {
        const data = await fetch("https://randomuser.me/api/?results=6");
        const dataParse = await data.json()
        const testimonialsCards = document.getElementById('testimonials-cards');
        
        dataParse.results.forEach(testimonials => {
            // console.log(testimonials)
            const {name:{first}, picture:{large}} = testimonials;
           const testimonialsHtml = `
                <div class="col-md-4 wrap-testim-cards" data-aos="fade-up">
                  <div class="card">
                    <img src="${large}" class="card-img-top" alt="${first}" id="img-user">
                    <div class="card-body">
                      <p class="card-text" id="descrition-user">"Lorem ipsum dolor, sit amet consectetur adipisicing elit."</p>
                      <h5 class="card-title" id="name-user">${first}</h5>
                    </div>
                  </div>
                </div>
                `;
            testimonialsCards.innerHTML += testimonialsHtml 
        });


    } catch (error) {
        document.getElementById('testimonials-cards').innerHTML = "<p class='text-danger'>Erro ao carregar os serviços.</p>";
        console.log(error)
    }
}
fetchDataTestimony()

(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();