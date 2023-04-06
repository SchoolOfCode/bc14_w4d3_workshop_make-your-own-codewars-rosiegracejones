import { test, expect } from "@jest/globals";
import { eggCount } from "./main.js";

// Test 1
test("breakfast order needs 4 eggs", () => {
  const actual = eggCount(["scrambled eggs", "scrambled eggs"]);
  const expected = 4;
  expect(actual).toBe(expected);
});

// Test 2
test("breakfast order needs 16 eggs", () => {
  const actual = eggCount([
    "hash brown",
    "omelette",
    "scrambled eggs",
    "fried egg",
    "toast",
    "omelette",
    "bacon",
    "fried egg",
    "omelette",
    "omelette",
  ]);
  const expected = 16;
  expect(actual).toBe(expected);
});

// Test 3
test("breakfast order needs 1 egg", () => {
  const actual = eggCount(["sausage", "bacon", "fried egg", "hash brown"]);
  const expected = 1;
  expect(actual).toBe(expected);
});

// Test 4
test("breakfast order needs 0 eggs", () => {
  const actual = eggCount([
    "hash brown",
    "sausage",
    "toast",
    "bacon",
    "bacon",
    "bacon",
    "sausage",
    "sausage",
    "toast",
    "hash brown",
  ]);
  const expected = 0;
  expect(actual).toBe(expected);
});

// Test 5
test("breakfast order needs 21 eggs", () => {
  const actual = eggCount([
    "scrambled eggs",
    "fried egg",
    "omelette",
    "scrambled eggs",
    "omelette",
    "fried egg",
    "omelette",
    "scrambled eggs",
    "omelette",
    "omelette",
  ]);
  const expected = 21;
  expect(actual).toBe(expected);
});

// Test 6
test("breakfast order needs 0 eggs", () => {
  const actual = eggCount([]);
  const expected = 0;
  expect(actual).toBe(expected);
});
