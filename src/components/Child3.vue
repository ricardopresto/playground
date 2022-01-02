<template>
  <div id="main">
    <button @click="increase">Click</button>
    <button @click="clear">Clear</button>
    <textarea id="textArea" v-model="total"/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Child3',
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'totalText',
      'timesTen'
    ]),
    total () {
      return this.totalText;
    }
  },
  methods: {
    ...mapMutations([
      'increment'
    ]),
    increase () {
      this.increment(2);
    },
    clear () {
      this.$store.commit('clear');
    },
  }
}
</script>

<style scoped>
  #main {
    width: 300px;
    height: 300px;
    border: 1px solid green;
    margin-top: 20px;
  }
  button {
    margin: 20px;
    padding: 10px;
  }
  #textArea {
    width: 80%;
    height: 70%;
    margin-left: 20px;
  }
</style>