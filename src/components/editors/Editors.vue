<template>
<redoffice-widget class="editors no-padding no-v-padding" :noPadding="true" :headerText="$t('sidebar.Editors')">
    <template slot="widgetBody">
        <redoffice-tabs :names="['Markdown', 'Quill']" ref="tabs">
            <div :slot="'Markdown'">
                <mavon-editor v-model="markdownContent" :language="'en'"/>
            </div>
            <div :slot="'Quill'">
                <quill-editor v-model="content"
                    ref="myQuillEditor"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)">
                </quill-editor>
            </div>
        </redoffice-tabs>
    </template>
</redoffice-widget>
</template>

<script>
import Vue from 'vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
// import SimpleMDE from 'simplemde'

const quill_content = `<h1 class="ql-align-center"><span class="ql-font-serif" style="color: rgb(255, 255, 255); background-color: rgb(240, 102, 102);">
        I am Example 1! </span></h1>
<p><br></p>
<p><span class="ql-font-serif">W Can a man still be brave if he's afraid? That is the only time a man can be brave.
    </span></p>
<h1><br></h1>
<p><strong class="ql-size-large ql-font-serif">Courage and folly is </strong><strong class="ql-size-large ql-font-serif"
        style="color: rgb(230, 0, 0);">always</strong><strong class="ql-size-large ql-font-serif"> just a fine line.</strong></p>
<p><br></p>
<p><u class="ql-font-serif">There is only one God, and his name is Death. And there is only one thing we say to Death:
        "Not today."</u></p>
<p><br></p>
<p><em class="ql-font-serif">Fear cuts deeper than swords.</em></p>
<p><br></p>
<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> a = <span class="hljs-number">10</span>; <span class="hljs-keyword">const</span> editorOption = { <span class="hljs-attr">highlight</span>: <span class="hljs-function"><span class="hljs-params">text</span> =&gt;</span> hljs.highlightAuto(text).value }; </pre>
<p><br></p>
<p><span class="ql-font-serif">Every flight begins with a fall.</span></p>
<p><br></p><p><br></p> <p><strong class="ql-font-serif">Whenever you play the game of thrones, you either win or die. There is no middle ground.</strong></p> <p><br></p> <p><u class="ql-font-serif">Some war against sword and spear to win, and the others the crow and the paper to win.</u></p> <p><br></p> <p><em class="ql-font-serif">Dead history is write in ink, the living sort in blood.</em></p> <p><br></p> <p><span class="ql-font-serif" style="color: rgb(0, 102, 204);">They're only numbers. Numbers on paper. Once you understand that, it's easy to make them behave.</span></p> <p><br></p> <p><span class="ql-font-serif">Every time we deal with an enemy, we create two more.</span></p> <p><br></p> <p><span class="ql-font-serif">So the king has decreed. The small council consents.</span></p> <p><br></p>`

const markdown = `
## Intro
### Subheader 
**bold** and *italic* 
[links](https://google.com)
## Lists
#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift-tabs work too
#### Ordered
1. Numbered lists...
2. ...work too!
## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)`

export default {
    components: {
        quillEditor
    },
    data(){
        return {
            content: quill_content,
            markdownContent: markdown
        }
    },
    methods: {
        onEditorBlur(quill) {
            console.log('editor blur!', quill)
        },
        onEditorFocus(quill) {
            console.log('editor focus!', quill)
        },
        onEditorReady(quill) {
            console.log('editor ready!', quill)
        },
        onEditorChange({ quill, html, text }) {
            this.content = html
        },
        handleEditorInitialization (editor) {
            this.editor = editor
            this.$nextTick(() => {
                this.highlightSampleText()
            })
        },
        highlightSampleText () {
            let sampleText = document.getElementsByClassName('default-selection')[0]
            this.editor.selectElement(sampleText)
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill
        }
    }
}
</script>
<style lang="scss">
    .editors .redoffice-tabs .tab-content{
        padding-bottom: 0 !important;
    }
    .ql-container{
        padding-bottom: 1.5rem;
    }
</style>
