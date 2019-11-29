<template>
    <ul>
        <li class="list-item" v-for="(item,index) in list" :key="index" @click="topath()">
        <span>{{item.title}}</span>
        <img :src="item.imgSrc" alt="">
        </li>
    </ul>
</template>