const picButton = document.getElementById("profilepic");
const imgArea = document.getElementById("image");
function showProfilePic() {
    picButton.addEventListener("click", function() {
        const img = document.createElement("img");
        img.src = "./images/profilepic.JPG";
        imgArea.appendChild(img);
        picButton.remove();
    });
}

showProfilePic();