const checkBoxList = document.querySelectorAll('.custom-index');
const allInputFields = document.querySelectorAll('.input-data');
const errorMessage = document.querySelector('.error-label');
const progressBarInput = document.querySelector('.progress-bar');
const progressList = document.querySelector(".progress-bar-fill");
const label = document.querySelector(".progress-label")
const quotes = [
        'Raise the bar by completing the goal',
        'Woah,You are going well',
        'Almost Finished !',
        'Excellent,Done with All Tasks'

]


let allGoals = JSON.parse(localStorage.getItem('allGoals')) || {};
let completedGoalsCount = Object.values(allGoals).filter((goal)=>goal.condition).length
progressList.style.width = `${completedGoalsCount/3 *100}%`
progressList.innerHTML = `${completedGoalsCount}/3 Completed !`

if (Object.keys(allGoals).length === 0) {
    allInputFields.forEach(input => {
        allGoals[input.id] = {
            name: '',
            condition: false
        };
    });
}

checkBoxList.forEach((checkBox, index) => {
    checkBox.addEventListener('click', () => {
        const allCheckedInputs = [...allInputFields].every(input => { return input.value});

        if (allCheckedInputs) {
                const input = allInputFields[index]; 
                const inputID = input.id;

        

                allGoals[inputID].condition = !allGoals[inputID].condition;
                completedGoalsCount = Object.values(allGoals).filter((goal)=>goal.condition).length
                progressList.style.width = `${completedGoalsCount/3 *100}%`
                progressList.innerHTML = `${completedGoalsCount}/3 Completed !`

                label.innerHTML = quotes[completedGoalsCount]

                localStorage.setItem('allGoals', JSON.stringify(allGoals));
                checkBox.parentElement.classList.toggle('completed');
        }else {
            progressBarInput.classList.add('show-error');
        }
    });
});

allInputFields.forEach(input => {

//     if (!allGoals[input.id]) {
//         allGoals[input.id] = { name: '', condition: false };
//     }

    input.value = allGoals[input.id].name || '';

    if (allGoals[input.id].condition) {
        input.parentElement.classList.add('completed');
    }

    input.addEventListener('focus', () => {
        progressBarInput.classList.remove('show-error');
        
    });

    input.addEventListener('input', (e) => {

        if(allGoals[input.id].condition){
                input.value = allGoals[input.id].name
                return
        }

        allGoals[input.id] = {
            name: e.target.value,
        };
        localStorage.setItem('allGoals', JSON.stringify(allGoals));
    });
});