
// Bob is a lackadaisical teenager. In conversation, his responses are very limited.

// Bob answers 'Sure.' if you ask him a question(Ending with question mark).

// He answers 'Whoa, chill out!' if you yell at him(Using upper-case).

// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.(upper-case + question mark)

// He says 'Fine. Be that way!' if you address him without actually saying
// anything. ("")

// He answers 'Whatever.' to anything else.
// var Bob = function() {};

class Bob {
    constructor(){
    };
    hey(message){
        if(isSilence(message)){return "Fine. Be that way!"};
        if(isYelling(message) && isQuestion(message)){
            return "Calm down, I know what I'm doing!"};
        if(isYelling(message)){return "Whoa, chill out!"};
        if(isQuestion(message)){return "Sure."};
        return ("Whatever.");
    }
}

function isSilence(message){
    return /^\s*$/.test(message);
};
function isYelling(message){
    return (message.toUpperCase() === message && /[A-Z]/.test(message))
};
function isQuestion(message){  
    return /\?\s*$/.test(message);
};


// function isSilence(message){
//     return !message.match(/\S/);
// };
// function isYelling(message){
//     return !message.match(/[a-z]/);
// };
// function isQuestion(message){  
     
//     return !message.match(/[^(?(\s)*)]$/);
// };


// Bob.prototype.hey = function(input) {
// 	/* A teenager */
// 	// Shouting (all upper case)
// 	if ( input.toUpperCase() === input && /[A-Z]/.test(input))
// 		return "Whoa, chill out!";
// 	// Question (ends with a question mark)
// 	if ( /\?\s*$/.test(input) )
// 		return "Sure.";
// 	// Nothing (al white space)
// 	if ( /^\s*$/.test(input))
// 		return "Fine. Be that way!";
// 	// Default
// 	return "Whatever.";
// };


module.exports = Bob;