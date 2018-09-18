import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VCard,
  VCheckbox,
  VDataTable,
  VDialog,
  VNavigationDrawer,
  VForm,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VSelect,
  VTextField,
  VToolbar
} from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#2196F3',
    accent: '#2196F3',
    secondary: '#424242',
    info: '#0D47A1',
    warning: '#ffb300',
    error: '#B71C1C',
    success: '#2E7D32'
  },
  components: {
    VApp,
    VCard,
    VCheckbox,
    VDataTable,
    VDialog,
    VNavigationDrawer,
    VForm,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VSelect,
    VTextField,
    VToolbar
  }
})
