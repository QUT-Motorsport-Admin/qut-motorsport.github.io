#!/usr/bin/env node

const cpy = require('cpy');

cpy(['src/docs/public/*','!src/public/images','!src/public/favicon'], 'public').then(() => {
    console.log('Public files copied from SRC to DIST complete');
});

cpy('src/docs/public/favicon/*', 'public/favicon').then(() => {
    console.log('Public (Favicon) files copied from SRC to DIST complete');
});

cpy('src/docs/public/images/*', 'public/images').then(() => {
    console.log('Public (Images) files copied from SRC to DIST complete');
});

cpy('src/docs/config/*', 'config').then(() => {
    console.log('Config files copied from SRC to DIST complete');
});