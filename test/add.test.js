import { getNpmArgs } from "../lib/narn-lib.js";
import { test, expect } from "vitest";

test("forces packages to be saved", () => {
  expect(getNpmArgs(["add", "lodash"]).slice(0, 2)).toEqual([
    "install",
    "--save",
  ]);
  expect(getNpmArgs(["add", "--dev", "lodash"]).slice(0, 2)).toEqual([
    "install",
    "--save-dev",
  ]);
  expect(getNpmArgs(["add", "-D", "lodash"]).slice(0, 2)).toEqual([
    "install",
    "--save-dev",
  ]);
  expect(getNpmArgs(["add", "lodash", "--dev"]).slice(0, 2)).toEqual([
    "install",
    "--save-dev",
  ]);
  expect(getNpmArgs(["add", "lodash", "-D"]).slice(0, 2)).toEqual([
    "install",
    "--save-dev",
  ]);
});

test("can install multiple packages with their semantic version specified", () => {
  expect(getNpmArgs(["add", "react@16.10.0", "react-dom@^16.10.0"])).toEqual([
    "install",
    "--save",
    "react@16.10.0",
    "react-dom@^16.10.0",
  ]);
});

test("forces latest version of package when semantic version is omitted, same as yarn add", () => {
  expect(getNpmArgs(["add", "lodash"])).toEqual([
    "install",
    "--save",
    "lodash@latest",
  ]);
});

test("works with scoped packages", () => {
  expect(getNpmArgs(["add", "@openmrs/esm-api"])).toEqual([
    "install",
    "--save",
    "@openmrs/esm-api@latest",
  ]);
  expect(getNpmArgs(["add", "@openmrs/esm-api@~1.0.0"])).toEqual([
    "install",
    "--save",
    "@openmrs/esm-api@~1.0.0",
  ]);
});

test("works with devDependencies", () => {
  expect(getNpmArgs(["add", "--dev", "react@16.10.0"])).toEqual([
    "install",
    "--save-dev",
    "react@16.10.0",
  ]);
});

test("works with devDependencies and first dep not specifying version", () => {
  expect(getNpmArgs(["add", "--dev", "jest"])).toEqual([
    "install",
    "--save-dev",
    "jest@latest",
  ]);
});

test("supports installing from https urls", () => {
  expect(
    getNpmArgs(["add", "https://github.com/jolyndenning/narn#main"]),
  ).toEqual(["install", "--save", "https://github.com/jolyndenning/narn#main"]);
});

test("supports installing from git urls", () => {
  expect(
    getNpmArgs(["add", "git@github.com:jolyndenning/narn.git#main"]),
  ).toEqual(["install", "--save", "git@github.com:jolyndenning/narn.git#main"]);
});

test("supports installing from file", () => {
  expect(getNpmArgs(["add", "file:../local-package"])).toEqual([
    "install",
    "--save",
    "../local-package",
  ]);
});
