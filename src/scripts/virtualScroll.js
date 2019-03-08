export default function virtualScroll(x, y, remove) {
  const html = document.documentElement;
  if (remove) {
    html.scrollLeft = null;
    html.scrollTop = null;
  } else {
    html.scrollLeft = x;
    html.scrollTop = y;
  }
}
