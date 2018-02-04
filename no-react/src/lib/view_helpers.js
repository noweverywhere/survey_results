export const createElement = (tag, className) => {
  const el = document.createElement(tag)
  el.className = className
  return el
}

export const emptyElement = (parentElement) => {
  while (parentElement.children.length) {
    parentElement.removeChild(parentElement.firstChild)
  }
}

export const moveChildren = (oldParent, newParent) => {
  const numberOfChildren = oldParent.children.length
  let i = 0
  for (i; i < numberOfChildren; i += 1) {
    newParent.appendChild(oldParent.children[i])
  }
}

export const appendNodeOrString = (parentElement, child) => {
  const temporaryParent = document.createElement('div')
  if (typeof child === 'string') {
    temporaryParent.innerHTML = child
    moveChildren(temporaryParent, parentElement)
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
