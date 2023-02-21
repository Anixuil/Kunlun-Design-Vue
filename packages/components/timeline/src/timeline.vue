<script lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { timelineProps } from './type/timeline'
import { provide, h, watchEffect } from 'vue'
import './style/timeline.scss'
export default {
    name: 'kl-timeline',
    props: timelineProps,
    setup(props, { slots }) {
        provide('mode', props.mode)
        provide('type', props.type)
        const { n } = createNamespace('timeline')
        // const props = defineProps(timelineProps)
        let slot = (slots as any).default()
        watchEffect(() => {
            if (props.reverse) {
                slot = (slots as any).default().reverse()
            } else {
                slot = (slots as any).default()
            }
        })

        return () => [
            h(
                'ul',
                {
                    class: [n()]
                },
                slot
            )
        ]
    }
}
</script>
<style></style>
