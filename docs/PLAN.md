# Envix plan

Target 3–4 weeks at 60–90 minutes per day, five days per week. Each session finishes one small task. Core analysis logic is implemented by the project owner with review and hints. AI assistance covers scaffolding, repetitive configuration, targeted fixes, and UI styling.

## Week 1 — Python repository analysis

- Confirm a working Python installation and run a small Python file.
- Parse and validate public GitHub repository URLs.
- Fetch a repository file list from GitHub.
- Build a simple report shape and detect languages from file names.
- Add focused tests for URL parsing and file classification.

## Week 2 — setup signals

- Read supported dependency files such as `package.json` and `requirements.txt`.
- Detect environment variable names from safe sources such as example files.
- Generate deterministic setup steps based on detected files.
- Test missing files, malformed data, and conflicting signals.

## Week 3 — usable web app

- Add a FastAPI endpoint around the Python analysis.
- Connect the existing React frontend to that endpoint.
- Add clear loading, result, and error states.
- Check the full flow with a few public demo repositories.

## Week 4 — release preparation

- Test and fix the complete flow.
- Deploy frontend and backend, then verify the live demo.
- Finish README, screenshots, demo walkthrough, and contribution disclosure.

## Scope

Analyze public GitHub repositories. Display languages, likely frameworks, dependencies, environment variable names, and generated setup instructions. Keep the tool non-AI. Add new capabilities only when they support this flow.

## Progress

- Complete: public repository, empty skeleton, React starter page.
- In progress: Python analysis foundation.
- Pending: detection logic, FastAPI, integration, tests, deployment, documentation.
