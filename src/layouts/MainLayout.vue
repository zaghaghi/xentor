<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" />
        <q-toolbar-title>Xentor</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <action-toolbar />
    </q-footer>
  </q-layout>
</template>

<script>
import ActionToolbar from '../components/ActionToolbar'

export default {
  name: 'MainLayout',
  components: { ActionToolbar },
  data () {
    return {
    }
  }
}

</script>
