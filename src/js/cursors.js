const setCursor = (element, cursorType) => {
  element.classList.remove('cursor-play', 'cursor-click');
  const cursorClass = `cursor-${cursorType}`;
  element.classList.add(cursorClass);
};

export default setCursor;
