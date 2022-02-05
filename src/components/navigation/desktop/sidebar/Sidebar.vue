<template>
  <div class="main-sidebar">
    <div class="sidebar-brand">
      <RouterLink :to="{ name: 'index' }">
        <AnimatedLogo width="36px" />
      </RouterLink>
    </div>
    <div class="sidebar-inner">
      <div class="naver"></div>

      <ul class="icon-menu">
        <!-- Dashboard -->
        <li>
          <RouterLink
            id="open-dashboard"
            :to="{ name: 'manager-dashboards' }"
            data-content="Settings"
          >
            <i class="iconify sidebar-svg" data-icon="feather:activity"></i>
          </RouterLink>
        </li>

        <!-- Elements -->
        <SidebarItemElements />
      </ul>

      <!-- User account -->
      <ul class="bottom-menu">
        <!-- Search -->
        <SidebarItemSearch />
        <!-- Wallet -->
        <SidebarItemSettings />
        <!-- Profile -->
        <SidebarItemProfile />
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/layout/_sidebar.scss';
</style>
