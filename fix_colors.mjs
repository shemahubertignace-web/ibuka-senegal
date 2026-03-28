import fs from 'fs';

function walk(dir) {
    let results = [];
    let list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    content = content.replace(/#C9A050/g, '#E5E7EB');
    content = content.replace(/#d4aa5a/g, '#9CA3AF');
    content = content.replace(/text-gold/g, 'text-accent');
    content = content.replace(/bg-gold/g, 'bg-accent');
    content = content.replace(/border-gold/g, 'border-accent');
    // Also catch some inline gold usage if any exist that matched the variables
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated: ' + file);
    }
});
