<template lang="pug">
#dessert
  .product-title 
    span 精
    span 緻
    span 甜
    span 點
  ul.product-list
    li(v-for="item in dessertData")
      .list-inner
        .item-photo
          img(:src="item.imgUrl")
        .item-title
          .title-inner {{item.title}}
        .item-price 
          .price-inner {{item.price}} 
</template>

<script>
export default {
  data(){
    return{
      dessertData: [
        {
          imgUrl: require('../../assets/images/products/dessert/cake01.jpg'),
          title: '水果拼盤',
          price: '120NTD',
        },
        {
          imgUrl: require('../../assets/images/products/dessert/cake02.jpg'),
          title: '香蕉巧可力威化蛋糕',
          price: '140NTD',
        },
        {
          imgUrl: require('../../assets/images/products/dessert/cake03.jpg'),
          title: '莓果佐牛奶布蕾',
          price: '80NTD',
        },
        {
          imgUrl: require('../../assets/images/products/dessert/cake04.jpg'),
          title: '黑巧克力森林蛋糕',
          price: '80NTD',
        },
        {
          imgUrl: require('../../assets/images/products/dessert/cake05.jpg'),
          title: '咖啡千層提拉米蘇',
          price: '80NTD',
        },
        {
          imgUrl: require('../../assets/images/products/dessert/cake06.jpg'),
          title: '櫻桃牛奶千層派',
          price: '80NTD',
        },
      ]
    }
  }
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
#dessert
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-color: $colorLiBrown
  padding-bottom: 40px
  // 精緻甜點 //
  .product-title
    font-size: 28px 
    padding: 70px 0 
    color: $colorDeBrown
    span
      padding: 10px
      &:first-child, &:last-child
        position: relative
        &:before
          display: block
          content: ''
          width: 1px
          height: 50%
          position: absolute
          top: 50%
          transform: translateY(-50%) rotate(20deg)
          -ms-transform: translateY(-50%) rotate(20deg)
          -moz-transform: translateY(-50%) rotate(20deg)
          -webkit-transform: translateY(-50%) rotate(20deg)
          -o-transform: translateY(-50%) rotate(20deg)
          background-color: $colorDeBrown
      &:first-child
        &:before
          left: -15px      
      &:last-child
        &:before
          right: -15px 
  // 商品項目 // 
  .product-list
    display: flex
    flex-wrap: wrap
    align-items: center
    li
      width: 30%
      margin: 0 1.66% 
      margin-bottom: 70px
      border: 1px solid rgba(0,0,0,0.2)
      box-shadow: 0px 0px 10px rgba(0,0,0,0.1)
      transition: 0.3s
      -moz-transition: 0.3s
      -webkit-transition: 0.3s
      -o-transition: 0.3s
      cursor: pointer
      .list-inner
        .item-photo
          overflow: hidden
          img
            width: 100%
            vertical-align: middle
        .item-title
          position: relative
          background-color: $colorBrown
          &:before
            display: block
            content: ''
            width: 0
            height: 100%
            position: absolute
            left: 0
            top: 0
            background-color: $colorDeBrown
            transition: 0.3s
            -moz-transition: 0.3s
            -webkit-transition: 0.3s
            -o-transition: 0.3s
          .title-inner 
            font-size: 22px
            font-weight: 300
            letter-spacing: 2px
            padding: 12px
            text-align: center
            position: relative
            color: white             
        .item-price
          padding: 16px
          .price-inner
            font-size: 16px
            letter-spacing: 2px              
            padding: 12px 0
            text-align: center
            color: $colorBrown
            border: 1px solid $colorBrown
            transition: 0.3s
            -moz-transition: 0.3s
            -webkit-transition: 0.3s
            -o-transition: 0.3s
// hover
#dessert
  .product-list>li
    &:hover
      box-shadow: 0px 0px 12px rgba(0,0,0,0.3)
      .list-inner>.item-title
        &:before
          width: 100%
      .list-inner>.item-price>.price-inner
        border: 1px solid $colorDeBrown
        color: $colorDeBrown
// RWD
@media screen and (min-width:1200px)
  #dessert
    .product-list
      width: 80%
      max-width: 1200px
      li
        width: 30%
        margin: 0 1.66% 
        margin-bottom: 70px

@media screen and (min-width:768px) and (max-width: 1199px)
  #dessert
    .product-list
      width: 80%
      li
        width: 45%
        margin: 0 2.5% 
        margin-bottom: 60px
@media screen and (min-width:450px) and (max-width: 767px)
  #dessert
    padding-bottom: 20px
    .product-title
      padding: 50px 0
    .product-list
      width: 75%
      li
        width: 100%
        margin-bottom: 54px
        .list-inner         
          .item-price
            padding: 16px
            .price-inner
              font-size: 15px
              padding: 10px 0
@media screen and (max-width: 449px)
  #dessert
    padding-bottom: 20px
    .product-title
      padding: 50px 0
    .product-list
      width: 88%
      li
        width: 100%
        margin-bottom: 40px
        .list-inner         
          .item-price
            padding: 16px
            .price-inner
              font-size: 15px
              padding: 10px 0              
        
</style>