<!-- !!! DO NOT EDIT, THIS FILE IS GENERATED AUTOMATICALLY !!!  -->

> ℹ️ Please, see the full project documentation here:<br><https://softvisio-node.github.io/babel/>

# Introduction

Optimal `babel` config for parsing and transformations.

## Install

```sh
npm install @softvisio/babel
```

## Usage

```javascript
import { createConfig, parseAsync, transformAsync } from "@softvisio/babel";

// parse
const ast = await parseAsync( code, createConfig() );

// transform
const { code, map } = await transformAsync( code, createConfig() );
```
