<template>
  <div class="table-NFTS">
    <HeaderNFTS
      class="table-NFTS__header"
      title="Top NFTS"
      amountText="564 Creators"
    />
    <UITable class="table-NFTS__ui-table">
      <template #head-th>
        <th v-for="col of columns" :key="col.name">{{ col.title }}</th>
      </template>
      <template #body-tr>
        <tr v-for="row in rows" :key="row.collection.title">
          <td v-for="col in columns" :key="col.name">
            <template v-if="col.name === 'volume'">
              <CurrentBid :value="row[col.name]" />
            </template>
            <template v-else-if="col.name === 'collection'">
              <MiniatureCollection
                :header="row[col.name].title"
                :img="row[col.name].img"
                :login="row[col.name].user.login"
              />
            </template>
            <template v-else-if="col.name === 'discount'">
              <TextDiscount :value="row[col.name]" />
            </template>
            <template v-else>
              {{ row[col.name]}}
            </template>
          </td>
        </tr>
      </template>
    </UITable>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import HeaderNFTS from "@/components/HeaderNFTS.vue";
import UITable from "@/components/ui/Table.vue";
import CurrentBid from "@/components/ui/CurrentBid.vue";
import TextDiscount from "@/components/ui/TextDiscount.vue";
import MiniatureCollection from "@/components/MiniatureCollection.vue";
import { ITableNFTS } from "@/types/table-nfts.interface";

const props = defineProps({
  currency: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    default: "",
  },
});

const columns: ITableNFTS[] = [
  { name: "collection", title: "Collection" },
  { name: "volume", title: "Volume" },
  { name: "discount", title: "24h %" },
  { name: "owners", title: "Owners" },
  { name: "items", title: "Items" },
];

const rows: any = [
  {
    collection: {
      title: "Cool Cyber Apes",
      user: {
        login: "@cybasseman",
      },
      img: "img/articles/cool-cyber-apes.png",
    },
    volume: "0.24 BTC",
    discount: "25",
    owners: "5.5k",
    items: "12.5k",
  },
  {
    collection: {
      title: "Shadow Cube",
      user: {
        login: "@cubicglass",
      },
      img: "img/articles/shadow-cube.png",
    },
    volume: "0.24 BTC",
    discount: "-15",
    owners: "5.5k",
    items: "12.5k",
  },
  {
    collection: {
      title: "Satoshi Mori",
      user: {
        login: "@whoissatoshi",
      },
      img: "img/articles/satoshi-mori.png",
    },
    volume: "0.24 BTC",
    discount: "25",
    owners: "5.5k",
    items: "12.5k",
  },
  {
    collection: {
      title: "The Scars",
      user: {
        login: "@Euphorian",
      },
      img: "img/articles/the-scars.png",
    },
    volume: "0.24 BTC",
    discount: "-11",
    owners: "5.5k",
    items: "12.5k",
  },
];
</script>



<style lang="scss" scoped>
.table-NFTS {
  width: 100%;
  &__ui-table {
    margin-top: 20px;
  }
}
</style>
