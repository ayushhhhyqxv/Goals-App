// Addition of rotation effect of logo

const checkBoxList = document.querySelectorAll('.custom-index');
const allInputFields = document.querySelectorAll('.input-data');
const errorMessage = document.querySelector('.error-label');
const progressBarInput = document.querySelector('.progress-bar');
const progressList = document.querySelector(".progress-bar-fill");
const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {};


checkBoxList.forEach(checkBox => {
        checkBox.addEventListener('click', () => {
                const allCheckedInputs = [...allInputFields].every((input) => {return input.value});

                if (allCheckedInputs) {
                        checkBox.parentElement.classList.toggle('completed');
                        progressList.style.width = "33.33%"
                        const inputID = checkBox.nextElementSibling.id
                        allGoals[inputID].condition = !allGoals[inputID].condition
                        localStorage.setItem('allGoals', JSON.stringify(allGoals)) 
                }
                else {
                        progressBarInput.classList.add('show-error');
                }
        })

})

allInputFields.forEach(input => {
        

       

        input.addEventListener('focus', () => {
                progressBarInput.classList.remove('show-error');
        })
        input.addEventListener('input',(e)=>{
                allGoals[input.id] = {
                        name : e.target.value,
                        condition : false
                }
                localStorage.setItem('allGoals',JSON.stringify(allGoals))
        })

        input.value = allGoals[input.id].name;

        if(allGoals[input.id].condition){
                input.parentElement.classList.add('completed')
        }
})

