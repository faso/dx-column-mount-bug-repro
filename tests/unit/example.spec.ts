import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const wrapper = mount(HelloWorld)
        expect(wrapper.html()).toContain('hey');
    })
})
