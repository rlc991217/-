<template>
    <div>
        <Header></Header>
        <Movie></Movie>
        <!-- <City></City> -->
        <router-view/>
        <TabBar></TabBar>
    </div>
</template>
<script>
import City from '@/components/City.vue'
import Header from '@/components/Header.vue'
import Movie from '@/components/Movie.vue'
import TabBar from '@/components/TabBar.vue'
export default {
    components:{
        Header,
        Movie,
        City,
        TabBar
    }
}
</script>
<style>
    *{
        padding: 0;
        margin: 0;
    }
</style>
