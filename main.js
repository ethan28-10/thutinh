// Thay đổi nội dung búc thư ở đây
var letterContent =" nay là ngày 26-10, là ngày mà một nàng thơ luôn hoạt bát và vui tươi được sinh ra, ngày nàng đến với thế giới cũng như một bông hoa xinh xắn nở, với lời nhắn này, cũng chúc nàng được tuổi mới thêm vui tươi và rạng rỡ, con đường phía trước còn dài và đẹp, mối quan hệ quanhn nàng mãi luôn là niềm vui, học tập cũng sẽ như ý nàng momg muốn, đến đây, tôi, bạn của nàng chúc nàng ngày sinh nhật tuyệt vời nhé <3
"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})