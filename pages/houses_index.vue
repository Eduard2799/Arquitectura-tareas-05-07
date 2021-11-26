<script>
  export default {
    async asyncData({ $content }) {
      const houses = await $content('houses').fetch()
      return {
        searchQuery: null,
        houses: houses
      }
    },
    computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.houses.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.house_name.toLowerCase().includes(v))
      })
      }else{
        return this.houses;
      }
    }
  }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Houses of Game of Thrones</h3>
     <p>This site shows information about houses, battles, regions, deaths and houses Game of Thrones.</p>
   <div class="row">
      <div class="search-wrapper panel-heading col-sm-12">
        <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
      </div>                        
    </div>
   <ul>
     <li v-for="house in resultQuery" :key="house.slug">
       <NuxtLink :to="{ name: 'houses-slug', params: { slug: house.slug } }">{{house.house_name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>