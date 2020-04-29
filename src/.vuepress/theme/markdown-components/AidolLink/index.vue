<template>
  <el-link v-if="type" v-bind="$props"><slot name="default"></slot></el-link>
  <a v-else v-bind="$props"><slot name="default"></slot></a>
</template>

<script>
export default {
  name: 'AidolLink',
  props: {
    type: {
      type: String,
      default: ''
    },
    underline: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_blank'
    }
  }
}
</script>