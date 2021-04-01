<template>
  <div>
    <aside class="sidebar static">
      <div class="widget">
        <h4 class="widget-title">Shortcuts</h4>
        <ul class="naves">
          <li>
            <i class="ti-clipboard"></i>
            <NuxtLink to="/" title="">News feed</NuxtLink>
          </li>
          <li>
            <i class="ti-clipboard"></i>
            <NuxtLink to="/blog/add" title="">Add blog</NuxtLink>
          </li>
          <li>
            <i class="ti-mouse-alt"></i>
            <NuxtLink to="/profile" title="">Profile</NuxtLink>
          </li>
          <li>
            <i class="ti-clipboard"></i>
            <NuxtLink to="/" title="">Interested blogs</NuxtLink>
          </li>
          <li>
            <i class="ti-clipboard"></i>
            <NuxtLink to="/" title="">Going blogs</NuxtLink>
          </li>
          <li>
            <i class="ti-settings"></i>
            <NuxtLink to="/setting" title="">Setting</NuxtLink>
          </li>
          <li>
            <i class="ti-power-off"></i>
            <button @click="logout" title="">Logout</button>
          </li>
        </ul>
      </div><!-- Shortcuts -->
    </aside>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  methods: {
    logout(){
      sessionStorage.clear();
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>
button{
  border: none;
  color: #545454;
  font-size: 14px;
  display: inline-block;
  position: relative;
  font-weight: 500;
}
</style>
