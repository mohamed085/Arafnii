<template>
  <div>
    <div class="fixedNav">
      <Nav></Nav>
    </div>

    <div class="img">
      <img :src="blog.photo" class="mb-4" alt="siwa">
    </div>
    <div class="container mt-5 mb-5">
      <div style="border: none" class="profile-content mt-2 d-flex">
        <b-avatar></b-avatar>
        <div class="ml-2">
          <h3>{{ blog.authorName }}</h3>
          <p class="ml-1" style="margin-top: -15px">Published: {{ blog.date }}</p>
        </div>
      </div>

      <h3 style="border: none; font-family: Open Sans; font-size: 20px;font-weight: 400;" class="mt-2 ml-2">
        {{ blog.title }}
      </h3>

      <!-- Description -->
      <p style="border: none" class="mt-2 ml-2">
        {{ blog.content }}
      </p>
    </div>


  </div>
</template>

<script>
export default {
  name: "_id",
  async asyncData({ $axios }){
    try{
      let response = await $axios.$get(`http://localhost:4001/api/blog/:id`);
      console.log(response)
      return{
        blog: response.blog,
      }

    }catch (e) {
      console.log(e);
    }
  }

}
</script>

<style scoped>
.fixedNav{
  margin-bottom: 15px;
}
.img{
  margin-top: 0px;
  text-align: center;
}
</style>
