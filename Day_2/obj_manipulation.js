//object manipulation in javascript

let information = {
    firstName: 'Shriya',
    lastName: 'Trada',
    age: 21,
    email: 'shriya.trada@example.com',
    isDeveloper: true
}

for(let i = 0 ; i < Object.keys(information).length ; i++)
{
    console.log(Object.keys(information)[i] + " : " + information[Object.keys(information)[i]])
}