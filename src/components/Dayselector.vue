<template>
  <div id="day-select">
    <ul v-responsive.lg.xl class="days">
      <li
        v-for="(day, index) in days"
        :key="index"
        :class="{ day: true, active: isActive(day) }"
        @click="clicked(day)"
      >
        {{ formatedDay(day) }}
      </li>
    </ul>
    <div v-responsive.md.sm.xs class="days">
      <select name="day" class="selector active">
        <option class="options" v-for="(day, index) in days" :key="index">
          {{ formatedDay(day) }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayseletorComp",
  data() {
    return {
      isMobile: true,
      selectedDay: this.$moment(),
      days: [0, 1, 2, 3, 4, 5, 6].map(num => this.$moment().add(num, "days"))
    };
  },
  methods: {
    formatedDay(day) {
      if (day.isSame(this.$moment(), "day")) {
        return "Today";
      }
      return this.$moment(day).format("ddd D /M");
    },
    isActive(day) {
      return day.isSame(this.selectedDay, "day");
    },
    clicked(day) {
      this.selectedDay = day;
      this.$store.dispatch("setDay", this.selectedDay);
    }
  }
  // filters: {
  //   dateFormat(day) {
  //     return this.$moment(day).format("ddd D / M");
  //   }
  // },
  // computed: {
  //   formatedDays() {
  //     return this.days.map(day => {
  //       if (day.isSame(this.$moment(), "day")) {
  //         return "Today";
  //       }
  //       return this.$moment(day).format("ddd D / MM");
  //     });
  //   }
  // }
};
</script>
