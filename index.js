const container = document.querySelector('#main');
const Inputs = document.querySelectorAll('input');
const Form = document.querySelector('form');

Form.addEventListener('submit', function (e) {
    e.preventDefault();

    const Card = document.createElement('div')
    Card.classList.add('Card');

    const Profile = document.createElement('Profile');
    Profile.classList.add('Profile');

    const img = document.createElement('img');
    img.setAttribute('src', Inputs[3].value)

    const Name = document.createElement('h2');
    Name.textContent = Inputs[0].value;
    const Email = document.createElement('h6');
    Email.textContent = Inputs[2].value;
    const Age = document.createElement('p');
    Age.textContent = Inputs[1].value;

    Profile.appendChild(img);
    Card.appendChild(Profile);
    Card.appendChild(Name);
    Card.appendChild(Age);
    Card.appendChild(Email);

    container.appendChild(Card);

    Inputs.forEach(function (del){
        if(del.type !== 'submit'){
            del.value = '';
        }

    })
})