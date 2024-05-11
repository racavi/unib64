// Copyright (c) Rafa Calvo
// SPDX-License-Identifier: MIT

import assert from 'assert'

import { encode, decode } from '../index.js';

describe('index', () => {

    describe('encode(unicodeText)', () => {

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

    describe('decode(base64String)', () => {

        it('should decode base64 string', () => {
            const expected = "a Ā 𐀀 文 🦄"

            const decoded = decode("YSDEgCDwkICAIOaWhyDwn6aE")

            assert.equal(expected, decoded);
        });

        it('should decode undefined base64 string', () => {
            const expected = ""
    
            const decoded = decode(undefined)
            
            assert.equal(expected, decoded);
        });
    
    });


});
