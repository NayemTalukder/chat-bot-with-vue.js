<template>
  <div class="wrapper">
    <div class="chat-header">
      <slot name="chat-header"></slot>
    </div>
    <div class="chat-body">
      <slot name="chat-body"></slot>
    </div>
    <div class="chat-footer">
      <slot name="chat-footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/typography.scss";

.wrapper {
  @extend %center;
  flex-direction: column;
  height: 100vh;
  width: 25vw;
  background-color: $primaryColor;
  color: $black;
  padding: 1.2vw;
}

.chat-header {
  width: 100%;
  display: flex;
  flex: 2;
  margin-left: 1.2vw;
}

.chat-body {
  width: 100%;
  background-color: $primaryColor;
  flex: 7;
}

.chat-footer {
  width: 100%;
  // background-color: $black;
  flex: 3;
}
</style>
