#!/usr/bin/env node
/**
 * Local test script for the contact function.
 * Run from the functions directory:
 *
 *   MAILCHIMP_API_KEY=xxx MAILCHIMP_LIST_ID=yyy node scripts/test-contact.mjs
 *
 * Or with a .env file (Node 20+):
 *
 *   node --env-file=.env scripts/test-contact.mjs
 */

import { main } from "../packages/v1/contact/index.js";

const event = {
  http: { method: "POST" },
  name: process.argv[2] || "Test User",
  email: process.argv[3] || "test@example.com",
  company: process.argv[4] || "Acme Inc",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
};

console.log("Invoking with event:", JSON.stringify(event, null, 2));
const result = await main(event);
console.log("Result:", JSON.stringify(result, null, 2));
