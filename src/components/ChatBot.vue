<template>
  <MainLayout>
    <template #chat-header><ChatHeader /></template>
    <template #chat-body><ChatBody /></template>
    <template #chat-footer><ChatFooter /></template>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "./MainLayout.vue";
import ChatHeader from "./ChatHeader.vue";
import ChatBody from "./ChatBody.vue";
import ChatFooter from "./ChatFooter.vue";

export default defineComponent({
  name: "ChatBot",
  components: { MainLayout, ChatHeader, ChatBody, ChatFooter },
});
</script>
