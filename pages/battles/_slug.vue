<script>
  export default {
    async asyncData({ $content, params }) {
      const battle = await $content('battles', params.slug).fetch()
      return { battle }
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
              <input class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="battle.name">
              <label for="exampleEmailInput">Year:</label>
              <input class="u-full-width"  type="text" placeholder="" id="exampleEmailInput" :value="battle.year">
            </div>
            <div class="six columns">
              <label for="exampleEmailInput">Attacker King:</label>
              <NuxtLink class="button" :to="'/characters/'+battle.attacker_id"><label class="u-full-width" type="text" placeholder="" id="exampleEmailInput">{{battle.attacker_king}}</label></NuxtLink>            
              <label for="exampleEmailInput">Defender king:</label>
              <NuxtLink class="button" :to="'/characters/'+battle.defender_id"><label class="u-full-width"  type="text" placeholder="" id="exampleEmailInput">{{battle.defender_king}}</label></NuxtLink>
            </div>            
          </div>
          <div class="row">
            <div class="six columns">
              <label for="exampleEmailInput">Attacker outcome:</label>
              <input class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="battle.attacker_outcome">              
              <label for="exampleEmailInput">Battle Type:</label>
              <input class="u-full-width"  type="text" placeholder="" id="exampleEmailInput" :value="battle.battle_type">
            </div>
            <div class="six columns">
              <label for="exampleEmailInput">Location:</label>
              <input class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="battle.location">              
            </div>
          </div>
        </fieldset>        
      </form>
      <!--  -->
    </div>
   <FooterView />  
 </div>
</template>