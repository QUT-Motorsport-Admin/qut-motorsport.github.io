#!/usr/bin/env node

const cpy = require('cpy');
 
cpy('src/config', 'dist/config').then(() => {
    console.log('Files copied from SRC to DIST complete');
});

// cpy('src/public', 'dist/public').then(() => {
//     console.log('files copied');
// });