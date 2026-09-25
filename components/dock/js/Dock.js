const dockEl = document.getElementById("dock");
const itemsEl = document.querySelectorAll(".item");

dockEl.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;

  itemsEl.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemX = rect.left + rect.width / 2;
    const distance = Math.abs(mouseX - itemX);
    const scale = 100;
    const base = 59;
    const t = 240;
    if (distance < t) {
      const proximity = 1 - distance / t;

      const distance2 = base + (scale - base) * proximity;

      item.style.width = `${distance2}px`;
      item.style.height = `${distance2}px`;
    } else {
      item.style.width = "59px";
      item.style.height = "59px";
    }
  });
});

dockEl.addEventListener("mouseleave", () => {
  itemsEl.forEach((item) => {
    item.style.width = "59px";
    item.style.height = "59px";
  });
});
