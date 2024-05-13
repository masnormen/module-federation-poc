const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TODO 1
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host', // <= nama project current
        filename: 'static/chunks/remoteEntry.js', // <= sebenernya ga dibutuhkan di host, tapi required
        remotes: {
          /**
           * format:
           * {remote-alias}: '{remote-name}@{url-to-remoteEntry}'
           * cara pakai -> import('{remote-alias}/{path-ke-module-yang-diekspos}')
           */
          "remote": `remote@https://remote.local/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
      }),
    );

    // Hide annoying async warning
    config.output.environment = {
      ...config.output.environment,
      asyncFunction: true
    };

    return config;
  },
};

module.exports = nextConfig;
