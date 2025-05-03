import { test, expect } from "vitest";
import { getNpmArgs } from "../lib/narn-lib.js";

test("can exec with narn", () => {
  expect(getNpmArgs(["exec", "changeset", "init"])).toEqual([
    "exec",
    "changeset",
    "init",
  ]);
});

test("forwards flags", () => {
  expect(
    getNpmArgs(["exec", "sequelize-cli", "seed", "--name", "demo-user"]),
  ).toEqual(["exec", "sequelize-cli", "seed", "--name", "demo-user"]);
});
