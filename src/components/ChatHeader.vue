<template>
  <div className="ChatHeader">
    <img class="BackIcon" src="../assets/icons/Arrow_Back.png" alt="back" />
    <img class="Avatar" src="../assets/icons/Account_Circle.png" alt="avatar" />
    <div class="BotInfo">
      <span class="ChatBotName">I am Chat Bot</span>
      <span class="ChatBotStatus">Active Now</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/typography.scss";

.ChatHeader {
  @extend %center;
  justify-content: flex-start;
}
.BackIcon {
  width: 1.7vw;
  height: 1.7vw;
}
.Avatar {
  width: 2.2vw;
  height: 2.2vw;
  margin-left: -0.6vw;
}

.BotInfo {
  @extend %center;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.3vw;
}

.ChatBotName {
  font-size: 0.9vw;
  font-weight: 500;
}

.ChatBotStatus {
  font-size: 0.7vw;
  color: $activeStatus;
  margin-top: -0.4vw;
}
</style>
