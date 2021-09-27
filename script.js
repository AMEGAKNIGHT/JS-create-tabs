var tab; //объявляем переменные классов
var tabContent;

window.onload=function () { //При выполнений получаем массив всех вкладок tab и массива с классом tabContent
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);//cкрытие вкладки
}
function hideTabsContent(a) {//запускает цикл от параметра hideTabsContent
    for (var i=a; i<tabContent.length; i++){ //каждый элемент tabConten  
        tabContent[i].classList.remove('show'); //удаляется класс show,
        tabContent[i].classList.add('hide'); //прибавляет класс hide
        tab[i].classList.remove('whiteborder'); //удаляет класс отвечающий за активную вкладку whireborder
    }
}
document.getElementsById('tabs').onclick=function (event) { //функция отслеживает все клики внутри области которая имеет индитификатор tabs
    var target=event.target; //проверка элемента на которого выполняется клик 
    if (target.className=='tab'){ //если данный элемент имеет класс tab, то запускается цикл, который должен выяснить index элемента на который соверщили клик в массиве tab
        for (var i=0; i<tab.lengthl; i++){ 
            if (target == tab[i]){
                showTabsContent(i);// необоходимый элемент найден, тоuгда запускается цикл showTabsContent и останавливается с помощью break
                break;
            }
        }
    }
}
    function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) { //проверка наличия блока по которому совершили клик класса hide при наличий данного класса
        hideTabsContent(0);//функция hideTabsContent открывает все блоки вкладок 
        tab[b].classList.add('whiteborder');//в активной вкладке  добавляет класс whiteborder
        tabContent[b].classList.remove('hide');//удаляется класс hide 
        tabContent[b].classList.add('show');// добавляется класс show
      }
}