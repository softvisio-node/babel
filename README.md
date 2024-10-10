<!-- !!! DO NOT EDIT, THIS FILE IS GENERATED AUTOMATICALLY !!!  -->

> :information_source: Please, see the full project documentation here:\
> [https://softvisio-node.github.io/babel/](https://softvisio-node.github.io/babel/)

# Introduction

Optimal `babel` config for parsing and transformations.

## Install

```shell
npm i @softvisio/babel
```

## Usage

```javascript
import { createConfig, parseAsync, transformAsync } from "@softvisio/babel";

// parse
const ast = await parseAsync(code, createConfig());

// transform
const { code, map } = await transformAsync(code, createConfig());
```
