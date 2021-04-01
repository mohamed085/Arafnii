<template>
  <div class="row">
    <div class="col-6">
      <div class="land-featurearea">
        <div class="land-meta">
          <h1>Arafnii</h1>
          <p>
            Find your next travel
          </p>
          <div class="friend-logo">
            <span><img src="images/wink.png" alt=""></span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="login-reg-bg">
        <div class="log-reg-area sign">
          <h2 class="log-title">Register Now</h2>
          <p>
            If you use Arafnii ? <a href="/login" title="">login now</a>
          </p>
          <b-form>
            <b-form-group
              class="b-form-group"
              id="input-group-1"
              label="Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="name"
                type="text"
                placeholder="Enter name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="b-form-group"
              id="input-group-2"
              label="Email address:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="b-form-group"
              id="input-group-4"
              label="Email password:"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                v-model="password"
                type="password"
                placeholder="Enter password"
                required
              ></b-form-input>
            </b-form-group>

            <a href="#" title="" class="forgot-pwd">Forgot Password?</a>
            <b-button
              @click="onSubmit"
              class="mtr-btn signin"
              variant="primary"
            >
              <span>Register</span></b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  name: "register",
  data() {
    return {
      email: '',
      name: '',
      password: ''
    }
  },
  methods: {
    async onSubmit() {
      try{
        let data = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        let response = await this.$axios.$post('http://localhost:4001/api/auth/signup', data);

        console.log(response);
        sessionStorage.setItem("token", response.token);
        console.log(sessionStorage.getItem("token"));

        if (response.success){
          this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          }).then(() => this.$toast.success('Logged In!'))

          this.$router.push("/");
        }
      } catch (err){
        console.log(err)
      }
    },
  }
}
</script>

<style scoped>
.b-form-group{
  margin-bottom: 5px;
}
</style>
