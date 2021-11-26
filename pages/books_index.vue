<script>
  export default {
    async asyncData({ $content }) {
      const books = await $content('books').fetch()
      return {
        searchQuery: null,
        books: books
      }
    },
    computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.books.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.book_name.toLowerCase().includes(v))
      })
      }else{
        return this.books;
      }
    }
  }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Books of Game of Thrones</h3>
     <p>This site shows information about books, battles, regions, deaths and houses Game of Thrones.</p>
   <div class="row">
      <div class="search-wrapper panel-heading col-sm-12">
        <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
      </div>                        
    </div>
   <ul>
     <li v-for="book in resultQuery" :key="book.slug">
       <NuxtLink :to="{ name: 'books-slug', params: { slug: book.slug } }">{{book.book_name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>