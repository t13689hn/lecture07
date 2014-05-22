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

//14~17は授業メモです。コメントではありません。
//var list[]でからっぽの配列ができる！！！！一番最後の要素にはカンマをつけない！！！！！
//var numberOf Photo = photolist.length;
//var firstPhoto = photolost(0); 0からはじめる
//var lastphoto = photolist[numberOfphoto - 1]; 0からはじまっているから、−１して順番のずれをなおす

var isReady = function(){
    return photoListElement != null &&//photoListElementの中が空ではない、かつ
        photoList != null &&//photolistの中が空ではない、かつ
        photoList.length > 0;//photolistの要素が０ではない（＝photolistの中に要素が存在している）時に動作を実行する。
};

var renderPhoto = function(index){hikisuu//renderPhoto=表示させる写真の選定動作
    var photo = photoList[index];
    var elm = document.createElement("img");
    elm.setAttribute("src", photo.src);
    elm.setAttribute("title", photo.title);
    return elm;//elm２７段目に戻る（引数）
};

var showPhotos = function(){
    if(isReady()){
        var index = 0;//indexを0から開始する
        while(index < photoList.length){//()の中がtrueである場合、{}の中を繰り返せ。indexがphotolistより大きくなったら処理が止まる

            var elm = renderPhoto(index);//２５〜３１で選んだ写真（elm）をHTMLに表示する
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
