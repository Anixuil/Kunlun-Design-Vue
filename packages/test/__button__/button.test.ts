import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import button from '../src/button.vue'

describe('test button', () => {
    test('slot test', () => {
        const wrapper = mount(button, {
            slots: {
                default: 'default'
            }
        })
        expect(wrapper.text()).toContain('default')
    })
    it('class test', () => {
        const wrapper = mount(button, {
            props: {
                type: 'primary'
            }
        })
        expect(wrapper.classes()).toContain('kl-button--primary')
    })
})
