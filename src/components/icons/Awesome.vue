<script>
import icons from './awesome.json'
import Icon from './Icon.vue'

// import { library } from '@fortawesome/fontawesome-svg-core'

export default {
    extends: Icon,
    data(){
        return {
            icons,
            search: "",
            filtered: icons,
            prefix: 'fa fa-'
        }
    },
    filters: {
        parseAsIcon(icon_name){
            return `<i class="fa fa-${icon_name}"></i>`
        }
    }
}
</script>
<style lang="scss">
@import "~font-awesome/css/font-awesome.css";

</style>
