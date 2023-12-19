const searchForm = document.getElementById("search-form");
const inputSearch = document.getElementById("input-search");
const serachResult = document.getElementById("serach-result");
const showBtn = document.getElementById("showBtn");


const accessKey = "EzD_Hd62Vpr32eXc9_gYvrirhB133sM3_rcqs1vU__g";
let keyWord = "";
let page = 1;

async function searchImage(){
    keyWord = inputSearch.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page == 1){
        serachResult.innerHTML = "";
    }
    
    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        serachResult.appendChild(imageLink);
    })

    showBtn.style.display="block";

}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImage();
})


showBtn.addEventListener("click", (e) =>{
    page++;
    searchImage();
})

