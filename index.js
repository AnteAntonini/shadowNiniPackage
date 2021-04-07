function shadownini(options) {
    let images = document.querySelectorAll('.shadownini');

    if(options.shadow_type === 'hard')
        options.shadow_type = '0px'
    else 
        options.shadow_type === '15px'

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`

    })
}

module.exports.shadownini = shadownini;