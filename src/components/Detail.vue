<template>
    <div class="container1">
        <div class="info">
            <h3>淮南牛肉汤</h3>
            <div>
                <span>配送30分钟</span>
                <span>放心吃</span>
                <span>极速退款</span>
            </div>
            <div>
                <p>公告：哈哈哈哈哈哈哈哈哈哈哈</p>
            </div>
            <div>
                  <span><van-icon color="#000" name="arrow-down" /></span>
            </div>

        </div>
        <div class="tab">
            <van-tabs v-model="active">
                <van-tab title="点菜">
                    <van-sidebar v-model="activeKey">
                        <van-sidebar-item title="热卖" />
                        <van-sidebar-item title="折扣" />
                        <van-sidebar-item title="买赠" />
                        <van-sidebar-item title="进店必买" />
                        <van-sidebar-item title="套餐" />
                        <van-sidebar-item title="香辣爆炒" />
                        <van-sidebar-item title="锡纸花甲" />
                        <van-sidebar-item title="面粉" />
                        <van-sidebar-item title="海鲜饭" />
                        <van-sidebar-item title="加料点我" />
                        <van-sidebar-item title="饮品" />
                        <van-sidebar-item title="小吃系列" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                    </van-sidebar>
                </van-tab>
                <van-tab title="评价">内容 2</van-tab>
                <van-tab title="商家">内容 3</van-tab>
                <van-tab title="好友拼单">内容 4</van-tab>
            </van-tabs>

        </div>

    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import { Icon } from 'vant';
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Icon);
Vue.use(Tab).use(Tabs);
export default {
    data() {
    return {
      active: 0,
      activeKey: 0
    };
  }
    
}
</script>
<style scoped>
.container1{
    background-color: #f5f5f5;
    width: 100%;
    overflow: auto;
}
.info{
    height: 150px;
    border-radius: 5px;
    margin: 10px 20px;
    background-color: #fff;
    padding: 10px;
}
.footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    flex: 0;
    width: 100%;
    padding:5px 0;
    
}
.van-tab__pane{
    /* height: 2000px; */

}

</style>