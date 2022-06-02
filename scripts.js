/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

fetch("https://apiv2.thuyloivietnam.vn/Api/getSoLieuQuanTrac?Key=apiktdlqtDauTieng&MaQuanTrac=7001").then((data)=>{
    // console.log(data); //json format
    return data.json(); //convert to object
}).then((objectData)=>{
    console.log(objectData[0].ThoiGian);
    let tableData ="";
    objectData.map((values)=>{
        tableData+=`
        <tr>
        <td>${values.ThoiGian}</td>
        <td>${values.MaQuanTrac}</td>
        <td>${values.GiaTri}</td>
      </tr>`;
    });
    document.getElementById("table-body").innerHTML=tableData;
})

var $el = $(".table-responsive");
function anim() {
  var st = $el.scrollTop();
  var sb = $el.prop("scrollHeight")-$el.innerHeight();
  $el.animate({scrollTop: st<sb/1 ? sb : 0}, 5000, anim);
}
function stop(){
  $el.stop();
}
anim();
$el.hover(stop, anim);


window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
