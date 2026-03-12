---
title: "How to Self-Host OpenClaw with Docker Locally"
excerpt: ""
coverImage: "/blog/assets/openclaw-docker-cover.jpg"
date: "2026-03-12"
ogImage:
  url: "/blog/assets/openclaw-docker-cover.jpg"
pin: true
---

## What Is OpenClaw?

[OpenClaw](https://openclaw.ai) is an open-source AI gateway that runs on your own machine. Think of it as a personal hub that connects AI models (OpenAI, Anthropic, etc.) to the tools you actually use — your file system, shell, browser, and messaging channels like WhatsApp, Telegram, and Discord.

What you can do with it:

- Chat with AI agents that can read/write files and run commands on your machine.
- Automate tasks across multiple messaging platforms from a single dashboard.
- Keep everything local — your API keys, conversations, and data never leave your machine.

Self-hosting gives you full control over data, latency, and cost. This guide walks through running OpenClaw locally with Docker.

## Why Docker?

- **No host pollution** — Node.js version conflicts, global packages, and system library mismatches stay inside the container.
- **Reproducible environments** — the same image works identically on macOS, Linux, and WSL2.
- **Easy teardown** — `docker compose down` removes everything cleanly.

If you are on macOS and only want a quick local dev loop, the native npm install may be faster. Docker shines when you want isolation, plan to run on a VPS, or need to run multiple services alongside OpenClaw.

## Quick Start

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
./docker-setup.sh
```

`docker-setup.sh` is an all-in-one script included in the repo. It builds the image, generates a gateway token, runs the onboarding wizard, and starts the gateway via Docker Compose.

When it finishes you should see output similar to this:

![docker-setup.sh terminal output](/blog/assets/openclaw-docker-cover/terminal.png)

Open `http://127.0.0.1:18789/` and paste the token from `.env` into the Control UI under **Settings → token**.

To skip building from source and pull a pre-built image instead:

```bash
export OPENCLAW_IMAGE="ghcr.io/openclaw/openclaw:latest"
./docker-setup.sh
```

## Manual Setup

If you prefer to run each step yourself:

```bash
docker build -t openclaw:local -f Dockerfile .
docker compose run --rm openclaw-cli onboard
docker compose up -d openclaw-gateway
```

1. **Build** — base image is `node:22-bookworm`, first build takes a few minutes.
2. **Onboard** — interactive wizard for API keys and gateway config.
3. **Start** — launches the gateway in detached mode on port `18789`.

## Data Persistence

The `docker-compose.yml` included in the repo automatically bind-mounts two host directories into the container:

- `~/.openclaw/` → gateway configuration
- `~/.openclaw/workspace` → agent workspace files

No extra setup needed. These paths survive container replacement, so `docker compose down` + `up` won't lose your data.

## Day-to-Day Commands

```bash
docker compose up -d openclaw-gateway   # start
docker compose down                      # stop
docker compose logs -f                   # logs
curl -fsS http://127.0.0.1:18789/healthz # health check
```

## Troubleshooting

**Permission errors (EACCES)** — the container runs as uid 1000. Fix with:

```bash
sudo chown -R 1000:1000 ~/.openclaw
```

**OOM killed during build (exit 137)** — ensure at least 2 GB RAM, or increase Docker Desktop memory in **Settings → Resources**.

**Gateway unreachable on host** — check bind mode:

```bash
docker compose run --rm openclaw-cli config set gateway.bind lan
```

## Further Reading

The official documentation covers everything in depth — sandbox setup, environment variables, channel configuration, health checks, security hardening, and more:

- [Docker Install Guide](https://docs.openclaw.ai/install/docker)
- [Agent Sandboxing](https://docs.openclaw.ai/gateway/sandboxing)
- [Security Hardening](https://docs.openclaw.ai/gateway/security)
