import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

test("can init with narn", () => {
  expect(getNpmArgs(["init"])).toEqual(["init"]);
});
