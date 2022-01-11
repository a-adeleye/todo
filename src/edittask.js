export const showActions = (event) => {
  const element = event.target;
  if (element.parentNode.lastElementChild.style.transform == "scale(1)") {
    element.parentNode.lastElementChild.style.cssText = "transform: scale(0)";
  } else {
    element.parentNode.lastElementChild.style.cssText = "transform: scale(1)";
  }
};

export const editTask = (event) => {
    const element = event.target;
    element.parentNode.setAttribute('contenteditable','true');
}