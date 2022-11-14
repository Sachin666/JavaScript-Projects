const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


const showError = (input, message) => {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

const showSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}


const checkEmail = (input) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, 'Email is not valid')
    }
};


const checkRequired = (inputArr) => {
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} Is Required`)
        }else{
            showSuccess(input)
        }
    })
}

const checkLength = (input, min) => {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    } else {
        showSuccess(input)
    }
}

const checkPasswordMatch = (input1, input2) => {
    if(input1.value != input2.value){
        showError(input2, 'Password do not match')
    }
}

const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


const submitHandler = (e) => {
    e.preventDefault()

//METHOD ONE

    // if(username.value === ''){
    //     showError(username, 'Username required')
    // } else {
    //     showSuccess(username)
    // }

    // if(email.value === ''){
    //     showError(email, 'Email required')
    // } else if(!validateEmail(email.value)){
    //     showError(email, 'Email is not valid')
    // }else {
    //     showSuccess(email)
    // }

    // if(password.value === ''){
    //     showError(password, 'Password required')
    // } else {
    //     showSuccess(password)
    // }

    // if(password2.value === ''){
    //     showError(password2, 'Confirm Password')
    // } else {
    //     showSuccess(password2)
    // }

//METHOD TWO
    checkRequired([username, email, password, password2])
    checkLength(username, 3)
    checkLength(password, 6)
    checkEmail(email)
    checkPasswordMatch(password, password2)
}


form.addEventListener('submit', submitHandler)