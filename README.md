# Envix

Envix is a non-AI tool for understanding a public GitHub repository and its setup needs. The current foundation includes a React page and an Express health endpoint. Repository analysis is the next task.

## Run locally

Install Node.js, then run `npm install` in the repository root. Open two terminals in that root. Run `npm run dev:server` in one and `npm run dev:client` in the other. Open the URL shown by Vite. The page should say `Backend connected`. The API health endpoint is `http://localhost:3001/api/health`.

## Checks

Run `npm run typecheck` and `npm run build` after installing dependencies.

## Learning task

Implement `parseGitHubRepoUrl(input: string)` in `server/src/github/parseGitHubRepoUrl.ts`. It should return an owner and repository name for a GitHub repository URL. Test a normal URL, a trailing slash, a `.git` suffix, and an invalid host. The other analysis files are reserved for later tasks.
