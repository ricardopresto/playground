<template>
  <div id="main">
    <button>Click</button>
    <button>Clear</button>
    <textarea id="textArea"/>
  </div>
</template>

<script>
export default {
  name: 'Child3',
  data () {
    return {

    }
  },
  methods: {
    
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
