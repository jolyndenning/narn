#!/usr/bin/env node
import { spawn } from "child_process";

const narnxArgs = process.argv.slice(2);
let command;

if (process.env.NARN_DEFAULT_PM === "pnpm") {
  command = "pnpx";
} else if (process.env.NARN_DEFAULT_PM === "npm") {
  command = "npx";
} else {
  command = "npx";
}

console.info(`${command} ${narnxArgs.join(" ")}`);
spawn(command, narnxArgs, { stdio: "inherit", shell: true });
