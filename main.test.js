import { test, expect } from "@jest/globals";
import { eggCount, findPrice } from "./main.js";

// Kato 1 tests:
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
    "sausage",
    "toast",
    "hash brown",
  ]);
  const expected = 0;
  expect(actual).toBe(expected);
});

// Test 5
test("breakfast order needs 23 eggs", () => {
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
  const expected = 23;
  expect(actual).toBe(expected);
});

// Test 6
test("breakfast order needs 0 eggs", () => {
  const actual = eggCount([]);
  const expected = 0;
  expect(actual).toBe(expected);
});

// Test 7
test("over 25 eggs ordered", () => {
  const actual = eggCount([
    "scrambled eggs",
    "fried egg",
    "omelette",
    "bacon",
    "omelette",
    "scrambled eggs",
    "omelette",
    "fried egg",
    "omelette",
    "scrambled eggs",
    "omelette",
    "omelette",
  ]);
  const expected = "Oh no, we've run out of eggs! Please order something else.";
  expect(actual).toBe(expected);
});

// Test 8
test("exactly 25 eggs ordered", () => {
  const actual = eggCount([
    "omelette",
    "omelette",
    "omelette",
    "omelette",
    "omelette",
    "fried egg",
    "omelette",
    "omelette",
    "omelette",
  ]);
  const expected = 25;
  expect(actual).toBe(expected);
});

// Kato 2 tests:
// Test 1
test("customers should pay: £5.50, £12.50, £12.50", () => {
  const actual = findPrice([
    { drink: "coffee", extras: "pain au chocolat" },
    { main: "full english", drink: "tea" },
    { main: "vegan breakfast", extras: "toast" },
  ]);
  const expected = [5.5, 12.5, 12.5];
  expect(actual).toEqual(expected);
});

// Test 2
test("customers should pay: £11.50, £12.50, £12.50", () => {
  const actual = findPrice([
    { main: "eggs royale", drink: "coffee", extras: "pain au chocolat" },
    { main: "full english", drink: "tea" },
    { main: "vegan breakfast", extras: "toast" },
  ]);
  const expected = [11.5, 12.5, 12.5];
  expect(actual).toEqual(expected);
});

// Test 3
test("customers should pay: £9, £4.50, £13.50", () => {
  const actual = findPrice([
    { main: "eggs royale", drink: "tea" },
    { drink: "coffee", extras: "toast" },
    { main: "vegan breakfast", extras: "pain au chocolat" },
  ]);
  const expected = [9, 4.5, 13.5];
  expect(actual).toEqual(expected);
});

// Test 4
test("customers should pay: £11, £3", () => {
  const actual = findPrice([{ main: "vegan breakfast" }, { drink: "coffee" }]);
  const expected = [11, 3];
  expect(actual).toEqual(expected);
});

// Test 5
test("should return an empty array", () => {
  const actual = findPrice([]);
  const expected = [];
  expect(actual).toEqual(expected);
});

// Test 6
test("customers should pay: £10.50, £4.50, £5.50, £3.50, £4.50, £12.50", () => {
  const actual = findPrice([
    { main: "eggs royale", drink: "coffee", extras: "toast" },
    { drink: "coffee", extras: "toast" },
    { drink: "coffee", extras: "pain au chocolat" },
    { drink: "tea", extras: "toast" },
    { drink: "tea", extras: "pain au chocolat" },
    { main: "full english" },
  ]);
  const expected = [10.5, 4.5, 5.5, 3.5, 4.5, 12.5];
  expect(actual).toEqual(expected);
});
