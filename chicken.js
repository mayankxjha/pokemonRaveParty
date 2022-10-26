// WRITE YOUR CODE IN HERE:
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

const cont = document.querySelector('#container');
for (let i = 1; i <= 905; i++) {
    const sprite = document.createElement('img');
    const division = document.createElement('div');
    sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    sprite.width = '175';
    sprite.height = '175';
    sprite.alt = `${i}`;
    division.id = `poke${i}`;
    division.style.float = 'left';
    division.style.border = '1px solid blue';
    division.append(sprite);
    sprite.onclick = () => alert(`This pokemon's id is: ${sprite.alt}`);
    cont.append(division);
}

const rand255 = () =>{
    return Math.floor(Math.random() * 255);
}

const dividen = document.querySelectorAll('div');
document.querySelector('button').addEventListener('click', () =>{
    const headerStrg = `rgb(${rand255()}, ${rand255()}, ${rand255()})`;
    document.querySelector('body').style.backgroundColor = headerStrg;
    document.querySelector('h2').innerText = headerStrg;
    for(let i = 1; i < dividen.length; i++){
        dividen[i].style.backgroundColor = `rgb(${rand255()}, ${rand255()}, ${rand255()})`;
    }
})
