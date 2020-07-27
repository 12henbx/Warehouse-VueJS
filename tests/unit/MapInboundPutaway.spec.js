import {shallowMount} from "@vue/test-utils";
import MapInboundPutaway from "@/views/MapInboundPutaway";
import { blockedCells } from "@/astar/SetBlockedCells"

const productCard = { dataItem:[
    {sku: 'WH-01-12/99', productName: 'Monitor', quantity: '1', expiredDate: '30-12-2100', asn: 'ASN-10/wq/123/tr'},
    {sku: 'WH-04-04/90', productName: 'Wired Mouse', quantity: '1', expiredDate: '30-12-2100', asn: 'ASN-12/wq/124/yu'},
    {sku: 'WH-01-05/10', productName: 'Cable Coax', quantity: '1', expiredDate: '30-12-2100', asn: 'ASN-14/wq/126/io'},
    {sku: 'WH-09-05/77', productName: 'Headset', quantity: '1', expiredDate: '30-12-2100', asn: 'ASN-14/wq/126/io'}
]};

describe("MapInboundPutaway.vue", () => {

    it('cek watchers onCam ', function () {
        const wrapper = shallowMount(MapInboundPutaway, {
            propsData: {
                productCard,
                onCam: false,
            }
        });
        wrapper.setData({ onCam: true });
        expect(wrapper.vm.onCam).toBe(true);
    });

    it('cek buka modal ', function () {
        const wrapper = shallowMount(MapInboundPutaway, {
            propsData: {
                productCard,
                onCam: false,
            }
        });
        wrapper.setData({ onCam: true });
        wrapper.vm.$nextTick(() => {
            expect(wrapper.find('modal').exists()).toBe(true);
        });
    });

    it('cek nutup modal ', function () {
        const wrapper = shallowMount(MapInboundPutaway, {
            propsData: {
                productCard,
                onCam: false,
            }
        });
        wrapper.setData({ onCam: false });
        wrapper.vm.$nextTick(() => {
            expect(wrapper.find('modal').exists()).toBe(false);
        });
    });

    it('cek fungsi return class name', function () {
        const wrapper = shallowMount(MapInboundPutaway, {
            propsData: {
                productCard,
                onCam: false,
                dBlockedCells: blockedCells,
            }
        });
        expect(wrapper.vm.activeCellss(2,3)).toBe('blocked');
    });
});

