const submitButton = document.getElementById('submit-button');
const inputField = document.getElementById('input-field');
// const middleSection = document.getElementById('middle-section');
// const pronounsButton = document.getElementById('pronouns-button');
const pronounsInput = document.getElementById('pronouns-input');
const colorField = document.getElementById('color-field');
const name = document.getElementById('name');
const pronouns = document.getElementById('pronouns');
const topSection = document.getElementById('top-section')



submitButton.addEventListener('click', ()=>{
    // console.log(inputField.value);
    // console.log(name.textContent);
    // console.log(colorField.value);
    // console.log(pronouns);
    name.textContent = inputField.value;
    pronouns.textContent = pronounsInput.value;
    topSection.style.backgroundColor = colorField.value;
})

// pronounsButton.addEventListener('click', ()=>{
//     console.log(pronounsField.value);
//     console.log(pronouns.textContent);
//     pronouns.textContent = pronounsField.value;
// })