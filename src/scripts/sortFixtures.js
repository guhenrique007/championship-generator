export const sortFixtures = (participants) => {
  if(participants.length < 2) return;
  
  const totalParticipants = participants.length;

  return participants.map((teamA) => {
    const randomParticipant = Math.floor(Math.random() * (totalParticipants - 1))
    const teamB = participants[randomParticipant];
    const match = [teamA, teamB];
    return match;
  });
}