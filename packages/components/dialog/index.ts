export * from './src/dialog'
import { withInstall } from '@kunlun-design/utils'
import Dialog from './src/dialog.vue'

export const KlDialog = withInstall(Dialog)

export default KlDialog
