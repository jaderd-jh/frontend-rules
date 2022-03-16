#!/bin/sh

set -e

pnpm i --frozen-lockfile

pnpm build

pnpm run release

echo "✅ Publish completed"
