import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['init', 'feat', 'fix', 'docs', 'refactor', 'test', 'style', 'chore']
    ],
    'subject-case': [
      2,
      'always',
      ['lower-case', 'upper-case', 'camel-case', 'pascal-case']
    ]
  }
}

module.exports = Configuration
