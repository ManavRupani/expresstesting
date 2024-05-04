const fetchButton = document.querySelector('#rvl');
const exampleDiv = document.querySelector('#sample');

fetchButton.addEventListener('click', () => {
  fetch('assest.json')
    .then(response => response.json())
    .then(data =>{
        exampleDiv.innerHTML ='<h1>${data.name}</h1>'
    })
    .catch(error => console.error('Error fetching data:', error));
}); 