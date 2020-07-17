<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title"></PageHeader>
        </div>
        <div>
            <ul class="card-list">
                <li v-for="(activityItem, index) in caList" :key="`activityItem-${index}`" class="button-item">
                    <ContainerActivityList v-bind:caItem="activityItem"></ContainerActivityList>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import ContainerActivityList from "../components/listCard/ContainerActivityList";
    export default {
        name: "ContainerActivity",
        components: {
            ContainerActivityList,
            PageHeader
        },
        data(){
            return{
                caList:[
                    {containerActivity: 'CA-1278-PO-55-123', type: 'Regular', containerNo: '3456-3GHT', loadingDock: 'Ceper', checker: 'Budi', status: 'Approved'},
                    {containerActivity: 'CA-1279-PO-55-121', type: 'Regular', containerNo: '3456-2ACF', loadingDock: 'Batu', checker: 'Kurnia', status: 'Pending'},
                    {containerActivity: 'CA-1280-PO-57-125', type: 'Reject', containerNo: '3456-9DPT', loadingDock: 'Ceper', checker: 'Budi', status: 'Pending'}
                ],
                title: "Container Activity"
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/containeractivity";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";

</style>