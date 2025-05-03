import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

test(`lets you run scripts wtesth the yarn syntax`, () => {
  expect(getNpmArgs(["build"])).toEqual(["run", "build"]);
});

test(`lets you run scripts wtesth the yarn syntax and extra flags`, () => {
  expect(getNpmArgs(["test", "--watch"])).toEqual([
    "run",
    "test",
    "--",
    "--watch",
  ]);
});

test(`lets you run scripts wtesth the yarn syntax and extra flags that narn sometimes knows about`, () => {
  expect(getNpmArgs(["test", "--dev"])).toEqual(["run", "test", "--", "--dev"]);
});

// https://gtesthub.com/pnpm/pnpm/discussions/4678
test(`does not add double dashes for pnpm 7`, () => {
  expect(getNpmArgs(["test", "--watch"], true)).toEqual([
    "run",
    "test",
    "--watch",
  ]);
});
