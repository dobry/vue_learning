<template>
  <div class="users">
    <h1>Users></h1>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.registered">
        <span :class="{registered: user.registered}">{{user.name}}: {{user.email}}</span>
        <button v-on:click="deleteUser(user)">x</button>
        </li>
    </ul>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="name" />
      <input type="text" v-model="newUser.email" placeholder="e-mail" />
      <input type="submit" value="submit" />
      </form>
  </div>
</template>


<script>
export default {
  name: 'users',
  data () {
    return {
      newUser: { },
      users: [
        {
          name: "Barbra Streisand",
          email: "barbra@streisand.com",
          registered: false
        },
        {
          name: "Dony Darko",
          email: "donny75@yahoo.com",
          registered: false
        },
        {
          name: "Walter White",
          email: "wwhite@gmail.com",
          registered: false
        }
      ]
    }
  },
  methods: {
    addUser: function (e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        registered: false
      });
      e.preventDefault();
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  }
}
</script>

<style scoped>
  .registered {
    opacity: 0.5;
  }
</style>

