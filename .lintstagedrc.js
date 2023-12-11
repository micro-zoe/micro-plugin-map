module.exports={
  "{src}/**/*.{md,json}": [
    "prettier --write --no-error-on-unmatched-pattern"
  ],
  "*{src}/**/.{js,jsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "{src}/**/*.{ts,tsx}": [
    "eslint --fix",
    "prettier --parser=typescript --write",
  ]
}
