<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="brands">
        <img
          src="@/assets/logo/partners/bitfinex.svg"
          alt=""
          class="brands__logo"
        />
        <img
          src="@/assets/logo/partners/bitfury.svg"
          alt=""
          class="brands__logo"
        />
        <img
          src="@/assets/logo/partners/binance.svg"
          alt=""
          class="brands__logo"
        />
        <img
          src="@/assets/logo/partners/coinbase.svg"
          alt=""
          class="brands__logo"
        />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &-content {
    padding: 80px 0 0 0;
  }
}

.brands {
  display: grid;
  grid-template-columns: repeat(4, minmax(210px, 1fr));
  grid-gap: 117px;

  &__logo {
    margin-top: 29px;
    @media screen and (max-width: 992px) {
      justify-self: center;
    }
  }
  @media screen and (max-width: 1427px) {
    grid-gap: 90px;
  }
  @media screen and (max-width: 1311px) {
    grid-gap: 60px;
  }
  @media screen and (max-width: 1089px) {
    grid-gap: 38px;
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(210px, 1fr));
    grid-gap: 5px 35px;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-gap: 5px 35px;
  }
}
</style>
