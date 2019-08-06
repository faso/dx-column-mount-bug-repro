<template>
  <div class="hello">
    <dx-data-grid :data-source="source" :rowAlternationEnabled="true" ref="dataGrid">
      <dx-column data-field="name" />
    </dx-data-grid>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";

@Component({
  components: {
    DxDataGrid,
    DxColumn
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  source: Array<any> = [{ name: "hey" }];
}
</script>