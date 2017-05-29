import Admin from '~/components/admin.vue'

import Echart from './echart'

export default{
  path: '/admin',
  component: Admin,
  children: [
    Echart
  ]
}
