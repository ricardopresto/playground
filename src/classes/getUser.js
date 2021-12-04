export default async function getUser () {
 const res = await fetch('https://jsonplaceholder.typicode.com/users');
 const data = await res.json();
 const user = data[Math.floor(Math.random() * 10 )];

 console.log(user);
 return user;
}