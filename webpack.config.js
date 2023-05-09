import * as path from 'path';
import {fileURLToPath} from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const settings = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name]-[hash][ext]',
    },
    module: {
        rules: [
            {
                test:  /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name]-[hash].css',
        }),
    ],
}

export default settings;
