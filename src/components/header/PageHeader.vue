<template>
    <header>
        <div class="header-box">
            <div class="icon-box">
                <span class="icon-span">
                    <font-awesome-icon class="back-icon" :icon="['fas', 'arrow-left']" />
                </span>
            </div>
            <div class="title-box">
                <h3 class="menu-title">Assign Loading Dock</h3>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "PageHeader"
    }
</script>

<style lang="scss" scoped>
    .header-box {
        display: flex;
        height: 54px;
        flex-direction: row;
        align-items: center;
        padding: 0 10px;
        /*border-bottom: 1px solid #adadad;*/
    }

    .icon-box {
        width: 34.75px;
        margin-right: 20px;
    }
    .back-icon {
        font-size: 28px;
    }

    .menu-title {
        margin-top: 8px;
    }
</style>