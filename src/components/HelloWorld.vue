<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="!this.isLoggedIn">
      <h2>Not logged in yet?</h2>
      <button type="button" @click="loginUser">Login</button>
    </div>
    <div v-else>
      <h2>Hello {{ user.name }}</h2>
      <button type="button" @click="logoutUser">Logout</button>
    </div>
  </div>
</template>

<script>
import { login, logout, isLoggedIn, getUserProfile } from '../utils/auth';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      isLoggedIn: isLoggedIn(),
      user: getUserProfile()
    }
  },
  methods: {
    loginUser() {
      login();
    },
    logoutUser() {
      logout();
      this.isLoggedIn = false;
    }
  }
}
</script>

<style scoped>

</style>
