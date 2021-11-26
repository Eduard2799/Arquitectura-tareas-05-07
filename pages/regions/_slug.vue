<script>
  export default {
    async asyncData({ $content, params }) {
      const region = await $content('regions', params.slug).fetch()
      return { region }
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
              <input class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="region.region_name">
              <label for="exampleEmailInput">Description:</label>
              <textarea class="u-full-width" style="height: 200px;"  type="text" placeholder="" id="exampleEmailInput" :value="region.description"/>
            </div>
            <div class="six columns">            
             <img class="u-max-full-width" :src="'/images/regions/'+region.image" alt="region">
            </div>
          </div>
        </fieldset>        
      </form>
      <!--  -->
    </div>
   <FooterView />  
 </div>
</template>