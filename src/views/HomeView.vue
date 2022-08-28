<template>
  <main>
    <ChatBot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChatBot from "@/components/ChatBot.vue";

export default defineComponent({
  name: "HomeView",
  components: { ChatBot },
});
</script>
