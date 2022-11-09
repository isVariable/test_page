function addScript(src){
    var script = document.createElement('script');
    script.src = src;
    script.async = false; // чтобы гарантировать порядок
    document.head.appendChild(script);
}

addScript('creep.js'); // загружаться эти скрипты начнут сразу
addScript('main.js'); // выполнятся, как только загрузятся