<template>
<div>
    <div class="preload-container mb-3">
        <redoffice-pre-loader :loaderSize=128 class="pre-loader"></redoffice-pre-loader>
        <fun-msg  />
    </div>
    <div class="preload-container mb-3">
        <redoffice-pre-loader :loaderType="'circle'" :loaderSize=90 class="pre-loader"></redoffice-pre-loader>
        <fun-msg  />
    </div>
    <div class="preload-container mb-3">
        <redoffice-pre-loader :loaderType="'explode'" :loaderSize=80 class="pre-loader"></redoffice-pre-loader>
        <fun-msg  />
    </div>
</div>
</template>
<script>
export default {
    name: "loading"
}
</script>

