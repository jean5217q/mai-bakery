<template lang="pug">
#app
  Navbar
  .container
    HeroImages
    About
    Product
    Company
    Contact
    ScrollTop
</template>

<script>
import Navbar from './components/Navbar'
import HeroImages from './components/HeroImages'
import About from './components/About'
import Product from './components/Product'
import Company from './components/Company'
import Contact from './components/Contact'
import ScrollTop from './components/Icon/ScrollTop'
import $ from 'jquery'

export default {
  name: 'app',
  components: {
    Navbar,
    HeroImages,
    About,
    Product,
    Company,
    Contact,
    ScrollTop,
  },
}
</script>


<style lang="sass">
$colorBlack: #696969
$colorWhite: #fff
$colorLiYellowBrown: #FFF7E0
$colorYellowBrown: #C99B4E
$colorDeYellowBrown: #B2812A 
$colorLiBrown: #fffaf2
$colorBrown: #C48758
$colorDeBrown: #A57047

*
  margin: 0
  padding: 0
  box-sizing: border-box
ul,li
  list-style: none
a
  text-decoration: none
  cursor: pointer
input,textarea
  outline: none
html
  font-size: 16px
body
  font-size: 1rem
  line-height: 1
  width: 100%
  overflow-x: hidden
  font-family: 'Roboto', sans-serif,'微軟正黑體'
.container
  margin-top: 146px
[data-aos="fadeIn"]
  opacity: 0
  &.aos-animate
    opacity: 1
</style>

