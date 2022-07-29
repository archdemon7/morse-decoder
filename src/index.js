const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
for (let i = 0; i < expr.length; i += 10){
    if (expr.slice(i, i+10) == '**********'){
        result.push([' ']);
    } else {
    let subResult = [];
    for (let k = 0; k < expr.slice(i, i+10).length; k += 2){
        if (expr.slice(i, i+10).slice(k, k+2) == '10'){
            subResult.push('.');
        } else if (expr.slice(i, i+10).slice(k, k+2) == '11') {
            subResult.push('-');
        };
    };
    result.push(subResult);
};
};
let result2 = []
result.forEach((el) => result2.push(el.join('')));
let result3 = ''
result2.forEach((el) => {
    if (el == ' '){
        result3 += ' ';
    } else {
        result3 += MORSE_TABLE[el];
    }
});
return result3
}

module.exports = {
    decode
}