import commonjs from '@rollup/plugin-commonjs'
import {
  nodeResolve
} from '@rollup/plugin-node-resolve'
import {
  uglify
} from "rollup-plugin-uglify"

export default {
  input: './cli/vuer-cli.js',
  output: {
    file: './cli/vuer-cli.min.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    uglify()
  ]
}
