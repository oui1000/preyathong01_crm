/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

// Composables
import { createVuetify } from 'vuetify'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { VDateInput } from 'vuetify/labs/VDateInput'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    locale: 'th',
  },
  date: {
    locale: {
      th: 'th-TH',
    },
  },
  components: {
     VNumberInput,
     VDateInput,
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.teal.darken2, // #E53935
          secondary: colors.teal.lighten4, // #FFCDD2
          accent: colors.teal.accent4, // #3F51B5
          danger: colors.red.base,
          warning: colors.amber.base,
          success: colors.green.base,
        }
      },
    },
  },
})
