function spoiler(a) {
    if (a.parentNode.getElementsByTagName("div")[0].style.display != "") {
    a.parentNode.getElementsByTagName("div")[0].style.display = "";
    a.innerText = "       ������";
    }
else {
    a.parentNode.getElementsByTagName("div")[0].style.display = "none";
    a.innerText = "... ������ �����";
    }
    }

function onlyClick(num) {
   var ref = document.getElementById("link_"+num);
   ref.innerText = "    ���������";
   ref.style.display = "block";
   ref.parentNode.getElementsByTagName("div")[0].style.display = "";
   ref.parentNode.getElementsByTagName("a")[0].style.display = "none";
   ref.href = "#closure0";
 }

function mouseout(a) {
// alert(a.innerHTML +'  '+ a.href);
    a.parentNode.getElementsByTagName("div")[0].style.display = "none"
    a.parentNode.getElementsByTagName("a")[0].style.display = "block"
    a.href = "#closure";
    a.style.display = "none";
        }
