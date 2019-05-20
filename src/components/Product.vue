<template lang="pug">
#product
  h1(data-aos="fadeIn"
      data-aos-duration="500"
      data-aos-once="true") 商品介紹
  .product-list
    Set(data-aos="fadeIn"
        data-aos-duration="1000"
        data-aos-once="true")
    Bread(data-aos="fadeIn"
          data-aos-duration="1000"
          data-aos-once="true")
    Dessert(data-aos="fadeIn"
            data-aos-duration="1000"
            data-aos-once="true")
</template>

<script>
  import Set from "./ProductPanel/Set";
  import Bread from "./ProductPanel/Bread";
  import Dessert from "./ProductPanel/Dessert";
  export default {
    components: {
      Set,
      Bread,
      Dessert
    }
  };
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
#product
  margin-top: 160px
  h1
    color: $colorWhite
    text-align: center
    font-size: 30px
    font-weight: 300
    letter-spacing: 10px
    padding: 40px 0
    padding-left: 10px
    background-color: $colorYellowBrown
    background-image: linear-gradient(270deg, $colorBrown,$colorYellowBrown) 
</style>
