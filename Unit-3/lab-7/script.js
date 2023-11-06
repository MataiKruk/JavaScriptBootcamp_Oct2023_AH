const submissions = [
  {
    name: "Jane",
    score: 95,
    passed: true,
  },

  {
    name: "Joe",
    score: 77,
    passed: true,
  },

  {
    name: "Jack",
    score: 59,
    passed: false,
  },

  {
    name: "Jill",
    score: 88,
    passed: true,
  },
];

const addSubmission = (array, newName, newScore) => {
  let passFail = true;

  if (newScore >= 60) {
    passFail = true;
  } else {
    passFail = false;
  }

  array.push({name: newName, score: newScore, passed: passFail});
};

const deleteSubmissionByIndex = (array,index) => {
  array.splice(index,1);
}

const deleteSubmissionByName = (array,name) => {
  array.splice(array.findIndex(obj => obj.name === name),1);
}

const editSubmission = (array,index,score) => {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
}

const findSubmissionByName = (array,name) => {
  return array.find(obj => obj.name === name);
}

const findLowestScore = (array) => {
  let lowestScore = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i].score < lowestScore.score) {
      lowestScore = array[i];
    }
  }

  return lowestScore;
}

const findAverageScore = (array) => {
  let totalScore = 0;
  for (let i = 0; i < array.length; i++) {
    totalScore += array[i].score;
  }

  return totalScore/(array.length);
}

const filterPassing = (array) => {
  let passing = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].passed === true) {
      passing.push({name: array[i].name, score: array[i].score, passed: array[i].passed});
    }
  }
  return passing;
}

const filter90AndAbove = (array) => {
  let passing = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].score >= 90) {
      passing.push({name: array[i].name, score: array[i].score, passed: array[i].passed});
    }
  }
  return passing;
}