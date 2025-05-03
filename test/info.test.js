import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

test("can lookup package info", () => {
  expect(getNpmArgs(["info", "single-spa"])).toEqual(["info", "single-spa"]);
});
