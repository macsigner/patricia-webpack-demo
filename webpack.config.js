import * as path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const settings = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name]-[hash][ext]',
    },
}

export default settings;
