import Button from './button.jsx'
import DropdownButton from './dropdown-button.vue'
import ButtonGroup from './button-group.vue'
import ListItem from './list-item.vue'
import ListHeader from './list-header.vue'
import List from './list.vue'
import ComboBox from './combo-box.vue'
import ComboBoxOption from './combo-box-option.vue'
import SearchBox from './search-box.vue'
import Bar from './bar.vue'
import ColumnList from './column-list.vue'
import FormGroup from './form-group.vue'
import FormField from './form-field.vue'
import ExpandPanel from './expand-panel.vue'
import ModalDialog from './dialog.vue'
import Calendar from './calendar.vue'
import DateBox from './date-box.vue'
import installModalMask from './modal-mask.jsx'
import installDialog from './dialog.jsx'

function install (Vue) {
  Vue.component('su-button', Button)
  Vue.component('su-dropdown-button', DropdownButton)
  Vue.component('su-button-group', ButtonGroup)
  Vue.component('su-list-item', ListItem)
  Vue.component('su-list-header', ListHeader)
  Vue.component('su-list', List)
  Vue.component('su-option', ComboBoxOption)
  Vue.component('su-combo-box', ComboBox)
  Vue.component('su-search-box', SearchBox)
  Vue.component('su-bar', Bar)
  Vue.component('su-column-list', ColumnList)
  Vue.component('su-form-group', FormGroup)
  Vue.component('su-form-field', FormField)
  Vue.component('su-expand-panel', ExpandPanel)
  Vue.component('su-dialog', ModalDialog)
  Vue.component('su-calendar', Calendar)
  Vue.component('su-date-box', DateBox)
}

let Dialog
let ModalMask
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  Dialog = installDialog(window.Vue)
  ModalMask = installModalMask(window.Vue)
}

export {
  install,
  installDialog,
  installModalMask,
  Dialog,
  ModalMask
}