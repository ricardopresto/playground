<template>
  <div>
    <div class="container">
      <Child1 @add-user="addUser"
              @add-tel-user="addPhoneUser"
              @clear-users="clearUsers"/>
      <Child2 :users="users" @del-user="delUser($event)"/>
    </div>
    <div class="container">
      <Child3 />
    </div>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';

import { v4 as uuidv4 } from 'uuid';
import { AbstractUser, PhoneUser } from './classes/users';

export default {
  name: 'App',
  components: {
    Child1,
    Child2,
    Child3,
  },
  data () {
    return {
      users: [],
    }
  },
  methods: {
    addUser(user) {
      const newUser = new AbstractUser(user);
      newUser.uuid = uuidv4();
      this.users.push(newUser);
    },
    addPhoneUser(user) {
      const newUser = new PhoneUser(user);
      newUser.uuid = uuidv4();
      this.users.push(newUser);
    },
    delUser(id) {
      this.users = this.users.filter(user => user.uuid != id);
    },
    clearUsers() {
      this.users = [];
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
