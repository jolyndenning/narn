import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

test("can run create-single-spa package with npm", () => {
  expect(getNpmArgs(["create", "single-spa"])).toEqual(["init", "single-spa"]);
});

test("can run a create-thing package with pnpm", () => {
  expect(getNpmArgs(["create", "single-spa"], true)).toEqual([
    "init",
    "single-spa",
  ]);
});
