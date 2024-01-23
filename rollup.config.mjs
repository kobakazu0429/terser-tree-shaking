import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

/**
 * @param {number} input
 * @param {number} passes
 * @returns @type {import('rollup').RollupOptions}
 */
const createConfig = (input, passes) => ({
  input: `./src/in${input}.mjs`,
  output: { file: `./dist/out${input}-${passes}.mjs`, format: "es" },
  plugins: [
    nodeResolve(),
    terser({
      compress: {
        passes,
      },
      format: {
        comments: "all",
        indent_level: 2,
        beautify: true,
      },
    }),
  ],
});

export default /** @type {Array<import('rollup').RollupOptions>} */ ([
  createConfig(1, 1),
  createConfig(2, 1),
  createConfig(3, 1),
  createConfig(4, 1),
  createConfig(5, 1),
  createConfig(6, 1),
  createConfig(7, 1),
  createConfig(1, 6),
  createConfig(2, 6),
  createConfig(3, 6),
  createConfig(4, 6),
  createConfig(5, 6),
  createConfig(6, 6),
  createConfig(7, 6),
]);
