body = document.querySelector('#body');
container = document.querySelector('.container');


body.style.backgroundColor = '#000';
container.style.height = '100vh'
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.color = '#fff'

document.body.appendChild(container)

contain = document.createElement('div')
contain.style.width = '500px'
contain.style.padding = '2rem'
container.appendChild(contain)

form = document.createElement('form')
form.id = 'login-form'
contain.appendChild(form)

heading = document.createElement('h1')
heading.innerHTML = 'Login here'
heading.className = 'text-uppercase'

message = document.createElement('div')
message.style.display = 'none'
message.className = 'text-danger alert-danger mb-3'
message.style.padding = '10px'
message.style.fontSize = '1.4rem'

userNameAndEmail = document.createElement('input')
userNameAndEmail.className = 'form-control mb-3'
userNameAndEmail.placeholder = 'email or username'

password1 = document.createElement('input')
password1.className = 'form-control mb-3'
password1.placeholder = "Enter Password"
password1.type = 'password'

divShow = document.createElement('div')
divShow.style.display = 'flex'
divShow.style.alignItems = 'center'

checkbox = document.createElement('input')
checkbox.type = 'checkbox'
checkbox.className = 'mb-3 mr-2'
checkbox.style.cursor = 'pointer'

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
haveAccount.innerHTML = "Don't have an account?"
haveAccount.className = 'mr-3'
linkTo = document.createElement('a')
linkTo.innerHTML = 'Register'
linkTo.href = '.././index.html'
divAccount.append(haveAccount, linkTo)


form.append(heading, message, userNameAndEmail, password1, divShow, button, divAccount)
document.getElementById("login-form").addEventListener('submit', function (e) {
    e.preventDefault()
    user = JSON.parse(window.localStorage.getItem('user'));
    if (userNameAndEmail.value == 0){
        message.style.display = 'block'
        message.innerHTML = 'Field can not be empty'
        userNameAndEmail.style.border = '1px solid red'
        password1.style.border = 'none'
    } else if (password1.value < 8){
        message.style.display = 'block'
        message.innerHTML = 'Invalid password'
        password1.style.border = '1px solid red'
        userNameAndEmail.style.border = 'none'
    } else if ((userNameAndEmail.value !== user.username || userNameAndEmail.value !== user.email) && password1.value !== user.password){
        message.style.display = 'block'
        message.innerHTML = 'Invalid login details'
    }
    else{
        message.style.display = 'block'
        message.className = 'text-success alert-success mb-3'
        message.innerHTML = 'Login successful'
        setTimeout(function () {
            message.style.display = 'block'
            message.innerHTML = 'Loading...'
            message.className = 'text-success alert-success mb-3'
            setTimeout(function () {
                location.href = 'home.html'
            }, 2000)
        }, 2000)
    }
})