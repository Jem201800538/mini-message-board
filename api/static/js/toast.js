document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("toast-root");
  const toastContainer = document.getElementById("toast");

  if (!root || !toastContainer) return;

  const handleToast = (toast) => {
    let hideTimeout;

    const hide = () => {
      toast.classList.add("transition", "duration-300");
      toast.style.transform = "translateX(100%)";
      toast.style.opacity = 0;

      // Clean up after animation
      setTimeout(() => {
        toast.remove();
        if (!toastContainer.querySelector(".toast-item")) {
          root.remove();
        }
      }, 300);
    };

    hideTimeout = setTimeout(hide, 3000);

    toast.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
    toast.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(hide, 2000);
    });
  };

  const toasts = toastContainer.querySelectorAll(".toast-item");
  toasts.forEach(handleToast);
});
