// Copyright (c) Rafa Calvo
// SPDX-License-Identifier: MIT

import * as encoder from './encoder.js'
import * as decoder from './decoder.js'

const encode = (unicodeText) => {
    return encoder.encode(unicodeText);
}

const decode = (base64String) => {
    return decoder.decode(base64String);
}

export { encode, decode }
