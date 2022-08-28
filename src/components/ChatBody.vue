<template>
  <div id="scrollableArea" class="ChatBody scrollable">
    <ul>
      <li v-for="(item, index) in chatMessages" :key="index">
        <div class="d-flex">
          <p
            :class="[
              'chat-msg chat-img',
              index % 2 == 0 ? ' mr-r-auto' : ' mr-l-auto justify-content-end',
            ]"
            v-if="item.type === 'image'"
          >
            <img class="chatImage" :src="item.value" />

            <img
              v-if="index % 2 !== 0"
              class="tick"
              src="..\assets\icons\Done.png"
            />
          </p>
          <div
            v-else
            :class="[
              'chat-msg',
              'font-s-1',
              index % 2 == 0
                ? 'bot-text chat-bubble-bot'
                : 'user-text chat-bubble-user',
            ]"
          >
            {{ item.value }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from "vue";
import { useChatMessagesStore } from "../stores/chatMessages";

export default defineComponent({
  name: "ChatBody",
  components: {},
  setup() {
    const store = useChatMessagesStore();
    onUpdated(() => {
      const element = document.getElementById(
        "scrollableArea"
      ) as HTMLDivElement;
      element.scrollTop = element.scrollHeight;
    });
    return { chatMessages: store.chatMessages };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/typography.scss";

.ChatBody {
  width: 100%;
  padding: 1vw;
}

.scrollable {
  height: 80vh;
  overflow-y: auto;
  float: left;
  position: relative;
}

ul {
  list-style: none;
  padding: 0;
}

.chat-msg {
  position: relative;
  display: flex;
  margin: 0.5vw 0;
  padding: 0.8vw 1.8vw;
  border-radius: 1.5vw;
  max-width: 70%;
}

.chat-img {
  max-width: 50%;
  padding: 0;
}

.bot-text {
  background-color: $tertiaryColor;
  margin-right: auto;
}

.user-text {
  background-color: $secondaryColor;
  float: right;
  color: $white;
  margin-left: auto;
}

.chatImage {
  width: 70%;
}
.tick {
  width: 1.5vw;
  margin-left: 0.5vw;
  height: 1.5vw;
  align-self: end;
}
// Chat Bubble
%chat-bubble {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 0.6vw solid $tertiaryColor;
  border-right: 0.6vw solid transparent;
  border-top: 0.6vw solid transparent;
  border-bottom: 0.6vw solid transparent;
  bottom: 0.1vw;
}

.chat-bubble-bot:before {
  @extend %chat-bubble;
  left: -0.25vw;
  transform: rotate(20deg);
}

.chat-bubble-user:after {
  @extend %chat-bubble;
  border-left-color: $secondaryColor;
  right: -0.25vw;
  transform: rotate(290deg);
}

// Styling for custom Scrollbar
// width
::-webkit-scrollbar {
  width: 5px;
}

// Track
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

// Handle
::-webkit-scrollbar-thumb {
  background: $black;
  border-radius: 50px;
}

// Handle on hover
::-webkit-scrollbar-thumb:hover {
  background: $secondaryColor;
}
</style>
