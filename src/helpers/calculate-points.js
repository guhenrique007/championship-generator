export const calculatePoints = (sequence) => {
  let points = 0;
  console.log('chamou',sequence)
  if(Array.isArray(sequence)) {
    sequence.forEach((result) => {
      if(result === 'W') points+=3;
      else if(result === 'D') points++;
    })
  }
  return points;
}