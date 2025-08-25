document.addEventListener("DOMContentLoaded", () => {
  const pinnedBtn = document.getElementById("pinnedBtn");
  const chatBox = document.getElementById("chatBox");
  const closeChat = document.getElementById("closeChat");

  const openChat = () => {
    chatBox.classList.replace("hidden", "flex");
    pinnedBtn.classList.replace("flex", "hidden");
    chatBox.classList.add("pointer-events-auto");
  };

  const closeChatBox = () => {
    chatBox.classList.replace("flex", "hidden");
    pinnedBtn.classList.replace("hidden", "flex");
  };

  if (pinnedBtn && chatBox && closeChat) {
    pinnedBtn.addEventListener("click", openChat);
    closeChat.addEventListener("click", closeChatBox);

    chatBox.addEventListener("click", (e) => {
      if (e.target === chatBox) closeChatBox();
    });
  }
});
