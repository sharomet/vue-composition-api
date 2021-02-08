<template>
  <div class="container">
    <div class="row justify-content-center mb-3">
      <div class="col-xl-5 col-lg-6 col-md-7">
        <form @submit.prevent="addUser">
          <div class="form-row">
            <div class="form-group col-lg-6">
              <label for="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                v-model="firstName"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                v-model="lastName"
              />
            </div>
          </div>
          <div class="text-right">
            <button class="btn btn-primary btn-block">Add User</button>
          </div>
        </form>
      </div>
    </div>

    <Users :users="usersList" @removeUser="removeUser" />

  </div>
</template>

<script>
import { ref } from 'vue'
import Users from '@/components/users/users'

export default {
  components: {
    Users
  },
  setup() {
    const usersList = ref([
      { id: 1, firstName: 'Alex', lastName: 'Smith' },
      { id: 2, firstName: 'John', lastName: 'Anderson' },
      { id: 3, firstName: 'Stas', lastName: 'Cache' },
      { id: 4, firstName: 'Viliam', lastName: 'Craken' },
    ])

    const firstName = ref('');
    const lastName = ref('');

    const removeUser = id => {
      usersList.value = usersList.value.filter(users => users.id !== id)
    }

    const addUser = () => {
      let id = usersList.value.length + 1;
      usersList.value.push({
        id, firstName, lastName,
      })
      /*firstName.value = ''
      lastName.value = ''*/
    }

    return {
      usersList,
      removeUser,
      firstName,
      lastName,
      addUser
    }
  }

}
</script>