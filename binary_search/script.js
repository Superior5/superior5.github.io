let inp_1 = document.querySelector('.inp_1'),
    inp_2 = document.querySelector('.inp_2'), out = document.querySelector('.out'), arr = [];


const binarySearch = (list, item) => {

    for( let i = 1; i <= +inp_2.value; i++){
        arr.push(i);
    }

    list = arr;
    item = +inp_1.value;

    let low = 0;
    let high = list.length - 1;
    let step = 0;
    console.log(arr)
    while (low <= high) {
        step++;
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        if (guess === item) {
            out.innerHTML = 'Число с иднексом: ' + mid + ', за ' + step + ' шагов.';
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    out.innerHTML = 'Ничего не найдено. Возможно вы ввели отрицательное число.';
    return null;
};

document.querySelector('.btn').onclick = binarySearch;