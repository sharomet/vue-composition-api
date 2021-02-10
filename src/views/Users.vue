<template>
  <div class="container">
    <div class="search">
      <div class="form-group">
        <label>User Name</label>
        <input type="text" class="form-control" v-model="usersInput" />
      </div>
    </div>
    <table class="table table-sm table-bordered">
      <tbody>
        <tr v-for="user in users" :key="user.id">
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

<script>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

export default {
  setup() {
    let users = ref([])
    const getUserData = async () =>
      await axios
        .get('http://localhost:3000/users')
        .then(res => users.value = sortUser(res.data))
        .catch(err => console.log(err))
    onMounted(getUserData)

    const usersInput = ref('')
    watch(usersInput, () => {
      users.value.sort(a => a.first_name.indexOf(usersInput.value) > -1 ? -1 : 0)
      if(usersInput.value == '') {
        sortUser(users.value)
      }
    })

    const sortUser = data => {
      return data.sort((a, b) => {
        if(a.first_name < b.first_name) {
          return -1
        }
        if(a.first_name > b.first_name) {
          return 1
        }
        return 0;
      })
    }

    return {
      usersInput,
      users
    }
  },
}
</script>