<template>
    <div id="main">
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/dianyin/city" class="city_name"> 
                <span>北京</span><i class="fa fa-caret-down"></i>
                </router-link>
                <div class="hot_swtich">
                    <router-link tag="div" to="/dianyin/nowPlaying" class="hot_item active">
                        正在热映
                    </router-link>
                    <router-link tag="div" to="/dianyin/comingSoon" class="hot_item">
                        即将上映
                    </router-link>
                </div>
                <router-link tag="div" to="/dianyin/search" class="search_entry">
                    <i class="fa fa-search"></i>
                </router-link>
            </div>
       
        </div>
    </div>
</template>
<script>
export default {
    name:"Movie"
}
</script>
<style scoped>
    /* #content{ */
        /* position: relative; */
    /* }c */
    #content .movie_menu{
        display: flex;
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
    }
    .movie_menu .city_name{
        /* display: flex; */
        margin-left: 20px;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .city_name.router-link-active{
        /* display: flex; */
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
        box-sizing: border-box;
    }
    .movie_menu .hot_swtich{
        display: flex;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .hot_item{
        font-size: 15px;
        color: #666;
        width: 80px;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
    }
    .movie_menu .hot_item.router-link-active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
    }
    .movie_menu .search_entry{
        margin-right: 20px;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .search_entry.router-link-active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
        box-sizing: border-box;
    }
    .movie_menu .search_entry i{
        font-size: 24px;
        color: red;
    }
</style>