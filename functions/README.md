# DigitalOcean Serverless Functions

These functions run alongside the static Next.js site on App Platform. They are deployed as a separate Functions component.

## Endpoints

| Path              | Method | Description                                                                                |
| ----------------- | ------ | ------------------------------------------------------------------------------------------ |
| `/api/newsletter` | POST   | Newsletter signup (expects `{ "email": "..." }`)                                           |
| `/api/contact`    | POST   | Contact form (expects `{ "name": "?", "email": "...", "company": "?", "message": "..." }`) |

Both return 405 for non-POST requests.

## Local development

Requires [doctl](https://docs.digitalocean.com/reference/doctl/) with the serverless extension:

```bash
doctl serverless connect
doctl serverless deploy functions
```

## App Platform setup

The `.do/app.yaml` in the repo root defines both the static site and the Functions component. When creating the app in App Platform, it will detect this spec.

The Functions component uses `source_dir: functions` so it deploys from this directory. The URL structure is `{app_url}/{component_route}/api/{function}`. Configure the component's HTTP route in the App Platform dashboard so `/api/newsletter` and `/api/contact` resolve correctly (the default route may already produce these paths).
