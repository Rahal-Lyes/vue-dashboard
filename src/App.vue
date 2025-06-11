<template>
  <VerticalNavLayout>
    <template #navigation-drawer-content>
      <ul class="nav-items">
        <template v-for="(item, index) in navItems" :key="index">
          <VerticalNavSectionTitle
            v-if="item.type === 'section'"
            :title="item.title"
            :image="item.image"
          />

          <VerticalNavGroup
            v-else-if="item.type === 'group' && hasGroupPermissions(item)"
            :item="item"
          />

          <VerticalNavLink
            v-else-if="item.type === 'link' && isAuthorizedRoute(item)"
            :item="item"
          />
        </template>
      </ul>
    </template>
  </VerticalNavLayout>
</template>

<script setup>
import VerticalNavLayout from "@/components/layout/VerticalNavLayout.vue";
import VerticalNavSectionTitle from "@/components/layout/VerticalNavSectionTitle.vue";
import VerticalNavLink from "@/components/layout/VerticalNavLink.vue";
import VerticalNavGroup from "@/components/layout/VerticalNavGroup.vue";
import { computed } from "vue";
import { isAuthorizedRoute } from "@/utils/permissions.js";
import { navItems as rawNavItems } from "@/utils/items.js";

// rend les items réactifs si nécessaire
const navItems = computed(() => rawNavItems);
function hasGroupPermissions(group) {
  return group.children.some((child) => isAuthorizedRoute(child));
}
</script>
