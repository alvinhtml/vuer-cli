<template>
  <div class="default-layout">
    <div class="app-overlay"></div>
    <!-- <Pageloader /> -->
    <MobileNavbar />
    <MobileSidebarMain />

    <CircularMenu />

    <Sidebar />
    <LanguagesPanel />
    <SearchPanel />

    <slot></slot>
  </div>
</template>
