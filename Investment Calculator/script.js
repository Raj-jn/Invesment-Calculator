const initialInvestmentInput = document.getElementById("initial-investment");
const monthlyContributionInput = document.getElementById(
  "monthly-contribution"
);
const interestRateInput = document.getElementById("interest-rate");
const investmentTermSelect = document.getElementById("investment-term");
const calculateBtn = document.getElementById("calculate-btn");
const futureValueOutput = document.getElementById("future-value");
const totalContributionsOutput = document.getElementById("total-contributions");
const totalInterestOutput = document.getElementById("total-interest");
const resultsDiv = document.getElementById("results");

calculateBtn.addEventListener("click", function () {
  const initialInvestment = parseFloat(initialInvestmentInput.value);
  const monthlyContribution = parseFloat(monthlyContributionInput.value);
  const interestRate = parseFloat(interestRateInput.value) / 100;
  const investmentTerm = parseFloat(investmentTermSelect.value);
  const months = investmentTerm * 12;

  const futureValue = calculateFutureValue(
    initialInvestment,
    monthlyContribution,
    interestRate,
    months
  );
  const totalContributions = calculateTotalContributions(
    initialInvestment,
    monthlyContribution,
    months
  );
  const totalInterest = calculateTotalInterest(
    futureValue,
    initialInvestment,
    totalContributions
  );

  futureValueOutput.textContent = "$" + futureValue.toFixed(2);
  totalContributionsOutput.textContent = "$" + totalContributions.toFixed(2);
  totalInterestOutput.textContent = "$" + totalInterest.toFixed(2);

  resultsDiv.style.display = "block";
});

function calculateFutureValue(
  initialInvestment,
  monthlyContribution,
  interestRate,
  months
) {
  let futureValue = initialInvestment;
  for (let i = 1; i <= months; i++) {
    futureValue = futureValue * (1 + interestRate / 12) + monthlyContribution;
  }
  return futureValue;
}

function calculateTotalContributions(
  initialInvestment,
  monthlyContribution,
  months
) {
  return initialInvestment + monthlyContribution * months;
}

function calculateTotalInterest(
  futureValue,
  initialInvestment,
  totalContributions
) {
  return futureValue - initialInvestment - totalContributions;
}
