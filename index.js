const specialChars = [
  '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
  ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
];

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const sentenceToWords = (sentenceString) => {
  return sentenceString.split(' ');
};

const wordsToLetters = (wordString) => {
  return wordString.split('');
};

const removeSpecialChar = (word) => {
  const letters = wordsToLetters(word);
  const noChars = letters.filter(letter => {
    return !specialChars.includes(letter);
  }).join('');
  return noChars;
};

const checkForAllCapsOrCamelCase = (word) => {
  const allCaps = wordsToLetters(word.toUpperCase());
  const originalLetters = wordsToLetters(word);
  
  let index = 0; 
  for (const letter of originalLetters) {
    if (letter === allCaps[index] && index !== 0) { 
      return true;
    }
    index++;
  }
  return false; 
};

const titleCaseOneSentence = (sentence) => {
  return sentenceToWords(sentence).map(word => {
    if (checkForAllCapsOrCamelCase(removeSpecialChar(word)) === true) {
      return word;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1); 
    }
  }).join(' ');
};

const titleCased = () => {
  return tutorials.map(titleCaseOneSentence);
};

console.log(titleCased())
