
export default function roundRobin(participants) {
  const tournament = [];

  const half = Math.ceil(participants.length / 2);
  const groupA = participants.slice(0, half);
  const groupB = participants.slice(half, participants.length);
  groupB.reverse();

  tournament.push(getRound(groupA, groupB));


  for(let i=1; i < participants.length - 1; i ++) {
    groupA.splice(1, 0, groupB.shift());
    groupB.push(groupA.pop())
    tournament.push(getRound(groupA, groupB));
  }

  return tournament;
}

const getRound = (groupA, groupB) => {
  const total = [];
  groupA.forEach((p, i) => {
    total.push([groupA[i], groupB[i]]);
  });
  return total;
}