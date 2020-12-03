<template>
    <div>
         <Header></Header>
         <Cinema></Cinema>
         <CiList></CiList>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import CiList from '@/components/CiList.vue'
import Cinema from '@/components/Cinema.vue'
import TabBar from '@/components/TabBar.vue'
export default {
    components:{
        Header,
        Cinema,
        CiList,
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
