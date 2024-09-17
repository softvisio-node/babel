<!-- !!! DO NOT EDIT, THIS FILE IS GENERATED AUTOMATICALLY !!!  -->

> :information_source: Please, see the full project documentation here: [https://softvisio-node.github.io/babel/](https://softvisio-node.github.io/babel/).

# Introduction

Optiomal `babel` config for parsing and transformations.

## Install

```shell
npm i @softvisio/babel
```

## Usage

```javascript
import babel from "@softvisio/babel";
import babelConfig from "@softvisio/babel/config";

// parse
const ast = await babel.parseAsync(code, babelConfig);

// transform
const { code, map } = await babel.transformAsync(code, babelConfig);
```
