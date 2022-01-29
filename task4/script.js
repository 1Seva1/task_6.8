const editLink = document.querySelector('#editLink');

editLink.addEventListener('click', (event) =>{
    event.preventDefault();
    editLink.textContent = prompt('Введите новый текст для ссылки');
})
