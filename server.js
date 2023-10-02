const userName = 'Harry';
let age = 21;
const isWizard = true;
let friends = ['Ron', 'Hermione', 'Hedvig'];

friends.push('Draco')
let nrFriends = friends.length;
console.log(`${userName} has got ${nrFriends} friends`)

for(let i = 0; i < friends.length; i++) {
    if(friends[i] === 'Draco'){
        weArenotFriends(friends[i]);
        continue
    }
    else{
    friends[i] = friends[i] + '*'
    greeting(friends[i]);
}
}

friends.forEach(friend => {
    
    console.log(friend);
})

function greeting(name) {
    console.log(`Hello ${name}!`)
}

function weArenotFriends(enemyName) {
    console.log(`Go away, ${enemyName}!`)
}
/*
if(userName === 'Harry' && age === 1 && isWizard) {
    console.log(`${userName}, here is your letter fro Hogwarts.`)
}
else {
    console.log(`You are not a wizard ${userName}`)
}

for(let i = 0; i < 5; i ++) {
    console.log(`${i + i} i am wizard!`)
}
*/
