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

const aboutArea = document.getElementById("about");

function showDescription() {
    aboutArea.addEventListener("mouseover", function() {
        aboutArea.innerHTML = "";
        const description = document.createElement("p");
        description.className = "desc";
        description.innerHTML = "Hello, my name is Halim Choi. I studied Computer Science at Boston College (C/O '22) and I am excited to begin my career as a Software Engineer. ";
        aboutArea.appendChild(description);
    });

    aboutArea.addEventListener("mouseout", function() {
        aboutArea.innerHTML = "About Me";
        aboutArea.removeChild(description);
    });
}

showProfilePic();
showDescription();