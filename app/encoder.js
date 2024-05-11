// Copyright (c) Rafa Calvo
// SPDX-License-Identifier: MIT

function bytesToBase64(bytes) {
    const binString = Array.from(bytes, (byte) =>
        String.fromCodePoint(byte),
    ).join("");
    return btoa(binString);
}

const encode = (unicodeText) => {
    return bytesToBase64(new TextEncoder().encode(unicodeText));
}

export { encode }
