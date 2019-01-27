# Oslopride

This is Oslo Pride's official website.

## Setup

First clone the repository and install the dependencies using `yarn`. You can start a development server using `yarn dev`.

## Workflow

1. Find or create an issue, and assign it to your self.
2. Create a local branch from master with a short descriptive name. Use dashes ("-") instead of spaces.
3. Split your work into small logical commits (use imperative language).
4. Push your work to github and create a pull request (PR).
5. Travis (our CI) will automatically run the tests and buld the PR. If this fails, please fix the issues.
6. When the tests and build succeed, a bot (pridebot) will comment on your PR with a link to a staged production build of the website. Revewers can use this to look how your changes will look in production.
7. Request one or more revewers.
8. When a reviewer has approved your PR, you can squash merge it into master. Make sure the title of the squash merge is a short and good description of your changes.
