export default [
    {
      path: '/',
      redirect: '/overview'
    },
    {
      path: '/overview',
      name: "Overview",
      meta: {
        menu: {
          title: "Overview",
          newWindow: false,
          iconClass: 'ion ion-ios-apps-outline'
        }
      },
      component: () => import(/* webpackChunkName: "overview-chunk" */ './components/overview/Overview.vue')
    },
    {
      path: '/profile/',
      name: 'Profile',
      meta: {
        menu: {
          title: "Profile",
          newWindow: false,
          iconClass: "ion ion-ios-contact-outline"
        }
      },
      component: () => import(/* webpackChunkName: "profile-chunk" */ './components/profile/Profile.vue')
    },
    {
      path: '/timeline/',
      name: 'Timeline',
      meta: {
        menu: {
          title: "Timeline",
          newWindow: false,
          iconClass: "ion ion-ios-calendar-outline"
        }
      },
      component: () => import(/* webpackChunkName: "timeline-chunk" */ './components/timeline/Timeline.vue')
    },
    {
      path: '/charts/',
      name: 'Charts',
      meta: {
        menu: {
          title: "Charts",
          newWindow: false,
          iconClass: "ion ion-ios-trending-up-outline"
        }
      },
      children: [
        {
          path: 'echarts',
          name: "echarts",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/charts/ECharts.vue'),
          meta: {
            menu: {
              title: "echarts",
              newWindow: false
            }
          }
        },
        {
          path: 'vuecharts',
          name: "vuecharts",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/charts/VueCharts.vue'),
          meta: {
            menu: {
              title: "Vue-chartjs",
              newWindow: false
            }
          }
        }
      ]
    },
    {
      path: '/reports/',
      name: 'Reports',
      meta: {
        menu: {
          title: "Reports",
          newWindow: false,
          iconClass: "ion ion-ios-browsers-outline"
        }
      },
      component: () => import(/* webpackChunkName: "report-chunk" */ './components/reports/Reports.vue')
    },
    {
      path: '/gallery/',
      name: 'Gallery',
      meta: {
        menu: {
          title: "Gallery",
          newWindow: false,
          iconClass: "ion ion-ios-image-outline"
        }
      },
      component: () => import(/* webpackChunkName: "report-chunk" */ './components/gallery/Gallery.vue')
    },
    {
      path: '/forms/',
      name: 'Forms',
      meta: {
        menu: {
          title: "Forms",
          newWindow: false,
          iconClass: "ion ion-ios-card-outline"
        }
      },
      component: () => import(/* webpackChunkName: "report-chunk" */ './components/forms/Forms.vue')
    },
    {
      path: '/editors/',
      name: 'editors',
      meta: {
        menu: {
          title: "Editors",
          newWindow: false,
          iconClass: "ion ion-ios-create-outline"
        }
      },
      component: () => import(/* webpackChunkName: "report-chunk" */ './components/editors/Editors.vue')
    },
    {
      path: '/typography/',
      name: 'typography',
      meta: {
        menu: {
          title: "Typography",
          newWindow: false,
          iconClass: "ion ion-ios-information-circle-outline"
        }
      },
      component: () => import(/* webpackChunkName: "report-chunk" */ './components/typography/Typography.vue')
    },
    {
      path: '/kanban/',
      name: 'Kanban',
      meta: {
        menu: {
          title: "Kanban",
          newWindow: false,
          iconClass: "ion ion-ios-clipboard-outline"
        }
      },
      component: () => import(/* webpackChunkName: "report-chunk" */ './components/kanban/Kanban.vue')
    },
    {
      path: '/icons/',
      name: 'icons',
      meta: {
        menu: {
          title: "icons",
          newWindow: false,
          iconClass: "ion ion-ios-appstore-outline"
        }
      },
      children: [
        {
          path: 'ionic',
          name: "Ionic",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/icons/Ionic.vue'),
          meta: {
            menu: {
              title: "Ionic",
              newWindow: false
            }
          }
        },
        {
          path: 'awesome',
          name: "Awesome font",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/icons/Awesome.vue'),
          meta: {
            menu: {
              title: "Awesome font",
              newWindow: false
            }
          }
        }
      ]
    },
    {
      path: '/blank/',
      name: 'Blank',
      meta: {
        menu: {
          title: "Blank page",
          newWindow: false,
          iconClass: "ion ion-ios-document-outline"
        }
      },
      component: () => import(/* webpackChunkName: "report-chunk" */ './components/pages/Blank.vue')
    },
    {
      path: '/auth/',
      name: 'auth',
      meta: {
        menu: {
          title: "Authorization",
          newWindow: false,
          iconClass: "ion ion-ios-unlock-outline"
        }
      },
      children: [
        {
          path: '404',
          name: "404",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/auth/404.vue'),
          meta: {
            menu: {
              title: "404",
              newWindow: false
            }
          }
        },
        {
          path: 'login',
          name: "Login",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/auth/Login.vue'),
          meta: {
            menu: {
              title: "Login",
              newWindow: false
            }
          }
        },
        {
          path: 'forgotten',
          name: "Forgotten",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/auth/Forgotten.vue'),
          meta: {
            menu: {
              title: "Forgotten password",
              newWindow: false
            }
          }
        },
        {
          path: 'signup',
          name: "Signup",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/auth/Signup.vue'),
          meta: {
            menu: {
              title: "Signup",
              newWindow: false
            }
          }
        }
      ]
    },
    {
      path: '/grid/',
      name: 'Grid',
      meta: {
        menu: {
          title: "Grid",
          newWindow: false,
          iconClass: "ion ion-ios-grid-outline"
        }
      },
      component: () => import(/* webpackChunkName: "report-chunk" */ './components/grid/Grid.vue')
    },
    {
      path: '/components/',
      name: 'Components',
      meta: {
        menu: {
          title: 'Components',
          newWindow: false,
          iconClass: "ion ion-ios-construct-outline"
        }
      },
      children: [
        {
          path: 'alerts',
          name: "alerts",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/alerts/Alerts.vue'),
          meta: {
            menu: {
              title: "Alerts",
              iconClass: "ion ion-ios-alert-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'buttons',
          name: "buttons",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/buttons/Buttons.vue'),
          meta: {
            menu: {
              title: "Buttons",
              iconClass: "ion ion-ios-radio-button-off",
              newWindow: false
            }
          }
        },
        {
          path: 'cards',
          name: "cards",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/cards/CardsMain.vue'),
          meta: {
            menu: {
              title: "Cards",
              iconClass: "ion ion-ios-book-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'collapse',
          name: "Collapse",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/collapse/Collapse.vue'),
          meta: {
            menu: {
              title: "Collapse",
              iconClass: "ion ion-ios-more-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'helpers',
          name: "Helpers",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/helpers/Helpers.vue'),
          meta: {
            menu: {
              title: "Helpers",
              iconClass: "ion ion-ios-help-buoy-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'lists',
          name: "Lists",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/lists/Lists.vue'),
          meta: {
            menu: {
              title: "Lists",
              iconClass: "ion ion-ios-list-box-outline",
              newWindow: false
            }
          }
        },
        {
          path: '/loaders/',
          name: 'Loaders',
          meta: {
            menu: {
              title: "Loaders",
              newWindow: false,
              iconClass: "ion ion-ios-refresh-circle-outline"
            }
          },
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/loading/Loading.vue')
        },
        {
          path: 'modal',
          name: "Modal",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/modal/Modal.vue'),
          meta: {
            menu: {
              title: "Modal",
              iconClass: "ion ion-ios-albums-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'progress',
          name: "Progress",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/progress/Progress.vue'),
          meta: {
            menu: {
              title: "Progress",
              iconClass: "ion ion-ios-speedometer-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'switcher',
          name: "Switcher",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/switcher/Switcher.vue'),
          meta: {
            menu: {
              title: "Switcher",
              iconClass: "ion ion-ios-switch-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'tables',
          name: "tables",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/tables/Tables.vue'),
          meta: {
            menu: {
              title: "Tables",
              iconClass: "on ion-ios-folder-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'tabs',
          name: "Tabs",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/tabs/Tabs.vue'),
          meta: {
            menu: {
              title: "Tabs",
              iconClass: "on ion-ios-folder-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'tags',
          name: "Tags",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/tags/Tags.vue'),
          meta: {
            menu: {
              title: "Tags",
              iconClass: "ion ion-ios-pricetag-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'toast',
          name: "Toast",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/toast/Toast.vue'),
          meta: {
            menu: {
              title: "Toast",
              iconClass: "ion ion-ios-beer-outline",
              newWindow: false
            }
          }
        },
        {
          path: 'tree',
          name: "Tree",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/tree/Tree.vue'),
          meta: {
            menu: {
              title: "Tree",
              iconClass: "ion ion-ios-add",
              newWindow: false
            }
          }
        },
        {
          path: 'widgets',
          name: "widgets",
          component: () => import(/* webpackChunkName: "report-chunk" */ './components/widgets/Widgets.vue'),
          meta: {
            menu: {
              title: "Widgets",
              iconClass: "ion ion-ios-cube-outline",
              newWindow: false
            }
          }
        }
      ]
    }
]