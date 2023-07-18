function encodePlainText(string) {
    const substitutionMap = {
        'a': 'd',
        'b': 'e',
        'c': 'f',
        'd': 'a',
        'e': 'b',
        'f': 'c',
        'g': 'j',
        'h': 'k',
        'i': 'l',
        'j': 'g',
        'k': 'h',
        'l': 'i',
        'm': 'p',
        'n': 'q',
        'o': 'r',
        'p': 'm',
        'q': 'n',
        'r': 'o',
        's': 'v',
        't': 'w',
        'u': 'x',
        'v': 's',
        'w': 't',
        'x': 'u',
        'y': 'z',
        'z': 'y'
    };

    const encodedText = string.toLowerCase().split('').map(char => substitutionMap[char] || char).join('');

    return encodedText.toUpperCase();
}

console.log(encodePlainText('I LOVE CRYPTOGRAPHY!'));