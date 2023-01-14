'use strict';

const { configs } = require('@nullvoxpopuli/eslint-configs');

const config = configs.ember();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['*.cjs'],
              rules: {
'n/no-unsupported-features/es-syntax': [
  'error',
  {

                    version: '16.0.0',
  }
],
                'n/no-unsupported-features': [
                  'error',
                  {
                    version: '16.0.0',
                    ignores: [],
                  },
                ],
              },
    },
    {
      files: ['**/*.ts'],
      rules: {
        /**
         * any can be useful
         */
        '@typescript-eslint/no-explicit-any': 'off',
        /**
         * there is heavy use of `object` in this library
         */
        '@typescript-eslint/ban-types': 'off',
        /**
         * The following types do are not defined by the definitely typed packages
         * - @glimmer/tracking/primitives/cache
         *   - getValue
         * - @ember/helper
         *   - invokeHelper
         *   - capabilities
         *   - setHelperManager
         */
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
