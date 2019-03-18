const check = (array) => {
    return array.map((index) => {
        if ( Number.isInteger(index / 3) && Number.isInteger(index / 5)) { 
            return '<li class="listStyle">Making Sense</li> <hr>' 
        } 
        else if ( Number.isInteger(index / 5)) { 
            return '<li class="listStyle">Sense</li> <hr>' 
        }
        else if( Number.isInteger(index / 3)) { 
            return '<li class="listStyle">Making</li> <hr>' 
        } else {
            return '<li class="listStyle">' + index + '</li> <hr>';
        }
    }) 
}

const createArray = () => {
    let array = []
    for (let i = 0; i < 100; i++) {
        array.push(i);
    }

    let newArray = check(array);
    return newArray.join("");
}

document.getElementById('ul').innerHTML = createArray();
