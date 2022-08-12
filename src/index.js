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

    const binary_table = {
        '10': '.',
        '11': '-',
      };
    
    let result = '';
      
    for (let u = expr.length; u > 0; u = u - 10) {
      
        let letterBinary = expr.slice(u - 10, u);
        let letterMorse = '';
        
        if (letterBinary === '**********') {
          result = ' ' + result;
        }

        else {
          for (let i = 10; i > 0; i = i - 2) {
              let pair = letterBinary.slice(i - 2, i);
              (pair === '00') ? 0 : letterMorse = binary_table[pair] + letterMorse; 
            }
          result = MORSE_TABLE[letterMorse] + result;
        }
      }  
    return result;
}

module.exports = {
    decode
}