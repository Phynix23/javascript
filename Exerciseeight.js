// Exercise 8: Voting Eligibilty

function checkVotingEligibility(age, isRegistered) {
  if (age >= 18 && isRegistered) {
    console.log(`You may vote.`);
  } else if (age >= 18 && !isRegistered) {
    console.log(`You are old enough but not registered.`);
  } else {
    console.log(`You are not old enough to vote.`);
  }
}

checkVotingEligibility(20, true);
checkVotingEligibility(20, false);
checkVotingEligibility(16, true);
checkVotingEligibility(18, true);
checkVotingEligibility(18, false);