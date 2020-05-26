if(localStorage.getItem('detailUrl')){
    var detailUrl = localStorage.getItem('detailUrl');
    localStorage.removeItem('detailUrl');
    window.history.pushState(null, null, window.location.href);
    window.location.href = detailUrl;
}







function goDetail(url) {
    localStorage.setItem('detailUrl',url);
    var thisUrl = window.location.href;
    window.open(thisUrl);
}