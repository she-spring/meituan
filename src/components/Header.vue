<template>
    <div class="header">
        <span class="left"><slot name="left" ></slot></span>
        <span class="center"><slot name="center" ></slot></span>
        <span class="right"><slot name="right" ></slot></span>
    </div>
</template>

<script>
export default {

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
.left{
    width: 25%;
    text-align: center;
    line-height: 34px;
    font-size: 20px;
    
}
.center{
    width: 60%;
}
.center >span{
    width: 100%;
}
.right{
    width: 15%;
    text-align: center;
}

</style>