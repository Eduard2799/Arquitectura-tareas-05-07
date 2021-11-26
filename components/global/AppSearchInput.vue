<script>
  // export default {
  //   data() {
  //     return {
  //       searchQuery: '',
  //       batttles: [],
  //       characters: [],
  //     }
  //   },
  //   watch: {
  //     async searchQuery(searchQuery) {
  //       if (!searchQuery) {
  //         this.battles = [],
  //         this.characters = []
  //         return
  //       }
  //       this.battles = await this.$content('battles')
  //         .limit(6)
  //         .search(searchQuery)
  //         .fetch()

  //       this.characters = await this.$content('characters')
  //         .limit(6)
  //         .search(searchQuery)
  //         .fetch()

  //       // this.pinturas = await this.$content('pinturas')
  //       //   .limit(6)
  //       //   .search(searchQuery)
  //       //   .fetch()
  //     }
  //   }
  // }
</script>
  
<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar"
      class="form-control"
    />
    <ul>
      <li v-for="battle of battles" :key="battle.slug">
        <NuxtLink :to="{ name: 'battles-slug', params: { slug: battle.slug } }">
          {{ battle.name }}
        </NuxtLink>
      </li>
    </ul>
    <ul>
      <li v-for="character of characters" :key="character.slug">
        <NuxtLink :to="{ name: 'characters-slug', params: { slug: character.slug } }">
          {{ character.name }}
        </NuxtLink>
      </li>
    </ul>
       
  </div>
</template>