#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const { Command } = require('commander');
const program = new Command();

program
    .argument('<project-name>')
    .action(async (name) => {
        const src = path.resolve(__dirname, '..', 'template');
        const dest = path.resolve(process.cwd(), name);
        try {
            await fs.copy(src, dest);
            console.log(`✅ Project ready in ${dest}`);
        } catch (err) {
            console.error('Gagal copy template:', err);
        }
    });

program.parse();
