const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#FECE2F' },
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
  })
)
