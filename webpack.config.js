import * as path from 'path';
import {fileURLToPath} from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pages = [
    'index',
    'about',
    'products',
    'contact',
]

const settings = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name]-[hash][ext]',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        devMiddleware: {
            writeToDisk: true,
        },
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
        ...pages.map(item => {
            console.log(item);

            return new HtmlWebpackPlugin({
                filename: item + '.html',
                template: `src/pages/${item}.html`,
            });
        }),
    ],
}

export default settings;
