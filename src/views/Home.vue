<template>
  <div class="container">
    <UserForm @addNewUser="addNewUser" />
    <Users
      :users="usersList"
      @removeUser="removeUser"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import Users from '@/components/users/Users'
import UserForm from '@/components/users/UserForm'

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

    return {
      usersList,
      removeUser,
      addNewUser
    }
  },
}
</script>