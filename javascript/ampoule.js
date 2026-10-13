function OnOffAmpoule(){
    const img = document.getElementById("ampoule");
    if(img.src.search("bulboff") != -1){
        img.src = "pic_bulbon.gif";
    }
    else{
        img.src = "pic_bulboff.gif";
    }
}