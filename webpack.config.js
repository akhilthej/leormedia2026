// webpack.config.js
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  mode: 'production',

  // Add your existing entry, output, module, etc. if needed
  // entry: './src/index.js',
  // output: { path: __dirname + '/build', filename: 'bundle.js' },

  plugins: [
    // GZIP Compression
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240, // Only assets bigger than 10KB
      minRatio: 0.8, // Compress if ratio is better than 0.8
      deleteOriginalAssets: false, // Keep original files
    }),

    // Brotli Compression
    new BrotliPlugin({
      asset: '[path][base].br',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
