// Romanian pension calculation formulas based on Law 360/2023 & Law 141/2025 (2026 parameters)

export interface StandardPensionInput {
  currentAge: number;
  monthlyIncome: number;
  incomeType?: "net" | "gross";
  contributionYears: number;
  retirementAge: number;
  assimilatedYears?: number;
}

export interface EarlyRetirementInput {
  currentAge: number;
  gender: "male" | "female";
  monthlyIncome: number;
  incomeType?: "net" | "gross";
  contributionYears: number;
  earlyRetirementAge: number;
}

export interface Pillar3Input {
  monthlyIncome: number;
  currentAge: number;
  retirementAge: number;
  monthlyContribution: number;
  expectedReturn: number;
}

export interface PensionResult {
  monthlyPension: number;
  netMonthlyPension: number;
  totalPoints: number;
  contributoryPoints: number;
  stabilityPoints: number;
  assimilatedPoints: number;
}

// Official 2026 Romanian pension constants (Law 360/2023, Law 141/2025, Law 44/2026)
export const OFFICIAL_VPR_2026 = 81; // RON (frozen at 81 Lei in 2025-2026)
export const AVERAGE_GROSS_SALARY_2026 = 9192; // RON (Câștig salarial mediu brut pe economie 2026)
export const MINIMUM_PENSION_2026 = 1281; // RON (Indemnizație socială pentru pensionari)
export const MINIMUM_WAGE_2026 = 4050; // RON (Salariu de bază minim brut pe țară)
export const MINIMUM_CONTRIBUTION_YEARS = 15;
export const STANDARD_RETIREMENT_AGE_MALE = 65;
export const STANDARD_RETIREMENT_AGE_FEMALE = 63; // gradual equalization towards 65 by 2035 (Anexa 5)

/** Calculate estimated net pension after 2026 CASS (10% above 3,000 Lei) and income tax (10% above 3,000 Lei). */
export function estimateNetPension2026(grossPension: number): number {
  const roundedGross = Math.round(grossPension);
  if (roundedGross <= 3000) return roundedGross;
  const cass = (roundedGross - 3000) * 0.10;
  const taxableAfterCass = roundedGross - cass;
  const incomeTax = taxableAfterCass > 3000 ? (taxableAfterCass - 3000) * 0.10 : 0;
  return Math.round(roundedGross - cass - incomeTax);
}

export function calculateStabilityPoints(totalContributionYears: number): number {
  if (totalContributionYears <= 25) return 0;
  const extraYears = totalContributionYears - 25;
  if (extraYears <= 5) {
    return extraYears * 0.5;
  }
  if (extraYears <= 10) {
    return 5 * 0.5 + (extraYears - 5) * 0.75;
  }
  return 5 * 0.5 + 5 * 0.75 + (extraYears - 10) * 1.0;
}

export function calculateStandardPension(input: StandardPensionInput): PensionResult {
  const {
    currentAge,
    monthlyIncome,
    incomeType = "net",
    contributionYears,
    retirementAge,
    assimilatedYears = 0,
  } = input;

  const futureYears = Math.max(0, retirementAge - currentAge);
  const totalContributionYears = contributionYears + futureYears;

  if (totalContributionYears < MINIMUM_CONTRIBUTION_YEARS) {
    throw new Error(`Stagiul minim de cotizare contributiv este ${MINIMUM_CONTRIBUTION_YEARS} ani`);
  }

  // Approx net -> gross conversion in Romania (~58.5% net after 25% CAS, 10% CASS, 10% IV)
  const grossMonthlySalary =
    incomeType === "gross" ? monthlyIncome : monthlyIncome / 0.585;

  const pointsPerYear = grossMonthlySalary / AVERAGE_GROSS_SALARY_2026;
  const contributoryPoints = pointsPerYear * totalContributionYears;
  const stabilityPoints = calculateStabilityPoints(totalContributionYears);
  const assimilatedPoints = assimilatedYears * 0.25;
  const totalPoints = contributoryPoints + stabilityPoints + assimilatedPoints;

  const monthlyPension = Math.round(Math.max(totalPoints * OFFICIAL_VPR_2026, MINIMUM_PENSION_2026));
  const netMonthlyPension = estimateNetPension2026(monthlyPension);

  return {
    monthlyPension,
    netMonthlyPension,
    totalPoints: parseFloat(totalPoints.toFixed(4)),
    contributoryPoints: parseFloat(contributoryPoints.toFixed(4)),
    stabilityPoints: parseFloat(stabilityPoints.toFixed(4)),
    assimilatedPoints: parseFloat(assimilatedPoints.toFixed(4)),
  };
}

