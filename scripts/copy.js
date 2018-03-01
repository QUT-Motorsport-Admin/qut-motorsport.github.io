#!/usr/bin/env node

const cpy = require('cpy');

cpy('src/public/favicon/*', 'public/favicon').then(() => {
    console.log('Public (Favicon) files copied from SRC to DIST complete');
});

cpy('src/public/images/*', 'public/images').then(() => {
    console.log('Public (Images) files copied from SRC to DIST complete');
});

cpy('src/config/*', 'config').then(() => {
    console.log('Config files copied from SRC to DIST complete');
});