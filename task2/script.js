const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const alertUser = document.querySelector('#alert');
alertUser.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

const promtUser = document.querySelector('#prompt');
promtUser.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})