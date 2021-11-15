import roundRobin from "../helpers/round-robin";

export const sortFixtures = (participants) => {
  if(participants.length < 2) return;
  
  const championship = roundRobin(participants);
  return championship;
}