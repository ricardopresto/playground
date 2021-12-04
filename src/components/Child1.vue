<template>
  <div id="main">
    <button @click="getNewAbstractUser">Get New User</button>
    <button @click="$emit('clear-users')">Clear Users</button>
    <button @click="getNewPhoneUser">Get New Telephone User</button>
  </div>
</template>

<script>
import getUser from '../classes/getUser';


export default {
  name: 'Child1',
  props: {
    
  },
  methods: {
    async getNewAbstractUser () {
      const newUser = await getUser();
      this.$emit('add-user', newUser);
    },
    async getNewPhoneUser () {
      const newUser = await getUser();
      this.$emit('add-tel-user', newUser);
    },

  }
}
</script>

<style scoped>
  #main {
    width: 300px;
    height: 300px;
    border: 1px solid blue;
    margin-top: 20px;
  }
  button {
    margin: 20px;
    padding: 10px;
  }
</style>
