<template>
  <aside class="sidebar">
     <vue-scroll >
      <ul class="sidebar-menu">
        <li v-for="route in $root.original_routes" :key="route.name">
          <router-link
            append
            class="sidebar-link"
            :to="route.path"
            :target="route.newWindow ? '_blank' : '_self'"
            @click="toggleMenuItem(route)"
            v-if="!route.children[0]">
            <i class="sidebar-menu-item-icon" v-bind:class="route.iconClass"></i>
            {{ $t(`sidebar.${route.title}`) }}
          </router-link>
          <a href="#"
             @click.prevent="toggleMenuItem(route)"
             class="sidebar-link"
             v-bind:class="{expanded: route.expanded}"
             v-else>
            <i class="sidebar-menu-item-icon" v-bind:class="route.iconClass"></i>
            {{ $t(`sidebar.${route.title}`) }}
            <i class="expand-icon ion ion-ios-arrow-down"></i>
          </a>
          <expanding>
          <ul class="sidebar-submenu in " v-show="route.expanded">
            <li v-for="childItem in route.children" :key="childItem.name" v-if="route.children[0] && childItem.meta && childItem.meta.menu">
                <router-link
                    append
                    class="sidebar-link sidebar-submenu-link"
                    :to="childItem.path"
                    :target="childItem.meta.menu.newWindow ? '_blank' : '_self'">
                    <i class="sidebar-menu-item-icon" v-bind:class="childItem.meta.menu.iconClass"></i>
                    {{ $t(`sidebar.${childItem.meta.menu.title }`) }}
                </router-link>
            </li>
          </ul>
          </expanding>
        </li>
      </ul>
    </vue-scroll>

  </aside>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Expanding from 'vue-bulma-expanding/src/Expanding'
    import Scrollbar from '../../core/core-components/redoffice-scrollbar/Scrollbar.vue'


  export default {
    name: 'sidebar',
    components: {
      Expanding,
      Scrollbar
    },
    mounted(){
      // expand the submenu for the active route, if applicable
      let name = this.$route.name
      if(name.match(/\./)){
        let parent = name.split(".")[0]
         this.$root.original_routes.forEach(route => {
           if(route.name === parent){
             route.expanded = true
           }
         })
      }
    },
    methods: {
      ...mapActions({
        expand: 'toggleExpandMenuItem'
      }),
      toggleMenuItem(route) {
        this.closeOpened(route.name)
        route.expanded = !route.expanded
        if(route.children) {
          this.expand({
            menuItem: route,
            expand: !route.expanded
          })
        }
      },
      closeOpened(route_name){
        this.$root.original_routes.forEach(route => {
          if(route.expanded && route.name !== route_name){
              route.expanded = false
          }
        })
      }
    },
    computed: {
      ...mapGetters({
      })
    },
    data () {
      return {
        routes: [],
        show: false
      }
    }
  }
</script>

<style lang="scss">
@import "../../sass/_variables.scss";
@import "~bootstrap/scss/mixins/breakpoints";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.sidebar {
  @include media-breakpoint-down(md) {
    top: 3.2rem;
    left: 0;
    width: 100%;
    position: fixed;
    z-index: 1000;
  }
  height: $sidebar-viewport-height;
  .redoffice-scrollbar {
    height: 100%;
    .scrollbar-wrapper {
      border: 6px solid white;
      box-shadow: $sidebar-box-shadow;
      @include media-breakpoint-down(md) {
        border: none !important;
      }
    }
    .scrollbar-content {
      background: $that-cool-red;
      box-shadow: inset 0 0 26px -6px #000;
      @include media-breakpoint-down(md) {
        box-shadow: none;
      }
    }
  }

  position: absolute;
  width: $sidebar-width;
  top: $sidebar-top;
  left: $sidebar-left;
  transition: all 0.2s ease;
  opacity: 1;

  .sidebar-hidden_without-animation & {
    transition: none;
  }

  .sidebar-hidden & {
    @include media-breakpoint-down(md) {
      top: $sidebar-hidden-top-mobile;
      opacity: 0;
      z-index: $sidebar-mobile-z-index;
      height: $sidebar-hidden-height-mobile;
      left: -100%;
    }
    top: $sidebar-hidden-top;
    opacity: 0;
    z-index: $min-z-index;
  }
  
  .sidebar-link {
    font-family: Montserrat;
    font-size: .9rem;
    font-weight: 100;
    position: relative;
    height: $sidebar-link-height;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    &:hover{
      @include media-breakpoint-down(lg) {
        background-color: rgba(255, 255, 255, .6) !important;
      }
    }
    &.router-link-active,
    &:hover {
      @include media-breakpoint-up(lg) {
        border-left: 4px solid $that-cool-red;
        transition: all .2s;
      }
      background: #fff !important;
      color: #000;
      .sidebar-menu-item-icon,
      .expand-icon {
        color: #000 !important;
      }
    }
    @include media-breakpoint-up(lg) {
      &:hover{
        &:not(.router-link-active){
          background: rgba(255,255, 255, .6) !important;
          padding-left: 16px !important;
        }
      }
    }

    .expand-icon {
      position: absolute;
      right: $sidebar-arrow-right;
      top: calc(50% - #{$font-size-root}/2);
      font-weight: bold;
      transition: transform 0.3s ease;
      @include media-breakpoint-down(md) {
        color: #fff;
      }
    }

    &.expanded {
      @include media-breakpoint-up(lg) {
        box-shadow: inset 0px -26px 51px -6px #fff;
      }
      .expand-icon {
        transform: rotate(180deg);
      }
    }

    .sidebar-menu-item-icon {
      font-size: 1.5rem;
      margin-right: 14px;
      width: 20px;
    }
  }

  .sidebar-submenu-link {
    height: $sidebar-submenu-link-height;
    @include media-breakpoint-down(lg) {
      background-color: darken($that-cool-red, 10);
    }
  }

  .sidebar-menu,
  .sidebar-submenu {
    list-style: none;
    padding-left: 0;

    li {
      display: block;
      padding-left: 0;
      @include media-breakpoint-up(lg) {
        // margin-bottom: 0.5rem;
      }
    }
  }

  .sidebar-submenu {
    background: linear-gradient(180deg, #d8d8d8c2 6px, #d9d9d92b 70%);
    // margin-left: 10px;
    .sidebar-link {
      font-size: $font-size-smaller;
      @include media-breakpoint-up(lg) {
        padding-left: 30px;
        background: transparent;
        &:hover{
          background: #e8e8e8;
        }
      }
    }
  }

  .sidebar-menu {
    max-height: 100%;
    margin-bottom: 0;
    @include media-breakpoint-down(md) {
      background: $that-cool-red;
      box-shadow: 1px 0 32px;
    }
  }

  .expand-icon {
    color: $vue-primary;
  }

  a {
    @include media-breakpoint-down(md) {
      color: $white;
    }
    text-decoration: none;
  }
}
</style>
