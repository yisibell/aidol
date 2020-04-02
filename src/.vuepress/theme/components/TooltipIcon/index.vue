<template>
  <el-tooltip v-bind="$props">
    <template #content><slot name="content" /></template>
    <template #default>
      <slot name="default">
        <svg-icon v-if="iconClass" :icon-class="iconClass" />
        <i v-else :class="['el-icon', elIcon]"></i>
      </slot>
    </template>
  </el-tooltip>
</template>

<script>
export default {
  name: 'TooltipIcon',
  props: {
    popperClass: {
      type: String,
      default: 'tooltip-icon'
    },
    offset: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'dark'
    },
    placement: {
      type: String,
      default: 'left'
    },
    iconClass: {
      type: String,
      default: ''
    },
    elIcon: {
      type: String,
      default: ''
    }
  }
}
</script>