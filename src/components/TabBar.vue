<template>
    <div id="footer">
        <ul>
            <router-link tag="li" to="/dianyin">
            <i class="fa fa-film"></i>
            <p>电影</p>
            </router-link>
            <router-link tag="li" to="/yingyuan">
            <i class="fa fa-youtube-square"></i>
            <p>影院</p>
            </router-link>
            <router-link tag="li" to="/wode">
            <i class="fa fa-user-circle"></i>
            <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Tabbar"
}
</script>
<style scoped>
    #footer{
        width: 100%;
        height: 50px;
        background: white;
        border-top: 2px solid #ebe8e3;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    #footer ul{
        display: flex;
        text-align: center;
        height: 50px;
        align-items: center;
    }
    #footer ul li{
        flex: 1;
        height: 40px;
        list-style: none;
    }
    #footer li.active{
        color: #f03d37;
    }
    #footer li.router-link-active{
        color: #f03d37;
    }
    #footer ul i{
        font-size: 12px;
    }
    #footer ul p{
        font-size: 12px;
        line-height: 18px;
    }
</style>