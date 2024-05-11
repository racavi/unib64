// Copyright (c) Rafa Calvo
// SPDX-License-Identifier: MIT

import assert from 'assert'

import { encode } from '../index.js';

describe('encode', () => {
    it('should encode unicode text', () => {
        const expected = "YSDEgCDwkICAIOaWhyDwn6aE";

        const encoded = encode("a Ā 𐀀 文 🦄");

        assert.equal(expected, encoded);
    });

    it('should encode undefined unicode text', () => {
        const expected = ""

        const encoded = encode(undefined)
        
        assert.equal(expected, encoded);
    });

});
