import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gliding App | Documentation",
  description: "Documentation for the GlidingApp.",
  appearance: false,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: false
  },
  cleanUrls: false,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    ['script', {}, `
      // Auto-redirect app routes
      (function() {
        var path = window.location.pathname;
        // Exception for /registration
        if (path.startsWith('/registration')) return;
        
        // If not .html, not root, not ending with /, and no extension, redirect to .html
        if (
          path !== '/' &&
          !path.endsWith('.html') &&
          !path.endsWith('/') &&
          !/\.[a-zA-Z0-9]+$/.test(path)
        ) {
          window.location.replace(path + '.html' + window.location.search + window.location.hash);
        }
      })();
    `]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        logoLink: '/en/index.html',
        sidebar: [
        ],
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search docs',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
          {
            text: 'General',
            items: [
              { text: 'About us', link: '/en/general/about' },
              { text: 'Pricing', link: '/en/general/pricing' },
              { text: 'FAQ', link: '/en/general/faq' }
            ]
          },
          {
            text: 'Implementation',
            items: [
              { text: 'Implementation', link: '/en/implementation/implementation' },
              { text: 'Presentations', link: '/en/implementation/presentations' },
              { text: 'Setup Launch Point', link: '/en/implementation/setup-launch-point' }
            ]
          },
          {
            text: '📅 plan',
            items: [
              { text: 'Daily Member Registration', link: '/en/plan/daily-member-registration' },
              { text: 'Rosters and Schedules', link: '/en/plan/rosters-and-schedules' }
            ]
          },
          {
            text: '✈️ fly',
            items: [
              { text: 'Automatic Launch Registration', link: '/en/fly/automatic-launch-registration' },
              { text: 'Personal Pilot Logbook', link: '/en/fly/personal-pilot-logbook' }
            ]
          },
          {
            text: '🎓 train',
            items: [
              { text: 'Daily Instructor Reports', link: '/en/train/daily-instructor-reports' },
              { text: 'DTO Progression Cards', link: '/en/train/dto-progression-cards' }
            ]
          },
          {
            text: '📋 comply',
            items: [
              { text: 'DTO Overview', link: '/en/comply/dto-overview' },
              { text: 'Rolling Recency', link: '/en/comply/rolling-recency' }
            ]
          },
          {
            text: '🔧 maintain',
            items: [
              { text: 'Maintenance Schedule', link: '/en/maintain/maintenance-schedule' },
              { text: 'Workorders', link: '/en/maintain/workorders' }
            ]
          },
          {
            text: '💳 pay',
            items: [
              { text: 'Flight Charges', link: '/en/pay/flight-charges' },
              { text: 'Prepaid Vouchers', link: '/en/pay/prepaid-vouchers' }
            ]
          }
        ]
      }
    },
  },

})