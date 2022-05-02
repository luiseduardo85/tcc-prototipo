//Area professor

var modalDeadline = $("modalDeadline");

var myInput = $("myInput");

modalDeadline.addEventListener("show.bs.modal", function () {
    myInput.focus();
})

const addFileBtn = $("add-file");
const uploadBtn = $("upl-btn");

customBtn.addEventListener("click", function() {
    addFileBtn.click();
})


