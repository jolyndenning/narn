import { getNpmArgs } from "../lib/narn-lib.js";
import { afterEach, it, expect } from "vitest";

afterEach(() => {
  delete process.env.NARN_PUBLISH;
});

it("runs np", () => {
  delete process.env.NARN_PUBLISH;
  const expected = [];
  expected.command = "np";
  expect(getNpmArgs(["publish"])).toEqual(expected);
});

it("doesn't run np with correct env set", () => {
  process.env.NARN_PUBLISH = "passthrough";
  expect(getNpmArgs(["publish"])).toEqual(["publish"]);
});
