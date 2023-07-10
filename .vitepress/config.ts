import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LCZBlog",
  description: "LCZBlog",
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          },
          "zh-hant": {
            translations: {
              button: {
                buttonText: '搜尋',
                buttonAriaLabel: '搜尋'
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉'
                }
              }
            }
          },
        }
      }
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans',
      title: 'LCZBlog',
      description: 'LCZBlog',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // Localized theme config will override the global config.
        outline: {
          label: '在此页中',
        },

        nav: [
          { text: '首页', link: '/' },
          { text: '归档', link: '/archives' },
          { text: '朋友们', link: '/links' },
          { text: '关于', link: '/about' },
          {
            text: '取得联系',
            items: [
              { text: 'QQ 群组', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=8KRIaayC_pvsvcB0um4jnAeLV3GHH6Uw&jump_from=webapi&authKey=a9lqbGtnA7E11XePNsfATM1y65Qzwr5QiGc5MkiNdDhPGmQ8bh9ep2vURD8yUpz7' },
              { text: 'GitHub', link: 'https://github.com/LiCaoZ' },
              { text: '微博', link: 'https://weibo.com/u/5912241478' },
              { text: '知乎', link: 'https://www.zhihu.com/people/LiCaoZ' },
              { text: '电子邮件', link: 'mailto:licaoz@outlook.it' },
            ],
          },
        ]
      }
    },
    "zh-hant": {
      label: '繁體中文',
      lang: 'zh-Hant',
      title: 'LCZBlog',
      description: 'LCZBlog',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outline: {
          label: '在此頁中',
        },

        nav: [
          { text: '首頁', link: '/zh-hant' },
          { text: '歸檔', link: '/zh-hant/archives' },
          { text: '朋友們', link: '/zh-hant/links' },
          { text: '關於', link: '/zh-hant/about' },
          {
            text: '取得聯絡',
            items: [
              { text: 'GitHub', link: 'https://github.com/LiCaoZ' },
              { text: 'Telegram', link: 'https://t.me/LCZLab' },
              { text: 'Twitter', link: 'https://twitter.com/LiCaoZ' },
              { text: '電子郵件', link: 'mailto:licaoz@outlook.it' },
            ],
          },
        ],
      }
    },
    "en-us": {
      label: 'English',
      lang: 'en-US',
      title: "LCZBlog",
      description: "LCZBlog",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        nav: [
          { text: 'Home', link: '/en-us' },
          { text: 'Archives', link: '/en-us/archives' },
          { text: 'Friends', link: '/en-us/links' },
          { text: 'About', link: '/en-us/about' },
          {
            text: 'Contact',
            items: [
              { text: 'GitHub', link: 'https://github.com/LiCaoZ' },
              { text: 'Telegram', link: 'https://t.me/LCZLab' },
              { text: 'Twitter', link: 'https://twitter.com/LiCaoZ' },
              { text: 'E-mail', link: 'mailto:licaoz@outlook.it' },
            ],
          },
        ],
      }
    },

  }
},
)
