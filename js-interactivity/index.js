
const message = document.querySelector('#message')

// add functionality
const addMovie = (evt) => {
    evt.preventDefault()
    let inputField = document.querySelector('input')
    // console.log(inputField)
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value

    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
    // delete btn
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)


}

const form = document.querySelector('form')

form.addEventListener('submit', addMovie)

// delete button 
const deleteMovie = (evt) => {
    const movieTitle = evt.target.parentNode.querySelector('span').textContent;
    evt.target.parentNode.remove();
    message.textContent = `Movie '${movieTitle}' deleted!`;


    revealMessage()
}


// cross function

const crossOffMovie = (evt) => {
    evt.target.classList.toggle('checked');
    const message = document.getElementById('message');

    if (evt.target.classList.contains('checked')) {
        const movieTitle = evt.target.textContent;
        message.textContent = `${movieTitle} watched!`;
    } else {
        const movieTitle = evt.target.textContent;
        message.textContent = `${movieTitle} added back!`;
    }


    revealMessage()
}

// reveal message 
const revealMessage = () => {
    setTimeout(() => {
        message.classList.remove('hide');
    }, 1000);
}