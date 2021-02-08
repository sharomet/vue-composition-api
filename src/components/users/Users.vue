<template>
  <table class="table table-sm table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <UserItem
        v-for="user in users"
        :key="user.id"
        :user="user"
        @removeUser="removeUser"
      />
    </tbody>
  </table>
</template>

<script>
import UserItem from './UserItem'
export default {
  components: {
    UserItem,
  },
  props: {
    users: Object,
  },
  setup(_, { emit }) {
    return {
      removeUser(id) {
        emit('removeUser', id)
      },
    }
  },
}
</script>