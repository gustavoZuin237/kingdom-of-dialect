import { expect, test } from 'vitest';
import { pickQuestion } from './pickQuestion';

test("Should return a list with 4 random questions of the 'introduction' category", () => {
    expect(pickQuestion("introduction")?.length).toBe(4)
})

test("Should return a list with 4 random questions of the 'animals' category", () => {
    expect(pickQuestion("animals")?.length).toBe(4)
})

test("Should return a list with 4 random questions of the 'food' category", () => {
    expect(pickQuestion("food")?.length).toBe(4)
})

test("Should return a list with 4 random questions of the 'clothes' category", () => {
    expect(pickQuestion("clothes")?.length).toBe(4)
})

test("Should return a list with 4 random questions of the 'family' category", () => {
    expect(pickQuestion("family")?.length).toBe(4)
})