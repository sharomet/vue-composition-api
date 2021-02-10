<template>
  <tr>
    <td>
      {{ user.id }}
    </td>
    <td>
      {{ user.firstName }}
    </td>
    <td>
      {{ user.lastName }}
    </td>
    <td class="text-center">
      <button
        class="btn btn-danger btn-sm"
        @click="removeUser(user.id)"
      >
        x
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  setup (_, { emit }) {
    return {
      removeUser (id) {
        emit('removeUser', id)
      },
    }
  },
}
</script>