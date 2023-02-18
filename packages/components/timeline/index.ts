export * from './src/timeline.vue'
export * from './src/timeline-item.vue'
import { withInstall } from '@kunlun-design/utils'
import Timeline from './src/timeline.vue'
import TimelineItem from './src/timeline-item.vue'
export const KlTimeline = withInstall(Timeline)
export const KlTimelineItem = withInstall(TimelineItem)
export default KlTimeline
