import { parseWhatsApp } from './whatsapp.js';
import { parseJson } from './json.js';

export const parsers = {
    whatsapp: {
        name: 'WhatsApp',
        parse: parseWhatsApp,
        extensions: ['.txt']
    },
    json: {
        name: 'JSON',
        parse: parseJson,
        extensions: ['.json']
    }
};

export const getParser = (filePath) => {
    if (filePath.endsWith('.txt')) {
        return parsers.whatsapp;
    }
    if (filePath.endsWith('.json')) {
        return parsers.json;
    }
    return null;
};
