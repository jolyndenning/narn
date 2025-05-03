import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

// https://github.com/jolyndenning/narn/issues/21
test("lists all available commands with npm run", () => {
  expect(getNpmArgs(["run"])).toEqual(["run"]);
});
