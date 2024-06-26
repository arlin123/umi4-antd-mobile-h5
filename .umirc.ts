import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: false,
  access: {},
  model: {},
  initialState: {},
  request: {},
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 375,
      mediaQuery: true,
      exclude: [/node_modules/],
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      replace: true, // 是否转换后直接更换属性值
    }),
  ],
  base: '/umi4-antd-mobile-h5', // 打包路径，默认是/
  publicPath: '/umi4-antd-mobile-h5/', // 资源访问路径，默认/
  define: {},
  layout: false, // antd 的 layout
  routes: [
    { exact: true, path: '/', redirect: '/home' },
    {
      path: '/',
      component: '@/layouts/app',
      name: '首页',
      routes: [
        {
          name: '首页',
          title: '标题',
          path: '/home',
          component: '@/pages/Home/index',
        },
        {
          name: '首页2',
          title: '标题',
          path: '/page2',
          component: '@/pages/Page2/index',
        },
        {
          name: '首页3',
          title: '标题',
          path: '/page3',
          component: '@/pages/Page3/index',
        },
        {
          name: '首页4',
          title: '标题',
          path: '/page4',
          component: '@/pages/Page4/index',
        },
        {
          name: '首页4',
          title: 'Access',
          path: '/access',
          component: '@/pages/Access/index',
        },
      ],
    },
  ],

  npmClient: 'yarn',
  tailwindcss: {},
});
