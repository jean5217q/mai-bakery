<template lang="pug">
#heroImages
  .hero-image-slide
    .slide-item(v-for="item in slideData")
      .image(:style="{backgroundImage : 'url('+item.imgUrl+')'}", alt="heroImage")
      .text
        .main-text {{ item.text }}
        .sub-text {{item.subtext}}
    
</template>

<script>
import $ from 'jquery'
import slick from 'slick-carousel'
export default {
  data(){
    return{
      slideData: [
        {
          imgUrl: require('../assets/images/hero-images/hero-image-01.jpg'),
          text: '消費滿500元',
          subtext: '送全麥土司一片'

        },
        {
          imgUrl: require('../assets/images/hero-images/hero-image-02.jpg'),
          text: '週一06:00~09:00',
          subtext: '精選套餐95折'
        }
      ]
    }
  },
  mounted(){
    $('.hero-image-slide').slick({
      infinite: true,
      autoplay: true,
      Speed: 2,
      dots: true
    })
  }
}
</script>

<style lang="sass">
#heroImages
  .slide-item
    position: relative
    .image
      background-size: cover
      background-position: center center
    .text
      position: absolute
      top: 50%
      left: 160px
      transform: translateY(-50%)
      -ms-transform: translateY(-50%)
      -moz-transform: translateY(-50%)
      -webkit-transform: translateY(-50%)
      -o-transform: translateY(-50%)
      font-size: 45px
      letter-spacing: 2px
      line-height: 1.6
      text-align-last: left
      color: white
      .sub-text
        font-size: 55px
  .slick-prev,.slick-next  
    z-index: 100000
    &:before
      display: block
      content: ''
      border: solid white
      width: 18px 
      height: 18px
      border-width: 3px 3px 0 0  
      transition: 0.3s ease-in
      -moz-transition: 0.3s ease-in
      -webkit-transition: 0.3s ease-in
      -o-transition: 0.3s ease-in
  .slick-prev
    left: 3%
    &:before
      transform: rotate(-135deg)
      -ms-transform: rotate(-135deg)
      -moz-transform: rotate(-135deg)
      -webkit-transform: rotate(-135deg)
      -o-transform: rotate(-135deg)
  .slick-next
    right: 3%
    &:before
      transform: rotate(45deg)
      -ms-transform: rotate(45deg)
      -moz-transform: rotate(45deg)
      -webkit-transform: rotate(45deg)
      -o-transform: rotate(45deg)
  .slick-prev,.slick-next
    &:hover
      &:before
        border: solid white
        border-width: 3px 3px 0 0
@media screen and (min-width:1500px) 
  #heroImages
    .slide-item
      .image
        width: auto
        height: 650px
      .text
        font-size: 45px
        .sub-text
          font-size: 55px
@media screen and (min-width:956px) and (max-width: 1499px) 
  #heroImages
    .slide-item
      text-align: center
      .image
        width: auto
        height: 580px 
      .text
        font-size: 40px
        .sub-text
          font-size: 50px
@media screen and (min-width:756px) and (max-width: 955px) 
  #heroImages
    .slide-item
      .image
        height: 500px
      .text
        font-size: 36px
        left: 90px
        .sub-text
          font-size: 40px
@media screen and (max-width:755px)
  #heroImages
    .slide-item
      .image
        height: 400px
      .text
        font-size: 30px
        left: 80px
        .sub-text
          font-size: 40px
@media screen and (max-width:520px)
  #heroImages
    .slide-item
      .image
        height: 300px
      .text
        font-size: 20px
        left: 60px
        .sub-text
          font-size: 30px
</style>
