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
            <h2 class="header">Add new blog</h2>
            <b-form>
              <b-form-group
                class="b-form-group"
                id="input-group-2"
                label="Title:"
                label-for="input-2"
              >
                <b-form-input
                  class="input-group"
                  id="input-2"
                  v-model="title"
                  placeholder="Enter Title"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="b-form-group"
                id="input-group-1"
                label="Content:"
                label-for="input-1"
              >
                <b-form-input
                  class="input-group"
                  id="input-1"
                  v-model="content"
                  type="email"
                  placeholder="Enter Content"
                  required
                ></b-form-input>
              </b-form-group>


              <div class="a-spacing-medium">
                <label>Add photo</label>
                <br>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <input
                      @change="onFileSelected"
                      type="file"
                    >
                    <p style="margin-top: -70px">{{ fileName }}</p>
                  </label>
                </div>
              </div>



              <b-button
                @click="onSubmit"
                class="mtr-btn signin"
                variant="primary"
              >
                <span>Add new Blog</span></b-button>

            </b-form>
          </div>

        </div>
      </div>
    </section>


  </div>

</template>

<script>
export default {
  name: "add",
  data() {
    return {
      authorName: '',
      title: '',
      selectedFile: null,
      content: ''
    }
  },
  methods: {
    async onSubmit() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("content", this.content);
      data.append("photo", this.selectedFile);

      let result = await this.$axios.$post('http://localhost:4001/api/blog', data);

      await this.$router.push("/");

    },
    onFileSelected(event){
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@700&display=swap');
.main{
  padding: 10px 20px;
}
.main .header{
  font-family: 'PT Sans Narrow', sans-serif;
}
.main .input-group{
  padding: 5px 10px;
}
</style>
