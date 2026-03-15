# DigitalOcean Serverless Functions

These functions run alongside the static Next.js site on App Platform. They are deployed as a separate Functions component.

## Endpoints

| Path              | Method | Description                                                                                |
| ----------------- | ------ | ------------------------------------------------------------------------------------------ |
| `/api/newsletter` | POST   | Newsletter signup (expects `{ "email": "..." }`)                                           |
| `/api/contact`    | POST   | Contact form (expects `{ "name": "?", "email": "...", "company": "?", "message": "..." }`) |

Both return 405 for non-POST requests.

### Newsletter environment variables

Configure these in App Platform for the Functions component:

- `MAILCHIMP_API_KEY` – Your Mailchimp API key (includes data center, e.g. `xxxx-us19`)
- `MAILCHIMP_LIST_ID` – The audience/list ID to subscribe to (find in Mailchimp: Audience → Settings → Audience name and defaults)

## Local development

### Option 1: Deploy and invoke via doctl

Requires [doctl](https://docs.digitalocean.com/reference/doctl/) with the serverless extension. Functions run in the cloud; there is no local runtime.

```bash
doctl serverless connect
doctl serverless deploy functions
```

Invoke the newsletter function (set env vars in App Platform or use `--env` with a `.env` file):

```bash
doctl serverless functions invoke api/newsletter --param email:you@example.com
```

Or use `curl` with the function URL from `doctl serverless functions get api/newsletter --url`:

```bash
curl -X POST "https://faas-xxx.doserverless.co/..." \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

Use `doctl serverless watch functions` to auto-redeploy on file changes.

### Option 2: Run locally with Node

For quick local testing without deploying, run the function directly:

```bash
cd functions
MAILCHIMP_API_KEY=your_key MAILCHIMP_LIST_ID=your_list_id node scripts/test-newsletter.mjs
```

Or with a `.env` file in the `functions/` directory (Node 20+):

```bash
cd functions
node --env-file=.env scripts/test-newsletter.mjs
```

Pass an email as an argument to override the default: `node scripts/test-newsletter.mjs you@example.com`

Contact function:

```bash
node --env-file=.env scripts/test-contact.mjs
```

Optional args: `node scripts/test-contact.mjs "Name" "email@example.com" "Company"`

## App Platform setup

The `.do/app.yaml` in the repo root defines both the static site and the Functions component. When creating the app in App Platform, it will detect this spec.

The Functions component uses `source_dir: functions` so it deploys from this directory. The URL structure is `{app_url}/{component_route}/api/{function}`. Configure the component's HTTP route in the App Platform dashboard so `/api/newsletter` and `/api/contact` resolve correctly (the default route may already produce these paths).
