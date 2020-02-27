<template>
    <a :href="href" class="mc-button mt-xs" :class="classes">
        <span class="mc-button__label">{{ label }}</span>
    </a>
</template>

<script>
export default {
    name: 'MButton2',
    props: {
        label: String,
        href: String,
        classes: String
    }
}
</script>

<style lang="scss" scoped>
@import "settings-tools/_all-settings";
@include import-font-families();
@import "components/c.button"; 
.mc-button {
  // TODO delete this when icon bug is fixed
  &#{&} {
    color: blue;
  }
}
</style>