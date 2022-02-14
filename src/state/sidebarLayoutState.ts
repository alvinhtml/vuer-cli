/**
 * This is a store that hold which layout component is used on /sidebar subpages
 *
 * Using defineAsyncComponent from vue allow to lazyload component only when they are used
 *
 * We can import and use sidebarLayout anywhere in our project
 * @see /src/components/navigation/desktop/sidebar/menu-items/SidebarItemLayoutSwitcher.vue
 * @see /src/pages/sidebar/dashboards.vue
 * @see /src/pages/sidebar/layouts.vue
 */

import { computed, ref, defineAsyncComponent } from "vue";

const SidebarLayout = defineAsyncComponent(
  () => import("/@src/layouts/SidebarLayout.vue")
);

const SidebarUserLayout = defineAsyncComponent(
  () => import("/@src/layouts/SidebarUserLayout.vue")
);

const layoutsComponents = {
  "sidebar-default": SidebarLayout,
  "sidebar-curved": SidebarUserLayout,
};

export const sidebarLayoutId = ref<keyof typeof layoutsComponents>(
  "sidebar-default"
);
export const sidebarLayout = computed(() => {
  return layoutsComponents[sidebarLayoutId.value] || SidebarLayout;
});

export function setLayout(layoutId: keyof typeof layoutsComponents) {
  if (layoutsComponents[layoutId]) {
    sidebarLayoutId.value = layoutId;
  }
}
