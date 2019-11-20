<template>
    <div class="container">
        <div class="tool">

        </div>
        <div class="nav">

        </div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- <van-list
          v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            
            
            >
        <van-cell
            v-for="item in list"
            :key="item"
            :title="item"
        />
       </van-list> -->
    </div>
</template>

<script>
import Vue from 'vue';
import { List } from 'vant';
import { Swipe, SwipeItem } from 'vant';
Vue.use(List);
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    // onLoad() {
    //   // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //       console.log(this.list)
    //     }
    //     //加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 500);
    // }
  }

}
</script>

<style scoped>
.container{
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #f5f5f5;
    width: 100%;
    overflow: auto;
}
.tool{
    width: 100%;
    height: 250px;
    background-color: #ffb500;
}
.nav{
    width: 100%;
    height: 200px;
    background-color: #fff;
    border-radius: 50px 50px 0 0;
    margin-top: -200px;

}
.van-swipe,.van-swipe__track,.van-swipe-item{
    width: 100%;
    height: 100px;
    background-color: lightblue;

}
.van-list{
    width: 100%;
}
</style>