<template>
    <div>  
       <Header></Header>
       <Mine></Mine>
       <TabBar></TabBar>
    </div>
</template>
 <script>
import Header from '@/components/Header.vue'
import Mine from '@/components/Mine.vue'
import TabBar from '@/components/TabBar.vue'

export default {
    components:{
        Header,
        Mine,
        TabBar
    }
}
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
</style>