<template>
        <div class="search-box">
            <span class="sp-search"><font-awesome-icon class="search-icon" :icon="['fas', 'search']" /></span>
            <input type="text" class="input-search" placeholder="Search" aria-label="Search"/>
        </div>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style scoped>
    .input-search {
        border-bottom: 2px solid #adadad;
        /*position: relative;*/
        /*margin: 30px 0;*/
        width: 200px;
        /*float: left;*/
    }

    .sp-search {
        /*float: left;*/
    }

    .search-box{
        /*display: flex;*/
        overflow: hidden;
        width: 300px;
        height: 100px;
        /*vertical-align: middle;*/
        /*white-space: nowrap;*/
        /*position: relative;*/
    }

    /*.search-box .sp-search{*/
    /*    position: absolute;*/
    /*    top: 50%;*/
    /*    margin-left: 17px;*/
    /*    margin-top: 17px;*/
    /*    z-index: 1;*/
    /*    color: #4f5b66;*/
    /*}*/
</style>