<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme';
import { useData } from 'vitepress';
import { isActive } from 'vitepress/dist/client/shared';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';

defineProps<{
  item: DefaultTheme.NavItemWithLink;
}>();

const { page } = useData();
</script>

<template>
  <div class="VPMenuLink">
    <VPLink
      :class="{
        active: isActive(
          page.relativePath,
          item.activeMatch || item.link,
          !!item.activeMatch
        )
      }"
      :href="item.link"
      :target="item.target"
      :rel="item.rel"
    >
      {{ item.text }}
    </VPLink>
  </div>
</template>

<style scoped>
.VPMenuGroup + .VPMenuLink {
  margin: 0 -16px 0 16px;
  padding: 12px 16px 0 0px;
}

.link {
  margin-left: 8px;
  display: block;
  border-radius: 6px;
  padding: 0 12px;
  line-height: 32px;
  font-size: 12px;
  font-weight: normal;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  transition: background-color 0.25s, color 0.25s;
}
.VPMenuGroup + .VPMenuLink .link {
  margin-left: 0px;
  padding-left: 0;
}

.link:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
}

.link.active {
  color: var(--vp-c-brand-1);
}
</style>
