// // const withSass = require("@zeit/next-sass");

const imageLoader = ({ src, width, quality }) => {
  return src;
};

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    loader: "custom",
  },
};
