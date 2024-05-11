# unib64

This NodeJS package Converts Unicode text to Base64 string and viceversa.

## Motivation

This package is entirely based The "Unicode Problem" solution as depicted into Mozilla Developers web (See [References](#references)).

## Use Cases

- Encode Environment variables expected to hold arbitrary Unicode text.

## Usage

### encode

```javascript
import { encode } from 'unib64'

console.log(encode("a Ā 𐀀 文 🦄")) // YSDEgCDwkICAIOaWhyDwn6aE
```

### decode

```javascript
import { decode } from 'unib64'

console.log(decode("YSDEgCDwkICAIOaWhyDwn6aE")) // a Ā 𐀀 文 🦄
```

## Tests

Open a terminal at `app` and run the following command:

```bash
$ npm test
```

## <a name="references"></a> References

- [The "Unicode Problem"](https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem)
