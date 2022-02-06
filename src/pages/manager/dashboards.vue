<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useHead } from '@vueuse/head'
import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const route = useRoute()
const router = useRouter()
const store = useStore()

useHead({
  title: '总览',
})

onBeforeMount(() => {

})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
        @click="toggleSidebar('none')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar === 'none' && '']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">总览</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <div class="columns is-multiline">
        <div class="column is-12">
          <VBlock title="Alvin" subtitle="Welcome back, Alvin." center>
            <template #icon>
              <VAvatar
                size="large"
                picture="/images/avatars/1.jpg"
                badge="/images/icons/flags/china.svg"
              />
            </template>
            <template #action>
              <VButton color="primary" elevated>View</VButton>
            </template>
          </VBlock>
        </div>
        
        <div class="column is-12">
          <V-Card radius="smooth">
            <DeveloperExperience />
          </V-Card>
        </div>
      </div>
    </div>
  </div>
</template>
