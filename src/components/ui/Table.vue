<template>
  <table class="ui-table">
    <thead>
      <tr>
        <slot name="head-th"></slot>
      </tr>
    </thead>
    <tbody>
      <slot name="body-tr"></slot>
    </tbody>
  </table>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.ui-table {
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  border: 1px solid var(--text-light);
  border-radius: 12px;

  :slotted(thead tr th) {
    border-bottom: 1px solid var(--text-light);
    font-family: var(--font-space-grotesk);
    font-weight: 700;
    font-size: 16px;
    line-height: 114%;
    color: var(--text-black);
  }

  :slotted(tbody tr td) {
    font-family: var(--font-space-grotesk);
    font-weight: 700;
    font-size: 16px;
    line-height: 114%;
    color: var(--text-black);

    font-family: var(--font-popins);
    font-weight: 600;
    font-size: 14px;
    line-height: 114%;
    color: var(--text-gray);
    text-align: center;
  }

  thead tr,
  :slotted(tbody tr) {
    height: 69px;
  }

  :slotted(thead tr th), :slotted(tbody tr td) {
    text-align: center;

    &:first-of-type {
      padding-left: 32px;
      text-align: left;
    }
  }

  :slotted(tbody tr td) {
    padding: 0 0 0 10px;
    &:first-of-type {
      padding-left: 42px;
    }
  }

  tbody {
    margin: 0 24px 0 32px;
  }

  :slotted(tbody tr) {
    position: relative;
    $left-indent: 32px;
    &::after {
      content: "";
      transition: box-shadow 0.5s ease-out;
    }
    &:hover:after {
      content: "";
      height: 90%;
      width: calc(100% - (24px + $left-indent));
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: $left-indent;
      box-shadow: 0px 4px 30px rgb(0 0 0 / 12%);
      border-radius: 12px;
    }
  }

}

</style>
