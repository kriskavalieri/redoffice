import FunMessages from './core-components/fun-msg/FunMessages'
import Preloader from './core-components/redoffice-preloader/RedofficePreLoader.vue'
import SlideCard from './core-components/slide-card/SlideCard.vue'

import Accordion from './core-components/redoffice-accordion/RedofficeAccordion.vue'
import Alert from './core-components/redoffice-alert/Alert.vue'
import SimpleAlert from './core-components/redoffice-simple-alert/SimpleAlert.vue'
import Card from './core-components/redoffice-card/RedofficeCard.vue'
import Chart from './core-components/redoffice-chart/RedofficeChart.vue'
import Checkbox from './core-components/redoffice-checkbox/RedofficeCheckbox.vue'
import Collapse from './core-components/redoffice-collapse/RedofficeCollapse.vue'
import DataTable from './core-components/redoffice-datatable/RedofficeDataTable.vue'
import DragdropUpload from './core-components/redoffice-dragdrop-upload/RedofficeDragdropUpload.vue'
import DynamicList from './core-components/redoffice-dynamic-list/DynamicList.vue'
import Expander from './core-components/redoffice-expander/Expander.vue'
import Gauge from './core-components/redoffice-gauge/Gauge.vue'
import Modal from './core-components/redoffice-modal/Modal.vue'
import ModalCard from './core-components/redoffice-modal-card/ModalCard.vue'
import MultiSelect from './core-components/redoffice-multiselect/MultiSelect.vue'
import Popover from './core-components/redoffice-popover/RedofficePopover.vue'
import Progress from './core-components/redoffice-progress/Progress.vue'
import RadioButton from './core-components/redoffice-radio-button/RedofficeRadioButton.vue'
import Prism from './core-components/redoffice-prism/Prism.vue'
import Scrollbar from './core-components/redoffice-scrollbar/Scrollbar.vue'
import SimpleSelect from './core-components/redoffice-simple-select/RedofficeSimpleSelect.vue'
import Slider from './core-components/redoffice-slider/RedofficeSlider.vue'
import Sortable from './core-components/redoffice-sortable/RedofficeSortable.vue'
import StatWidget from './core-components/redoffice-statwidget/StatWidget.vue'
import Switch from './core-components/redoffice-switch/RedofficeSwitch.vue'
import Tabs from './core-components/redoffice-tabs/RedofficeTabs.vue'
import Tasks from './core-components/redoffice-tasks/Tasks.vue'
import Tooltip from './core-components/redoffice-tooltip/Tooltip.vue'
import Widget from './core-components/redoffice-widget/RedofficeWidget.vue'
import RedofficeDropdown from './core-components/redoffice-dropdown/RedofficeDropdown.vue'

import CommonMixin from './core-mixins/CommonMixin'
import Dropdown from './core-directives/Dropdown'
import StickyScroll from './core-directives/StickyScroll'

const CorePlugin = {
  install(Vue) {
    Vue.component(FunMessages.name, FunMessages)
    Vue.component(SlideCard.name, SlideCard)
    Vue.component(Accordion.name, Accordion)
    Vue.component(Alert.name, Alert)
    Vue.component(StatWidget.name, StatWidget)
    Vue.component(Card.name, Card)
    Vue.component(Chart.name, Chart)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Collapse.name, Collapse)
    Vue.component(DataTable.name, DataTable)
    Vue.component(DragdropUpload.name, DragdropUpload)
    Vue.component(DynamicList.name, DynamicList)
    Vue.component(Expander.name, Expander)
    Vue.component(Gauge.name, Gauge)
    Vue.component(Modal.name, Modal)
    Vue.component(ModalCard.name, ModalCard)
    Vue.component(MultiSelect.name, MultiSelect)
    Vue.component(Popover.name, Popover)
    Vue.component(Preloader.name, Preloader)
    Vue.component(Prism.name, Prism)
    Vue.component(Progress.name, Progress)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(Slider.name, Slider)
    Vue.component(Scrollbar.name, Scrollbar)
    Vue.component(SimpleAlert.name, SimpleAlert)
    Vue.component(SimpleSelect.name, SimpleSelect)
    Vue.component(Sortable.name, Sortable)
    Vue.component(Switch.name, Switch)
    Vue.component(Tabs.name, Tabs)
    Vue.component(Tasks.name, Tasks)
    Vue.component(Widget.name, Widget)
    Vue.component(Tooltip.name, Tooltip)
    Vue.component(RedofficeDropdown.name, RedofficeDropdown)
    Vue.mixin(CommonMixin)
    Vue.directive('dropdown', Dropdown)
    Vue.directive('sticky-scroll', StickyScroll)
  }
}

export default CorePlugin
