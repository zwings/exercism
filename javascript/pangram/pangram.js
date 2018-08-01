/*
# Pangram

Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma,
"every letter") is a sentence using every letter of the alphabet at least once.
The best known English pangram is:
> The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters `a` to `z`, inclusive, and is case
insensitive. Input will not contain non-ASCII symbols.
*/


class Pangram {
    constructor(sentence) {
        this.sentence = sentence;
    };
    isPangram(input) {
        var input = this.sentence;
        var marking = [];
        var index = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] >= "A" && input[i] <= "Z") {
                index = input[i].charCodeAt(0) - 65
            }
            else if (input[i] >= "a" && input[i] <= "z") {
                index = input[i].charCodeAt(0) - 97
            };
            marking[index] = true;
        }
        for (let i= 0; i<25; i++){
            if (marking[i] == true){
                continue}
            else return false;
        }
        return true;
        
    }
}

module.exports = Pangram; 