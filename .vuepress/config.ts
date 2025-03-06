import { defineUserConfig } from 'vuepress';
import { description, name } from '../package.json';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';
// import * as glob from 'glob';
// import * as path from 'path';
//
// const dir = 'src';
// const rootPath = path.resolve(__dirname, '..');
// const dirPath = path.resolve(rootPath, dir);
// const dirSidebar = glob.sync(`${dirPath}/**/*.md`)
//   .map(file => file.substring(rootPath.length, file.length))
//   .filter(file => file.indexOf('node_modules') === -1)
//   .sort()
//   .reverse()
// const rootPagePath = `/${dir}/README.md`;
// const nextPagePath = dirSidebar.find((value, index, array) => value != rootPagePath) || rootPagePath;
// console.log('rootPath', rootPath)
// console.log('journalPath', journalPath)
// console.log('journalSidebar', journalSidebar)
// console.log('rootPagePath', rootPagePath)
// console.log('firstBlogPath', firstBlogPath)

export default defineUserConfig({
  base: !process.env.BASE_HREF ? '/' : `/${name}/`,
  title: description,
  bundler: viteBundler(),
  theme: defaultTheme({
    repo: `daggerok/${name}`, // same as repo: `https://github.com/daggerok/${name}`, // repo: `https://gitlab.com/daggerok/${name}`, // because GitHub is used by default, change this accordingly
    docsBranch: 'master',
    docsDir: '.',
    lastUpdated: true,
    // sidebar: dirSidebar,
    // navbar: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Next', link: nextPagePath || `/${dir}/` },
    // ],
  }),
  plugins: [
    searchPlugin({ /* options */}),
  ],
});
