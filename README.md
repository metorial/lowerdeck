# Lowerdeck

A collection of utility packages for building Metorial. Each package is designed to be lightweight, focused, and easy to use.

## Packages

### Data & Encoding
- [`@lowerdeck/base62`](./packages/base62) - Base62 encoding and decoding
- [`@lowerdeck/murmur3`](./packages/murmur3) - MurmurHash 3.0 implementation
- [`@lowerdeck/hash`](./packages/hash) - Cryptographic hash functions
- [`@lowerdeck/canonicalize`](./packages/canonicalize) - RFC 8785 JSON canonicalization
- [`@lowerdeck/serialize`](./packages/serialize) - Enhanced serialization with SuperJSON

### String Utilities
- [`@lowerdeck/case`](./packages/case) - String case conversion utilities
- [`@lowerdeck/slugify`](./packages/slugify) - URL-friendly slug generation
- [`@lowerdeck/normalize-email`](./packages/normalize-email) - Email address normalization

### Arrays & Objects
- [`@lowerdeck/unique`](./packages/unique) - Remove duplicate values from arrays
- [`@lowerdeck/flatten`](./packages/flatten) - Flatten nested objects and arrays
- [`@lowerdeck/merge`](./packages/merge) - Deep merge objects recursively

### Random & Generation
- [`@lowerdeck/random-number`](./packages/random-number) - Generate random integers
- [`@lowerdeck/random-from-array`](./packages/random-from-array) - Pick random array elements
- [`@lowerdeck/id`](./packages/id) - Generate various types of unique IDs
- [`@lowerdeck/shadow-id`](./packages/shadow-id) - Consistent shadow ID generation

### Async & Control Flow
- [`@lowerdeck/delay`](./packages/delay) - Promise-based delay utility
- [`@lowerdeck/once`](./packages/once) - Ensure function runs only once
- [`@lowerdeck/memo`](./packages/memo) - Memoization decorator
- [`@lowerdeck/programmable-promise`](./packages/programmable-promise) - Externally controllable promises

### Events & Patterns
- [`@lowerdeck/emitter`](./packages/emitter) - Type-safe event emitter
- [`@lowerdeck/proxy`](./packages/proxy) - Method interception and routing

### Security & Auth
- [`@lowerdeck/sign`](./packages/sign) - HMAC signing and verification
- [`@lowerdeck/tokens`](./packages/tokens) - Signed token creation and verification
- [`@lowerdeck/jwt`](./packages/jwt) - JWT signing and verification
- [`@lowerdeck/encryption`](./packages/encryption) - Entity-specific secret encryption and decryption
- [`@lowerdeck/api-key`](./packages/api-key) - Structured API key generation and parsing

### Network & HTTP
- [`@lowerdeck/forwarded-for`](./packages/forwarded-for) - Extract client IP from headers
- [`@lowerdeck/anonymize-ip`](./packages/anonymize-ip) - IP address masking for privacy
- [`@lowerdeck/ip-info`](./packages/ip-info) - Geolocation information for IPs
- [`@lowerdeck/websocket-client`](./packages/websocket-client) - Auto-reconnecting WebSocket client
- [`@lowerdeck/joinPaths`](./packages/joinPaths) - URL path and query string joining

### Web Framework
- [`@lowerdeck/hono`](./packages/hono) - Hono web app with Metorial defaults
- [`@lowerdeck/error`](./packages/error) - Type-safe error handling
- [`@lowerdeck/api-mux`](./packages/api-mux) - Route multiplexer for API endpoints
- [`@lowerdeck/rpc-server`](./packages/rpc-server) - Type-safe RPC server
- [`@lowerdeck/rpc-client`](./packages/rpc-client) - Type-safe RPC client

### Validation & Config
- [`@lowerdeck/validation`](./packages/validation) - Comprehensive validation framework
- [`@lowerdeck/env`](./packages/env) - Type-safe environment variable validation

### Data & Time
- [`@lowerdeck/timezone`](./packages/timezone) - Timezone information database

### Data Presentation
- [`@lowerdeck/presenter`](./packages/presenter) - Type-safe API response transformation
- [`@lowerdeck/pagination`](./packages/pagination) - Cursor-based pagination utilities

### Infrastructure & Services
- [`@lowerdeck/service`](./packages/service) - Base class for services
- [`@lowerdeck/redis`](./packages/redis) - Redis client with auto-reconnection
- [`@lowerdeck/lock`](./packages/lock) - Distributed locking with Redlock
- [`@lowerdeck/queue`](./packages/queue) - Job queue with BullMQ and Redis
- [`@lowerdeck/cron`](./packages/cron) - Distributed cron job scheduler
- [`@lowerdeck/execution-context`](./packages/execution-context) - Request and job context tracking
- [`@lowerdeck/sentry`](./packages/sentry) - Sentry instance management

## License

This project is licensed under the Apache License 2.0.

<div align="center">
  <sub>Built with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
