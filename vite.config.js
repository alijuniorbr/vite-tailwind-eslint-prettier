import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser'
// import { uglify } from 'rollup-plugin-uglify'
// import autoprefixer from 'autoprefixer'
// import tailJiT from '@tailwindcss/jit'
//import cssnano from 'cssnano'

const path = require('path')

// import cleanup from 'rollup-plugin-cleanup'
// const cleanupOptions = {
//   comments: 'none'
// }

const terserOptions = {
  // parse: {
  //   // parse options
  // },
  compress: {
    // compress options
    drop_console: true
  },
  // mangle: {
  //   // mangle options
  //   properties: {
  //     // mangle property options
  //   }
  // },
  output: {
    // format options (can also use `output` for backwards compatibility)
    comments: false
  },
  ecma: 5, // specify one of: 5, 2015, 2016, etc.
  keep_classnames: false,
  keep_fnames: false,
  ie8: false,
  module: false,
  nameCache: null, // or specify a name cache object
  safari10: false,
  toplevel: false
}

// const terserOptions2 = {
//   compress: {
//     // turn off flags with small gains to speed up minification
//     arrows: true,
//     collapse_vars: true, // 0.3kb
//     comparisons: true,
//     computed_props: true,
//     hoist_funs: true,
//     hoist_props: true,
//     hoist_vars: true,
//     inline: true,
//     loops: true,
//     negate_iife: true,
//     properties: true,
//     reduce_funcs: true,
//     reduce_vars: true,
//     switches: true,
//     toplevel: true,
//     typeofs: true,
//
//     // a few flags with noticable gains/speed ratio
//     // numbers based on out of the box vendor bundle
//     booleans: true, // 0.7kb
//     if_return: true, // 0.4kb
//     sequences: true, // 0.7kb
//     unused: true, // 2.3kb
//
//     // required features to drop conditional branches
//     conditionals: true,
//     dead_code: true,
//     evaluate: true
//   },
//   mangle: {
//     safari10: true
//   },
//   format: {
//     // format options (can also use `output` for backwards compatibility)
//     comments: false
//   }
// }

// const terserOptions3 = {
//   ecma: undefined,
//   warnings: false,
//   parse: {},
//   compress: {
//     //pure_funcs: ['console.log'],
//     drop_console: true,
//     drop_debugger: true,
//     keep_classnames: false,
//     keep_fnames: false,
//     module: false
//   },
//   keep_classnames: false,
//   keep_fnames: false,
//   module: false,
//   mangle: true, // Note `mangle.properties` is `false` by default.
//   output: {
//     comments: false
//   },
//   // format: {
//   //   comments: false
//   // },
//   // extractComments: false,
//   toplevel: false,
//   nameCache: null,
//   ie8: false,
//   safari10: false
// }

// import scss from 'rollup-plugin-scss'
// import autoprefixer from 'autoprefixer'
// import postcss from 'postcss'
// const scssOptions = {
//   output: 'dist/assets/styles.css',
//   outputStyle: 'compressed',
//   processor: (css) =>
//     postcss([autoprefixer])
//       .process(css)
//       .then((result) => result.css)
// }

/////////////////////////////////////////////////////////////////////////
// https://vitejs.dev/config/
/////////////////////////////////////////////////////////////////////////

export default ({ command, mode }) => {
  const isProduction = command === 'build'

  console.log(command, mode)

  //build mode
  const config = defineConfig({
    plugins: [
      vue(),
      terser(terserOptions)
      // uglify({
      //   output: {
      //     comments: false
      //   }
      // })
      //process.env.NODE_ENV === 'production' && uglify()
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, './src')
        },
        {
          find: '~',
          replacement: path.resolve(__dirname, './src/components')
        }
      ]
    },
    logLevel: 'info'
    //server: { open: '/' }
  })

  if (isProduction) {
    config.css = {
      postcss: {
        plugins: [
          require('@tailwindcss/jit')({}),
          require('autoprefixer')({}),
          require('cssnano')({
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true
                }
              }
            ]
          })
        ]
      }
    }
  }

  return config
}
