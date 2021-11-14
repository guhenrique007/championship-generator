export const sortFixtures = (participants) => {
  if(participants.length < 2) return;
  
  const totalParticipants = participants.length;
  const totalRounds = totalParticipants - 1;
  const totalFixtures = [];

  for(let round = 0; round < totalRounds; round++) {
    const fixtures = participants.map((teamA) => {
      const randomParticipant = Math.floor(Math.random() * (totalParticipants - 1))
      const teamB = participants[randomParticipant];
      const match = [teamA, teamB];
      return match;
    });
    totalFixtures.push(fixtures)
  }
  return totalFixtures;
}