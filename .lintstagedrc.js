module.exports={
  'src/**/*.{md,json}': [
    "prettier --write --no-error-on-unmatched-pattern"
  ],
  '*src/**/.js': [
    "eslint --fix",
    "prettier --write"
  ],
  'src/**/*.ts': [
    "eslint --fix",
    "prettier --parser=typescript --write",
  ]
}
