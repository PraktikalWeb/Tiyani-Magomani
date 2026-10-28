import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCompoundGrowth,
  calculateMonthlyIncome,
  calculateFixedReturnIncome,
  calculateOffshoreScenarios,
} from './calculators';

test('calculateCompoundGrowth computes yearly and total growth accurately', () => {
  const result = calculateCompoundGrowth(100000, 0.1, 2);
  assert.deepEqual(result.yearlyGrowth, [10000, 11000]);
  assert.equal(result.totalGrowth, 21000);
  assert.equal(result.estimatedFutureValue, 121000);
});

test('calculateMonthlyIncome computes gross and net income accurately', () => {
  const result = calculateMonthlyIncome(120000, 0.12, 3);
  assert.equal(result.grossMonthly, 1200);
  assert.equal(result.netMonthly, 960);
  assert.equal(result.grossAnnual, 14400);
  assert.equal(result.netAnnual, 11520);
  assert.equal(result.grossTotalIncome, 43200);
  assert.equal(result.netTotalIncome, 34560);
});

test('calculateFixedReturnIncome applies term-dependent bonus rate', () => {
  const twoYear = calculateFixedReturnIncome(100000, 0.12, 2);
  assert.equal(twoYear.grossAnnualBonus, 600);
  assert.equal(twoYear.netAnnualBonus, 480);

  const fiveYear = calculateFixedReturnIncome(100000, 0.12, 5);
  assert.equal(fiveYear.grossAnnualBonus, 1000);
  assert.equal(fiveYear.netAnnualBonus, 800);
});

test('calculateOffshoreScenarios computes both scenario estimates', () => {
  const result = calculateOffshoreScenarios(100000);
  assert.equal(result.scenario1Value, 170000);
  assert.equal(result.scenario2Value, 181666.67);
});
