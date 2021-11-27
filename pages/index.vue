<script>
  export default {
    async asyncData({ $content }) {
      const characters = await $content('characters').fetch()
      return {
        characters
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Characters of Game of Thrones</h3>
     <p>This site shows information about characters, battles, regions, deaths and houses Game of Thrones.</p>
   <!-- <ul>
     <li v-for="character in characters" :key="character.slug">
       <NuxtLink :to="{ name: 'characters-slug', params: { slug: character.slug } }">{{character.name}}</NuxtLink>
     </li>
   </ul> -->
   <div class="col"  style="margin-top: 15px">     
    <div for="" class="row"><NuxtLink class="button" style="width: 200px;" to="/characters_index">Characters</NuxtLink></div>
    <div for="" class="row"><NuxtLink class="button" style="width: 200px;" to="/books_index">Books</NuxtLink></div>
    <div for="" class="row"><NuxtLink class="button" style="width: 200px;" to="/houses_index">Houses</NuxtLink></div>
    <div for="" class="row"><NuxtLink class="button" style="width: 200px;" to="/regions_index">Regions</NuxtLink></div>
    <div for="" class="row"><NuxtLink class="button" style="width: 200px;" to="/battles_index">Battles</NuxtLink></div>            
  </div>
  <Utteranc/>
  <div class="row">
    <FooterView />
  </div>
   
 </div>
</template>