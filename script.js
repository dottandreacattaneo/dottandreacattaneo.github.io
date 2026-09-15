// Small progressive enhancement: close other FAQ items when one is opened.
document.querySelectorAll("details").forEach(item => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll("details").forEach(other => {
      if (other !== item) other.removeAttribute("open");
    });
  });
});
