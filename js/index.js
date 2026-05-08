window.addEventListener( 'load', () => {
    const api = "https://api-colombia.com/api/v1/TouristicAttraction";
    const cards = document.querySelector('#cards');
    const buttonSearch = document.querySelector('#btn');
    const input = document.querySelector('#location');



    
    fetch(api)
        .then(response => response.json())
        .then(element => {

            function searchPlace() {
                
                buttonSearch.addEventListener('click', (event) => {
                    const searchElements = element.filter((data) => {
                        if(data.name.toLowerCase() === input.value.toLowerCase() ){
                            return data
                        } else if (input.value === ''){
                           
                            return data;
                        }
                        
                        
                        
                    })
                    cards.innerHTML = '';

                    searchElements.forEach(element => {
                        mostrarContenido(element);
                    })

                });
            }
                
            
            
            element.forEach((data)=> {
                mostrarContenido(data);
            })

            searchPlace();
            
            

        })
        .catch()




    function mostrarContenido(data) {
        cards.innerHTML += ` 
                   
                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <img class="w-full h-48 object-cover" src="${data.images}" >
                        <div class="p-5 flex-grow flex flex-col">
                            <h3 class="text-xl font-bold text-gray-900 mb-1">${data.name}</h3>
                            <div class="flex items-center text-sm text-indigo-600 mb-3 font-medium">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                ${data.city.name}
                            </div>

                            <p class="text-gray-600 text-sm leading-relaxed mb-6">
                                ${data.description}
                            </p>

                            <!-- Botón alineado siempre al fondo gracias a mt-auto -->
                            <button class="mt-auto w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Ver Detalle
                            </button>
                        </div>
                    </div>
          
            `
    }










    menuResponsive();

    function menuResponsive(){
        const asideMenu = document.querySelector('#collapseMenu');
        const toggleOpen = document.querySelector('#toggleOpen');
        const toggleClose = document.querySelector('#toggleClose');


        toggleOpen.addEventListener('click', () => {
            asideMenu.classList.remove('hidden');
            toggleOpen.setAttribute('aria-expanded', 'true');

            asideMenu.focus();
        });

        toggleClose.addEventListener('click', () => {
            asideMenu.classList.add('hidden');
            toggleOpen.setAttribute('aria-expanded', 'false');
        });
    }



    
    





})
