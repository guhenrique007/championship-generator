export const calculatePoints = (sequence) => {
  let points = 0;
  if(Array.isArray(sequence)) {
    sequence.forEach((result) => {
      if(result === 'W') points+=3;
      else if(result === 'D') points++;
    })
  }
  return points;
}

export const counterResults = (array, word) => array.reduce((acc, el) => el === word ? acc+1 : acc, 0)

export const calculateGoals = (participant, type) => { 
  console.log(participant);
  if(!participant) return;
  const goals = participant.for ? participant[type].reduce((acc, el) => acc + Number(el), 0) : 0;
  return Number(goals);
}