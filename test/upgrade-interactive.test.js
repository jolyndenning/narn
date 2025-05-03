import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

test("Can run npm update", () => {
  const expected = ["-iu", "&&", "npm", "install"];
  expected.command = "ncu";
  expect(getNpmArgs(["upgrade-interactive"])).toEqual(expected);
});

test("Can run npm-check-updates for --latest behavior", () => {
  const expected = ["-iu", "&&", "npm", "install"];
  expected.command = "ncu";
  expect(getNpmArgs(["upgrade-interactive", "--latest"])).toEqual(expected);
});

test("Runs pnpm update for pnpm projects", () => {
  const isPnpm = true;
  expect(getNpmArgs(["upgrade-interactive"], isPnpm)).toEqual([
    "update",
    "--interactive",
  ]);

  expect(getNpmArgs(["upgrade-interactive", "--latest"], isPnpm)).toEqual([
    "update",
    "--interactive",
    "--latest",
  ]);
});
