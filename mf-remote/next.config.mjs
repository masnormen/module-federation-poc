import {NextFederationPlugin} from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote', // <= nama project current
        filename: 'static/chunks/remoteEntry.js', // <= matching url output nextjs di /_next/...
        exposes: {
          './components/Ticker': './src/components/Ticker',
          './components/Carousel': './src/components/Carousel',
          './components/TopupSection': './src/components/TopupSection',
          './helper/tool': './src/helper/tool',
          './pages/topup-gssp': './src/pages/topup-gssp',
          './pages/topup-gip': './src/pages/topup-gip',
          './pages-map': './pages-map.js',
        },
        extraOptions: {
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      }),
    );

    return config;
  },
};

export default nextConfig;
