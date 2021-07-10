// UI Vars
const container= document.querySelector('.container');
const getBtn = document.querySelector('input[type="button"]');

// Event listener
getBtn.addEventListener('click', getJokes);

// Get jokes
function getJokes(e) {

    const num = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`);

    xhr.onload = function() {
        if (this.status === 200) {

            // console.log(this.responseText);
            const response = JSON.parse(this.responseText);

            console.log(response);

            let output = '';

            if (response.type == 'success') {
                response.value.forEach(function(joke) {
                    output += `<li>${joke.joke}</li>`;
                }) 
            } else {
                output += `Something went wrong`;
            }

            const ul = document.querySelector('ul');

            ul.innerHTML = output;

        }
    }

    xhr.send();

    e.preventDefault();
}