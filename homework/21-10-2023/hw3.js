//Szyfrowanie przy użyciu szyfru Cezara

function caesarCipherEncrypt(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let shifted = code + shift;
            if (char.toLowerCase() === char) {
                shifted = shifted > 'z'.charCodeAt(0) ? shifted - 26 : shifted;
                shifted = shifted < 'a'.charCodeAt(0) ? shifted + 26 : shifted;
            } else {
                shifted = shifted > 'Z'.charCodeAt(0) ? shifted - 26 : shifted;
                shifted = shifted < 'A'.charCodeAt(0) ? shifted + 26 : shifted;
            }
            return String.fromCharCode(shifted);
        }
        return char;
    }).join('');
}

//Deszyfrowanie szyfru Cezara

function caesarCipherDecrypt(str, shift) {
    return caesarCipherEncrypt(str, -shift);
}

let encrypted = caesarCipherEncrypt("Hello World", 3);
console.log(encrypted);  // Wyświetli zaszyfrowany tekst

let decrypted = caesarCipherDecrypt(encrypted, 3);
console.log(decrypted);  // Wyświetli odszyfrowany tekst ("Hello World")