<template>
  <transition name="modal" :duration="duration">
    <div v-show="show" class="modal-container">
      <div class="modal" @click.self="clickMask">
        <div class="modal-dialog" :class="modalClass">
          <div class="modal-content">
            <!--Header-->
            <div class="modal-header" :class="'bg-' + theme">
              <slot name="header">
                <div class="modal-title">
                  <slot name="title"></slot>
                </div>
              </slot>
            </div>
            <!--Container-->
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <!--Footer-->
            <div class="modal-footer">
              <slot name="footer">
                <button type="button" v-if="okText" :class="['btn', 'btn-' + this.theme]" @click="ok" :disabled="okDisabled">{{okText}}</button>
                <button type="button" v-if="showCancel" :class="cancelClass" @click="cancel">{{cancelText}}</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'redoffice-modal',
    props: {
      theme: {
        type: String,
        default: "primary"
      },
      transition: {
        type: String,
        default: 'modal'
      },
      small: {
        type: Boolean,
        default: false
      },
      medium: {
        type: Boolean,
        default: true
      },
      large: {
        type: Boolean,
        default: false
      },
      force: {
        type: Boolean,
        default: false
      },
      okText: {
        type: String,
        default: ''
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      cancelClass: {
        type: String,
        default: 'btn btn-secondary'
      },
      okDisabled: {
        type: Boolean,
        default: false
      },
      showCancel: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        show: false,
        duration: 100
      }
    },
    computed: {
      modalClass () {
        return {
          'modal-lg': this.large,
          'modal-md': this.medium,
          'modal-sm': this.small
        }
      }
    },
    created () {
      if (this.show) {
        document.body.className += ' modal-open'
      }
    },
    beforeDestroy () {
      document.body.className = document.body.className.replace(/\s?modal-open/, '')
    },
    watch: {
      show (value) {
        if (value) {
          document.body.className += ' modal-open'
        } 
        else {
          window.setTimeout(() => {
            document.body.className = document.body.className.replace(/\s?modal-open/, '')
          }, this.duration)
        }
      }
    },
    methods: {
      listenKeyUp (event) {
        if (event.key === 'Escape') {
          this.cancel()
        }
      },
      exit(){
        this.$emit("exit")
      },
      ok() {
        this.$emit('ok')
        this.exit()
        this.show = false
        window.removeEventListener('keyup', this.listenKeyUp)
      },
      cancel() {
        this.$emit('cancel')
        this.exit()
        this.show = false
        window.removeEventListener('keyup', this.listenKeyUp)
      },
      clickMask () {
        if (!this.force) {
          this.cancel()
        }
      },
      open() {
        this.show = true
        this.$emit("open")
        window.addEventListener('keyup', this.listenKeyUp)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  // For Transitioning
  .modal {
    display: block;
    z-index: 99999999;
  }

  .modal-dialog{
    top:  11vh;
    box-shadow: 0 0 16rem 1rem rgba(255, 255, 255, 0.5), 0 0 4rem -1rem rgba(5, 5, 5, 0.5);
    transform: scale(1);
  }

  .modal-dialog, .modal-backdrop {
    transition: all .25s ease;
    
  }

  .modal-enter .modal-dialog, .modal-leave-active .modal-dialog {
    opacity: 0;
    transform: scale(0);
  }

  .modal-enter .modal-backdrop, .modal-leave-active .modal-backdrop {
    opacity: 0;
  }

  .modal-backdrop {
    opacity: 0.7;
    background: #000a1a;
    z-index: 99999998;
  }

  //Modal styles

  .modal-header {
    background: #002955;
    color: #fff;
    height: $modal-header-height;
    padding: $modal-header-padding-y $modal-header-padding-x;
    border-bottom: $modal-header-border;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    letter-spacing: -1px;
  }

  .modal-content {
    border-radius: $modal-content-border-radius;
  }

  .modal-footer {
    justify-content: center;
    padding: 0 $modal-inner-padding;
    padding-bottom: calc(#{$modal-inner-padding} - #{$modal-footer-btns-padding-bottom});
    flex-wrap: wrap;
    .btn {
      margin: 0 $modal-footer-btns-margin-x $modal-footer-btns-padding-bottom $modal-footer-btns-margin-x;
    }
  }

</style>
