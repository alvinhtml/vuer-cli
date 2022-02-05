<script setup lang="ts">
import useDropdown from '/@src/composable/useDropdown'

const { dropdownElement, isOpen, toggle } = useDropdown()
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"
  >
    <a class="navbar-link is-arrowless" @click="toggle">
      <i class="iconify" data-icon="feather:bell"></i>
      <span class="new-indicator pulsate"></span>
    </a>
    <div class="navbar-dropdown is-boxed is-right">
      <div class="heading">
        <div class="heading-left">
          <h6 class="heading-title">Notifications</h6>
        </div>
        <div class="heading-right">
          <a class="notification-link" href="#">See all</a>
        </div>
      </div>
      <div class="inner has-slimscroll">
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
</template>
