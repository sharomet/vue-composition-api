<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <button @click="handleClickAdd">
          Add
        </button>
        <p>
          Count {{ count }},
          Double {{ double }}
        </p>
      </div>
    </div>

    <ul v-if="users.length > 0">
      <li
        v-for="user in users"
        :key="user.id"
      >
        {{ user.first_name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, onMounted, computed } from 'vue'
export default {
  setup() {
    const users = ref([])
    const fetchUsersData = async () =>
      await fetch('http://localhost:3000/users')
              .then(res => res.json())
              .then(data => users.value = data)

    onMounted(fetchUsersData)

    const count = ref(1)
    const double = computed(() => count.value * 2)
    const handleClickAdd = () => count.value ++

    return {
      users,
      handleClickAdd,
      count,
      double
    }
  }
}
</script>
