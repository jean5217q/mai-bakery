<template lang="pug">
#set 
  .prodult-title 
    span 精
    span 選
    span 套
    span 餐
  ul.product-list
    li(v-for="item in setData")
      .list-inner
        .item-photo
          img(:src="item.imgUrl")
        .item-title
          .title-inner {{item.title}}
        .item-description
          .description-inner {{item.description}}
        .item-price 
          .price-inner {{item.price}} 
</template>

<script>
export default {
  data(){
    return{
      setData: [
        {
          imgUrl: require('../../assets/images/products/set/set01.jpg'),
          title: '活力雙享餐',
          price: '180NTD',
          description: '餐點包含兩份套餐，食材有荷包蛋，番茄、時蔬、火腿、手工雜糧麵包。'
        },
        {
          imgUrl: require('../../assets/images/products/set/set02.jpg'),
          title: '歐式風味營養餐',
          price: '180NTD',
          description: '餐點選用新鮮時蔬，當季水果、火腿、手工雜糧麵包等食材製成。'
        },
        {
          imgUrl: require('../../assets/images/products/set/set03.jpg'),
          title: '土司荷包蛋',
          price: '80NTD',
          description: '簡單的早餐，卻能讓人有飽足感，餐點內容包含一份火腿蛋吐司。'
        },
        {
          imgUrl: require('../../assets/images/products/set/set04.jpg'),
          title: '法式優雅享味餐',
          price: '180NTD',
          description: '選用新鮮的食材製作的精緻套餐，包含手工麵包、水果沙拉、現打果汁。'
        },
        {
          imgUrl: require('../../assets/images/products/set/set05.jpg'),
          title: '雙拼風味餐',
          price: '140NTD',
          description: '選用雜糧吐司，搭配純手工製作的果醬，讓人一次享受兩種經典風味。'
        },
        {
          imgUrl: require('../../assets/images/products/set/set06.jpg'),
          title: '慢活輕鬆千層餅',
          price: '120NTD',
          description: '柔軟酥脆的千層麵包，搭配手工研磨的黑咖啡，簡單卻不失飽足感。'
        }
      ],
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
#set
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-color: $colorLiBrown
  padding-bottom: 40px
  .prodult-title
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
            color: white
            padding: 14px
            text-align: center
            position: relative 
        .item-description
          padding: 12px 22px  0
          .description-inner
            font-size: 16px
            line-height: 1.5
            color: $colorBlack
            text-align: justify
        .item-price
          padding: 12px 16px 16px 16px
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
#set
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
  #set
    .product-list
      width: 80%
      max-width: 1200px
      li
        width: 30%
        margin: 0 1.66% 
        margin-bottom: 70px

@media screen and (min-width:768px) and (max-width: 1199px)
  #set
    .product-list
      width: 80%
      li
        width: 45%
        margin: 0 2.5% 
        margin-bottom: 60px
@media screen and (min-width:450px) and (max-width: 767px)
  #set
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
  #set
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
