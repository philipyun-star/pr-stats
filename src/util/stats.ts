/**
 * pr-stats
 * Copyright (c) 2023-present NAVER Corp.
 * Apache-2.0
 */

export const average = (arr: number[]): number => {
    const validValues = arr.filter(val => !isNaN(val) && isFinite(val));
    return validValues.length ? validValues.reduce((acc, cur) => acc + cur, 0) / validValues.length : 0;
};
