import { test, expect } from "vitest";
import { getNpmArgs } from "../lib/narn-lib.js";

test("removes packages", () => {
  expect(getNpmArgs(["remove", "@angular/cli", "@angular/core"])).toEqual([
    "uninstall",
    "@angular/cli",
    "@angular/core",
  ]);
});
