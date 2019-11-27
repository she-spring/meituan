<template>
    <div class="header">
        <div class="address">
            <span>上海</span>
            <van-icon name="arrow-down" />
        </div>
    <van-search
    
    placeholder="请输入搜索关键词"
    show-action
    shape="round"
    @search="onSearch"
    >
    <div slot="action" @click="onSearch"><van-icon name="audio" /></div>
    </van-search>
    <van-icon name="plus" />

    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Search } from 'vant';
Vue.use(Icon);
Vue.use(Search);
export default {
   
    methods:{
        onSearch(){
            console.log(111)
        }

    }
    

}
</script>

<style scoped>
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffe000;
    width: 100%;
    padding:10px 0px;
    
}
.van-search{
    border-radius: 10px;
    padding: 0;
    background-color: #fff;
    width: 55%;
}
.van-cell{
    background-color: #fff;
}
.van-icon-plus{
    font-size: 26px;
    margin-right: 20px;
    line-height: 34px;
}
.van-search__content{
    background-color: #fff;
}
.address{
    line-height: 34px;
    margin-left: 30px;
}

</style>