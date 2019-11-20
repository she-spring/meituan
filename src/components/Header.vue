<template>
    <div class="header">
        <span><van-icon color="#000" name="arrow-left" /></span>

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
    background-color: #ffb500;
    flex: 0;
    /* width: 100%; */
    padding:15px 10px;
    
}

</style>