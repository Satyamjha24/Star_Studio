let changeObj = {
    blue_color: {
        umbrellaSrc: "./images/Blue umbrella.png",
        mainBoxBgColor: "#e5f5fe",
        btnBgColor: "#34b5e5",
        imgSrc: "",
        uploder: "./images/upload_icon.svg"
    },
    pink_color: {
        umbrellaSrc: "./images/Pink umbrella.png",
        mainBoxBgColor: "#F9EBF9",
        btnBgColor: "#d9378d",
        imgSrc: "",
        uploder: "./images/upload_icon.svg"
    },
    yellow_color: {
        umbrellaSrc: "./images/Yello umbrella.png",
        mainBoxBgColor: "#fffaed",
        btnBgColor: "#fccf41",
        imgSrc: "",
        uploder: "./images/upload_icon.svg"
    },
}
let img = document.querySelector(".logo_here");
img.style.display = "none";
let blue = document.querySelector(".blue_color")
let pink = document.querySelector(".pink_color")
let yellow = document.querySelector(".yellow_color")
let main_box = document.querySelector("#main_box");
main_box.style.backgroundColor = "#e6f6fc";
let label = document.querySelector(".file-input");
label.style.backgroundColor = "#34b5e5"
let upload_btn = document.querySelector(".upload_btn")
let button_div = document.querySelector(".color_selector").addEventListener("click", colorChangerFunction)
function colorChangerFunction(e) {
    let color = e.target.className;
    themeChanger(changeObj[color])
}

let display_image = document.querySelector(".umbrella_src")
display_image.src = "./images/Blue umbrella.png"


let upload_svg = document.querySelector("#change_color");
upload_svg.src = "./images/upload_icon.svg"

let buton = document.querySelector(".upload_logo");
let logoImage = undefined;
let logoIsUploading = false;

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = () => {
            reject(fileReader.error);
        };
    });
};

buton.addEventListener("change", (e) => {
    let file = e.target.files[0];
    console.log(file);
    logoIsUploading = true;
    display_image.style.display = "none";
    img.style.display = "block"
    img.setAttribute("src", "./images/loader_icon.svg");
    img.setAttribute('class', 'loader_image');
    upload_svg.setAttribute("src", "./images/upload_icon.svg");
    upload_svg.setAttribute('class', 'uploader');
    setTimeout(async () => {
        try {
            let base64File = await convertBase64(file);
            logoImage = base64File.toString();
            logoIsUploading = false;
            if (!logoIsUploading && logoImage) {
                display_image.style.display = "block"
                img.setAttribute("src", logoImage);
                upload_btn.textContent = 'LOGO UPLOADED'
                upload_btn.style.fontSize = "21px"
                upload_btn.style.fontWeight = "bold"
                img.setAttribute('class', '');
                upload_svg.src = "./images/upload_icon.svg"
                upload_svg.setAttribute('class', '');
            }
        } catch (err) {
            alert(err.message);
        }
    }, 3000);
})


function themeChanger(payload) {
    const { umbrellaSrc, mainBoxBgColor, btnBgColor, imgSrc, uploder } = payload;
    logoIsUploading = true;
    display_image.style.display = "none";
    img.style.display = "block"
    img.setAttribute("src", "./images/loader_icon.svg");
    img.setAttribute('class', 'loader_image');
    upload_svg.setAttribute("src", "./images/upload_icon.png");
    upload_svg.setAttribute('class', 'uploader');
    setTimeout(() => {
        display_image.src = umbrellaSrc
        main_box.style.backgroundColor = mainBoxBgColor
        label.style.backgroundColor = btnBgColor
        img.src = imgSrc
        upload_svg.src = uploder
        upload_svg.setAttribute('class', '')
        img.style.display = "none"
        logoIsUploading = false;
        display_image.style.display = "block"
        if (!logoIsUploading && logoImage) {
            img.style.display = "block"
            img.setAttribute("src", logoImage);
            img.setAttribute('class', '');
        }
    }, 3000)
}