import { defineUserConfig } from 'vuepress';
import { description, name } from '../package.json';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  base: !process.env.BASE_HREF ? '/' : `/${name}/`,
  title: description,
  bundler: viteBundler(),
  theme: defaultTheme({
    repo: `daggerok/${name}`, // repo: `https://github.com/daggerok/${name}`,
    docsBranch: 'master',
    docsDir: '.',
    lastUpdated: true,
  }),
  plugins: [
    searchPlugin({ /* options */}),
  ],
});
