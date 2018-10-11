<template>
    <div class="card" :class="'bg-' + theme" style="max-width: 18rem;">
        <div class="card-header text-center"> {{ header }} </div>
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ text }}</p>
        </div>
    </div>
</template>
<script>

export default {
    name: "redoffice-card",
    props: ['theme', 'header', 'title', 'text']
}
</script>

<style lang="scss">
    .card {
        border: 0;
        box-shadow: 0 4px 10px #c8c8c8;
    }
    .card-header {
        font-family: Montserrat;
        letter-spacing: -1px;

font-weight: 500;

font-size: 1.2rem;
    }
</style>
