<template>
    <div class="header">
      <!-- <slot name="left"></slot>
      <slot name="right"></slot> -->
      <div>头部</div>
        <!-- <span><van-icon color="#000" name="arrow-left" /></span> -->

    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
export default {

}
</script>

<style scoped>
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffe000;
    flex: 0;
    width: 100%;
    padding:15px 0px;
    
}
.header div{
    margin-left: 180px;
}

</style>