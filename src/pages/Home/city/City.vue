<template>
  <div>
    <v-header>
      <span slot="left">
          <router-link to='/'>
          <van-icon name="arrow-left" />
          </router-link>
      </span>
      <span slot="center">
      
      </span>
      <span slot="right">
     
      </span>
  </v-header>
  <div id="city">
    <div class="word" v-show="showWord">
      <span>{{letter}}</span>
    </div>
    <!-- <div class="title">城市选择</div> -->
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
  </div>
</template>

<script>
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import Header from '../../../components/Header'

import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);

export default {
  name: 'City',
  components: {
    'v-header': Header,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      showWord: false,
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      this.axios.get('/static/city.json').then(this.handleGetCityInfoSucc)
      },
    handleGetCityInfoSucc (res) {
      console.log(res.data)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      console.log(letter)
      this.letter = letter
      this.showWord = true
      setTimeout(() => {
        this.showWord = false
        console.log(this.showWord)
      }, 500)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped>
.title {
  line-height: 40px;
  background: #10d1eb;
  color: #fff;
}
.list{
  overflow: auto !important;
  top:54px !important;
}
.list[data-v-82900bf8]{
  top:54px !important;
}
.footer{
  display: none !important;
}
.word {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.word span {
  display: inline-block;
  height: 60px;
  width: 60px;
  background: rgba(0, 0, 0, .2);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
