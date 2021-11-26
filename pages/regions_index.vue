<script>
  export default {
    async asyncData({ $content }) {
      const regions = await $content('regions').fetch()
      return {
        searchQuery: null,
        regions: regions
      }
    },
    computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.regions.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.region_name.toLowerCase().includes(v))
      })
      }else{
        return this.regions;
      }
    }
  }
  }
</script>


<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Regions of Game of Thrones</h3>
     <p>This site shows information about books, battles, regions, deaths and regions Game of Thrones.</p>
   <div class="row">
      <div class="search-wrapper panel-heading col-sm-12">
        <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
      </div>                        
    </div>
   <ul>
     <li v-for="region in resultQuery" :key="region.slug">
       <NuxtLink :to="{ name: 'regions-slug', params: { slug: region.slug } }">{{region.region_name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>