<template>
<div class="login-page">
    <section class="page-wrapper flex">
        <div class="form-wrapper flex">
            <div class="form-box" :class="{runit}">
                <img class="b2panel-logo" src="https://res.cloudinary.com/redoffice/image/upload/v1532019413/logo.png" />
                <slot :isvalid="isvalid"/>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'auth-base',
    data(){
        return {
            runit: false
        }
    },
    computed: {
        async isvalid(){
            return await this.$validator.validateAll()
        }
    },
    methods: {
        async submit(){
            if(await this.$validator.validateAll()){
                this.$router.push({
                    name: 'Overview'
                })
            }
        }
    },
    mounted(){
        setTimeout(() => {
            this.runit = true
        }, 100)
    }
}
</script>
<style lang="scss">
@import "../../sass/_variables.scss";
@import "~bootstrap/scss/mixins/breakpoints";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.login-page {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: $that-cool-red;
    background: radial-gradient(circle at center center, $that-cool-red 0%, darken($that-cool-red, 10%) 100%);
    .page-wrapper{
        box-sizing: border-box;
        .form-wrapper {
            width: 100%;
            vertical-align: middle;
            display: inline-block;
            .form-box {
                img {
                    width: 100%;
                    padding: 2rem 2rem 3rem 2rem;
                }
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-right: -50%;
                transition: all .6s;
                transform-origin: top;
                max-width: 400px;
                min-width: 300px;
                padding: 25px;
                margin: 0 auto;
                box-shadow: 0 38px 88px 0 rgba(50,50,50,.14), 0 11px 32px 0 rgba(50,50,50,.14), 0 5px 11px 0 rgba(0,0,0,.1);
                background-color: #fff;
                border-radius: 4px;
                overflow: hidden;
                opacity: 0;
                transform:  scale(0) translate(-50%, -50%);

                &.runit {
                    opacity: 1;
                    transform: scale(1) translate(-50%, -50%);
                }
            }
        }
    }

}
</style>
