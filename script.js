const allDivs = document.querySelectorAll(".image")

for (let div of allDivs) {

    div.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id)
    })

    div.addEventListener("dragover", (e) => {
        e.preventDefault()
    })

    div.addEventListener("drop", (e) => {
        e.preventDefault()

        const dropElement = e.currentTarget

        const draggedElement = document.getElementById(
            e.dataTransfer.getData("text")
        )

        const dropBg = getComputedStyle(dropElement).backgroundImage
        const dragBg = getComputedStyle(draggedElement).backgroundImage

        draggedElement.style.backgroundImage = dropBg
        dropElement.style.backgroundImage = dragBg
    })
}