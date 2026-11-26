# Envix

Envix is a non-AI developer tool for understanding a public GitHub repository and generating setup guidance from its files.

## Current status

The React starter page is in `client/`. Python repository analysis begins in `server/envix/repository.py`. The analysis and API are still to be implemented.

## Local setup

Install Node.js and Python. From the repository root, run `npm install` and `npm run dev:client` to start the frontend. Run `npm run typecheck` and `npm run build` to check it.

Python analysis uses `server/`. Week 1 starts with standard-library functions. API dependencies in `server/requirements.txt` are for the FastAPI integration later in the plan.

## First learning task

In `server/envix/repository.py`, implement `parse_github_repo_url(url: str) -> tuple[str, str]`. Return the owner and repository name from an HTTPS GitHub repository URL. Support a trailing slash and a `.git` suffix. Raise `ValueError` for a different host, a missing owner or repository, or additional path segments.

See `docs/PLAN.md` for the learning schedule and `docs/CONTRIBUTIONS.md` for the work log.
