import {shallowMount} from "@vue/test-utils";
import AssignLDList from "../../src/components/listCard/AssignLDList";

const getKey = 2;
const assignObject = {items: [
        {truck: 'Truk 1', asn:'ASN-10/wq/123/tr', loadingDock: 'Ceper', assignDate:'05/07/20', assignStartTime:'05:00', assignEndTime:'07:00', internalStatus:'Not Assigned', externalStatus:'Pending'},
    ]};

describe("AssignLDList.vue", () => {
    it('click emit button', function () {
        const wrapper = shallowMount(AssignLDList, {
            propsData: {
                getKey,
                assignObject
            },
        });
        wrapper.vm.emitToAssignLd(getKey);
        expect(wrapper.vm.getKey).toBe(2);
    });

    it('Click on div card-box', () => {
        const wrapper = shallowMount(AssignLDList, {
            propsData: {
                getKey,
                assignObject
            }
        })
        wrapper.find('div.card-box').trigger('click')
        expect(wrapper.emitted().openModal).toBeTruthy()
        expect(wrapper.emitted().openModal).toEqual([[2]])


    })
})