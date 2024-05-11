// Copyright (c) Rafa Calvo
// SPDX-License-Identifier: MIT

import * as encoder from './encoder.js'

function base64ToBytes(base64) {
    const binString = atob(base64);
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

const encode = (unicodeText) => {
    return encoder.encode(unicodeText);
}

const decode = (base64String = "") => {
    return new TextDecoder().decode(base64ToBytes(base64String));
}

export { encode, decode }
