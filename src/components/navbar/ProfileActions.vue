<template>
<div class="profile-actions-container">
    <div class="profile-actions-pad" ref="profileActionPad" :class="avatarClicked && 'active'"></div>
    <div class="profile-actions" :class="avatarClicked && 'avatar-clicked'" ref="profileActionsContainer">
        <div class="profile-action">
            <a href="#/profile" class="text-uppercase profile-action-title">
            <span class="profile-action-text">{{ $t('navbar.profile') }}</span>
            <i class="ios ion-ios-body"></i></a>
        </div>
        <div class="profile-action">
            <a href="#/settings" class="text-uppercase profile-action-title">
                <span class="profile-action-text">{{ $t('navbar.settings') }}</span>
            <i class="ios ion-md-settings"></i></a>
        </div>
        <div class="profile-action">
            <a href="#/logout" class="text-uppercase profile-action-title">
                <span class="profile-action-text">{{ $t('navbar.logout') }}</span>
                <i class="ios ion-md-exit"></i>
            </a>
        </div>
    </div>
    <div class="notifs-container d-flex flex-row" ref="notifs">
        <div :class="avatarClicked && 'active'" class="notif-bubble" @click="onBubbleClick(index)" v-for="(notif_obj, index) in this.$store.getters.profileNotifs" :key="notif_obj.name">
            <redoffice-tooltip :options="{content: $t(`navbar.notifs.${notif_obj.name}`), placement: 'bottom'}" >
                <i class="notif-icon" :class='notif_obj.icon' :style="{color: notif_obj.color}"></i>
                <span>{{ notif_obj.count }}</span>
            </redoffice-tooltip>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: {
        avatarClicked: {
            type: Boolean
        },
        notifications: {
            type: Array,
            default(){
                return []
            }
        }
    },
    mounted(){
        this.padHeight = this.$refs.profileActionsContainer.children.length * 3.5 + 1
        var delay = 0
        Array.from(this.$refs.profileActionsContainer.children).forEach(el => {
            el.style.transitionDelay = delay  + "s"
            delay = delay + .1
        })
        delay = 0
        let offset = 0
        Array.from(this.$refs.notifs.children).forEach(el => {
            el.style.right = offset + "rem"
            el.style.transitionDelay = delay  + "s"
            delay = delay + .1
            offset = offset + 3
        })
    },
    methods: {
        onBubbleClick(index){
            // console.log(this.$store.getters)
            // let notifs = this.$store.getters.profileNotifs.slice(0)
            // notifs[index].count = 0
            this.$store.commit('zeroProfileNotifsCount', index)
        }
    },
    watch: {
        avatarClicked(val){
            if(val){
                // menu items
                var offset = 0
                this.$refs.profileActionPad.style.height = this.padHeight + "rem"
                Array.from(this.$refs.profileActionsContainer.children).forEach(el => {
                    offset = offset + 3.5
                    el.style.top = offset + 1 + "rem"
                })
            }
            else{
                // menu items
                this.$refs.profileActionPad.style.height = 0
                Array.from(this.$refs.profileActionsContainer.children).forEach(el => {
                    el.style.top = 0
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  .notifs-container{
    right: 4rem;
    position: relative;
    @include media-breakpoint-down(sm) {
        top: 1.7rem;
        z-index: 10000;
        left: -8rem;
        .notif-bubble{
            transition-delay: 0s !important;
            transition-duration: .1s !important;
            &.active{
                transition-duration: .5s !important;
                transition-delay: .5s !important;
            }
        }
    }
    
  }
  .notif-icon{
    padding-right: 3px;
    cursor: pointer;
  }
  .notif-bubble{
    transition: transform .4s 0s cubic-bezier(0.6, -0.28, 0.74, 0.05);
    position: absolute;
    font-family: Montserrat;
    margin-right: 2px;
    width: max-content;
    font-size: 1rem;
    top: -.8rem;
    transform: scale(0);
    cursor: pointer;
    z-index: 10000;
    &:hover{
        // color: $that-cool-red;
    }
    &.active{
        transform: scale(1);
    }
  }
.profile-actions-pad{
    background: linear-gradient(white, #eee);
    transition: height .8s cubic-bezier(0.42, 0, 0, 1.73);
    position: absolute;
    width: 10rem;
    height: 0;
    right: -1px;
    z-index: 20;
    top: 71px;
    box-shadow: -5px 8px 20px -11px;
    @include media-breakpoint-down(md) {
        top: 66px;
    }
}
.profile-actions{
    position: absolute;
    right: 0;
    top: 8px;
    z-index: 1000;
    .profile-action{
        right: 0;
        cursor: pointer;
        top: 0;
        transition: top .4s 0s cubic-bezier(0.6, -0.28, 0.74, 0.05), transform .1s;
        transform: rotateY(0deg);
        position: absolute;
        font-size: 0.75rem;
        &:hover{
            color:#5d7288 !important;
            transform: rotateY(-20deg);
            transition-delay: 0s !important;
        }
        .profile-action-text{
            position: relative;
            top: 10px;
        }
        i{
            color: #be3335;
            font-size: 1.7rem;
            opacity: 0;
            transition: opacity .8s .1s;
            position: relative;
            left: 5px;
        }
        .profile-action-title{
             display: flex;
            transition: transform .4s;
            transform: scale(0);
            text-transform: uppercase !important;
            font-family: Montserrat;
            margin-top: 10px;
            right: 28px;
            text-align: right;
            position: absolute;
        }
    }
    @include media-breakpoint-down(md) {
        top: 0px !important;
        right: 0 !important;
    }
}
    .avatar-clicked {
        .profile-action-title{
            transform: scale(1) !important;
            transition-delay: .5s !important;
        }
        i{
            opacity: 1 !important;
        }
    }
</style>