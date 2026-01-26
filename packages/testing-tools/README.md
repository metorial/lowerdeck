# `@lowerdeck/testing-tools`

Opinionated testing utilities for Vitest configuration, environment loading, Prisma test databases, factories, and HTTP helpers.

## Installation

```bash
npm install @lowerdeck/testing-tools
```

```bash
yarn add @lowerdeck/testing-tools
```

```bash
bun add @lowerdeck/testing-tools
```

```bash
pnpm add @lowerdeck/testing-tools
```

## Usage

### Vitest config

```typescript
import { createVitestConfig, loadTestEnv, withAliases } from '@lowerdeck/testing-tools';
// In CI, run Vitest with `--mode ci` to load `.env.ci` via loadTestEnv.

loadTestEnv();

const config = withAliases(createVitestConfig(), { '@': './src' });

export default config;
```

### Prisma test database helpers

```typescript
import { withTestDb } from '@lowerdeck/testing-tools';
import { PrismaClient } from '@prisma/client';

const { client } = withTestDb({
  prismaClientFactory: url => new PrismaClient({ datasourceUrl: url }),
  guard: 'test',
  cleanBeforeEach: true
});
```

### Factories

```typescript
import { defineFactory } from '@lowerdeck/testing-tools';

type User = { name: string; email: string };

const userFactory = defineFactory<User>(
  () => ({ name: 'Ada', email: 'ada@example.com' }),
  {
    persist: async user => user
  }
);
```

### HTTP test helpers

```typescript
import { createTestServer } from '@lowerdeck/testing-tools';

const server = createTestServer({
  request: async path => new Response(`ok:${path}`)
});

await server.get('/health');
```

## License

This project is licensed under the Apache License 2.0.

<div align="center">
  <sub>Built with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
