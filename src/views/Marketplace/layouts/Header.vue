<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header__left">
        <InputSearch
          class="header__search-input"
          placeholder="Search items, collection, accounts"
        >
          <template #icon>
            <IconSearch />
          </template>
        </InputSearch>
      </div>
      <div class="header__right">
        <div class="header__user user">
          <IconNotification class="user__notification" @click.stop="isNotify=!isNotify" :is-notify="isNotify" />
          <div class="user__avatar"><img src="@/assets/logo/user/avatar_male.png" alt=""></div>
          <div class="user-account">
            <span class="user__login">Doadesignz</span>
            <IconDropdown class="user__dropdown-icon" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script lang="ts" setup>
import InputSearch from "@/components/ui/InputSearch.vue";
import IconSearch from "@/components/ui/icons/input/IconSearch.vue";
import IconNotification from "@/components/ui/icons/user/IconNotification.vue";
import IconDropdown from "@/components/ui/icons/user/IconDropdown.vue";
import { ref } from "vue";

const isNotify = ref<boolean>(true)

</script>


<style lang="scss" scoped>
.header {
  height: 98px;

  &-wrapper {
    padding: 28px 179px 28px 162px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.user {
  display: flex;
  align-items: center;
  user-select: none;

  &__notification {
    cursor: pointer;
  }


  &__login {
    font-family: var(--font-space-grotesk);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 169%;
    color: var(--text-black);
  }

  .user-account {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  &__dropdown-icon {
    padding: 1px 0 0 3px;
  }

  & > * {
    margin-right: 24px;
  }
}
</style>
