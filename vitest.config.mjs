import tsConfigPaths from 'vite-tsconfig-paths'
/** @type {import('vitest/config').UserConfig} */
const config = {
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
  },
};

export default config
