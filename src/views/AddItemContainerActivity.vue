<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title" v-on:containerActivityProduct="submitItemCA"></PageHeader>
        </div>
        <div class="main-input-box">
            <div class="input-box">
                <div class="highlight-bottom">
                    <div class="text-user-box">
                        <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'user']" /></span>
                    </div>
                    <div class="detail-input-box">
                        <input v-model="supplierName" placeholder="Nama Penyedia" class="item-detail-input" type="text">
                    </div>
                </div>
            </div>
            <div class="input-box">
                <label class="highlight-bottom">
                    <div class="text-user-box">
                        <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'user']" /></span>
                    </div>
                    <div class="detail-input-box">
                        <input placeholder="Nama Produk" v-model="productName" class="item-detail-input" type="text">
                    </div>
                </label>
            </div>
            <div class="input-box">
                <label class="highlight-bottom">
                    <div class="text-user-box">
                        <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'user']" /></span>
                    </div>
                    <div class="detail-input-box">
                        <input v-model="ExpiredDate" placeholder="Tanggal Kadaluarsa" class="item-detail-input" type="text">
                    </div>
                </label>
            </div>
            <div class="input-box">
                <label class="highlight-bottom">
                    <div class="text-user-box">
                        <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'user']" /></span>
                    </div>
                    <div class="detail-input-box">
                        <input v-model="itemQuantity" placeholder="Jumlah Barang" class="item-detail-input" type="text">
                    </div>
                </label>
            </div>
        </div>
        </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import router from "../router/index";

    export default {
        name: "AddItemContainerActivity",
        components: {
            PageHeader
        },
        data(){
            return{
                title: 'Tambah Barang CA',
                supplierName: '',
                productName: this.$route.query.productName,
                ExpiredDate: '',
                itemQuantity: '',
            }
        },
        methods:{
            submitItemCA(){
                //TODO : post data item
                router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/additemca";
</style>