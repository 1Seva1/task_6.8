const inputText = document.querySelector('input');
const button = document.querySelector('button');
const duplicate = document.querySelector('#duplicateField')

inputText.addEventListener('input', updateValue);

function updateValue(){
    duplicate.textContent = inputText.value;
}

button.addEventListener('click', (event) =>{
event.preventDefault();
console.log(inputText.value);
inputText.value = "";
duplicate.textContent = "";
})
