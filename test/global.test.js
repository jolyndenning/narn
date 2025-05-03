import { detectNpm, getNpmArgs } from "../lib/narn-lib";
import fs from "fs";
import { vi, beforeEach, test, expect } from "vitest";

vi.mock("fs", () => ({
  default: {
    access: vi.fn(),
    constants: {
      F_OK: 1,
    },
  },
}));

beforeEach(() => {
  vi.resetAllMocks();
});

test("works for global installations wtesth npm/pnpm", () => {
  expect(getNpmArgs(["global", "add", "create-single-spa"])).toEqual([
    "install",
    "--global",
    "create-single-spa@latest",
  ]);
  expect(getNpmArgs(["global", "remove", "create-single-spa"])).toEqual([
    "uninstall",
    "--global",
    "create-single-spa",
  ]);
});

test("doesn't think everything is global", async () => {
  fs.access.mockImplementationOnce((path, mode, errBack) => {
    errBack(false);
  });
  const isNpm = await detectNpm(["add", "lodash@1.0.0"]);
  expect(isNpm).toBe(true);
});
