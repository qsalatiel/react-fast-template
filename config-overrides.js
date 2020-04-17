const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#d9363e' },
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  fixBabelImports('formik-antd', {
    libraryName: 'formik-antd',
    libraryDirectory: 'es',
    style: true,
  }),
);
