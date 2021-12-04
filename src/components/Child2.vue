<template>
  <div id="main">
    <Entry v-for="user in users" :key="user.uuid" :user="user" @del-user="$emit('del-user', $event)"/>
  </div>
</template>

<script>
import Entry from './Entry.vue';
export default {
  name: 'Child2',
  components: {
    Entry
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style scoped>
  #main {
    width: 300px;
    height: 300px;
    border: 1px solid red;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
</style>