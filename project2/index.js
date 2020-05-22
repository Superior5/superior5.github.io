let btn1 = document.querySelector('.one');
let btn2 = document.querySelector('.two');
let inp = document.querySelector('.inp');

btn1.onclick = () => {
    let res = inp.value * 4500;
    document.querySelector('.result').innerHTML = res + '₽';
}

btn2.onclick = () => {
    let res2 = inp.value * 2500;
    document.querySelector('.result').innerHTML = res2 + '₽';
}