# Multi-market GitHub Pages setup

This repo now supports two markets from one codebase:

- `uk` -> UK site build
- `ro` -> Romanian localized build

## Local build steps

UK:

```bash
npm run select:uk
npm run build
npm run finalize:uk
```

RO:

```bash
npm run select:ro
npm run build
npm run finalize:ro
```

The build step renders the selected market, and the finalize step writes the matching `dist/CNAME` file.

## Important GitHub Pages constraint

GitHub Pages supports one Pages site per repository, so two separate custom domains should be published to two separate Pages repositories.

Recommended setup:

- source repo: shared codebase (`elevoncontrols-uk`)
- deployment repo 1: UK Pages site
- deployment repo 2: RO Pages site (`exente-tech/elevoncontrols-ro`)

This keeps one codebase while allowing independent custom domains.

## Suggested repos

- `exente-tech/elevoncontrols-uk-pages`
- `exente-tech/elevoncontrols-ro`

Each deployment repo can then configure its own Pages custom domain in repository settings.

## Workflows

- `.github/workflows/deploy.yml`
  Selects the UK market, builds it, finalizes the Pages artifact, and deploys it to this repository's Pages site.
- `.github/workflows/publish-market.yml`
  Manual workflow that selects `uk` or `ro`, builds the site, and publishes the output to a separate Pages repo. The current Romanian target repo is `exente-tech/elevoncontrols-ro`.

## Required secret for external publishing

Add this secret in the source repo before using `publish-market.yml`:

- `PAGES_DEPLOY_TOKEN`

The token needs permission to push to the target Pages repositories.
