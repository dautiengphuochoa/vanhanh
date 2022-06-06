/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

//Scrpipt Tram Quan Trac

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
  $el.animate({scrollTop: st<sb/1 ? sb : 0}, 18000, anim);
}
function stop(){
  $el.stop();
}
anim();
$el.hover(stop, anim);


// Script Muc Nuoc Ho
let Dulieumucnuoc = {
    apiKey: "7001",
    fetchDulieumucnuoc: function () {
      fetch(
        "https://apiv2.thuyloivietnam.vn/Api/getSoLieuQuanTrac?Key=apiktdlqtDauTieng&MaQuanTrac=" + this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("API connection failed");
            throw new Error("API connection failed");
          }
          return response.json();
        })
        .then((data) => this.displayDulieumucnuoc(data));
    },
    displayDulieumucnuoc: function (data) {
      const dataLength = data.length;
      const GiaTri = data[dataLength - 1].GiaTri;
      document.getElementById("wrapper-GiaTri").innerHTML = GiaTri + " m";
    }

  }
  $(document).ready(function () {
    Dulieumucnuoc.fetchDulieumucnuoc();
  });


 
var today = new Date();
var time = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
document.getElementById("giohientai").innerHTML = time;
 

var today = new Date();
var date = today.getDate()+' / '+(today.getMonth()+1)+' / '+today.getFullYear();
document.getElementById("ngayhientai").innerHTML = date;



// fetch('https://apiv2.thuyloivietnam.vn/Api/getSoLieuQuanTrac?Key=apiktdlqtDauTieng&MaQuanTrac=7001', {
//   method: 'post',
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   },
//   body:JSON.stringify(options)
// }).then(function(res){
//   return res.json(); //error here
// }).then(function(data){
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// });


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
