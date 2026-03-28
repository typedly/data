
<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=400&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    width="20%"
    title="@typedly/data - A TypeScript type definitions package for @typescript-package/data."
  />
</a>

## @typedly/data

<!-- npm badge -->
[![npm version][package-npm-badge-svg]][package-npm-badge]
[![GitHub issues][package-badge-issues]][package-issues]
[![GitHub license][package-badge-license]][package-license]

<!-- GitHub badges -->
[![GitHub issues][package-badge-issues]][package-issues]
[![GitHub forks][package-badge-forks]][package-forks]
[![GitHub stars][package-badge-stars]][package-stars]
[![GitHub license][package-badge-license]][package-license]

<!-- Sponsors -->
[![GitHub Sponsors][github-badge-sponsor]][github-sponsor-link]
[![Patreon Sponsors][patreon-badge]][patreon-link]

A **TypeScript** type definitions package for [**@typescript-package/data**](https://github.com/typescript-package/data).

## Features

- **Adapter**: Optional data adapter to customize managing underlying data available under the [`@typedly/adaptable-data`](https://github.com/typedly/data-adapter).
- **Configurable**: Configurable data shape available under the [`@typedly/configurable-data`](https://github.com/typedly/configurable-data).
- **Traits**: Extended customization via traits, such as `Configurable`, `Adaptable`, `Serializable`, and `Transformable` under the [`@typedly/data-traits`](https://github.com/typedly/data-traits) package.
- **Shape**: The default shape for data of any `T` type with conditional async.

## Table of contents

- [Related packages](#related-packages)
- [Installation](#installation)
- [Api](#api)
  - [Configuration](#configuration)
    - [`CacheableDataSettings`](#cacheabledatasettings)
    - [`CacheableSettings`](#cacheablesettings)
    - [`DataConfig`](#dataconfig)
    - [`DataSettings`](#datasettings)
  - [Data](#data)
    - [`AsyncReturn`](#asyncreturn)
    - [`DataConstructorInput`](#dataconstructorinput)
    - [`DataConstructorTuple`](#dataconstructortuple)
    - [`DataConstructor`](#dataconstructor)
    - [`DataShape`](#datashape)
  - [Inference](#inference)
    - [`InferAsyncOf`](#inferasyncof)
    - [`InferAsync`](#inferasync)
    - [`InferValue`](#infervalue)
  - [Iterable](#iterable)
    - [`IterValue`](#itervalue)
    - [`IterableElement`](#itervalue)
  - [Value](#value)
    - [`ValueConstructor`](#valueconstructor)
    - [`ValueShape`](#valueshape)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)
- [Packages](#packages)

## Related packages

- **[@typedly/adaptable-data](https://github.com/typedly/adaptable-data)**: A **TypeScript** type definitions for data adapter.
- **[@typedly/collection](https://github.com/typedly/collection)**: A **TypeScript** type definitions package for data collections with customizable storage.
- **[@typedly/configurable-data](https://github.com/typedly/configurable-data)**: A **TypeScript** type definitions for configurable data.
- **[@typedly/data-adapter](https://github.com/typedly/data-adapter)**: A **TypeScript** type definitions for data adapter.
- **[@typedly/data-traits](https://github.com/typedly/data-traits)**: A **TypeScript** type definitions for data traits.
- **[@typescript-package/data](https://github.com/typescript-package/data)**: A lightweight **TypeScript** library for basic data management.
- **[@typescript-package/collection](https://github.com/typescript-package/collection)**: A lightweight **TypeScript** library for data collection.

## Installation

Peer dependencies

```bash
npm install @typedly/constructor --save-peer
```

The package

```bash
npm install @typedly/data --save-peer
```

## Api

```typescript
import {
  // Configuration
  CacheableDataSettings,
  CacheableSettings,
  DataConfig,
  DataSettings,

// Inference.
  InferAsync,
  InferAsyncOf,
  InferValue,

  // Iterable.
  IterValue,
  IterableElement,

  // Data.
  DataConstructor,
  DataShape,

  // Return types
  AsyncReturn,
  // Input types
  DataConstructorInput,
  DataConstructorTuple,

  // Value.
  ValueConstructor,
  ValueShape,
} from '@typedly/data';
```

### Configuration

#### `CacheableDataSettings`

The cacheable data settings type combines the data settings with the cacheable settings, allowing for optional or required asynchronous functions for fetching and updating the data value based on the read-only flag.

```typescript
import { CacheableDataSettings } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/configuration/lib/cacheable.data.settings.ts)

#### `CacheableSettings`

The cacheable settings interface defines the structure for configuring cacheable data operations, including optional asynchronous functions for clearing, destroying, fetching, and updating the data value.

```typescript
import { CacheableSettings } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/configuration/lib/cacheable.settings.ts)

#### `DataConfig`

The type for the data configuration, which can be either a full configuration object of `C` or just an async flag.

```typescript
import { DataConfig } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/configuration/lib/data.config.ts)

#### `DataSettings`

The settings for a data type.

```typescript
import { DataSettings } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/configuration/lib/data.settings.ts)

### Inference

#### `InferAsyncOf`

Infers the async flag from a tuple of arguments, returning true if any of the arguments has an async flag set to true.

```typescript
import { InferAsync } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/inference/lib/infer-async-of.type.ts)

#### `InferAsync`

Infers the async flag from the settings `DataSettings` or shape `DataShape`.

```typescript
import { InferAsync } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/inference/lib/infer-async.type.ts)

#### `InferValue`

Infers the value type from a data shape interface.

```typescript
import { InferAsync } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/inference/lib/infer-value.type.ts)

### Iterable

#### `IterElement`

The iterate element type.

```typescript
import { IterElement } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/iterable/lib/iterable-element.type.ts)

#### `IterValue`

The iterated value type.

```typescript
import { IterValue } from '@typedly/data';
```

[Source](http://github.com/typedly/data/blob/main/src/iterable/lib/iter-value.type.ts)

### Data

#### `AsyncReturn`

The conditional return type for async methods.

```typescript
import { AsyncReturn } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/lib/type/async-return.type.ts)

#### `DataConstructorInput`

The input type for data constructors, with arguments support.

```typescript
import { DataConstructorInput } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/lib/type/data-constructor-input.type.ts)

#### `DataConstructorTuple`

The input type for data constructors, with arguments support.

```typescript
import { DataConstructorTuple } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/lib/type/data-constructor-tuple.type.ts)

#### `DataConstructor`

The constructor interface for data types.

```typescript
import { DataConstructor } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/lib/interface/lib/data.constructor.ts)

#### `DataShape`

The shape of a `Data` type.

```typescript
import { DataShape } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/lib/interface/data.shape.ts)

### Value

#### `ValueConstructor`

```typescript
import { ValueConstructor } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/value/lib/value.constructor.ts)

#### `ValueShape`

The shape of a `Value` type.

```typescript
import { ValueShape } from '@typedly/data';
```

[Source](https://github.com/typedly/data/blob/main/src/value/lib/value-shape.interface.ts)

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [4Fund](https://4fund.com/bruubs)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [Ko-fi](https://ko-fi.com/sterblack)
- [OpenCollective](https://opencollective.com/sterblack)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)
- [PayPal](https://paypal.me/sterblack)
- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- ~~[Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)~~

or via Trust Wallet

- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][package-license])

## Packages

- **[@typescript-package/chain-descriptor](https://github.com/typescript-package/chain-descriptor)**: A **TypeScript** library for chain property descriptor.
- **[@typescript-package/controlled-descriptor](https://github.com/typescript-package/controlled-descriptor)**: A **TypeScript** library for controlled property descriptor.
- **[@typescript-package/controller](https://github.com/typescript-package/controller)**: A **TypeScript** package with for various kind of controllers.
- **[@typescript-package/descriptor-chain](https://github.com/typescript-package/descriptor-chain)**: A **TypeScript** library for property descriptor chain.
- **[@typescript-package/descriptor](https://github.com/typescript-package/descriptor)**: A **TypeScript** library for property descriptor.
- **[@typescript-package/descriptors](https://github.com/typescript-package/descriptors)**: A **TypeScript** library for property descriptors.
- **[@typescript-package/property](https://github.com/typescript-package/property)**: A **TypeScript** package with features to handle object properties.
- **[@typescript-package/wrap-descriptor](https://github.com/typescript-package/wrap-descriptor)**: A **TypeScript** package for wrapping object descriptors.
- **[@typescript-package/wrap-property](https://github.com/typescript-package/wrap-property)**: A **TypeScript** package for wrapping object properties.
- **[@typescript-package/wrapped-descriptor](https://github.com/typescript-package/wrapped-descriptor)**: A lightweight **TypeScript** library for wrapped property descriptor.
- **[@xtypescript/property](https://github.com/xtypescript/property)** - A comprehensive, reactive **TypeScript** library for precise and extensible object property control.

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dangularpackage%26type%3Dpatrons&style=flat
[patreon-link]: https://www.patreon.com/join/angularpackage/checkout?fan_landing=true&rid=0

<!-- Discord -->
[discord-badge]: https://img.shields.io/discord/925168966098386944?style=social&logo=discord&label=Discord
[discord-channel]: https://discord.com/invite/rUCR2CW75G

<!-- Gitter -->
[gitter-badge]: https://img.shields.io/gitter/room/angular-package/ap-sass?style=social&logo=gitter
[gitter-chat]: https://app.gitter.im/#/room/#ap-sass:gitter.im

<!-- Twitter -->
[twitter-badge]: https://img.shields.io/twitter/follow/angularpackage?label=%40angularpackage&style=social
[twitter-follow]: https://twitter.com/angularpackage

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [package-badge-issues]: https://img.shields.io/github/issues/typedly/data
  [package-badge-forks]: https://img.shields.io/github/forks/typedly/data
  [package-badge-stars]: https://img.shields.io/github/stars/typedly/data
  [package-badge-license]: https://img.shields.io/github/license/typedly/data
  <!-- GitHub: badges links -->
  [package-issues]: https://github.com/typedly/data/issues
  [package-forks]: https://github.com/typedly/data/network
  [package-license]: https://github.com/typedly/data/blob/master/LICENSE
  [package-stars]: https://github.com/typedly/data/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [package-npm-badge-svg]: https://badge.fury.io/gh/typedly%2Fdata.svg
  [package-npm-badge]: https://badge.fury.io/js/@typedly%2Fdata

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
