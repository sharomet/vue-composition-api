<template>
  <div class="container">
    <div class="search">
      <div class="form-group">
        <label>User Name</label>
        <input type="text" class="form-control" v-model="usersInput" />
      </div>
      <ul class="search__list">
        <li v-for="user in users" :key="user.id">
          {{ user.first_name }}
        </li>
      </ul>
    </div>
    <table class="table table-sm table-bordered">
      <tbody>
        <tr v-for="(user, index) in userData" :key="index">
          <td>
            {{ user.first_name }}
          </td>
          <td>
            {{ user.last_name }}
          </td>
          <td>
            {{ user.email }}
          </td>
          <td>
            {{ user.company }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.search {
  position: relative;
  &__list {
    position: absolute;
    left: 0;
    list-style-type: none;
    padding: 0;
    margin: 0;
    z-index: 1;
    background-color: #fff;
    width: 100%;
    border: 1px solid #ccc;
    li {
      padding: 5px 10px;
    }
  }
}
</style>

<script>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

export default {
  setup() {
    let userData = ref([])
    const getUserData = async () =>
      await axios
        .get('http://localhost:3000/users')
        .then(res => (userData.value = res.data))
        .catch(err => console.log(err))

    onMounted(getUserData)

    const usersInput = ref('')
    const users = ref([])
    watch(usersInput, () => {
      axios.get('http://localhost:3000/users')
        .then(res => users.value = res.data)
        .catch(err => console.log(err))
    })

    return {
      users,
      userData,
      usersInput
    }
  },
}
</script>