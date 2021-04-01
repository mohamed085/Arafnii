<template>
    <div>
      <div class="fixedNav">
        <Nav></Nav>
      </div>

      <div class="top">
        <div class="feature-photo">
          <figure><img src="/images/resources/timeline-1.jpg" alt=""></figure>
          <div class="container-fluid">
            <div class="row merged">
              <div class="col-lg-2 col-sm-3">
                  <div class="user-avatar">
                    <figure>
                      <b-avatar size="140px"></b-avatar>
                    </figure>
                  </div>
                  <h5 class="name">Mohamed Emad</h5>
              </div>
            </div>
          </div>
        </div>

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
                     v-for="userblog in userBlogs"
                     :key="userblog._id"
                >
                  <div class="row">
                    <!-- img -->
                    <div class="col-6">
                      <!--                                    <img src="../../server/uploads/Saint Catherine.jpg">-->
                      <!--                                                        <img src="../../../server/uploads/siwa.jpg">-->
                      <img :src="userblog.photo" class="mb-4" alt="siwa">
                    </div>
                    <div class="col-6">
                      <!-- Avatar -->

                      <div style="border: none" class="profile-content mt-2 d-flex">
                        <b-avatar></b-avatar>
                        <div class="ml-2">
                          <h3>Mohamed Emad</h3>
                          <p class="ml-1" style="margin-top: -15px">Published: {{ userblog.data }}</p>
                        </div>
                      </div>

                      <h3 style="border: none; font-family: Open Sans; font-size: 20px;font-weight: 400;" class="mt-2 ml-2">
                        {{ userblog.title }}
                      </h3>

                      <!-- Description -->
                      <p style="border: none" class="mt-2 ml-2">
                        {{ userblog.content }}
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
export default {
  name: "_id",
  async asyncData({ $axios }){
    try{
      let token = sessionStorage.getItem("token");
      console.log(token)


      let res = await $axios.$get(`http://localhost:4001/api/blog/user/:id`);

      return{
        userBlogs: res.blogs
      }

    }catch (e) {
      console.log(e);
    }
  }

}
</script>

<style scoped>
.name{
  margin-top: -60px;
  margin-left: 200px;
  color: white;
}
section{
  margin-top: 15px;
}
</style>
