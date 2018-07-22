const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
    include: path.resolve(__dirname, "../")
  });

  defaultConfig.resolve.extensions.push(".scss");

  return defaultConfig;
};