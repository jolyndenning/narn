import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

test("defaults to npm install if no args are provided", () => {
  expect(getNpmArgs([])).toEqual(["install"]);
});

test("works when install is specified", () => {
  expect(getNpmArgs(["install"])).toEqual(["install"]);
});

test("works wtesth npm", () => {
  expect(getNpmArgs(["install", "--frozen-lockfile"])).toEqual(["ci"]);
});

test("works wtesth pnpm", () => {
  expect(getNpmArgs(["install", "--frozen-lockfile"], true)).toEqual([
    "install",
    "--frozen-lockfile",
  ]);
});
