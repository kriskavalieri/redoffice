<template>
    <redoffice-widget>
        <template slot="widgetBody">
            <redoffice-tabs :names="[$t('typo.headers'), $t('typo.text'), $t('typo.lists')]">
                <div :slot="$t('typo.headers')">
                    <div class="text-center card bg-secondary">
                        <h4 class="card-header">Main headers</h4>
                        <div class="card-body">
                            <h1 class="mb-4">h1. heading</h1>
                            <h2 class="mb-4">h2. heading</h2>
                            <h3 class="mb-4">h3. heading</h3>
                            <h4 class="mb-4">h4. heading</h4>
                            <h5 class="mb-4">h5. heading</h5>
                            <h6 class="mb-4">h6. heading</h6>
                        </div>
                    </div>
                    <div class="text-center card mt-4">
                        <h4 class="card-header">Display headers</h4>
                        <div class="card-body">
                            <h1 class="display-1">Display 1</h1>
                            <h1 class="display-2">Display 2</h1>
                            <h1 class="display-3">Display 3</h1>
                            <h1 class="display-4">Display 4</h1>
                        </div>
                    </div>
                    <div class="text-center card mt-4">
                        <h4 class="card-header">Paragraphs</h4>
                        <div class="card-body">
                            <p>Standard paragraph</p>
                            <p class="lead">Lead paragraph</p>
                        </div>
                    </div>
                </div>
                <div :slot="$t('typo.text')">
                    <div class="text-center card">
                        <h4 class="card-header mb-3">Inline elements</h4>
                        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                        <p><del>This line of text is meant to be treated as deleted text.</del></p>
                        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                        <p><u>This line of text will render as underlined</u></p>
                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                        <p><strong>This line rendered as bold text.</strong></p>
                        <p><em>This line rendered as italicized text.</em></p>
                        <p class="text-primary">.text-primary</p>
                        <p class="text-secondary">.text-secondary</p>
                        <p class="text-success">.text-success</p>
                        <p class="text-danger">.text-danger</p>
                        <p class="text-warning">.text-warning</p>
                        <p class="text-info">.text-info</p>
                    </div>
                    <blockquote class="blockquote">
                        <p>This is an example of a blockquote.</p>
                        <footer class="blockquote-footer">Steve Jobs</footer>
                    </blockquote>
                    <blockquote class="blockquote reversed">
                        <p>This is an example of a reversed blockquote.</p>
                        <footer class="blockquote-footer">Steve Jobs</footer>
                    </blockquote>
                    <div class="text-center card">
                        <h4 class="card-header">Code snippets</h4>
                        <div class="p-3">
                            <redoffice-prism class="mb-4" language="javascript" :code="code1" />
                            <redoffice-prism class="mb-4" language="html" :code="code2" />
                            <redoffice-prism language="css" :code="code3" />
                        </div>
                    </div>
                </div>
                <div :slot="$t('typo.lists')">
                    <div class="card">
                        <h4 class="card-header mb-3">Unordered list</h4>
                        <ul class="vue-unordered p-3">
                            <li>
                                A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.
                            </li>
                            <li>The more traditional of these (1 and 2, below) relate to camouflage.</li> 
                            <li>The vertical striping may help the zebra hide in the grass by disrupting its outline.</li> 
                            <li> In addition, even at moderate distances, the striking striping merges to an apparent grey.
                                <ul class="vue-list-inner">
                                    <li>However, the camouflage has been contested with arguments that most of a zebra's predator.</li>
                                    <li>Such as lions and hyenas cannot see well at a distance.</li>
                                    <li>More likely to have smelled or heard a zebra.</li>
                                </ul>
                            </li>
                            <li>Before seeing it from a distance, especially at night.</li>
                        </ul>
                    </div>
                    <div class="card mt-4">
                        <h4 class="card-header mb-3">Ordered list</h4>
                        <ol class="vue-ordered p-3">
                            <li> 
                                A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.
                            </li>
                            <li>The more traditional of these (1 and 2, below) relate to camouflage.</li> 
                            <li>The vertical striping may help the zebra hide in the grass by disrupting its outline.</li>
                            <li> In addition, even at moderate distances, the striking striping merges to an apparent grey.
                                <ul class="vue-list-inner">
                                    <li>
                                        However, the camouflage has been contested with arguments that most of a zebra's predator.
                                    </li>
                                    <li>Such as lions and hyenas cannot see well at a distance.</li>
                                    <li>More likely to have smelled or heard a zebra.</li>
                                </ul>
                            </li>
                            <li>Before seeing it from a distance, especially at night.</li>
                        </ol>
                    </div>
                </div>
            </redoffice-tabs>
        </template>
    </redoffice-widget>
</template>
<script>
export default {
    data(){
        return {
            code1: `Vue.component('switches', Switches)
    Vue.use(VueTimeago, {
        name: 'Timeago', // Component name, Timeago by default
        locale: 'en' // Default locale
    })
    Vue.use(vSelectMenu, {
    language: "en"
    })

    Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBdACnT_4-nSO9iUryOJ97wr4vCUcfPWyU',
        libraries: 'places'
    }
    })
    Vue.use(VueAnimateNumber)
    Vue.use(FlagIcon)
    
    Vue.use(VCalendar, {
    firstDayOfWeek: 2,
    datePickerTintColor: '#b71c1c',
    popoverVisibility: 'focus',
    datePickerShowDayPopover: false,
    formats: {
        title: 'MMMM YYYY',
        weekdays: 'W',
        navMonths: 'MMM',
        input: ['YYYY-MM-DD', 'YYYY-MM-DD', 'YYYY-MM-DD'],
        dayPopover: 'YYYY-MM-DD',
        data: ['YYYY-MM-DD', 'YYYY-MM-DD', 'YYYY-MM-DD']
    }
    })`,
        code2: `<h1 class="mb-4">h1. heading</h1>
    <h2 class="mb-4">h2. heading</h2>
    <h3 class="mb-4">h3. heading</h3>
    <h4 class="mb-4">h4. heading</h4>
    <h5 class="mb-4">h5. heading</h5>
    <h6 class="mb-4">h6. heading</h6>`,
        code3: `pre[class*="language-"] {
        color: black;
        background: none;
        text-shadow: 0 1px white;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
    }`
        }
    }
}
</script>


<style lang="scss" scoped>
    .card{
        box-shadow: 0 4px 13px #eee;
    }
</style>
