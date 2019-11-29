<template>
    <div id="app">
        <v-header>
            <span slot="left">
                <router-link to='/city'>
                <p>上海</p><van-icon name="arrow-down" />
                </router-link>
            </span>
            <span slot="center">
            <van-search
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
            >
            <div slot="action" @click="onSearch"><van-icon name="audio" /></div>
            </van-search>
            </span>
            <span slot="right">
              <router-link to='/city'><van-icon name="plus" /></router-link>
            </span>
        </v-header>
        <div class="container">
            <div class="tool">
                <router-link :to="{name: 'Home'}" class="nav-item">
                    <i class="iconfont icon-saoyisao"></i>扫一扫</router-link>
                <router-link :to="{name: 'Found'}" class="nav-item">
                    <i class="iconfont icon-fukuanma"></i>付款码</router-link>
                <router-link :to="{name: 'Order'}" class="nav-item">
                    <i class="iconfont icon-kaquan"></i>红包/卡券</router-link>
                <router-link :to="{name: 'My'}" class="nav-item">
                    <i class="iconfont icon-zixingche"></i>骑单车</router-link>
            </div>
            <div class="nav">
                <router-link :to="{name: 'Home'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-meishi"></i>美食</router-link>
                <router-link :to="{name: 'Found'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-meishi"></i>电影</router-link>
                <router-link :to="{name: 'Order'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-meishi"></i>酒店</router-link>
                <router-link :to="{name: 'My'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-meishi"></i>休闲娱乐</router-link>
                <router-link :to="{name: 'Home'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-meishi"></i>外卖</router-link>
                <router-link :to="{name: 'Home'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-dache"></i>打车</router-link>
                <router-link :to="{name: 'Found'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-scenery"></i>景点</router-link>
                <router-link :to="{name: 'Order'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-lvyou"></i>旅游</router-link>
                <router-link :to="{name: 'My'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-sheying"></i>结婚</router-link>
                <router-link :to="{name: 'Home'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-huochepiao"></i>火车票</router-link>
                <router-link :to="{name: 'Home'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-lvyou"></i>免费水果</router-link>
                <router-link :to="{name: 'Found'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-scenery"></i>袋鼠快跑</router-link>
                <router-link :to="{name: 'Order'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-scenery"></i>红包签到</router-link>
                <router-link :to="{name: 'My'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-sheying"></i>跑腿代购</router-link>
                <router-link :to="{name: 'Home'}" class="nav-item1">
                    <i class="iconfont iconfont1 icon-gengduo"></i>更多</router-link>
        

            </div>
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=931583510,1375954826&fm=26&gp=0.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3332011578,3070158787&fm=26&gp=0.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1070025161,51311318&fm=26&gp=0.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1626299413,1519235328&fm=15&gp=0.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2669955069,882038394&fm=26&gp=0.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2670085430,3553438355&fm=15&gp=0.jpg" alt=""></van-swipe-item>
            </van-swipe>
            <ul>
                <li class="list-item" v-for="(item,index) in list" :key="index" @click="topath()">
                <span>{{item.name}}</span>
                <!-- <img :src="item.imgSrc" alt=""> -->
                </li>
            </ul>
        </div>
        <v-footer></v-footer>
    </div>
    
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { List } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';

Vue.use(Icon);
Vue.use(List);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Search);
export default {
  components: {
    'v-header': Header,
    'v-footer':Footer
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,

    };
  },

  methods: {
    onLoad() {
    
    },
    onSearch(){
            console.log(111)
    },
    topath(){
      this.$router.push('/detail')
    }
  },
  mounted(){
    axios.get('/static/foodlist.json').then(res => {
          console.log(res.data.item_list);
          this.list = res.data.item_list
          
        }).catch(res => {
          alert('wrong');
        })
  }
}
</script>

<style scoped>
.container{
    background-color: #f5f5f5;
    width: 100%;
    overflow: auto;
}
.tool{
    width: 100%;
    height: 250px;
    background-color: #ffe000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top:20px;
}
.center >span{
    width: 100%;
}
p{
    font-size: 18px;
    display: inline;
}
.nav-item{
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 25%;
    text-align: center;
    color: #000;
    padding: 0 10px;
}
.iconfont{
    font-size: 30px;
}
.iconfont1{
    font-size: 40px;
    color: orange
}
.icon-dianying{
  color: #ee0a24;
}

.van-search{
    border-radius: 10px;
    padding: 0;
    background-color: #fff;
    width: 100%;
    
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
.nav{
    width: 100%;
    height: 200px;
    background-color: #fff;
    border-radius: 50px 50px 0 0;
    margin-top: -180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
    padding-bottom: 30px;

}
.nav-item1{
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    color: #333;

}
.van-swipe,.van-swipe__track,.van-swipe-item{
    width: 100%;
    height: 100px;
    background-color: lightblue;
    border-radius: 20px;
    /* padding: 0 10px; */
}
img{
  width: 100%;
  
}
ul{
    /* width: 100%; */
    padding: 0 10px;
}
.list-item{
  height: 150px;
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 20px;
  text-align: center;
  line-height: 150px;
}

</style>