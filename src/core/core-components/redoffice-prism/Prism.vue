<template>
    <pre class="prism-wrap line-numbers">
        <code :class="'language-' + language">{{ code }}</code>
    </pre>    
</template>

<script>
import Prism from 'prismjs'
// import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/toolbar/prism-toolbar.min.js'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/show-language/prism-show-language.min.js'

export default {
    name: 'redoffice-prism',
    props: ['code', 'language'],
    mounted(){
        Prism.highlightAll()
    }
}
</script>

<style lang="scss">
    .prism-wrap{
        border: 1px solid #eee;
    }
</style>