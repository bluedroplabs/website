#!/usr/bin/env node
/**
 * Local test script for the newsletter function.
 * Run from the functions directory:
 *
 *   MAILCHIMP_API_KEY=xxx MAILCHIMP_LIST_ID=yyy node scripts/test-newsletter.mjs
 *
 * Or with a .env file (Node 20+):
 *
 *   node --env-file=.env scripts/test-newsletter.mjs
 */

import { main } from "../packages/v1/newsletter/index.js";

const event = {
  http: { method: "POST" },
  email: process.argv[2] || "test@example.com",
};

console.log("Invoking with event:", JSON.stringify(event, null, 2));
const result = await main(event);
console.log("Result:", JSON.stringify(result, null, 2));
