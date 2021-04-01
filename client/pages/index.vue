<template>
  <div>
    <div class="fixedNav">
      <Nav></Nav>
    </div>

    <section>
      <div class="row">
        <div class="col-lg-3">
          <sidebar></sidebar>
        </div><!-- sidebar -->

        <div class="col-9">
          <div class="main">
            <div class="container-fluid">
              <div class="blog"
                   style="border-bottom: 1px solid #dddddd"
                   v-for="blog in blogs"
                   :key="blog._id"
              >
                <div class="row">
                  <!-- img -->
                  <div class="col-6">
<!--                                    <img src="../../server/uploads/egypt-abu-simbel.jpg">-->
<!--                                    <img src="../../server/uploads/Amun.jpg">-->
                    <img :src="blog.photo" class="mb-4" alt="siwa">
                  </div>
                  <div class="col-6">
                    <!-- Avatar -->

                    <div style="border: none" class="profile-content mt-2 d-flex">
                      <b-avatar></b-avatar>
                      <div class="ml-2">
                        <NuxtLink class="authorName" to="/profile/65156123">
                          <h3>{{ blog.authorName }}</h3>
                        </NuxtLink>
                        <p class="ml-1" style="margin-top: -15px">Published: {{ blog.date }}</p>
                      </div>
                    </div>

                    <NuxtLink class="blogItem" to="blog/261618">
                      <h3 style="border: none; font-family: Open Sans; font-size: 20px;font-weight: 400;" class="mt-2 ml-2">
                        {{ blog.title }}
                      </h3>
                    </NuxtLink>

                    <!-- Description -->
                    <p style="border: none" class="mt-2 ml-2">
                      {{ blog.content }}
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>

import Nav from "~/components/Nav";
import Sidebar from "~/components/sidebar";
export default {
  components: {
    Sidebar,
    Nav
  },

  async asyncData({ $axios }){
    try{
      let token = sessionStorage.getItem("token");
      console.log(token)

      let res = await $axios.$get('http://localhost:4001/api/blog');

      let UserRes = await $axios.$get('http://localhost:4001/api/auth/user', {
        headers: {
          'Authorization': token
        },
      })

      console.log(res)
      console.log(UserRes)

      sessionStorage.setItem("userID", UserRes.user._id);
      let userID = sessionStorage.getItem("userID");
      console.log("userID: "+userID);

      return{
        blogs: res.blogs,
        user: UserRes.user
      }

    }catch (e) {
      console.log(e);
    }
  }
}
</script>

<style>
body{
  height: 600px;
}
.authorName{
  color: black;
}
.blogItem{
  text-decoration: none;
  color: black;
}
.blogItem:hover{
  text-decoration: none;
  color: black;

}
</style>
