window.addEventListener("load", () => {
    let icons = document.querySelectorAll(".accordion-head i");
    let buttons = document.querySelectorAll(".accordion-container");
    let lists = document.querySelectorAll(".accordion-list")
    let expandedIndex = null;
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (expandedIndex == index) {
                lists[index].style.animationName = lists[index].style.animationName == "expand" ? "collapse" : "expand";
            } else {
                if (expandedIndex != null) {
                    console.log(expandedIndex, index)
                    lists[expandedIndex].style.animationName = "collapse"
                }
                lists[index].style.animationName = "expand"
                expandedIndex = index
            }

        })
    })
})