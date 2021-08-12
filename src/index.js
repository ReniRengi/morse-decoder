const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = "";
    let morse = "";
    let myStr = "";
    let i = 0;
    while (true) {
        myStr = expr.substring(i, i + 10);
        i += 10;
        if (myStr === "**********") {
            result += " ";
        }
        else {
            for (let k = 0; k < myStr.length; k = k + 2) {
                if ((myStr[k] === "1") && (myStr[k + 1] === "1")) {
                    morse += "-";
                }
                else if ((myStr[k] === "1") && (myStr[k + 1] === "0")) {
                    morse += ".";
                }
            }
            result += MORSE_TABLE[morse];
            morse="";
        }
        if (i > expr.length - 1) {
            break;
        }
    }
    return result;
}





module.exports = {
    decode
}