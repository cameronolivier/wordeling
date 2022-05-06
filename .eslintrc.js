module.exports = {
  extends: ['airbnb-typescript-prettier'],
  rules: {
    semi: 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/static-property-placement': 0,
    'jsx-a11y/alt-text': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.js'
        ]
      }
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description', minimumDescriptionLength: 10 }
    ]
  }
}
