<template>
  <div class="container">
    <UserForm @addNewUser="addNewUser" />
    <Users :users="usersList" @removeUser="removeUser" />

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

<script>
import { ref, onMounted } from 'vue'
import Users from '@/components/users/Users'
import UserForm from '@/components/users/UserForm'
import axios from 'axios'

export default {
  components: {
    Users,
    UserForm,
  },
  setup () {

    let usersList = ref([
      { id: 1, firstName: 'Alex', lastName: 'Smith' },
      { id: 2, firstName: 'John', lastName: 'Anderson' },
      { id: 3, firstName: 'Stas', lastName: 'Cache' },
      { id: 4, firstName: 'Viliam', lastName: 'Craken' },
    ])
    
    const removeUser = id => usersList.value = usersList.value.filter(users => users.id !== id)

    const addNewUser = ({ firstName, lastName }) => {
      let id = usersList.value.length + 1
      usersList.value.push({
        id,
        firstName,
        lastName,
      })
    }

    let userData = ref([]);

    const getUserData = async () => 
      await axios.get('http://localhost:3000/users')
        .then(res => userData.value = res.data)
        .catch(err => console.log(err))

    onMounted (getUserData)

    return {
      usersList,
      removeUser,
      addNewUser,
      userData
    }
  },
}
</script>