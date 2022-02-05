<script setup lang="ts">
import { computed, ref } from 'vue'
import { activePanel } from '/@src/state/activePanelState'

const filter = ref('')
</script>

<template>
  <div
    id="search-panel"
    :class="[activePanel === 'search' && 'is-active']"
    class="right-panel-wrapper is-search is-left"
  >
    <div class="panel-overlay" @click="activePanel = 'none'"></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <AnimatedLogo width="38px" height="38px" />
        <a class="close-panel" @click="activePanel = 'none'">
          <i class="iconify" data-icon="feather:chevron-left"></i>
        </a>
      </div>
      <div class="right-panel-body has-slimscroll">
        <V-Field>
          <V-Control icon="feather:search">
            <input
              v-model="filter"
              type="text"
              class="input is-rounded search-input"
              placeholder="Search..."
            />
          </V-Control>
        </V-Field>

        <div class="recent">
          <h4>Recently viewed</h4>
          <div class="recent-block">
            <V-Block title="Browser Support" subtitle="Blog post" center>
              <template #icon>
                <V-IconBox size="small" color="info" rounded>
                  <i class="iconify" data-icon="feather:chrome"></i>
                </V-IconBox>
              </template>
            </V-Block>
            <V-Block title="Twitch API" subtitle="Blog post" center>
              <template #icon>
                <V-IconBox size="small" color="orange" rounded>
                  <i class="iconify" data-icon="feather:tv"></i>
                </V-IconBox>
              </template>
            </V-Block>
            <V-Block title="Browser Support" subtitle="Blog post" center>
              <template #icon>
                <V-IconBox size="small" color="green" rounded>
                  <i class="iconify" data-icon="feather:twitter"></i>
                </V-IconBox>
              </template>
            </V-Block>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/layout/_right-panel.scss';
</style>
