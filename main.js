var ten = document.getElementById("txt1");
var caovoi = document.getElementById("checkb1");
var taytrang = document.getElementById("checkb2");
var chuphinh = document.getElementById("checkb3");
var discount = document.getElementById("mySelect");
var tram = document.getElementById("txt3");
var total = document.getElementById("txt2");
var data = document.getElementById("luudb");
var xuly = document.getElementById("thanhtoan");
xuly.onclick = function thanhtoan() {
  if (ten.value.length < 1) {
    alert("vui lòng không để trống tên khách hàng");
    return;
  }

  var dichvu =
    caovoi.checked == true ||
    taytrang.checked == true ||
    chuphinh.checked == true;
  if (!dichvu) {
    alert("Vui lòng chọn 1 dịch vụ!!");
    return;
  }
  if (tram.value < 0) {
    alert("số lượng răng trám phải lớn hơn 0");
    return;
  }
  var tongtien = 0;
  if (caovoi.checked) tongtien += 100000;
  if (taytrang.checked) tongtien += 1200000;
  if (chuphinh.checked) tongtien += 200000;
  tongtien += tram.value * 80000;
 
  var giamGia = discount.value;
  if (discount.value == null) giamGia = 0;
  giamGia = parseFloat(giamGia);
  tongtien = tongtien - (tongtien * giamGia);

  total.value = tongtien;


  $(document).ready(function() {
    $("#thanhtoan").click(function() {
      $("#myAlert").show("fade");
    });
  });
};
var reset = document.getElementById("reset");
reset.onclick = function reset() {
  ten.value = "";
  caovoi.checked = "";
  taytrang.checked = "";
  chuphinh.checked = "";
  discount.selectedIndex = "--SELECT--";
  tram.value = 0;
  total.value = "";
  $(document).ready(function() {
    $("#reset").click(function() {
      $("#myAlert1").show("fade");
    });
  });
};


luudb.onclick = function luuda(){
// lưu dữ liệu trên localStorage:
//  cách 1: localStorage.setItem("key", "value");
//  cách 2: localStorage.key = "value"; 
if(ten.value.length < 1){
  alert("không tìm thấy dữ liệu cần lưu!!");
  return;
}
localStorage.setItem('name', ten.value);
localStorage.setItem('total',total.value);
//  window.onload = function(){
//    if(localStorage){
//      document.getElementById('form-data').addEventListener('submit', function(){
       
//      })
//    }
//  }
}