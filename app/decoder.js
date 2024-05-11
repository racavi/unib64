// Copyright (c) Rafa Calvo
// SPDX-License-Identifier: MIT

function base64ToBytes(base64) {
    const binString = atob(base64);
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

const decode = (base64String = "") => {
    return new TextDecoder().decode(base64ToBytes(base64String));
}

export { decode }
