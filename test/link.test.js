import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

test(`lets you link the current package`, () => {
  expect(getNpmArgs(["link"])).toEqual(["link"]);
});

test(`lets you link another package`, () => {
  expect(getNpmArgs(["link", "package-name"])).toEqual([
    "link",
    "package-name",
  ]);
});

test(`lets you unlink the current package`, () => {
  expect(getNpmArgs(["unlink"])).toEqual(["unlink"]);
});

test(`lets you unlink another package`, () => {
  expect(getNpmArgs(["unlink", "package-name"])).toEqual([
    "unlink",
    "package-name",
  ]);
});
