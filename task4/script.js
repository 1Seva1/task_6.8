const editLink = document.querySelector('a');

editLink.addEventListener('click', (event) =>{
    event.preventDefault();
    editLink.textContent = prompt('Введите новый текст для ссылки');
})
