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

const capitalizeFirstLetter = (word) => {
  removeSpecialChar(word);
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const titleCaseOneSentence = sentence => {
  return sentenceToWords(sentence).map(word => {
    return capitalizeFirstLetter(word);
  }).join(' ')
}

const titleCased = () => {
  return tutorials.map(titleCaseOneSentence);
}
