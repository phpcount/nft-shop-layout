<template>
  <div class="user-balance">
    <div class="user-balance-container">
      <h5 class="user-balance__title">Your Balance</h5>
      <div class="user-balance__balance">$350,000.20</div>
      <div class="user-balance-total-offers">
        <div class="user-balance-total-offers__title text-balance__title">
          Total Offers
        </div>
        <div class="user-balance-total-offers__sum">USD 158,000</div>
        <div class="user-balance-total-offers__bid">(59.11%)</div>
      </div>
      <BtnCopy
        text="sdfgcghjhkb21687udwhjknscnkjkj123"
        class="user-balance__btn-token"
      />
      <div class="user-balance__btn-topUp-balance">
        <Button
          width="363px"
          height="64px"
          font-size="20px"
          bg-color="var(--color-active-link)"
          icon-position="left"
          icon-padding="16px"
        >
          TopUp Balance
          <template #icon>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M22 0H8C2.89333 0 0 2.89333 0 8V22C0 27.0933 2.88 30 8 30H22C27.1067 30 30 27.0933 30 22V8C30 2.89333 27.1067 0 22 0Z" fill="white"/>
              <path d="M19.9807 16.0625H16.1243V19.8855C16.1243 20.501 15.6209 21 15 21C14.3791 21 13.8757 20.501 13.8757 19.8855V16.0625H10.0193C9.44013 16.003 9 15.5192 9 14.942C9 14.3647 9.44013 13.8809 10.0193 13.8215H13.8636V10.0105C13.9236 9.43632 14.4117 9 14.994 9C15.5762 9 16.0643 9.43632 16.1243 10.0105V13.8215H19.9807C20.5599 13.8809 21 14.3647 21 14.942C21 15.5192 20.5599 16.003 19.9807 16.0625V16.0625Z" fill="white"/>
            </svg>
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from "vue";
import { UserInterface } from "@/types/user.interface";
import Button from "@/components/ui/Button.vue";
import BtnCopy from "@/components/ui/BtnCopy.vue";

// const props = defineProps({
//   header: {
//     type: String,
//     required: true,
//   },
// });


</script>


<style lang="scss" scoped>
.text-balance__title {
  font-family: var(--font-popins);
  font-size: 14px;
  line-height: 169%;
  color: var(--text-gray-balance);
}
.user-balance {
  font-family: var(--font-popins);
  background: var(--bg-light);
  border-radius: 12px;

  &-container {
    padding: 31px 37px 28px 37px;
  }

  &__title,
  &__balance {
    color: var(--text-blak-header);
  }

  &__title {
    font-size: 16px;
    line-height: 114%;
  }

  &__balance {
    margin-top: 19px;
    font-family: var(--font-space-grotesk);
    font-weight: 700;
    font-size: 36px;
    line-height: 114%;
  }

  &-total-offers {
    margin-top: 19px;
    display: flex;
    font-size: 14px;
    line-height: 169%;

    &__title {
      color: var(--text-gray-balance);
    }
    &__sum {
      font-weight: 500;
      margin-left: 20px;
      color: var(--text-blak-primary);
    }
    &__bid {
      margin-left: 6px;
      color: var(--text-green);
    }
  }

  &__btn-token {
    margin-top: 49px;
  }
  &__btn-topUp-balance {
    margin-top: 19px;
  }
}
</style>
