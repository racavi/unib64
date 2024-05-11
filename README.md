# unib64

This NodeJS package Converts Unicode text to Base64 string and viceversa.

The package is entirely based in The "Unicode Problem" solution as described into Mozilla Developers web (See [References](#references)).


## Use Cases

You may want to use `unib64` to:

- Encode Unicode text to be transmitted among systems not supporting such charsets.
- Encode Unicode text to further be set within an environment variable.


## Installation

If you only need this package's [ESM module](#as-esm-module) in your NodeJS app, then install it as dependency:

```bash
npm install base64
```

__Bonus__: If you expect to use the [CLI program](#as-cli-program) provided by this package, you will need to globally install this package within your system.

```bash
npm install -g base64
```


## Usage

This package provides an ESM module alongside a command line interface, both supplying the same `encode`/`decode` features.

### As CLI program

This package comes along with a command line program enabling you to use the same `encode`/`decode` features as those provided by the ESM module:

#### encode

```bash
$ unib64 encode "a Ā 𐀀 文 🦄"
YSDEgCDwkICAIOaWhyDwn6aE
```

#### decode

```bash
$ unib64 decode "YSDEgCDwkICAIOaWhyDwn6aE"
a Ā 𐀀 文 🦄
```

### As ESM module

#### encode

```javascript
import { encode } from 'unib64'

console.log(encode("a Ā 𐀀 文 🦄")) // YSDEgCDwkICAIOaWhyDwn6aE
```

#### decode

```javascript
import { decode } from 'unib64'

console.log(decode("YSDEgCDwkICAIOaWhyDwn6aE")) // a Ā 𐀀 文 🦄
```


## Tests

Open a terminal within into this repository root directory and run the following command:

```bash
npm test
```


## References

- [The "Unicode Problem"](https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem)
