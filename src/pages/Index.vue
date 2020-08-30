<template>
  <q-page class="flex flex-center column bg-grey-2">
    <q-icon name="present_to_all" class="logo" color="cyan" />
    <h2 class="text-h2 text-cyan text-weight-bold">XENTOR</h2>
    <p class="text-body1 text-cyan-10">Start sharing your desktop with your firend or mentor, get help and solve your problems.</p>
    <q-btn color="deep-orange-5" label="START" size="xl" @click="startShare()"/>
  </q-page>
</template>

<script>
import { uid } from 'quasar'

export default {
  name: 'IndexPage',
  data () {
    return {
    }
  },
  methods: {
    startShare (event) {
      const id = uid()
      this.$router.push({ path: `s/${id}` })
    }
  }
}
</script>

<style scoped>
.logo {
  font-size: 200px;
}

.text-h2 {
  line-height: 0;
}
</style>
