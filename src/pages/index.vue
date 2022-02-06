<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

import { isDark } from '/@src/state/darkModeState'

type TabId = 'elements' | 'components' | 'forms' | 'plugins'
const activeTab = ref<TabId>('elements')

useHead({
  title: 'Vuero - A complete Vue 3 design system',
})
</script>

<template>
  <MinimalLightLayout>
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div id="vuero-landing" class="hero is-fullheight rounded-hero is-active">
        <!-- Navbar partial -->
        <LandingNavigation />

        <div class="absolute-header">
          <div class="header-inner">
            <img
              class="cut-circle light-image-l"
              src="/@src/assets/shapes/cut-circle.svg"
              alt=""
            />
            <img
              class="cut-circle dark-image-l"
              src="/@src/assets/shapes/cut-circle-dark.svg"
              alt=""
            />
          </div>
        </div>

        <div class="hero-body has-text-centered">
          <div class="container">
            <div class="switch-wrapper">
              <div class="night-toggle night-toggle--daynight">
                <input
                  id="night-toggle--daynight"
                  type="checkbox"
                  class="night-toggle--checkbox"
                  :checked="!isDark"
                  @change="
                    (event) => {
                      isDark = !event.target.checked
                    }
                  "
                />
                <label class="night-toggle--btn" for="night-toggle--daynight"
                  ><span class="night-toggle--feature"></span
                ></label>
              </div>
            </div>
            <h1 class="title is-1 is-bold is-light is-bold">
              The World Needs a <span>Vuero</span>.
            </h1>
            <h3 class="subtitle is-4 is-light">
              Premium Webapp UI Kit.
              <span class="tag is-primary is-rounded">1.0</span>
            </h3>
          </div>
        </div>

        <canvas id="demo-canvas"></canvas>
      </div>

      <!--Stacks Section-->
      <DeveloperExperience />

      <!-- Footer -->
      <LandingFooter />

      <!-- Back To Top Button -->
      <div id="backtotop">
        <a href="#">
          <i class="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  </MinimalLightLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/_variables.scss';
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/demo/_landing.scss';
</style>
