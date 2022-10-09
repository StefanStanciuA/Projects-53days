//Select DOM
const form = document.querySelector('form')
const info = document.querySelector('.info')
const titleEL = document.querySelector('.title')
const textareaEL = document.querySelector('textarea')
const dataEL = document.querySelector('.data')
const btnSubmit = document.querySelector('.btnsubmit')
const blogList = document.querySelector('.blog-list')

const blogs = JSON.parse(localStorage.getItem('blogs'))

if (blogs) {
    blogs.forEach(blog => addContent(blog))
}

//Event Listeber

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInputs()

    if (titleEL.value === '' || textareaEL.value === '' || dataEL.value === '') {
        return
    } else {
        addContent(null)
    }

})

// function addBlog(blogParam) {
//     const h2El = document.querySelector('h2')
//     console.log(blogParam)
//     //Create li
//     const newList = document.createElement('li')
//     // Create firstDiv
//     const firstDiv = document.createElement('div')
//     firstDiv.classList.add('blog-info')
//     newList.appendChild(firstDiv)
//     const blogTitle = document.createElement('span')
//     blogTitle.innerText = blogParam.text
//     firstDiv.appendChild(blogTitle)

//     const blogData = document.createElement('span')
//     blogData.innerText = blogParam.data
//     firstDiv.appendChild(blogData)

//     //Create secondDiv
//     const secondDiv = document.createElement('div')
//     secondDiv.classList.add('blog-content')
//     newList.appendChild(secondDiv)
//     const blogContent = document.createElement('span')
//     blogContent.innerText = blogParam.content



//     secondDiv.appendChild(blogContent)
//     //Final
//     blogList.appendChild(newList)



//     h2El.remove()
// }



//Function
function addContent(blogLocal) {
    const h2El = document.querySelector('h2')

    let title = ''
    let data = ''
    let content = ''

    if (blogLocal === null) {
        // cazul in care se adauga prin submit de buton
        title = titleEL.value
        data = dataEL.value
        content = textareaEL.value
    } else {
        // cazul in care exista un blog, deci se adauga din local storage
        title = blogLocal.text
        data = blogLocal.data
        content = blogLocal.content
    }

    //Create li
    const newList = document.createElement('li')
    // Create firstDiv
    const firstDiv = document.createElement('div')
    firstDiv.classList.add('blog-info')
    newList.appendChild(firstDiv)
    const blogTitle = document.createElement('span')
    blogTitle.innerText = title
    firstDiv.appendChild(blogTitle)

    const blogData = document.createElement('span')
    blogData.innerText = data
    firstDiv.appendChild(blogData)

    //Create secondDiv
    const secondDiv = document.createElement('div')
    secondDiv.classList.add('blog-content')
    newList.appendChild(secondDiv)
    const blogContent = document.createElement('span')
    blogContent.innerText = content



    secondDiv.appendChild(blogContent)
    //Final
    blogList.appendChild(newList)

    if (blogList === null) {
        blogList.appendChild(h2El)
    }

    newList.addEventListener('contextmenu', (e) => {
        e.preventDefault()

        newList.remove()
        updateLS()
        console.log(blogList)
        if (blogList.children.length < 1) {
            // window.location.reload()
            const h2 = document.createElement('h2')
            h2.innerText = 'Not blogs yet...'
            blogList.appendChild(h2)

        }

    })


    if (blogLocal === null) {
        updateLS()

        titleEL.value = ''
        dataEL.value = ''
        textareaEL.value = ''
    }

    if (h2El) {
        h2El.remove()
    }
}

function validateInputs() {
    //get the values from the inputs
    const titleValue = titleEL.value.trim()
    const dataValue = dataEL.value.trim()
    const textareaValue = textareaEL.value.trim()

    if (titleValue === '') {
        //show error
        //add error class
        setErrorFor(titleEL, 'Title is mandatory')
    } else {
        deleteError(titleEL)
    }

    if (dataValue === '') {
        //show error
        //add error class
        setErrorFor(dataEL, 'Data is mandatory')
    } else {
        deleteError(dataEL)
    }

    if (textareaValue === '') {
        //show error
        //add error class
        setErrorFor(textareaEL, 'Content is mandatory')
    } else {
        deleteError(textareaEL)
    }


}

function setErrorFor(element, textError) {
    const info = element.parentElement
    info.querySelector('small').innerText = textError;

    //add error class
    info.classList.add('error')
}

function deleteError(element) {
    const info = element.parentElement
    info.querySelector('small').innerText = '';

    //add error class
    info.classList.remove('error')
}


function updateLS() {

    newList = document.querySelectorAll('li')


    const blogs = []

    newList.forEach(() => {
        blogs.push({
            text: titleEL.value,
            content: textareaEL.value,
            data: dataEL.value
        })
    })

    localStorage.setItem('blogs', JSON.stringify(blogs))
}
