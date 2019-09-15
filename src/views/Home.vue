<template>
  <div id="overview">
    <Dayseletor />
    <div class="main">
      <Movielist />
      <Moviefilter />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movielist from "@/components/Movielist";
import Moviefilter from "@/components/Moviefilter";
import Dayseletor from "@/components/Dayselector";

export default {
  name: "homeView",
  components: { Movielist, Moviefilter, Dayseletor }
};
</script>
