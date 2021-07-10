const copyButton = document.getElementById("btn-copy");
const pasteButton = document.getElementById("btn-paste");

const pasteArticle = document.getElementById('content-paste');

copyButton.addEventListener("click", async function (event) {
    const content = document.getElementById('content-copy').textContent;
    await navigator.clipboard.writeText(content);
    console.log(await navigator.clipboard.readText());
});

pasteButton.addEventListener('click', async function (event){
    // clear paste article
    pasteArticle.textContent = '';
    try{
        // this will return an array of clipboard item
        const data = await navigator.clipboard.read();
        const clipboardContent = data[0];
        console.log(clipboardContent);
        const blob = await clipboardContent.getType('image/png');
        const blobUri = window.URL.createObjectURL(blob);
        const img = document.createElement('img');
        img.src = blobUri;
        pasteArticle.appendChild(img);
    }catch(err){
        console.log(err);
        const text = await navigator.clipboard.readText();
        pasteArticle.textContent = text;
    }
    
    

})