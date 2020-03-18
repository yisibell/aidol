<template>
  <parent-layout ref="parentLayout">
    <template #page-bottom>
      <home-body />
    </template>
  </parent-layout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import HomeBody from '@theme/components/HomeBody.vue'
export default {
  name: 'Home',
  components: {
    ParentLayout,
    HomeBody
  }
}
</script>