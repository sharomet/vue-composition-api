<template>
  <div class="row justify-content-center mb-3">
    <div class="col-xl-5 col-lg-6 col-md-7">
      <form @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group col-lg-6">
            <label for="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              v-model="user.firstName"
            />
          </div>
          <div class="form-group col-lg-6">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              v-model="user.lastName"
            />
          </div>
        </div>
        <div class="text-right">
          <button class="btn btn-primary btn-block">Add User</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('addNewUser', this.user)
      this.user.firstName = ''
      this.user.lastName = ''

    }
  }
}
</script>