export function calculateEarlyRetirement(input: EarlyRetirementInput) {
  const {
    currentAge,
    gender,
    monthlyIncome,
    incomeType = "net",
    contributionYears,
    earlyRetirementAge,
  } = input;

  const standardAge = gender === "male" ? STANDARD_RETIREMENT_AGE_MALE : STANDARD_RETIREMENT_AGE_FEMALE;
  const monthsEarly = (standardAge - earlyRetirementAge) * 12;

  const requiredYears = gender === "male" ? 35 : 33;
  const futureYears = Math.max(0, earlyRetirementAge - currentAge);
  const totalYears = contributionYears + futureYears;

  if (totalYears < requiredYears) {
    throw new Error(`Pentru pensie anticipată este necesar stagiul complet de ${requiredYears} ani`);
  }

  if (monthsEarly <= 0) {
    throw new Error("Vârsta selectată depășește sau egalează vârsta standard de pensionare");
  }

  const standardResult = calculateStandardPension({
    currentAge,
    monthlyIncome,
    incomeType,
    contributionYears,
    retirementAge: earlyRetirementAge,
  });

  const exceedYears = totalYears - requiredYears;

  let penaltyRate = 0.40;
  if (exceedYears >= 5) {
    // Under Law 360/2023 >= 5 excess years receives lowest tier (0.15% up to >5/8y exemption rules)
    penaltyRate = exceedYears >= 8 ? 0.0 : 0.15;
  } else if (exceedYears >= 4) {
    penaltyRate = 0.20;
  } else if (exceedYears >= 3) {
    penaltyRate = 0.25;
  } else if (exceedYears >= 2) {
    penaltyRate = 0.30;
  } else if (exceedYears >= 1) {
    penaltyRate = 0.35;
  }

  const penaltyPercentage = monthsEarly * penaltyRate;
  const earlyPensionGross = standardResult.monthlyPension * (1 - penaltyPercentage / 100);
  const earlyPension = Math.round(Math.max(earlyPensionGross, MINIMUM_PENSION_2026));

  let recommendedStage = "";
  if (penaltyPercentage > 20) {
    recommendedStage = "Penalizarea este ridicată. Evaluează amânarea retragerii cu 1-2 ani sau completarea prin Pilonul III.";
  } else if (penaltyPercentage > 10) {
    recommendedStage = "Penalizarea este moderată. Reține că la împlinirea vârstei standard penalizarea se elimină din oficiu.";
  } else {
    recommendedStage = "Penalizarea este redusă datorită depășirii stagiului complet de cotizare.";
  }

  return {
    earlyPension,
    standardPension: standardResult.monthlyPension,
    penaltyPercentage,
    monthsEarly,
    recommendedStage,
  };
}

export function calculatePillar3Contributions(input: Pillar3Input) {
  const { currentAge, retirementAge, monthlyContribution, expectedReturn } = input;

  const yearsToRetirement = retirementAge - currentAge;
  const annualContribution = monthlyContribution * 12;
  const monthlyReturn = expectedReturn / 100 / 12;
  const totalMonths = yearsToRetirement * 12;

  const maxDeductibleRON = 400 * 5;
  const deductibleAmount = Math.min(annualContribution, maxDeductibleRON);
  const taxRate = 0.10;
  const annualTaxSaving = deductibleAmount * taxRate;

  let totalAccumulated = 0;
  for (let month = 1; month <= totalMonths; month++) {
    const monthsRemaining = totalMonths - month + 1;
    totalAccumulated += monthlyContribution * Math.pow(1 + monthlyReturn, monthsRemaining);
  }

  const totalContributions = monthlyContribution * totalMonths;
  const withdrawalRate = 0.04;
  const monthlyPensionFromPillar3 = (totalAccumulated * withdrawalRate) / 12;
  const netMonthlyCost = monthlyContribution - annualTaxSaving / 12;
  const effectiveReturn = expectedReturn + (annualTaxSaving / annualContribution) * 100;
  const moneyMultiplier = totalAccumulated / totalContributions;

  let recommendation = "";
  if (effectiveReturn > 8) {
    recommendation = "Strategie eficientă! Randamentul efectiv beneficiază de economisirea fiscală anuală.";
  } else if (effectiveReturn > 6) {
    recommendation = "Strategie echilibrată pentru diversificarea surselor de venit la pensie.";
  } else {
    recommendation = "Randament conservator. Analizează comisioanele fondului și orizontul de investiție.";
  }

  if (annualContribution < maxDeductibleRON) {
    recommendation += " Poți crește contribuția până la echivalentul a 400 EUR/an pentru deducerea fiscală maximă.";
  }

  return {
    annualContribution,
    annualTaxSaving,
    totalAccumulated,
    totalContributions,
    monthlyPensionFromPillar3,
    yearsToRetirement,
    effectiveReturn,
    netMonthlyCost,
    moneyMultiplier,
    recommendation,
  };
}

export function validatePensionEligibility(
  age: number,
  contributionYears: number,
  gender: "male" | "female"
) {
  const standardAge = gender === "male" ? STANDARD_RETIREMENT_AGE_MALE : STANDARD_RETIREMENT_AGE_FEMALE;
  const requiredYearsForEarly = gender === "male" ? 35 : 33;

  const canRetire = age >= standardAge && contributionYears >= MINIMUM_CONTRIBUTION_YEARS;
  const canRetireEarly = contributionYears >= requiredYearsForEarly;
  const missingYears = Math.max(0, MINIMUM_CONTRIBUTION_YEARS - contributionYears);

  return {
    canRetire,
    canRetireEarly,
    missingYears,
    standardAge,
  };
}

export function calculatePurchasableYears(
  studyYears: number,
  militaryService: number,
  childCareLeave: number
) {
  const maxStudyYears = Math.min(studyYears, 9);
  const maxMilitaryYears = Math.min(militaryService, 2);
  const maxChildCareYears = Math.min(childCareLeave, 6);

  const totalPurchasable = maxStudyYears + maxMilitaryYears + maxChildCareYears;
  // Buying past periods costs 25% of the minimum gross wage (4,050 Lei -> 1,012.50 Lei/month)
  const yearlyLegalCost = MINIMUM_WAGE_2026 * 12 * 0.25;
  const estimatedCost = totalPurchasable * yearlyLegalCost;

  const description: string[] = [];
  if (maxStudyYears > 0) description.push(`${maxStudyYears} ani studii`);
  if (maxMilitaryYears > 0) description.push(`${maxMilitaryYears} ani serviciu militar`);
  if (maxChildCareYears > 0) description.push(`${maxChildCareYears} ani concediu creștere copil`);

  return {
    totalPurchasable,
    estimatedCost,
    description,
  };
}
