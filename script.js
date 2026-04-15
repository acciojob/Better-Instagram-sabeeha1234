//your code here
  const allDivs = document.querySelectorAll(".image")

       
       
        for(let div of allDivs){



            // Add drag start event for div
            div.addEventListener("dragstart",(e)=>{
                e.dataTransfer.setData("text",div.id)
            })


            // Preventing default behaviour of element to accept drops
            div.addEventListener("dragover",(e)=>{
                e.preventDefault()
            })


            div.addEventListener("drop",(e)=>{
                e.preventDefault()

                const dropElement = e.target;
                const dropElementBgImage = getComputedStyle(dropElement).backgroundImage

                const draggedElement = document.getElementById(e.dataTransfer.getData("text"))
                const draggedElementBgImage = getComputedStyle(draggedElement).backgroundImage

                // console.log('dragged element image =>',draggedElementBgImage)
                // console.log('drop element image =>',dropElementBgImage)

                console.log("dragged element", draggedElement)
                console.log('drop element',dropElement)


                // Swap images
                draggedElement.style.backgroundImage = dropElementBgImage
                dropElement.style.backgroundImage = draggedElementBgImage
            })

        }

