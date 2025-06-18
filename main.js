// Addition of rotation effect of logo

const checkBoxList = document.querySelectorAll('.custom-index');
const allInputFields = document.querySelectorAll('.input-data');
const errorMessage = document.querySelector('.error-label');
const progressBarInput = document.querySelector('.progress-bar');
const progressList = document.querySelector(".progress-bar-fill")


checkBoxList.forEach(checkBox => {
        checkBox.addEventListener('click', () => {
                const allCheckedInputs = [...allInputFields].every((input) => {return input.value});

                if (allCheckedInputs) {
                        checkBox.parentElement.classList.toggle('completed');
                        progressList.style.width = "33.33%"
                }
                else {
                        progressBarInput.classList.add('show-error');
                }
        })

})

allInputFields.forEach(field => {
        field.addEventListener('focus', () => {
                progressBarInput.classList.remove('show-error');
        })
})
