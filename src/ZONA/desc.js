// const person = {
//   name: 'Marcio',
//   age: 35,
//   location: {
//     city: 'São Bernardo do Campo',
//     temp: 13
//   }
// };

// const { name: nome = 'Anonimo', age } = person;
// const { city, temp } = person.location;

// console.log(`${nome} tem ${age} anos.`);
// console.log(`Em ${city} está ${temp} graus`);

// DOIS PONTOS: RENOMEIA A VARIAVEL
// SINAL IGUAL: VALOR DEFAULT

/*
const livro = {
  titulo: 'Um Estranho no Ninho',
  autor: 'Ken Kesey',
  editora: {
    // nome: 'Quadrante'
  }
};

const { titulo, autor } = livro;
const { nome: editoraNome = 'Independente' } = livro.editora;

console.log(editoraNome);
*/

// ARRAYS

const adress = [
  'Rua Tiradentes',
  '1790',
  'São Bernardo do Campo',
  'São Paulo',
  '09782030'
];
const [rua, numero, cidade, estado, cep] = adress;
console.log(rua, numero, cep);
