module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
