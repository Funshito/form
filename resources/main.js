body = document.querySelector('#body');
container = document.querySelector('.container');


body.style.backgroundColor = '#000';
container.style.height = '100vh'
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.color = '#fff'


contain = document.createElement('div')
contain.style.width = '500px'
contain.style.padding = '2rem'
container.appendChild(contain)

form = document.createElement('form')
form.id = 'reg-form'
contain.appendChild(form)

heading = document.createElement('h1')
heading.innerHTML = 'register here'
heading.className = 'text-uppercase'

message = document.createElement('div')
message.style.display = 'none'
message.className = 'text-danger alert-danger mb-3'
message.style.padding = '10px'
message.style.fontSize = '1.4rem'

fullName = document.createElement('input')
fullName.className = 'form-control mb-3'
fullName.placeholder = 'Full Name'

email = document.createElement('input')
email.className = 'form-control mb-3'
email.placeholder = 'doe@gmail.com'
email.type = 'email'

userName = document.createElement('input')
userName.className = 'form-control mb-3'
userName.placeholder = 'UserName eg(JohnDoe)'

password1 = document.createElement('input')
password1.className = 'form-control mb-3'
password1.placeholder = "Enter Password"
password1.type = 'password'

password2 = document.createElement('input')
password2.className = 'form-control mb-2'
password2.placeholder = 'Confirm Password'
password2.type = 'password'

divShow = document.createElement('div')
divShow.style.display = 'flex'
divShow.style.alignItems = 'center'

checkbox = document.createElement('input')
checkbox.type = 'checkbox'
checkbox.className = 'mb-3 mr-2'
checkbox.style.cursor = 'pointer'
checkbox.onclick = 'showPass()'

paragraph = document.createElement('p')
paragraph.innerHTML = 'Show Password'
divShow.append(checkbox, paragraph)

button = document.createElement('button')
button.innerHTML = 'Submit'
button.className = 'form-control mb-3 bg-info text-white'
button.style.cursor = 'pointer'

divAccount = document.createElement('div')
divAccount.style.display = 'flex'
divAccount.style.alignItems = 'center'

haveAccount = document.createElement('div')
haveAccount.innerHTML = 'Already have an account?'
haveAccount.className = 'mr-3'
linkTo = document.createElement('a')
linkTo.innerHTML = 'Login'
linkTo.href = './resources/login.html'
divAccount.append(haveAccount, linkTo)

// append all input elements to show on the page 
form.append(heading, message, fullName, email, userName, password1, password2, divShow, button, divAccount)

// function to be performed when the user clicks on submit 
document.getElementById("reg-form").addEventListener('submit', function (e) {
    e.preventDefault();
    if (fullName.value.length == 0){
        message.style.display = 'block'
        message.innerHTML = 'Please enter your full name'
        fullName.style.border = '1px solid red'
        email.style.border = 'none'
        userName.style.border = 'none'
        password1.style.border = 'none'
        password2.style.border = 'none'
    } else if (email.value.length == 0){
        message.style.display = 'block'
        message.innerHTML = 'Please enter a valid email address'
        email.style.border = '1px solid red'
        fullName.style.border = 'none'
        userName.style.border = 'none'
        password1.style.border = 'none'
        password2.style.border = 'none'

    } else if (userName.value.length == 0){
        message.style.display = 'block'
        message.innerHTML = 'Please enter a User Name'
        userName.style.border = '1px solid red'
        fullName.style.border = 'none'
        email.style.border = 'none'
        password1.style.border = 'none'
        password2.style.border = 'none'
    }
    // Create a condition to check if username or email already exists in database
    else if (password1.value.length < 8){
        message.style.display = 'block'
        message.innerHTML = 'Password must be at least 8 characters'
        password1.style.border = '1px solid red'
        fullName.style.border = 'none'
        email.style.border = 'none'
        userName.style.border = 'none'
        password2.style.border = 'none'
    } else if (password1.value !== password2.value){
        message.style.display = 'block'
        message.innerHTML = 'Password do not match'
        password1.style.border = '1px solid red'
        password2.style.border = '1px solid red'
        fullName.style.border = 'none'
        email.style.border = 'none'
        userName.style.border = 'none'
    } else {
        message.style.display = 'block'
        message.innerHTML = 'Registration Successful'
        message.className = 'text-success alert-success mb-3'
        User = {
            name: fullName.value, 
            email: email.value, 
            username: userName.value, 
            password: password1.value
        }
        localStorage.setItem('user', JSON.stringify(User))
        setTimeout(function () {
            message.style.display = 'block'
            message.innerHTML = 'Loading...'
            message.className = 'text-success alert-success mb-3'
            setTimeout(function () {
                location.href = 'resources/login.html'
            }, 2000)
        }, 2000)
    }

})


