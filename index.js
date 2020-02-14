const { rules } = require('eslint-config-airbnb/rules/react')

module.exports = {
  extends: ['standard', 'airbnb'],
  rules: {
    semi: ['error', 'never'],
    'class-methods-use-this': ['error', {
      exceptMethods: [
        ...rules['class-methods-use-this'][1].exceptMethods,
        'componentWillReact',
        'componentDidShow',
        'componentDidHide'
      ]
    }],
    'react/state-in-constructor': ['off'],
    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
      skipUndeclared: true
    }],
    'arrow-body-style': ['warn', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'import/prefer-default-export': ['warn'],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'no-unused-vars': ['error', {
      vars: 'all',
      varsIgnorePattern: '[T]aro|[C]omponent',
      args: 'all',
      ignoreRestSiblings: true
    }],
  }
}
