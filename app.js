const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button from going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("URL Copied:" + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => 
    shareButtons.addEventListener('click', copyText))

const shareButton = document.querySelectorAll('.share-button')
console.log(shareButton)

async function copyText(e) {
//prevent button from going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("URL Copied:" + link)
    } catch (err) {
        console.error(err)
    }
}

shareButton.forEach(shareButton => 
    shareButton.addEventListener('click', copyText))
