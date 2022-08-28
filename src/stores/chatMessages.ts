import { defineStore } from "pinia";

import feadBackImages1 from "../assets/images/feadBackImage (1).jpg";
import feadBackImages2 from "../assets/images/feadBackImage (2).jpg";
import feadBackImages3 from "../assets/images/feadBackImage (3).jpg";
import feadBackImages4 from "../assets/images/feadBackImage (4).jpg";
import feadBackImages5 from "../assets/images/feadBackImage (5).jpg";
import feadBackImages6 from "../assets/images/feadBackImage (6).jpg";

export interface chatMessage {
  type: string;
  value: string;
}

export type RootState = {
  botMessages: chatMessage[];
  chatMessages: chatMessage[];
  previewImgSrc: string | null;
};

export const useChatMessagesStore = defineStore({
  id: "chatMessages",
  state: () =>
    ({
      botMessages: [
        { type: "image", value: feadBackImages1 },
        { type: "image", value: feadBackImages2 },
        { type: "image", value: feadBackImages3 },
        { type: "image", value: feadBackImages4 },
        { type: "image", value: feadBackImages5 },
        { type: "image", value: feadBackImages6 },
        { type: "text", value: "Thank You" },
        {
          type: "text",
          value:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          type: "text",
          value:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        },
        {
          type: "text",
          value:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
        },
        {
          type: "text",
          value:
            "recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        {
          type: "text",
          value:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
      ],
      chatMessages: [{ type: "text", value: "Hi" }],
      previewImgSrc: null,
    } as RootState),
  getters: {
    // chatMessages: (state) => state.chatMessages,
    // botMessages: (state) => state.botMessages,
  },
  actions: {
    setChatMessages(type: string, value: string) {
      if (!value) return;

      this.chatMessages.push({ type, value });
    },
  },
});
