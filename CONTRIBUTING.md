# Git Hooks with Husky

This project uses [Husky](https://typicode.github.io/husky/) to enforce code quality and commit message standards.

## What happens on commit

### Pre-commit Hook

Runs `npm run check` which includes:

- **ESLint** - Code linting
- **Prettier** - Code formatting check
- **TypeScript** - Type checking

If any of these fail, the commit is blocked.

### Commit Message Hook

Enforces [Conventional Commits](https://www.conventionalcommits.org/) format:

```
type(scope): description

Examples:
✅ feat(button): add new variant prop
✅ fix: resolve theme switching issue
✅ docs: update README with setup instructions
✅ chore(deps): update dependencies

❌ Add new button
❌ fixed bug
❌ WIP
```

**Valid types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Quick fixes

If hooks fail, run:

```bash
npm run fix  # Auto-fix linting and formatting
npm run check # Verify everything passes
```

## Setup for new contributors

Hooks are automatically installed when running:

```bash
npm install
```

The `prepare` script in `package.json` ensures Husky is set up correctly.
