import { detectNpm, detectPnpm } from "../lib/narn-lib.js";
import fs from "fs";
import { vi } from "vitest";
import { beforeEach, test, expect } from "vitest";

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

test("properly detects pnpm packages", async () => {
  fs.access.mockImplementation((path, mode, errBack) => {
    if (path.includes("pnpm-lock.yaml")) {
      errBack(false);
    } else {
      errBack(true);
    }
  });
  const isPnpm = await detectPnpm(["add", "lodash@1.0.0"]);
  expect(isPnpm).toBe(true);
});

test("properly detects pnpm packages", async () => {
  fs.access.mockImplementation((path, mode, errBack) => {
    if (path.includes("package-lock.json")) {
      errBack(false);
    } else {
      errBack(true);
    }
  });
  const isNpm = await detectNpm(["add", "lodash@1.0.0"]);
  expect(isNpm).toBe(true);
});
