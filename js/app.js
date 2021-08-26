let subnotes = document.getElementById("subnotes")
let myNotes = document.getElementById("myNotes")
let delnotes = document.getElementById("delNotes")
refreshNotes()
subnotes.addEventListener('click', fetchnotes)
function fetchnotes() {
    let takeNotes = document.getElementById("takeNotes")
    let notes = takeNotes.value
    let allnotes = localStorage.getItem('takeNotes')
    let mnotes = JSON.parse(localStorage.getItem('takeNotes'))
    let notesobj = new Array()
    if (allnotes === null || mnotes.length==0) {
       myNotes.innerHTML = ""
    }
    else {
        notesobj = JSON.parse(allnotes)
    }
    notesobj.push(notes)
    localStorage.setItem('takeNotes', JSON.stringify(notesobj))
    takeNotes.value = ""
    displaynotes()

}

delnotes.addEventListener('click', () => {
    localStorage.clear()
    myNotes.innerHTML = `<h1 class="text-center alert alert-danger my-3">No Notes here currently</h1>`
})

function refreshNotes() {
    myNotes.innerHTML = ""
    let html = ""
    let noteList = new Array()
    noteList = JSON.parse(localStorage.getItem('takeNotes'))
    if (noteList === null || noteList.length === 0) {
        myNotes.innerHTML = `<h1 class="text-center alert alert-danger my-3">No Notes here currently</h1>`
    }
    else {
        noteList.forEach((currEle, index) => {
            html = `
            <div class="col-12 col-lg-4">
            <div class="card my-2">
                <div class="card-body">
                    <h2>Sl no : ${index + 1}</h2>
                    <p>${currEle}</p>
                    <div class="text-center">
                    <button id="${index}" onclick="deleteNotes(${index})" class="btn btn-outline-primary">
                        Delete
                    </button>
                </div>
                </div>
            </div>
        </div>
            `
            myNotes.innerHTML = myNotes.innerHTML + html
        })
    }
}
function displaynotes() {
    let html = ""
    let noteList = new Array()
    noteList = JSON.parse(localStorage.getItem('takeNotes'))
    console.log(noteList)


    noteList.forEach((currEle, index) => {
        html = `
        <div class="col-12 col-lg-4">
        <div class="card my-2">
            <div class="card-body">
                <h2>Sl no : ${index + 1}</h2>
                <p>${currEle}</p>
                <div class="text-center">
                    <button id="${index}" onclick="deleteNotes(${index})" class="btn btn-outline-primary">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
        `
    })
    myNotes.innerHTML = myNotes.innerHTML + html

}

function deleteNotes(index) {
    let list = new Array()
    list = JSON.parse(localStorage.getItem('takeNotes'))
    console.log(list)
    list.splice(index, 1)
    localStorage.setItem('takeNotes', JSON.stringify(list))
    refreshNotes()

}



