import { expect, test } from "vitest";
import { isEven } from "./isEven";

test("4 is even", () => {
  expect(isEven(4)).toBe("even");
});
