#!/usr/bin/env node

const cpy = require('cpy');
 
cpy('src/config/*', 'dist/config').then(() => {
    console.log('Config files copied from SRC to DIST complete');
});

cpy('src/public/*', 'dist/public').then(() => {
    console.log('Public files copied from SRC to DIST complete');
});