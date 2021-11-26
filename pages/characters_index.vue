<script>
  export default {
    async asyncData({ $content }) {
      const characters = await $content('characters').fetch()
      return {
        searchQuery: null,
        characters: characters
      }
    },
    computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.characters.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
      }else{
        return this.characters;
      }
    }
  }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Characters of Game of Thrones</h3>
     <p>This site shows information about characters, battles, regions, deaths and houses Game of Thrones.</p>
  <div class="row">
      <div class="search-wrapper panel-heading col-sm-12">
        <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
      </div>                        
    </div>
  <ul>
     <li v-for="character in resultQuery" :key="character.slug">
       <NuxtLink :to="{ name: 'characters-slug', params: { slug: character.slug } }">{{character.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>