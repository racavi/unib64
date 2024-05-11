// Copyright (c) Rafa Calvo
// SPDX-License-Identifier: MIT

function base64ToBytes(base64) {
    const binString = atob(base64);
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
    const binString = Array.from(bytes, (byte) =>
        String.fromCodePoint(byte),
    ).join("");
    return btoa(binString);
}

const encode = (unicodeText) => {
    return bytesToBase64(new TextEncoder().encode(unicodeText));
}

// Usage
encode("a Ā 𐀀 文 🦄") // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"

export {encode}
