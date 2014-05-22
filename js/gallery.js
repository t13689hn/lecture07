var photoListElement = document.querySelector("#photos");=//photolistElementの所在の設定

var photoList = [
    {src: "img/200705.png", title: "7月"},
    {src: "img/200806.png", title: "8月"},
	  {src: "img/200902.png", title: "9月"},
	  {src: "img/201008.png", title: "もう1回8月"},
    {src: "img/front.png", title: "前"},
    {src:	"img/side.png", title: "横"},
    {src:	"img/hinamaturi-waku-2.jpg", title: "ひなまつり"}
];//photolistの要素の掲載

//var list[]でからっぽの配列ができる！！！！一番最後の要素にはカンマをつけない！！！！！
//var numberOf Photo = photolist.length;
//var firstPhoto = photolost(0); 0からはじめる
//var lastphoto = photolist[numberOfphoto - 1]; 0からはじまっているから、−１して順番のずれをなおす

var isReady = function(){
    return photoListElement != null &&
        photoList != null &&
        photoList.length > 0;
};

var renderPhoto = function(index){
    var photo = photoList[index];
    var elm = document.createElement("img");
    elm.setAttribute("src", photo.src);
    elm.setAttribute("title", photo.title);
    return elm;//elm
};

var showPhotos = function(){
    if(isReady()){
        var index = 0;//indexを0から開始する
        while(index < photoList.length){//()の中がtrueである場合、{}の中を繰り返せ。indexがphotolistより大きくなったら処理が止まる

            var elm = renderPhoto(index);//２４〜３０で選んだ写真（elm）をHTMLに表示する
            photoListElement.appendChild(elm);//写真の表示
            index = index + 1;//indexの値を１増加させる
        }
    }
};

var initApp = function(){
    var btn = document.querySelector("#startButton");
    btn.addEventListener("click", showPhotos);//Buttonを作成し、clickという動作によってshowPhotosを起動させる=//
};

initApp();//関数の表示
