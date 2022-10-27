<template>
  <div class="bid-item">
    <div class="bid-item__container">
      <div class="bid-item__img">
        <img
          class="bid-item-img"
          :src="getArticleImgUrl(img)"
          alt=""
        />
      </div>

      <div class="bid-item__info">
        <div class="bit-item__info-left">
          <h3 class="bid-item__header">{{header}}</h3>
          <div class="bid-item__username">{{user.login}}</div>
        </div>
        <img
          class="bid-item__user-avatar"
          :src="getUserAvatarUrl(user.avatar)"
          alt=""
        />
      </div>
      <div class="bid-item__current-bid current-bid">
        <div class="current-bid__items">
          <div class="current-bid__item">
            <div class="current-bid__title">Current Bid</div>
            <div class="current-bid__content"><CurrentBid :value="currentBid"/></div>
          </div>
          <div class="current-bid__item">
            <div class="current-bid__title current-bid__title-right">Ending in</div>
            <div class="current-bid__content">{{endingIn}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from "vue";
import CurrentBid from "@/components/ui/CurrentBid.vue";
import { UserInterface } from "@/types/user.interface"
import { getUserAvatarUrl, getArticleImgUrl } from "@/helpers/public-assets";

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  user: {
    type: Object as PropType<UserInterface>,
    required: true,
    default: {
      login: "",
      avatar: ""
    }
  },
  currentBid: {
    type: String,
    required: true,
  },
  endingIn: {
    type: String,
    required: true,
  },
});

</script>


<style lang="scss" scoped>
.bid-item {
  background: #f6faff;
  border-radius: 12px;
  width: 300px;
  height: 385px;

  &__container {
    margin: 12px 13px 0 13px;
  }

  &-img {
    width: 274px;
    height: 240px;
    border-radius: inherit;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header {
    font-family: var(--font-space-grotesk);
    font-weight: 700;
    font-size: 20px;
    line-height: 114%;
    color: var(--text-blak-primary);
  }

  &__username {
    margin-top: 7px;
    font-family: var(--font-popins);
    font-size: 14px;
    line-height: 114%;
    color: var(--text-gray);
  }

  &__user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  &__current-bid {
    margin-top: 30px;
  }
}

.current-bid {
  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-family: var(--font-popins);
    font-size: 12px;
    line-height: 114%;
    color: var(--text-gray);

    &-right {
      text-align: right;
    }
  }

  &__content {
    margin-top: 3px;
    font-family: var(--font-popins);
    font-weight: 600;
    font-size: 14px;
    line-height: 114%;
    color: var(--text-blak-primary);
  }
}
</style>
