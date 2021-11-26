<script>
  export default {
    async asyncData({ $content, params }) {
      const house = await $content('houses', params.slug).fetch()
      return { house }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
    <div class="container-fluid">
      <form>
        <fieldset disabled="disabled">
          <div class="row">
            <div class="six columns">
              <label for="exampleEmailInput">Name:</label>
              <input class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="house.house_name">
              <label for="exampleEmailInput">Description:</label>
              <textarea class="u-full-width" style="height: 200px;"  type="text" placeholder="" id="exampleEmailInput" :value="house.description"/>
            </div>
            <div class="six columns">
              <label for="exampleEmailInput">Region:</label>
              <input class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="house.region">              
             <img class="u-max-full-width" :src="'/images/houses/'+house.image" alt="House">
            </div>
          </div>
        </fieldset>        
      </form>
      <!--  -->
    </div>
   <FooterView />  
 </div>
</template>