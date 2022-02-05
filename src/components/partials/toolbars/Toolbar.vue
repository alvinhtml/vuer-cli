<script setup lang="ts">
import { isDark } from '/@src/state/darkModeState'
import { activePanel } from '/@src/state/activePanelState'
import useDropdown from '/@src/composable/useDropdown'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()
const { dropdownElement, isOpen, toggle } = useDropdown()

const localFlagSrc = computed(() => {
  switch (locale.value) {
    case 'fr':
      return '/images/icons/flags/france.svg'
    case 'es':
      return '/images/icons/flags/spain.svg'
    case 'es-MX':
      return '/images/icons/flags/mexico.svg'
    case 'de':
      return '/images/icons/flags/germany.svg'
    case 'zh-CN':
      return '/images/icons/flags/china.svg'
    case 'en':
    default:
      return '/images/icons/flags/united-states-of-america.svg'
  }

  return '/images/icons/flags/united-states-of-america.svg'
})
</script>

<template>
  <div class="toolbar ml-auto">
    <div class="toolbar-link">
      <label class="dark-mode ml-auto">
        <input
          type="checkbox"
          :checked="!isDark"
          @change="
            (event) => {
              isDark = !event.target.checked
            }
          "
        />
        <span></span>
      </label>
    </div>

    <a
      class="toolbar-link right-panel-trigger"
      @click="activePanel = 'languages'"
    >
      <img :src="localFlagSrc" alt="" />
    </a>

    <div class="toolbar-notifications is-hidden-mobile">
      <div
        ref="dropdownElement"
        :class="[isOpen && 'is-active']"
        class="dropdown is-spaced is-dots is-right dropdown-trigger"
      >
        <div class="is-trigger" aria-haspopup="true" @click="toggle">
          <i class="iconify" data-icon="feather:bell"></i>
          <span class="new-indicator pulsate"></span>
        </div>
        <div class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <div class="heading">
              <div class="heading-left">
                <h6 class="heading-title">Notifications</h6>
              </div>
              <div class="heading-right">
                <RouterLink
                  class="notification-link"
                  :to="{ name: '' }"
                  >See all</RouterLink
                >
              </div>
            </div>
            <ul class="notification-list">
              <li>
                <a class="notification-item">
                  <V-Block title="Browser Support" subtitle="Blog post" center>
                    <template #icon>
                      <V-IconBox size="small" color="info" rounded>
                        <i class="iconify" data-icon="feather:chrome"></i>
                      </V-IconBox>
                    </template>
                  </V-Block>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <V-Block title="Twitch API" subtitle="Blog post" center>
                    <template #icon>
                      <V-IconBox size="small" color="orange" rounded>
                        <i class="iconify" data-icon="feather:tv"></i>
                      </V-IconBox>
                    </template>
                    <template #action>
                      <VTag color="danger" label="3" />
                    </template>
                  </V-Block>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <V-Block title="Browser Support" subtitle="Blog post" center>
                    <template #icon>
                      <V-IconBox size="small" color="green" rounded>
                        <i class="iconify" data-icon="feather:twitter"></i>
                      </V-IconBox>
                    </template>
                  </V-Block>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <V-Block title="Toutupe" subtitle="Blog post" center>
                    <template #icon>
                      <V-IconBox size="small" color="danger" rounded>
                        <i class="iconify" data-icon="feather:youtube"></i>
                      </V-IconBox>
                    </template>
                    <template #action>
                      <VTag color="danger" label="26" />
                    </template>
                  </V-Block>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
