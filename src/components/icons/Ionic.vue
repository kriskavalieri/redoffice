<script>
import Icon from './Icon.vue'

export default {
    extends: Icon,
    filters: {
        parseAsIcon(icon_name){
            return `<i class="ion ion-${icon_name}"></i>`
        }
    }
}
</script>