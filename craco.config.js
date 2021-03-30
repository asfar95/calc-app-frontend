const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#C10708',
              '@secondary-color': '#FFFFFF',
              '@text-color': '#A4A4A4'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};