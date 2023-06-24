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

const getCoinDataFromApi= async() =>{
    const apiKey= DecryptStringAES(localStorage.getItem("apiKey"));
    //!template literal
    const url=`https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;

    const options={
        headers:{
            'x-access-token': apiKey,
        },
    };

    
}