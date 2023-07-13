// get residentes button
const residentesBtn = document.querySelector('#residentesBtn')

function getResidentes() {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan').then((res) => {
        const residents = res.data.results[0].residents
        console.log('I am the first line', residents)

        // Loop over the residents' URLs
        residents.forEach((residentUrl) => {
            axios
                .get(residentUrl)
                .then((residentResponse) => {
                    const resident = residentResponse.data
                    const residentName = resident.name

                    // Create an h2 element with resident name
                    const h2 = document.createElement('h2')
                    h2.textContent = residentName;
                    h2.classList.add('text-center', 'text-warning', 'fs-2', 'mt-4')

                    // Append the h2 element to the div container
                    const divContainer = document.getElementById("containerDiv")
                    divContainer.appendChild(h2)
                })
                .catch((err) => {
                    console.error(err)
                });
        });
    }).catch(err => {
        console.log(err)
    })

}



residentesBtn.addEventListener('click', getResidentes)


