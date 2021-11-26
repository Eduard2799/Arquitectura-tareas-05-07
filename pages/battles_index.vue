<script>
  export default {
    async asyncData({ $content }) {
      const battles = await $content('battles').fetch()
      return {
        searchQuery: null,
        battles: battles
      }
    },
    computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.battles.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
      }else{
        return this.battles;
      }
    }
  }
  }
</script>


<template>
  <div class="container">   
   <HeaderView />
   <h3 style="margin-top: 15px">battles of Game of Thrones</h3>
     <p>This site shows information about books, characters, houses, deaths and battles Game of Thrones.</p>
   <div class="row">
      <div class="search-wrapper panel-heading col-sm-12">
        <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
      </div>                        
    </div>
    <ul>
      <li v-for="battle of resultQuery" :key="battle.slug">
        <NuxtLink :to="{ name: 'battles-slug', params: { slug: battle.slug } }">
          {{ battle.name }}
        </NuxtLink>
      </li>
    </ul>
   <FooterView />
 </div>
</template>