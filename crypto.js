const form=document.querySelector(".top-banner form")
const input=document.querySelector(".top-banner input")
const msgSpan=document.querySelector(".container .msg")
const coinList=document.querySelector(".ajax-section .container .coins")

//localStorage

localStorage.setItem("apiKey", EncryptStringAES("coinranking254889bccdb8bff17fa6e0d89d489d31f7e29af752b833ae"))
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getCoinDataFromApi()
    //form.reset== e.target.reset
    e.target.reset()
})