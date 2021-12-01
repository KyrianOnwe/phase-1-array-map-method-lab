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

function runTutorial(string){
  const stepOne = string.split(' ');
  const stepTwo = stepOne.map(word => word.charAt(0).toUpperCase() +   word.slice(1));
  const stepThree = stepTwo.toString().replaceAll(',', ' ');
  return stepThree;
}

function titleCased(){
  return tutorials.map(tutorial => runTutorial(tutorial))
}
/*(function(string){
    arrayFinal = []
    const stepOne = string.split(' ');
    const stepTwo = stepOne.map(word => word.charAt(0).toUpperCase() +   word.slice(1));
    const stepThree = stepTwo.toString().replaceAll(',', ' ');
    return arrayFinal.push(stepThree);

  })
}*/
