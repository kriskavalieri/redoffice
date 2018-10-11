<template>
  <nav class="navbar app-navbar navbar-toggleable-md">
    <div class="navbar-brand-container d-flex align-items-center justify-content-start">
      <router-link class="navbar-brand" :to="{ name: 'Overview' }">
        <img class="b2panel-logo" src="https://res.cloudinary.com/redoffice/image/upload/v1532019413/logo.png" />
      </router-link>
    </div>
    <div class="row navbar-container">
      <div class="menu-icon-container d-flex align-items-center justify-content-center justify-content-lg-start col">
        <a class="menu-icon" href="#" @click.prevent="toggleSidebar(false)" v-if="sidebarOpened">
          <i class="menu-toggle ion ion-ios-menu"></i>
        </a>
        <a class="menu-icon" href="#" @click.prevent="toggleSidebar(true)" v-else>
          <i class="menu-toggle ion ion-ios-list"></i>
        </a>
      </div>
      <div class="avatar-container d-flex flex-row-reverse" :class="avatarClicked && 'avatar-clicked'" @click="avatarClicked=!avatarClicked">
        <img src="https://res.cloudinary.com/redoffice/image/upload/v1532022345/avatar.png"/>
      </div>
      <div class="profile-name" :class="avatarClicked && 'active'">
        <div class='pr-4'>{{ name }}</div>
        <language-selector />
      </div>
      
      <div v-if="totalNotifCount">
        <span class="total-count">{{ totalNotifCount }}</span>
        <div class="total-count-pulse"></div>
      </div>
    </div>
    <profile-actions ref="profileActions" :avatarClicked="avatarClicked"/>
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ProfileActions from './ProfileActions.vue'
  import LanguageSelector from './LanguageSelector.vue'

  export default {
    name: 'navbar',
    components: {ProfileActions, LanguageSelector},
    data () {
      return {
        avatarClicked: false,
        name: "Leo Trotsky Jr."
      }
    },

    computed: {
      totalNotifCount(){
        return this.$store.getters.profileNotifs.reduce((a, b) => {
          return a + b.count
        }, 0)
      },
      ...mapGetters([
        'sidebarOpened',
        'toggleWithoutAnimation',
      ])
    },

    methods: {
      ...mapActions([
        'toggleSidebar',
        'isToggleWithoutAnimation'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .padded{
    left: -3rem;
  }

  .profile-name{
    font-family: Montserrat;
    font-weight: 900;
    font-size: .88rem;
    position: absolute;
    z-index: 0;
    transition: width .4s .5s ease-out, right .5s 0s ease-in;
    background: linear-gradient(180deg, white 1%, white 20%, #efefef);
    color: #000;
    border-radius: 3px 0 0 3px;
    padding: 3px;
    padding-right: 1rem;
    bottom: -.5rem;
    right: -10rem;
    text-align: right;
    box-shadow: 0 4px 9px -6px #515151;
    width: 8rem;
    &.active{
      width: 100%;
      right: 0;
    }
    @include media-breakpoint-down(md) {
      bottom: -1rem;
    }
  }

  .total-count{
    color: white;
    position: absolute;
    z-index: 1001;
    right: 7px;
    font-family: Montserrat;
    border: 3px solid #be5656;
    border-radius: 50%;
    font-size: .7rem;
    padding-top: 1px;
    min-width: 23px;
    text-align: center;
    min-height: 23px;
    background: #b71c1c;
    top: 8px;
  }
  .total-count-pulse{
    border: 2px solid #b71c1c;
    -webkit-border-radius: 30px;
    height: 31px;
    width: 31px;
    position: absolute;
    right: 3px;
    top: 4px;
    -webkit-animation: pulsate .9s ease-out;
    -webkit-animation-iteration-count: infinite;
    opacity: 0;
    filter: blur(2px);
  }
  @-webkit-keyframes pulsate {
      0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
      50% {opacity: 1.0;}
      100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
  }
  
  .logout{
    cursor: pointer;
    bottom: 10px;
    position: absolute;
    left: 11.6rem;
    font-size: 2.5rem;
    @include media-breakpoint-down(xs) {
      left: 9.5rem;
      bottom: 8px;
      font-size: 1.5rem;
    }
  }
  .flex{
    display: flex;
  }
  .menu-toggle{
    font-size: 2rem;
  }
  .navbar.app-navbar {
    .b2panel-logo{
      width: 10rem;
      position: relative;
    }
    .navbar-container {
      width: 100%;
      height: 100%;
      margin: 0;
      z-index: 1100;
    }

    height: $top-nav-height;
    background-color: #fff;
    border-bottom: 1px solid #dedede;

    .avatar-container {
      display: inline-block;
      width: 50px;
      height: 50px;
      background-color: gainsboro;
      border-radius: 50%;
      border: 3px solid #eee;
      overflow: hidden;
      position: relative;
      bottom: 1.5rem;
      cursor: pointer !important;

      img {
        height: 100%;
        width: 100%;
      }

      &.avatar-clicked, &:hover{
        border-width: 7px;
      }

      &.avatar-clicked{
        background-color: rgb(201, 201, 201);
      }

      @include media-breakpoint-up(lg) {
        transition: 1s bottom;
        bottom: 0;
      }

       @include media-breakpoint-down(xs){
         width: 40px;
         height: 40px;
         bottom: 1.2rem;
       }

    }

    .menu-icon-container {
      padding: 0;
      font-size: $font-size-base;
      @include media-breakpoint-down(md) {
        justify-content: left !important;
      }
    }

    .navbar-brand-container {
      position: absolute;
      z-index: 3;
      height: 100%;
      left: $navbar-brand-container-left;
      top: 0;
    }

    @include media-breakpoint-down(md) {
      height: 3.2rem;
      padding: 1.5rem 0.875rem 1.375rem 0.875rem;
      position: fixed;
      z-index: 1200;
      width: 100%;
      box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
      .navbar-brand-container {
        transition: left 1s ease;
        width: 10rem;
        top: 0.6rem;
        left: calc(50% - 5rem);
        height: auto;
        .navbar-brand {
          height: $font-size-smaller;
          padding: 0;
          font-size: $font-size-smaller;
        }
        @include media-breakpoint-down(xs){
          left: 3rem;
          .b2panel-logo{
            width: 6rem;
            margin-top: 7px;
          }
        }
      }

    }
}

</style>
