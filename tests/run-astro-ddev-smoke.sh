#!/usr/bin/env bash

set -euo pipefail

port=4322
run_dir="$(mktemp -d)"
server_pid=""

cleanup() {
  if [[ -n "$server_pid" ]]; then
    kill "$server_pid" 2>/dev/null || true
    wait "$server_pid" 2>/dev/null || true
  fi
  rm -rf "$run_dir"
}
trap cleanup EXIT

./node_modules/.bin/astro dev --host 127.0.0.1 --port "$port" >"$run_dir/server.log" 2>&1 &
server_pid=$!

for _ in {1..30}; do
  if curl -fsS "http://127.0.0.1:$port/" >"$run_dir/home.html"; then
    break
  fi
  sleep 1
done

check_page() {
  local route="$1"
  local expected="$2"
  local output="$run_dir/$(printf '%s' "$route" | tr '/-' '__').html"
  local status
  status="$(curl -sS -o "$output" -w '%{http_code}' "http://127.0.0.1:$port$route")"
  if [[ "$status" != "200" ]]; then
    echo "$route returned HTTP $status." >&2
    return 1
  fi
  if ! grep -Fq "$expected" "$output"; then
    echo "$route did not contain expected text: $expected" >&2
    return 1
  fi
  echo "$route: 200 and contains '$expected'"
}

check_page "/" "Your Website Deserves Better"
check_page "/home" "Your Website Deserves Better"
check_page "/resources" "How We Achieved 10ms Response Times Globally"
check_page "/services" "Design + Experience"
check_page "/resources/case-studies/how-we-achieved-10ms-response-times-globally" "Content management and swappable data sources"
check_page "/contact" "Why Blue Drop Labs?"

not_found_output="$run_dir/not-found.html"
not_found_status="$(curl -sS -o "$not_found_output" -w '%{http_code}' "http://127.0.0.1:$port/this-page-does-not-exist")"
if [[ "$not_found_status" != "404" ]] || ! grep -Fq "Page not found" "$not_found_output"; then
  echo "Unknown route did not render the Drupal Canvas 404 page with HTTP 404." >&2
  exit 1
fi
echo "/this-page-does-not-exist: 404 and renders the Drupal Canvas 404 page"
