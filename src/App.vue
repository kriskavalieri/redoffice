<template>
  <div id="app" class="app">
    <router-view :key="$route.fullPath"  v-if="$route.name.match(/^auth\./)" ></router-view>
    <div v-else :class="classObject" v-resize>
      <navbar ref="navbar"></navbar>
      <sidebar @click="onNavbarBlur()"></sidebar>
      <div class="content-wrap" id="content-wrap" @click="onNavbarBlur()">
        <main id="content" class="content" role="main">
          <div v-show="isLoading" class="preload-container">
            <redoffice-pre-loader v-show="isLoading" ref="preLoader" :loaderSize=128 class="pre-loader"></redoffice-pre-loader>
            <fun-msg ref="funnies" v-show="isLoading"/>
          </div>
          <router-view :key="$route.fullPath" v-if="!isLoading"></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Navbar from './components/navbar/Navbar'
  import Sidebar from './components/sidebar/Sidebar'
  import Resize from './directives/ResizeHandler'

  const users = [
      {
        "gender": "female",
        "name": "kristen little",
          "city": "rialto",
        "email": "kristen.little@example.com",
          "age": 23,
        "cell": "(525)-028-9024",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
        "nat": "US"
      },
      {
        "gender": "male",
        "name": "janick arslan",
          "city": "aalsmeer",
        "email": "janick.arslan@example.com",
          "age": 24,
        "cell": "(387)-012-2307",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg",
        "nat": "NL"
      },
      {
        "gender": "female",
        "name": "مارال محمدخان",
          "city": "زنجان",
        "email": "مارال.محمدخان@example.com",
          "age": 34,
        "cell": "0967-078-7725",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg",
        "nat": "IR"
      },
      {
        "gender": "female",
        "name": "valérie schoots",
          "city": "giessenlanden",
        "email": "valérie.schoots@example.com",
          "age": 66,
        "cell": "(100)-817-4215",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg",
        "nat": "NL"
      },
      {
        "gender": "male",
        "name": "brett allen",
          "city": "el cajon",
        "email": "brett.allen@example.com",
          "age": 64,
        "cell": "(839)-518-5420",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg",
        "nat": "US"
      },
      {
        "gender": "male",
        "name": "perry terry",
          "city": "roscommon",
        "email": "perry.terry@example.com",
          "age": 60,
        "cell": "081-341-3428",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg",
        "nat": "IE"
      },
      {
        "gender": "male",
        "name": "tom nguyen",
          "city": "gloucester",
        "email": "tom.nguyen@example.com",
          "age": 70,
        "cell": "0728-173-306",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg",
        "nat": "GB"
      },
      {
        "gender": "male",
        "name": "musab nordstrand",
          "city": "vestby",
        "email": "musab.nordstrand@example.com",
          "age": 42,
        "cell": "47215437",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg",
        "nat": "NO"
      },
      {
        "gender": "female",
        "name": "brittany bates",
          "city": "salisbury",
        "email": "brittany.bates@example.com",
          "age": 51,
        "cell": "0788-184-384",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg",
        "nat": "GB"
      },
      {
        "gender": "male",
        "name": "hartmuth buchner",
          "city": "möckern",
        "email": "hartmuth.buchner@example.com",
          "age": 51,
        "cell": "0179-8230488",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/12.jpg",
        "nat": "DE"
      }
    ]

  export default {
    name: 'app',
    components: {
      Navbar,
      Sidebar
    },
    directives: {
      resize: Resize
    },
    computed: {
      ...mapGetters([
        'sidebarOpened',
        'toggleWithoutAnimation',
        'isLoading',
        'isLocked'
      ]),
      classObject: function () {
        return {
          'sidebar-hidden': !this.toggleWithoutAnimation && !this.sidebarOpened,
          'sidebar-hidden sidebar-hidden_without-animation': this.toggleWithoutAnimation && !this.sidebarOpened
        }
      }
    },
    methods: {
      onNavbarBlur(){
        if(this.$refs.navbar.avatarClicked){
          this.$refs.navbar.avatarClicked = false
        }
      }
    },
    watch: {
      isLoading(){
        this.$refs.funnies.getNewMessage()
      }
    },
    created(){
      this.$store.commit('setLoading', true)
      users.forEach((item, idx) => {
        item.id = idx
      })
      this.$store.commit('setUsers', users)
      this.$store.commit('setLoading', false)
    }
  }
</script>

<style lang="scss">
  @import "sass/main";
  @import "./sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  body {
    height: 100%;
    overflow-x: hidden;
    #app {
      height: 100%;
    }
  }
  .content-wrap {
    margin-left: $content-wrap-ml;
    padding: $content-wrap-pt $content-wrap-pr $content-wrap-pb 0;
    transition: margin-left 0.3s ease;

    .preload-container {
      background-image: radial-gradient(circle at center, rgb(255, 255, 255) 0%, rgba(255,255,255,0) 100%);
      padding: 6rem 0;

      .pre-loader {
        left: $redoffice-preloader-left;
        top: $redoffice-preloader-top;
      }
    }

    .sidebar-hidden & {
      margin-left: $sidebar-left;
    }

    @include media-breakpoint-down(md) {
      padding: $content-mobile-wrap;
      margin-left: 0;

      .sidebar-hidden & {
        margin-left: 0;
      }
    }
  }
</style>
