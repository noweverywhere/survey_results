export const emptyElement = (parentElement) => {
  while (parentElement.children.length) {
    parentElement.removeChild(parentElement.firstChild)
  }
}

export const appendNodeOrString = (parentElement, child) => {
  const node = document.createElement('div')
  if (typeof child === 'string') {
    node.innerHTML = child
    parentElement.appendChild(node)
  } else {
    parentElement.appendChild(child)
  }
}

export const replaceContents = (parentElement, newContent) => {
  emptyElement(parentElement)
  if (Array.isArray(newContent)) {
    newContent.map((contentPortion) => {
      appendNodeOrString(parentElement, contentPortion)
    })
  } else {
    appendNodeOrString(parentElement, newContent)
  }
}
