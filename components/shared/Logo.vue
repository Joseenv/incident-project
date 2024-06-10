<template>
  <div class="flex items-center">
    <SharedLogoIcon :color="props.color" :size="props.logoSize"/>
    <h1 :class="`text-2xl font-medium text-${props.textColor}`">IncidentCure</h1>
  </div>
</template>

<script setup lang="ts">
interface Props {
  logoSize: string
  color: string
  textSize: string
  textColor: string
}

const props = defineProps<Props>()
</script>
