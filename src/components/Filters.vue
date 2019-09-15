<template>
  <div :class="{ 'check-filter': true, active: checked }">
    <div @click="clicked">
      <span class="checkbox"></span>
      <span class="check-filter-title">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComp",
  props: ["title", "category"],
  data() {
    return {
      checked: false
    };
  },
  methods: {
    clicked() {
      if (this.category === "genre") {
        this.checked = !this.checked;
        if (this.checked) {
          this.$store.dispatch("addGenre", this.title);
        } else {
          this.$store.dispatch("removeGenre", this.title);
        }
      } else {
        if (this.category === "time") {
          this.checked = !this.checked;
          if (this.checked) {
            this.$store.dispatch("addTime", this.title);
          } else {
            this.$store.dispatch("removeTime", this.title);
          }
        }
      }
    }
  }
};
</script>
