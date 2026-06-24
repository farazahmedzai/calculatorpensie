// Romanian pension calculation formulas based on Law 360/2023 (Active for 2025/2026)

export interface StandardPensionInput {
  currentAge: number;
  monthlyIncome: number;
  contributionYears: number;
  retirementAge: number;
  assimilatedYears?: number;
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

export interface PensionResult {
  monthlyPension: number;
  totalPoints: number;
  contributoryPoints: number;
  stabilityPoints: number;
  assimilatedPoints: number;
}

// Constants for Romanian pension system (2025/2026 values under Law 360/2023)
const VPR_2025 = 91; // RON (Valoarea Punctului de Referinta)
const AVERAGE_GROSS_SALARY_2025 = 8417; // RON
const MINIMUM_PENSION_2025 = 1281; // RON
const MINIMUM_CONTRIBUTION_YEARS = 15;
const STANDARD_RETIREMENT_AGE_MALE = 65;
const STANDARD_RETIREMENT_AGE_FEMALE = 63; // gradually equalizing to 65 by 2035

export function calculateStandardPension(input: StandardPensionInput): PensionResult {
  const { currentAge, monthlyIncome, contributionYears, retirementAge, assimilatedYears = 0 } = input;
  
  // Calculate future contribution years
  const futureYears = Math.max(0, retirementAge - currentAge);
  const totalContributionYears = contributionYears + futureYears;
  
  // Ensure minimum contribution years
  if (totalContributionYears < MINIMUM_CONTRIBUTION_YEARS) {
    throw new Error(`Stagiul minim de cotizare este ${MINIMUM_CONTRIBUTION_YEARS} ani`);
  }
  
  // Net to gross conversion (approximate: net is roughly 58% of gross in Romania after CAS, CASS, IV)
  const grossMonthlySalary = monthlyIncome / 0.58;
  
  // 1. Contributory points (Puncte de contributivitate)
  const pointsPerYear = grossMonthlySalary / AVERAGE_GROSS_SALARY_2025;
  const contributoryPoints = pointsPerYear * totalContributionYears;
  
  // 2. Stability points (Puncte de stabilitate) for years worked > 25
  let stabilityPoints = 0;
  if (totalContributionYears > 25) {
    const extraYears = totalContributionYears - 25;
    
    if (extraYears <= 5) {
      stabilityPoints = extraYears * 0.5;
    } else if (extraYears <= 10) {
      stabilityPoints = (5 * 0.5) + ((extraYears - 5) * 0.75);
    } else {
      stabilityPoints = (5 * 0.5) + (5 * 0.75) + ((extraYears - 10) * 1.0);
    }
  }
  
  // 3. Assimilated points (Puncte asimilate) = 0.25 per year (studii la zi, armata, etc.)
  const assimilatedPoints = assimilatedYears * 0.25;
  
  // 4. Total points
  const totalPoints = contributoryPoints + stabilityPoints + assimilatedPoints;
  
  // 5. Calculate monthly pension = Total points * VPR (91 RON in 2025)
  const monthlyPension = totalPoints * VPR_2025;
  
  return {
    monthlyPension: Math.round(Math.max(monthlyPension, MINIMUM_PENSION_2025)),
    totalPoints: parseFloat(totalPoints.toFixed(4)),
    contributoryPoints: parseFloat(contributoryPoints.toFixed(4)),
    stabilityPoints: parseFloat(stabilityPoints.toFixed(4)),
    assimilatedPoints: parseFloat(assimilatedPoints.toFixed(4))
  };
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
  
  // Calculate standard pension at the early age (using actual contribution years at retirement)
  const standardResult = calculateStandardPension({
    currentAge,
    monthlyIncome,
    contributionYears,
    retirementAge: earlyRetirementAge,
  });
  
  // Apply early retirement penalty under Law 360/2023
  // Penalty rate depends on how much the stage exceeds the standard required stage (requiredYears)
  const exceedYears = totalYears - requiredYears;
  
  let penaltyRate = 0.40; // Default max penalty rate per month of anticipation
  
  if (exceedYears >= 8) {
    penaltyRate = 0.0;
  } else if (exceedYears >= 5) {
    penaltyRate = 0.15;
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
  const earlyPension = standardResult.monthlyPension * (1 - penaltyPercentage / 100);
  
  let recommendedStage = '';
  if (penaltyPercentage > 20) {
    recommendedStage = 'Penalizarea este foarte mare. Consideră amânarea pensionării sau Pilonul III.';
  } else if (penaltyPercentage > 10) {
    recommendedStage = 'Penalizarea este moderată. Evaluează cu atenție impactul pe termen lung.';
  } else {
    recommendedStage = 'Penalizarea este redusă datorită depășirii stagiului complet de cotizare.';
  }
  
  return {
    earlyPension: Math.round(Math.max(earlyPension, MINIMUM_PENSION_2025)),
    standardPension: standardResult.monthlyPension,
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
  const yearlyLegalCost = AVERAGE_GROSS_SALARY_2025 * 12 * 0.25;
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
