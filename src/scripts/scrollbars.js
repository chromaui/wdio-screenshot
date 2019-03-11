export default function scrollbars(enabled) {
  if (!document.__scrollbarsStyleTag) {
    document.__scrollbarsStyleTag = document.createElement('style');
    document.__scrollbarsStyleTag.innerHtml = 'html::-webkit-scrollbar { display: none }';
  }

  if (enabled) {
    document.documentElement.style['scrollbar-width'] = null;
    document.documentElement.style['-ms-overflow-style'] = null;
    try {
      document.head.removeChild(document.__scrollbarsStyleTag);
    } catch (e) {
      // Already removed or never inserted, nothing to worry about
    }
  } else {
    document.documentElement.style['scrollbar-width'] = 'none';
    document.documentElement.style['-ms-overflow-style'] = 'none';
    document.head.appendChild(document.__scrollbarsStyleTag);
  }
}
