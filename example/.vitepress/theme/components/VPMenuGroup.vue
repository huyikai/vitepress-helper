<script lang="ts" setup>
import VPMenuLink from './VPMenuLink.vue';

defineProps<{
  text?: string;
  items: any[];
}>();
</script>

<template>
  <div class="VPMenuGroup">
    <p
      v-if="text"
      class="title"
    >
      {{ text }}
    </p>

    <template v-for="item in items">
      <div
        class="VPMenuGroupContainer"
        :class="{
          hasVPMenuGroupItem: 'link' in item,
          hasVPMenuLink: !('link' in item)
        }"
      >
        <VPMenuLink
          v-if="'link' in item"
          :item="item"
        />
        <VPMenuGroup
          class="VPMenuGroupItem"
          v-else
          :text="item.text"
          :items="item.items"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
.VPMenuGroup {
  margin: 12px -12px 0;
  border-top: 1px solid var(--vp-c-divider);
  padding: 12px 12px 0 20px;
}

.VPMenuGroupContainer {
  border-left: 1px solid var(--vp-c-divider);
  margin-left: 5px;
}
.hasVPMenuGroupItem + .hasVPMenuLink,
.hasVPMenuLink + .hasVPMenuGroupItem {
  padding-top: 5px;
}

.VPMenuGroupItem {
  border-top: 0;
  margin-left: 16px;
  margin-top: 0;
  padding-left: 0;
}
.VPMenuGroup:first-child {
  margin-top: 0;
  border-top: 0;
  padding-top: 0;
}

.VPMenuGroup + .VPMenuGroup {
  /* margin-top: 12px; */
  border-top: 1px solid var(--vp-c-divider);
}

.title {
  margin-left: 5px;
  line-height: 32px;
  font-size: 14px;
  font-weight: bold;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  transition: color 0.25s;
  user-select: none;
}
</style>
