{/*
// Nullish Coalescing Operator => ??

const idade = null;

document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não Informado') + ' anos';

*/}

{/*
// Objetos

const user = {
  name: 'André',
  age: 20,
  address: {
    street: 'Rua Palmerindo',
    number: 6,
  },
};

document.body.innerText = JSON.stringify(Object.entries(user))

*/}

{/*
// Desestruturação

const user = {
  name: 'André',
  age: 20,
  address: {
    street: 'Rua Palmerindo',
    number: 6,
  },
  nickname: 'Dedeco'
};

function showAge(user){
  return user.age
}

document.body.innerText = showAge(user)

*/}

//Rest Operator

const user = {
  name: 'André',
  age: 20,
  address: {
    street: 'Rua Palmerindo',
    number: 6,
    zip: {
      code: '29112580',
      city:'Vila Velha'
    },
    showFullAddress(){
      return 'ok';
    }
  },
  nickname: 'Dedeco'
};



{/*
//const { name, ...rest } = user
const arrays = [1,2,3,3,5,6,7,8,9,10]

const [first, ...rest] = arrays

document.body.innerText = JSON.stringify(rest)

document.body.innerText = JSON.stringify(first)
*/}

{/*
// Short Syntax
const name = 'André';
const age = 27;

const youser = {
  name,
  age,
}

document.body.innerText = JSON.stringify(youser);

*/}

{/*
//Optional Chaining

const key = 'street';

document.body.innerText = user.address?.zip?.code ?? 'Não informado';

document.body.innerText = user.address.showFullAddress();

document.body.innerText = user.address[key]
*/}

// Array Methods - map()

const array = [1,2,3,4,5, 6,7,8,9,10, "klo"]

//option1 - using 'for'
{/*
for ( const i of array){
  document.body.innerText += i
}
*/}

//option2 - using 'forEach'
{/*
array.forEach(item => {
  document.body.innerText += item
})
*/}

//option3 - using map()
{/*}
const novoArray = array.map(item => {
  if (item % 2 == 0){
    return item * 10;
  } else {
    return item;
  }
})
document.body.innerText = JSON.stringify(novoArray)
*/}

// Array Methods - filter()
{/*}
const novoArray = array
.filter(item => item % 2 !== 0)
.map(item => item * 10)

document.body.innerText = JSON.stringify(novoArray)
*/}

//every
{/*
const todosItensSaoNumeros = array.every(item => typeof item == 'number')

document.body.innerText = JSON.stringify(todosItensSaoNumeros)
*/}

//some
{/*
const peloMenosUmItemNaoENumero = array.some( item => typeof item != 'number')

document.body.innerText = JSON.stringify(peloMenosUmItemNaoENumero)

*/}

//find and findIndex
{/*
const par = array.find (item => item % 2 == 0);
document.body.innerText = JSON.stringify(par)
*/};

{/*
const parIndex = array.findIndex (item => item % 2 == 0);
document.body.innerText = JSON.stringify(parIndex)
*/};

{/*
const soma = array.reduce((acc, item) => {
  //document.body.innerText += acc +  ", " + item + "---"
  return acc + item;
}, 0);

document.body.innerText = JSON.stringify(soma)
*/};

{/*
const mapFilter = array.map(item => {
  if(item % 2 == 0){
    return item * item;
  }
}).filter(item => item % 2 == 0);

document.body.innerText = JSON.stringify(mapFilter)
*/}

// Template literals
{/*
let name = 'André';
const message = `Bem Vindo, ${name ? name: 'visitante' }`;

document.body.innerText = message;
*/}

// Promises

// .then/ .catch

{/*
const soma2 = (a, b) => { 
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(a + b);
  }, 2000);
});
}

soma2(1, 3)
.then(soma => {
  document.body.innerText = soma
})
.catch(err => {
  console.log(err)
})
*/}

// fetch

{/*
fetch('https://api.github.com/users/Andreprado20')
.then(response => {
  response.json().then(body => {
    console.log(body);
  })
})
.catch(err => {
  console.log(err)
})

*/}

//rewritting:

{/*
fetch('https://api.github.com/users/Andreprado20')
.then(response => {
  return response.json();
})
.then(body => {
  console.log(body);
})
.catch(err => {
  console.log(err)
})
.finally(() => {
  console.log('foi')
})
*/}

//async and await

{/*
async function buscaDados(){
  try{
    const response = await fetch('https://api.github.com/users/Andreprado20');

    const body = await response.json();
    console.log(body);
    return body.name;
  } catch (err) {
    console.log(err);
  } finally {
    console.log('foi');
  }
}

//buscaDados();

buscaDados().then( name => {
  console.log(name)
});
*/}
