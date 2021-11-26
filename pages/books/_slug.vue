<script>
  export default {
    async asyncData({ $content, params }) {
      const book = await $content('books', params.slug).fetch()
      return { book }
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
              <input class="u-full-width" type="text" placeholder="" id="exampleEmailInput" :value="book.book_name">
              <label for="exampleEmailInput">Description:</label>
              <textarea class="u-full-width" style="height: 200px;"  type="text" placeholder="" id="exampleEmailInput" :value="book.description"/>
            </div>
            <div class="six columns">
             <img class="u-max-full-width" :src="'/images/books/'+book.img" alt="boook">
            </div>
          </div>
        </fieldset>        
      </form>
      <!--  -->
    </div>
   <FooterView />  
 </div>
</template>