import { defineUserConfig } from 'vuepress';
import { description, name } from '../package.json';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';
// import * as glob from 'glob';
// import * as path from 'path';
//
// const target = 'src';
// const rootPath = path.resolve(__dirname, '..');
// const targetPath = path.resolve(rootPath, target);
// const targetSidebar = glob.sync(`${targetPath}/**/*.md`)
//   .map(file => file.substring(rootPath.length, file.length))
//   .filter(file => file.indexOf('node_modules') === -1)
//   .sort()
//   .reverse()
// const rootPagePath = `/${target}/README.md`;
// const nextPagePath = targetSidebar.find((value, index, array) => value != rootPagePath) || rootPagePath;
// console.log('target', target)
// console.log('rootPath', rootPath)
// console.log('targetPath', targetPath)
// console.log('dirSidebar', targetSidebar)
// console.log('rootPagePath', rootPagePath)
// console.log('nextPagePath', nextPagePath)

export default defineUserConfig({
  base: !process.env.BASE_HREF ? '/' : `/${name}/`,
  title: description,
  bundler: viteBundler(),
  theme: defaultTheme({
    repo: `daggerok/${name}`, // same as repo: `https://github.com/daggerok/${name}`, // repo: `https://gitlab.com/daggerok/${name}`, // because GitHub is used by default, change this accordingly
    docsBranch: 'master',
    docsDir: '.',
    lastUpdated: true,
    // sidebar: targetSidebar,
    // navbar: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Next', link: nextPagePath || `/${target}/` },
    // ],
  }),
  plugins: [
    searchPlugin({ /* options */}),
  ],
});
