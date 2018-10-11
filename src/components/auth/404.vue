<template>
<div class="not-found-page">
    <section class="page-wrapper flex">
        <div class="message-wrapper">
            <h1 class="text-center">404</h1>
            <h4 class="text-center p-1">{{ $t('auth.404') }}</h4>
            <div class="text-center mt-5">
                <router-link :to="{ name: 'Overview' }">
                    <button class="btn btn-dark back-button"> {{ $t('auth.home') }} </button>
                </router-link>
            </div>
        </div>
    </section>
</div>
</template>

</<script>
export default {
    
}
</script>

<style lang="scss">
@import "../../sass/_variables.scss";
@import "~bootstrap/scss/mixins/breakpoints";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.not-found-page {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: $that-cool-red;
    background: radial-gradient(circle at center center, $that-cool-red 0%, darken($that-cool-red, 10%) 100%);
    .page-wrapper{
        box-sizing: border-box;
        width: 100%;
        vertical-align: middle;
        display: inline-block;
        .message-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            // max-width: 500px;
            min-width: 300px;
            padding: 25px;
            margin: 0 auto;
            transform:  translate(-50%, -50%);
            h1 {
                font-size: 20vw;
                color: #fff;
                text-shadow: 0 0 31px #422d2d5e;
                 font-family: Montserrat;
            }
            h4 {
                color: #d2d2d2;
                text-shadow: 0 0 31px #422d2d5e;
                font-family: Montserrat;
            }
        }
    }
}

</style>