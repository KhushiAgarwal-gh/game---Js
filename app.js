const arr = ["image1.jpg" , "image2.jpg"];
var it = 0;
function changeimage(){
it = (it+1)%arr.length;
var imgobj = document.getElementById("image");
imgobj.src=arr[it];
if(it%2==1){
     var btn = document.getElementById("chng");
    chng.innerText = "Mask";
}
else{
     chng.innerText = "Unmask";
     
}

}