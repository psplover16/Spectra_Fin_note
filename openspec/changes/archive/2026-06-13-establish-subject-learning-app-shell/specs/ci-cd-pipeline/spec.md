## ADDED Requirements

### Requirement: CI validates application quality gates

The repository SHALL include a CI workflow that runs on pull requests and pushes except the `gh-pages` branch. The CI workflow SHALL use Node.js 22 and SHALL run dependency installation, lint, typecheck, unit tests, production build, Chromium installation, and Playwright e2e tests.

#### Scenario: Pull request runs all CI gates

- **WHEN** a pull request is opened
- **THEN** CI installs dependencies with `npm ci`
- **AND** CI runs `npm run lint`
- **AND** CI runs `npm run typecheck`
- **AND** CI runs `npm run test:unit`
- **AND** CI runs `npm run build`
- **AND** CI installs the Chromium Playwright browser
- **AND** CI runs `npm run test:e2e`

#### Scenario: Playwright diagnostics upload on failure

- **WHEN** a CI run fails during or after Playwright e2e execution
- **THEN** CI uploads `playwright-report/` and `test-results/` artifacts when those directories exist

### Requirement: CD publishes staging and production to GitHub Pages

The repository SHALL include a CD workflow that runs on pushes to `dev` and `main`. The CD workflow SHALL publish build output to the `gh-pages` branch, with `dev` publishing staging and `main` publishing production.

#### Scenario: Dev branch publishes staging

- **WHEN** the `dev` branch is pushed
- **THEN** CD builds with `VITE_APP_BASE_PATH=/Spectra_Fin_note/staging/`
- **AND** CD builds with `VITE_APP_START_URL=/Spectra_Fin_note/staging/`
- **AND** CD publishes the output as the staging target on `gh-pages`

#### Scenario: Main branch publishes production

- **WHEN** the `main` branch is pushed
- **THEN** CD builds with `VITE_APP_BASE_PATH=/Spectra_Fin_note/`
- **AND** CD builds with `VITE_APP_START_URL=/Spectra_Fin_note/`
- **AND** CD publishes the output as the production target on `gh-pages`

### Requirement: Deployment is idempotent when build output is unchanged

The CD workflow SHALL avoid creating a new `gh-pages` commit when the generated publish output has no changes.

#### Scenario: No publish diff skips commit

- **WHEN** CD syncs build output and the `gh-pages` worktree has no staged diff
- **THEN** CD exits the publish step without creating a commit
- **AND** the workflow completes successfully

### Requirement: CI and CD avoid ignored generated artifacts in source commits

The repository SHALL ignore generated dependencies, build outputs, coverage, Playwright reports, and test result directories. CI and CD workflows MUST NOT require committing generated output directories to the source branch.

#### Scenario: Generated artifacts remain untracked

- **WHEN** local validation creates dependency, build, coverage, Playwright report, or test result directories
- **THEN** `.gitignore` excludes those directories from normal source commits
- **AND** CI and CD operate from source files rather than committed build output
