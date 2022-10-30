console.log("ahoj");

const contact1 = document.createElement('div');
contact1.classList.add('contact');
contact1.innerHTML = 
`
<span class="name">Jaromír Bystřina</span>
<span class="phone">+420 777 666 323</span>
<span class="email">lesni.bystrina@gmail.com</span>
`
const appElm = document.querySelector('#app')
appElm.append(contact1);
