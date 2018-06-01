<template>
  <div class="my-component">
    <h1>{{title}}</h1>
    <span v-html="subtitle"></span>
    <p v-text="user.firstName"></p>
    <button v-on:click="revealName(true)">Reveal Name</button>
    <button v-on:click="revealName(false)">Use an alias</button>
    <p v-if="showFullName">{{user.firstName}} {{user.lastName}}</p>
    <template v-else>
      <p>{{user.firstName}} who?</p>
      <input type="text" v-model="user.alias">
      <p v-if="user.alias">{{user.firstName}} {{user.alias}}, sir.</p>
      <p v-else>Just {{user.firstName}}, sir.</p>
    </template>
    <p>What do you want?</p>
    <ul>
      <li v-for="item in shoppingList">{{item.name}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'my-component',
  data () {
    return {
      title: 'Hello, my component :)',
      subtitle: "<h2>What is it about?</h2>",
      user: {
        firstName: 'John',
        alias: "Sleazy",
        lastName: 'Smith'
      },
      showFullName: false,
      shoppingList: [
        { name: "Bullets" },
        { name: "Beans" }
      ]
    }
  },
  methods: {
    revealName: function (reveal) {
      this.showFullName = reveal;
    }
  }
}
</script>

<style scoped>

</style>

