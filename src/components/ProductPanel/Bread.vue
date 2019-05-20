<template lang="pug">
#bread 
  .product-title 
    span 手
    span 工
    span 麵
    span 包
  ul.product-list
    li(v-for="item in breadData")
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
      breadData: [
        {
          imgUrl: require('../../assets/images/products/bread/bread01.jpg'),
          title: '葡萄全麥吐司',
          price: '50NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread02.jpg'),
          title: '法式白麵包',
          price: '40NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread03.jpg'),
          title: '可頌麵包',
          price: '40NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread04.jpg'),
          title: '鄉村麵包',
          price: '50NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread05.jpg'),
          title: '瑞士麵包',
          price: '50NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread06.jpg'),
          title: '糖霜餐包',
          price: '45NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread07.jpg'),
          title: '水果風味麵包',
          price: '60NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread08.jpg'),
          title: '巧克力夾心麵包',
          price: '55NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread09.jpg'),
          title: '全麥吐司',
          price: 'ˋ45NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread10.jpg'),
          title: '黑麥核桃麵包',
          price: '60NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread11.jpg'),
          title: '雜糧麵包',
          price: '50NTD',
        },
        {
          imgUrl: require('../../assets/images/products/bread/bread12.jpg'),
          title: '法國長棍麵包',
          price: '50NTD',
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
#bread
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-color: $colorLiYellowBrown
  padding-bottom: 40px
  // 手工麵包 //
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
    // 不要透過jcc置中，這樣遇到單數資料不會對齊，透過每行算比例間距
    li
      width: 30%
      margin: 0 1.66% 
      margin-bottom: 70px
      background-color: $colorLiBrown
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
          background-color: $colorYellowBrown
          &:before
            display: block
            content: ''
            width: 0%
            height: 100%
            position: absolute
            left: 0
            top: 0
            background-color: $colorDeYellowBrown
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
            color: $colorYellowBrown
            border: 1px solid $colorYellowBrown
            transition: 0.3s
            -moz-transition: 0.3s
            -webkit-transition: 0.3s
            -o-transition: 0.3s
// hover
#bread
  .product-list>li
    &:hover
      box-shadow: 0px 0px 12px rgba(0,0,0,0.3)
      .list-inner>.item-title
        &:before
          width: 100%
      .list-inner>.item-price>.price-inner
        border: 1px solid $colorDeYellowBrown
        color: $colorDeYellowBrown
// RWD
@media screen and (min-width:1200px) 
  #bread
    .product-list
      width: 80%
      max-width: 1200px
      li
        width: 30%
        margin: 0 1.66% 
        margin-bottom: 70px
        .list-inner          
          .item-price
            padding: 20px
            .price-inner
              font-size: 16px
              padding: 12px

@media screen and (min-width:768px) and (max-width: 1199px)
  #bread
    .product-list
      width: 80%
      li
        width: 45%
        margin: 0 2.5% 
        margin-bottom: 60px
        .list-inner         
          .item-price
            padding: 16px
            .price-inner
              font-size: 16px
              padding: 12px
@media screen and (min-width:450px) and (max-width: 767px)
  #bread
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
  #bread
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

