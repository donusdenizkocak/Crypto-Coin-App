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
try {
    const response=await axios(url,options)
console.log(response.data.data.coins[0])
//obj. dest.
const {price,name,change,iconUrl,symbol} =response.data.data.coins[0]

//coin control
const coinNameSpans=coinList.querySelectorAll("h2 span")

//filter vs map(array)
if(coinNameSpans.length > 0){
    const filteredArray = [...coinNameSpans].filter(span=> span.innerText == name)
    console.log(filteredArray)
    if(filteredArray.length >0){
     msgSpan.innerText = `You already know the data for ${name}, Please search for another coin 😉`
     setTimeout(()=> {
        msgSpan.innerText="";
     }, 3000)
     return;
    }
}

//continue xxx return
const createdLi=document.createElement("li");
createdLi.classList.add("coin");
createdLi.innerHTML=`
<h2 class="coin-name" data-name=${name}>
<span>${name}</span>
<sup>${symbol}</sup>
</h2>

`




} catch (error) {
    console.log(error)
}
    
}
