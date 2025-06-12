// Romanian pension calculation formulas based on Law 263/2010

export interface StandardPensionInput {
  currentAge: number;
  monthlyIncome: number;
  contributionYears: number;
  retirementAge: number;
}

export interface EarlyRetirementInput {
  currentAge: number;
  gender: 'male' | 'female';
  monthlyIncome: number;
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

// Constants for Romanian pension system (2024 values)
const PENSION_POINT_VALUE = 81.8; // RON (2024)
const AVERAGE_GROSS_SALARY_2024 = 7400; // RON approximate
const MINIMUM_CONTRIBUTION_YEARS = 15;
const STANDARD_RETIREMENT_AGE_MALE = 65;
const STANDARD_RETIREMENT_AGE_FEMALE = 63;
const EARLY_RETIREMENT_PENALTY_RATE = 0.75; // 0.75% per month
const MAX_POINTS_PER_YEAR = 5;

export function calculateStandardPension(input: StandardPensionInput): number {
  const { currentAge, monthlyIncome, contributionYears, retirementAge } = input;
  
  // Calculate future contribution years
  const futureYears = Math.max(0, retirementAge - currentAge);
  const totalContributionYears = contributionYears + futureYears;
  
  // Ensure minimum contribution years
  if (totalContributionYears < MINIMUM_CONTRIBUTION_YEARS) {
    throw new Error(`Stagiul minim de cotizare este ${MINIMUM_CONTRIBUTION_YEARS} ani`);
  }
  
  // Calculate annual gross salary from net monthly income (approximate)
  const grossMonthlySalary = monthlyIncome * 1.4; // Approximate conversion net to gross
  const grossAnnualSalary = grossMonthlySalary * 12;
  
  // Calculate average annual points
  // Points = (individual annual salary / average gross salary for that year)
  const averageAnnualPoints = Math.min(
    grossAnnualSalary / (AVERAGE_GROSS_SALARY_2024 * 12),
    MAX_POINTS_PER_YEAR
  );
  
  // Total pension points
  const totalPoints = averageAnnualPoints * totalContributionYears;
  
  // Calculate pension
  const monthlyPension = totalPoints * PENSION_POINT_VALUE;
  
  // Apply minimum pension guarantee (approximately 1000 RON in 2024)
  const minimumPension = 1000;
  
  return Math.max(monthlyPension, minimumPension);
}

export function calculateEarlyRetirement(input: EarlyRetirementInput) {
  const { currentAge, gender, monthlyIncome, contributionYears, earlyRetirementAge } = input;
  
  const standardAge = gender === 'male' ? STANDARD_RETIREMENT_AGE_MALE : STANDARD_RETIREMENT_AGE_FEMALE;
  const monthsEarly = (standardAge - earlyRetirementAge) * 12;
  
  // Validate early retirement conditions
  const requiredYears = gender === 'male' ? 35 : 30;
  const futureYears = Math.max(0, earlyRetirementAge - currentAge);
  const totalYears = contributionYears + futureYears;
  
  if (totalYears < requiredYears) {
    throw new Error(`Pentru pensie anticipată este necesar stagiu de ${requiredYears} ani`);
  }
  
  if (monthsEarly <= 0) {
    throw new Error('Vârsta selectată nu reprezintă pensie anticipată');
  }
  
  // Calculate standard pension first
  const standardPension = calculateStandardPension({
    currentAge,
    monthlyIncome,
    contributionYears,
    retirementAge: standardAge,
  });
  
  // Apply early retirement penalty
  const penaltyPercentage = monthsEarly * EARLY_RETIREMENT_PENALTY_RATE;
  const earlyPension = standardPension * (1 - penaltyPercentage / 100);
  
  // Recommendations based on penalty
  let recommendedStage = '';
  if (penaltyPercentage > 30) {
    recommendedStage = 'Penalizarea este foarte mare. Consideră amânarea pensionării sau pilonul III suplimentar.';
  } else if (penaltyPercentage > 15) {
    recommendedStage = 'Penalizarea este moderată. Evaluează cu atenție impactul pe termen lung.';
  } else {
    recommendedStage = 'Penalizarea este acceptabilă dacă ai alte surse de venit pentru pensie.';
  }
  
  return {
    earlyPension,
    standardPension,
    penaltyPercentage,
    monthsEarly,
    recommendedStage,
  };
}

export function calculatePillar3Contributions(input: Pillar3Input) {
  const { monthlyIncome, currentAge, retirementAge, monthlyContribution, expectedReturn } = input;
  
  const yearsToRetirement = retirementAge - currentAge;
  const annualContribution = monthlyContribution * 12;
  const monthlyReturn = expectedReturn / 100 / 12;
  const totalMonths = yearsToRetirement * 12;
  
  // Tax deduction calculation (up to 400 EUR annually)
  const maxDeductibleRON = 400 * 5; // Approximate EUR to RON
  const deductibleAmount = Math.min(annualContribution, maxDeductibleRON);
  const taxRate = 0.10; // 10% tax rate for deduction
  const annualTaxSaving = deductibleAmount * taxRate;
  
  // Calculate future value with compound interest
  let totalAccumulated = 0;
  for (let month = 1; month <= totalMonths; month++) {
    const monthsRemaining = totalMonths - month + 1;
    totalAccumulated += monthlyContribution * Math.pow(1 + monthlyReturn, monthsRemaining);
  }
  
  const totalContributions = monthlyContribution * totalMonths;
  
  // Calculate monthly pension from accumulated capital (assuming 4% withdrawal rate)
  const withdrawalRate = 0.04;
  const monthlyPensionFromPillar3 = (totalAccumulated * withdrawalRate) / 12;
  
  // Effective return including tax benefits
  const netMonthlyCost = monthlyContribution - (annualTaxSaving / 12);
  const effectiveReturn = expectedReturn + ((annualTaxSaving / annualContribution) * 100);
  const moneyMultiplier = totalAccumulated / totalContributions;
  
  // Generate recommendation
  let recommendation = '';
  if (effectiveReturn > 8) {
    recommendation = 'Strategie excelentă! Randamentul efectiv este foarte atractiv datorită economiei fiscale.';
  } else if (effectiveReturn > 6) {
    recommendation = 'Strategie bună pentru diversificarea surselor de pensie. Consideră creșterea contribuției dacă este posibil.';
  } else {
    recommendation = 'Randamentul este modest. Evaluează fonduri cu performanțe mai bune sau crește contribuția.';
  }
  
  if (annualContribution < maxDeductibleRON) {
    recommendation += ' Poți crește contribuția pentru a maximiza beneficiul fiscal.';
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

// Helper function to validate Romanian pension system rules
export function validatePensionEligibility(age: number, contributionYears: number, gender: 'male' | 'female'): {
  canRetire: boolean;
  canRetireEarly: boolean;
  missingYears: number;
  standardAge: number;
} {
  const standardAge = gender === 'male' ? STANDARD_RETIREMENT_AGE_MALE : STANDARD_RETIREMENT_AGE_FEMALE;
  const requiredYearsForEarly = gender === 'male' ? 35 : 30;
  
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

// Calculate contribution period that can be purchased
export function calculatePurchasableYears(studyYears: number, militaryService: number, childCareLeave: number): {
  totalPurchasable: number;
  estimatedCost: number;
  description: string[];
} {
  const maxStudyYears = Math.min(studyYears, 9); // Max 5 university + 4 high school
  const maxMilitaryYears = Math.min(militaryService, 2);
  const maxChildCareYears = Math.min(childCareLeave, 6); // 2 years per child, max 3 children
  
  const totalPurchasable = maxStudyYears + maxMilitaryYears + maxChildCareYears;
  
  // Cost calculation: 25% of average gross salary per year
  const yearlyLegalCost = AVERAGE_GROSS_SALARY_2024 * 12 * 0.25;
  const estimatedCost = totalPurchasable * yearlyLegalCost;
  
  const description = [];
  if (maxStudyYears > 0) description.push(`${maxStudyYears} ani studii`);
  if (maxMilitaryYears > 0) description.push(`${maxMilitaryYears} ani serviciu militar`);
  if (maxChildCareYears > 0) description.push(`${maxChildCareYears} ani concediu creștere copil`);
  
  return {
    totalPurchasable,
    estimatedCost,
    description,
  };
}
