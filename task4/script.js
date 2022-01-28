const editLink = document.querySelector('a');

editLink.addEventListener('click', (evt) =>{
    evt.preventDefault();
    editLink.textContent = prompt('Введите новый текст для ссылки');
})
