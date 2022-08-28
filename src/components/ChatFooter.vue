<template>
  <div class="ChatFooter">
    <div class="AddImageIcon">
      <p>
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          @change="loadFile"
          style="display: none"
        />
      </p>
      <p>
        <label class="AddImageIcon d-flex" for="file" style="cursor: pointer"
          ><img src="../assets/icons/Add.png" alt="add"
        /></label>
      </p>
    </div>
    <div class="TextInputBox">
      <input
        @keyup.enter="onUserText"
        type="text"
        v-model="userMessage"
        placeholder="write a message"
      />
    </div>
    <div @click="onUserText" class="SendMessageIcon d-flex">
      <img class="" src="../assets/icons/Send.png" alt="send" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useChatMessagesStore } from "../stores/chatMessages";

export default defineComponent({
  name: "ChatFooter",
  components: {},
  setup() {
    const userMessage = ref<string>("");
    const store = useChatMessagesStore();

    function onUserText() {
      if (store.previewImgSrc) {
        store.setChatMessages("image", store.previewImgSrc);
        store.previewImgSrc = null;
      } else store.setChatMessages("text", userMessage.value);
      const randomMessage =
        store.botMessages[Math.floor(Math.random() * store.botMessages.length)];
      store.setChatMessages(randomMessage.type, randomMessage.value);
    }

    function loadFile(event: Event) {
      console.log((event.target as HTMLInputElement).value);
      const target = event.target as HTMLInputElement;
      const files = target.files as never;

      store.previewImgSrc = URL.createObjectURL(files[0]);
      onUserText();
      const inputFile = document.getElementById("file") as HTMLInputElement;
      inputFile.value = "";
    }
    return { userMessage, onUserText, loadFile };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/typography.scss";

.ChatFooter {
  @extend %center;
  margin-top: 1vw;
}

.TextInputBox {
  margin: 0 0.5vw;

  input[type="text"] {
    width: 17vw;
    background-color: $tertiaryColor;
    border: none;
    border-radius: 0.3vw;
    height: 2.5vw;
    padding: 0.5vw 1.5vw;
    font-size: 1vw;
  }

  input[type="text"]:focus {
    background-color: $white;
    border: 0.1vw solid green;
  }

  ::placeholder {
    color: $black;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $black;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: $black;
  }
}

.AddImageIcon,
.SendMessageIcon {
  width: 2.3vw;
  height: 2.3vw;
}
</style>
