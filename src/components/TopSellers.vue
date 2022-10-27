<template>
  <div class="top-sellers">
    <div class="top-sellers-container">
      <HeaderNFTS
        class="top-sellers__header"
        title="Top Sellers"
      />
      <div class="top-sellers__items">
        <Seller
        class="top-sellers__item"
          v-for="seller of sellers"
          :key="seller.id"
          :id="seller.id"
          :header="seller.name"
          :login="seller.login"
          :img="seller.avatar"
          :isFollowing="seller.isFollowing"
          @changeFollow="seller.isFollowing=$event"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType, reactive, ref } from "vue";
import HeaderNFTS from "./HeaderNFTS.vue";
import Seller from "./Seller.vue";

// const props = defineProps({
//   header: {
//     type: String,
//     required: true,
//   },
// });

const sellers = reactive([
  {
    id: "1",
    name: "Sam Lee",
    login: "@samlee",
    avatar: "logo/user/@samlee.png",
    isFollowing: false,
  },
  {
    id: "2",
    name: "Jane Donald",
    login: "@janedoe",
    avatar: "logo/user/@janedoe.png",
    isFollowing: true,
  },
  {
    id: "3",
    name: "Lois Lane",
    login: "@supermanschic",
    avatar: "logo/user/@supermanschic.png",
    isFollowing: false,
  },
  {
    id: "4",
    name: "Barry Allen",
    login: "@Flash",
    avatar: "logo/user/@Flash.png",
    isFollowing: false,
  },
  {
    id: "5",
    name: "Jenner Foster",
    login: "@jennerfos",
    avatar: "logo/user/@jennerfos.png",
    isFollowing: false,
  },
  {
    id: "6",
    name: "Sam Lee",
    login: "@samlee",
    avatar: "logo/user/@samlee.png",
    isFollowing: false,
  },
  {
    id: "2",
    name: "Jane Donald",
    login: "@janedoe",
    avatar: "logo/user/@janedoe.png",
    isFollowing: true,
  },
  {
    id: "3",
    name: "Lois Lane",
    login: "@supermanschic",
    avatar: "logo/user/@supermanschic.png",
    isFollowing: false,
  },
  {
    id: "4",
    name: "Barry Allen",
    login: "@Flash",
    avatar: "logo/user/@Flash.png",
    isFollowing: false,
  },
  {
    id: "5",
    name: "Jenner Foster",
    login: "@jennerfos",
    avatar: "logo/user/@jennerfos.png",
    isFollowing: false,
  },
])
</script>


<style lang="scss" scoped>
.top-sellers {
  font-family: var(--font-popins);
  background: var(--bg-light);
  border-radius: 12px;

  &-container {
    padding: 38px 28px 47px 32px;
  }

  &__items {
    margin: 30px 0 0 0;
  }

  &__item {
    margin: 0 0 25px 0;
    &:last-of-type {
      margin: 0;
    }
  }


}
</style>
