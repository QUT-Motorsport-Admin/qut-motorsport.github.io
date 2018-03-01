#!/usr/bin/env node

const cpy = require('cpy');

cpy(['src/public/*','!src/public/images','!src/public/favicon'], 'dist/public').then(() => {
    console.log('Public files copied from SRC to DIST complete');
});

cpy('src/public/favicon/*', 'dist/public/favicon').then(() => {
    console.log('Public (Favicon) files copied from SRC to DIST complete');
});

cpy('src/public/images/*', 'dist/public/images').then(() => {
    console.log('Public (Images) files copied from SRC to DIST complete');
});

cpy('src/config/*', 'dist/config').then(() => {
    console.log('Config files copied from SRC to DIST complete');
});