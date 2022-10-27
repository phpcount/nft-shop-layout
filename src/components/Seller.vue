<template>
  <div class="seller">
    <MiniatureUser
      padding-right-avatar="9px"
      :header="header"
      :login="login"
      :img="img"
    />
    <ui-button
      width="129px"
      height="48px"
      :bg-color="bgColor"
      :color="textColor"
      :bd-color="textColor"
      bd-radius="8px"
      font-family="var(--font-popins)"
      font-size="16px"
      @click="$emit('changeFollow', !isFollowing)"
    >
      {{ btnText }}
    </ui-button>
  </div>
</template>

<script lang="ts" setup>
import { getAssetsUrl } from "@/helpers/public-assets";
import { computed, ref } from "vue";
import MiniatureUser from "@/components/MiniatureUser.vue";
import UiButton from "@/components/ui/Button.vue";

const emits = defineEmits(['changeFollow'])

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
  header: {
    type: String,
    default: "",
  },
  login: {
    type: String,
    default: "",
  },
  isFollowing: {
    type: Boolean,
    default: false,
  },
});

const imgUrl = computed(() => getAssetsUrl(props.img));
const btnText = computed(() => (props.isFollowing ? "Following" : "Follow"));
const bgColor = computed(() => props.isFollowing ? 'var(--white)' : 'var(--color-active-link)')
const textColor = computed(() => props.isFollowing ? 'var(--color-active-link)' : 'var(--white)')
</script>


<style lang="scss" scoped>
.seller {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
