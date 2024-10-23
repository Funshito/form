body = document.querySelector('#body');
container = document.querySelector('.container');


body.style.backgroundColor = '#000';
container.style.height = '90vh'
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.color = '#fff'

logout = document.createElement('div')
logout.innerHTML = 'Logout'
logout.id = 'logout'
logout.className = 'text-danger mr-3 mt-3'
logout.style.textAlign = 'right'
logout.style.cursor = 'pointer'
document.body.append(logout, container)

contain = document.createElement('div')
contain.style.mmaxWidth = '800px'
contain.style.padding = '2rem'
container.appendChild(contain)

user = JSON.parse(localStorage.getItem('user'))

span = document.createElement('span')
span.className = 'text-success text-uppercase'
span.innerHTML = `${user.username}`
welcome = document.createElement('h1')
welcome.innerHTML = `Welcome `

paragraph = document.createElement('h3')
paragraph.innerHTML = 'You have successfully logged into your account'

welcome.appendChild(span)
contain.append(welcome, paragraph)


document.getElementById('logout').addEventListener('click', function (e) {
    e.preventDefault()
    window.location.href = 'login.html'
})