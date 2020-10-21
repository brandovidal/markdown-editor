const marked = require('marked')
const markdownView = document.querySelector('#markdown')
const htmlView = document.querySelector('#html')

const renderTomarkdown = (markdown) => {
    htmlView.innerHTML = marked(markdown, {sanitize: true})
}

markdownView.addEventListener('keyup', e => {
    console.log(e.target.value);
    const currentContent = e.target.value
    renderTomarkdown(currentContent)
})
