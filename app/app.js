const statusParagraph = document.querySelector('.status');

document
.querySelector('.userName')
.oninput = e => {
    const userName = e.target.value;
    statusParagraph.textContent = userName 
        ? `${e.target.value} is typing` 
        : '';
};