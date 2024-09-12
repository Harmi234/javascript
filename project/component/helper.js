 const getValue = (className) => {
    return document.querySelector(className).value;
};

export const createTag = (tagName, value) => {
    let tag = document.createElement(tagName);
    if (tagName === "img") {
        tag.src = value;
    } else {
        tag.textContent = value;
    }
    return tag;
};

export default getValue;

