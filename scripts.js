/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts

//Script Tram Quan Trac
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
})

// Script Table Run
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
    let n = GiaTri.toFixed(2);
    document.getElementById("wrapper-GiaTri").innerHTML = n + " m";
  }

}
$(document).ready(function () {
  Dulieumucnuoc.fetchDulieumucnuoc();
});

// Muc Nuoc Kenh
var dulieuDauTiengPhuocHoa = {
  fetchDuLieu: function () {
    $.get("http://dautiengphuochoa.com/api/getmn.aspx?key=dauhoaphuongtien;").done(
      function (data, status) {

          var stringData = data.substr(0, data.indexOf("<!DOCTYPE html")).trim();
          var arrayData = stringData.split("<br>");
          var listID = [
              'F01512' // Ha Luu Cong So 1 Kenh Dong
            , 'F01500' // Thuong luu K8 Kenh Dong
            , 'F01448' // Ha Luu K8 Kenh Dong
            , 'F01499' // Thuong Luu K13 Kenh Dong
            , 'F01508' // Ha Luu K13 Kenh Dong
            , 'F01473' // Ha Luu K32 Kenh Tay
            , 'F01513'
            , 'F01501'
            , 'F01464'
            , 'F01466'
            , 'F02005'
            , 'F00990'
            , 'F01293'
            , 'F00993'
            , 'F01681'
            , 'F01420'
            , 'F01457'
            , 'F01461'
            , 'F01446'
            , 'F01452'
            , 'F01450'
            , 'F01469'
            , 'F01505'
            , 'F02041'
            , 'F01733'
            , 'F00988'
            , 'F00994'
            , 'F00974'
            , 'F01996'
            , 'F02042'
            , 'F02043'
            , 'F02036'
            , 'F02035'
            , 'F02034'
            , 'F02019'
            , 'F02037'
            , 'F02038'
            , 'F01748'
            , 'F01683'
            , 'F01422'
            , 'F01545'
            , 'F01465'
            , 'F01528'
            , 'F02011'
            , 'F01514'
            , 'F01526'
            , 'F01877' //Rach Son Dai
            , 'F01849' // TV Dau Tieng
            , 'F01203' // Cau Ben Suc

          ];
          
          arrayData.forEach(element => {
            if (element !== '') {
              var elementArray = element.split(";");
              if (elementArray.length > 0) {
                const codeCongTrinh = elementArray[0];
                if (listID.includes(codeCongTrinh)) {
                  const value = parseFloat(elementArray[3].replace("value=", "")) / 100;
                  document.getElementById(codeCongTrinh).innerText = value + ' m';
                }
              }
            }
          });
      }
    );
  }
}

  $(document).ready(function () {
    dulieuDauTiengPhuocHoa.fetchDuLieu();
        dulieuDauTiengPhuocHoa.fetchDuLieu();
  });

//Gio hien tai
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('giohientai').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//Ngay hien tai
var today = new Date();
var date = today.getDate()+' / '+(today.getMonth()+1)+' / '+today.getFullYear();
document.getElementById("ngayhientai").innerHTML = date;

