<template>
    <div class="footer">
        <router-link :to="{name: 'Home'}" class="nav-item">首页</router-link>
        <router-link :to="{name: 'Found'}" class="nav-item">发现</router-link>
        <router-link :to="{name: 'Order'}" class="nav-item">订单</router-link>
        <router-link :to="{name: 'My'}" class="nav-item">我的</router-link>

    </div>
</template>

<style scoped>
.footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    flex: 0;
    width: 100%;
    padding:15px 0;
    
}
.nav-item{
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 25%;
    text-align: center;
    color: #000;
}
.router-link-exact-active{
    color: #ffb500;
}

</style>