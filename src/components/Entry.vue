<template>
  <div class="entry" @click="delUser">
    <div>{{ `name: ${user.name}` }}</div>
    <div>{{ `email: ${user.email}` }}</div>
    <div v-if="user.phone">{{ `phone: ${user.phone}` }}</div>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  methods: {
    delUser() {
      this.user.goodbye();
      this.$emit('del-user', this.user.uuid);
    }
  }
}
</script>

<style scoped>
  .entry {
    width: 90%;
    border: 1px solid grey;
    margin: 10px;
  }
</style>