var dictionaryData = [
  { code: 'F01500', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'K8', isThuongLuu: true, isHaLuu: false },
  { code: 'F01448', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'K8', isThuongLuu: false, isHaLuu: true },
  { code: 'F01513', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'K27', isThuongLuu: true, isHaLuu: false },
  { code: 'F01501', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'K27', isThuongLuu: false, isHaLuu: true },
  { code: 'F01466', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'K30', isThuongLuu: false, isHaLuu: true },
  { code: 'F01464', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'K30', isThuongLuu: true, isHaLuu: false },
  { code: 'F01499', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'K13', isThuongLuu: true, isHaLuu: false },
  { code: 'F01508', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'K13', isThuongLuu: false, isHaLuu: true },
  { code: 'F01293', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'Cống tưới kênh N25', isThuongLuu: false, isHaLuu: true },
  { code: 'F00993', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'Cống điều tiết K34+333', isThuongLuu: false, isHaLuu: true },
  { code: 'F01681', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'Cống điều tiết K34+333', isThuongLuu: true, isHaLuu: false },
  { code: 'F02005', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'Cống điều tiết K20+065', isThuongLuu: true, isHaLuu: false },
  { code: 'F00990', loaiCongTrinh: 'Kênh Đông', tenCongTrinh: 'Cống điều tiết K20+065', isThuongLuu: false, isHaLuu: true },
  { code: 'F02036', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống điều tiết K2+238', isThuongLuu: true, isHaLuu: false },
  { code: 'F02035', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống điều tiết K2+238', isThuongLuu: false, isHaLuu: true },
  { code: 'F01422', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống ngăn lũ Thầy Cai', isThuongLuu: true, isHaLuu: false },
  { code: 'F01545', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống ngăn lũ Thầy Cai', isThuongLuu: false, isHaLuu: true },
  { code: 'F01748', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Xiphong Đức Hòa', isThuongLuu: true, isHaLuu: false },
  { code: 'F01683', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Xiphong Đức Hòa', isThuongLuu: false, isHaLuu: true },
  { code: 'F02042', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống điều tiết K0', isThuongLuu: false, isHaLuu: true },
  { code: 'F02043', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống điều tiết K0', isThuongLuu: true, isHaLuu: false },
  { code: 'F02034', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống điều tiết K4+620', isThuongLuu: false, isHaLuu: true },
  { code: 'F02019', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống điều tiết K4+620', isThuongLuu: false, isHaLuu: true },
  { code: 'F02037', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống điều tiết K8+149', isThuongLuu: true, isHaLuu: false },
  { code: 'F02038', loaiCongTrinh: 'Kênh Đức Hòa', tenCongTrinh: 'Cống điều tiết K8+149', isThuongLuu: false, isHaLuu: true },
  { code: 'F01420', loaiCongTrinh: 'Kênh Tây', tenCongTrinh: 'Cống số 2', isThuongLuu: false, isHaLuu: true },
  { code: 'F01473', loaiCongTrinh: 'Kênh Tây', tenCongTrinh: 'K32', isThuongLuu: false, isHaLuu: true },
  { code: 'F01457', loaiCongTrinh: 'Kênh Tây', tenCongTrinh: 'K32', isThuongLuu: true, isHaLuu: false },
  { code: 'F01461', loaiCongTrinh: 'Kênh Tây', tenCongTrinh: 'K13', isThuongLuu: false, isHaLuu: true },
  { code: 'F01446', loaiCongTrinh: 'Kênh Tây', tenCongTrinh: 'K13', isThuongLuu: true, isHaLuu: false },
  { code: 'F01452', loaiCongTrinh: 'Kênh Tây', tenCongTrinh: 'K21', isThuongLuu: true, isHaLuu: false },
  { code: 'F01450', loaiCongTrinh: 'Kênh Tây', tenCongTrinh: 'K21', isThuongLuu: false, isHaLuu: true },
  { code: 'F01505', loaiCongTrinh: 'Kênh Tây', tenCongTrinh: 'K25', isThuongLuu: false, isHaLuu: true },
  { code: 'F01469', loaiCongTrinh: 'Kênh Tây', tenCongTrinh: 'K39', isThuongLuu: true, isHaLuu: false },
  { code: 'F01526', loaiCongTrinh: 'Kênh tiêu Phước Hội-Bến Đình', tenCongTrinh: 'Cống điều tiết K5+750', isThuongLuu: true, isHaLuu: false },
  { code: 'F01528', loaiCongTrinh: 'Kênh tiêu Phước Hội-Bến Đình', tenCongTrinh: 'Cống điều tiết K4+500', isThuongLuu: false, isHaLuu: true },
  { code: 'F01465', loaiCongTrinh: 'Kênh tiêu Phước Hội-Bến Đình', tenCongTrinh: 'Cống điều tiết K4+500', isThuongLuu: true, isHaLuu: false },
  { code: 'F02011', loaiCongTrinh: 'Kênh tiêu Phước Hội-Bến Đình', tenCongTrinh: 'Cống điều tiết K1+500', isThuongLuu: true, isHaLuu: false },
  { code: 'F01514', loaiCongTrinh: 'Kênh tiêu Phước Hội-Bến Đình', tenCongTrinh: 'Cống điều tiết K1+500', isThuongLuu: false, isHaLuu: true },
  { code: 'F02040', loaiCongTrinh: 'Hồ Phước Hòa', tenCongTrinh: 'Cống điều tiết K15+753', isThuongLuu: true, isHaLuu: false },
  { code: 'F02041', loaiCongTrinh: 'Hồ Phước Hòa', tenCongTrinh: 'Cống điều tiết K15+753', isThuongLuu: false, isHaLuu: true },
  { code: 'F01733', loaiCongTrinh: 'Hồ Phước Hòa', tenCongTrinh: 'Bậc nước K37+501', isThuongLuu: true, isHaLuu: false },
  { code: 'F00988', loaiCongTrinh: 'Hồ Phước Hòa', tenCongTrinh: 'Cầu máng Căm xe K28+004', isThuongLuu: true, isHaLuu: false },
  { code: 'F00974', loaiCongTrinh: 'Hồ Phước Hòa', tenCongTrinh: 'Cầu máng Căm xe K28+004', isThuongLuu: false, isHaLuu: true },
  { code: 'F01996', loaiCongTrinh: 'Hồ Phước Hòa', tenCongTrinh: 'Cống điều tiết K0', isThuongLuu: false, isHaLuu: true },

];
