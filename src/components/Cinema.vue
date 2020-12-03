<template>
    <div id="main">
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城<i class="fa fa-caret-down"></i>
                </div>
                <div class="city_switch">
                    品牌<i class="fa fa-caret-down"></i>
                </div>
                <div class="city_switch">
                    特色<i class="fa fa-caret-down"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Cinema"
}
</script>
<style scoped>
    #content .cinema_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-around;
        background: white;
        line-height: 35px;
    }
    .cinema_menu i{
        margin-left: 5px;
    }
</style>