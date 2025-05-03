import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

test("removes the -- from --patch", () => {
  expect(getNpmArgs(["version", "--patch"])).toEqual(["version", "patch"]);
});

test("removes the -- from --minor", () => {
  expect(getNpmArgs(["version", "--minor"])).toEqual(["version", "minor"]);
});

test("removes the -- from --major", () => {
  expect(getNpmArgs(["version", "--major"])).toEqual(["version", "major"]);
});

test("removes the -- from --prepatch", () => {
  expect(getNpmArgs(["version", "--prepatch"])).toEqual([
    "version",
    "prepatch",
  ]);
});

test("removes the -- from --preminor", () => {
  expect(getNpmArgs(["version", "--preminor"])).toEqual([
    "version",
    "preminor",
  ]);
});

test("removes the -- from --prerelease", () => {
  expect(getNpmArgs(["version", "--prerelease"])).toEqual([
    "version",
    "prerelease",
  ]);
});

test("adds --preid correctly", () => {
  expect(getNpmArgs(["version", "--prerelease", "--preid", "beta"])).toEqual([
    "version",
    "prerelease",
    "--preid",
    "beta",
  ]);
});
