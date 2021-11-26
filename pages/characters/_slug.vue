<script>
  export default {
    async asyncData({ $content, params }) {
      const character = await $content('characters', params.slug).fetch()
      return { character }
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
              <input class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="character.name">
              <label for="exampleEmailInput">House/Allegiance:</label>
              <label class="u-full-width button"><NuxtLink :to="'/houses/'+character.house_id"><!--<input class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="character.allegiances">-->{{character.allegiances}}</NuxtLink></label>
              <label for="exampleEmailInput">Death chapter:</label>
              <input v-if="character.death_chapter == '0'" class="u-full-width" type="text" placeholder="" id="exampleEmailInput" value="Did not died">
              <input v-else class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="character.death_chapter">
            </div>
            <div class="six columns">
              <label for="exampleEmailInput">Death Year:</label>
              <input v-if="character.death_year == '0'" class="u-full-width" type="text" placeholder="" id="exampleEmailInput" value="Did not died">
              <input v-else class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="character.death_year">
              <label for="exampleEmailInput">Book of death:</label>
              <input v-if="character.book_of_death == '0'" class="u-full-width" type="text" placeholder="" id="exampleEmailInput" value="Did not died">
              <label v-else><NuxtLink class="button" :to="'/books/'+character.book_of_death">{{character.book_of_death}}</NuxtLink></label>
              <label for="exampleEmailInput">gender:</label>
              <input v-if="character.gender == '0'" class="u-full-width" type="text" placeholder="" id="exampleEmailInput" value="Female">
              <input v-else class="u-full-width" type="text" placeholder="" id="exampleEmailInput" value="Male">              
            </div>
            <div class="row">
              <div>
                <img v-if="character.gender == '0'" src="/images/characters/female.jpg" alt="">
                <img v-else src="/images/characters/male.jpg" alt="">
              </div>
            </div>
          </div>
        </fieldset>        
      </form>
      <!--  -->
    </div>
   <FooterView />  
 </div>
</template>