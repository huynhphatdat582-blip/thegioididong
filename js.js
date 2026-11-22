const nutDiaChi = document.querySelector(".adress > a");
const formDiaChi = document.querySelector(".adress-from");

nutDiaChi.onclick = function (e) {
  e.preventDefault();
  formDiaChi.style.display =
    formDiaChi.style.display === "block" ? "none" : "block";
};

const nutPhuKien = document.querySelector(".phu-kien > a");
const menuPhuKien = document.querySelector(".phu-kien .menu-con");
const nutPC = document.querySelector(".pc-may-in > a");
const menuPC = document.querySelector(".pc-may-in .menu-con");

nutPhuKien.onclick = function (e) {
  e.preventDefault();
  menuPhuKien.style.display =
    menuPhuKien.style.display === "block" ? "none" : "block";
  menuPC.style.display = "none";
};

nutPC.onclick = function (e) {
  e.preventDefault();
  menuPC.style.display = menuPC.style.display === "block" ? "none" : "block";
  menuPhuKien.style.display = "none";
};

const anh = document.querySelectorAll(".slider-content-left-top img");
const tieuDe = document.querySelectorAll(".slider-content-left-bottom li");
let viTri = 0;

function chuyenAnh(index) {
  anh[viTri].classList.remove("active");
  tieuDe[viTri].classList.remove("active");

  viTri = (index + anh.length) % anh.length;

  anh[viTri].classList.add("active");
  tieuDe[viTri].classList.add("active");
}

document.querySelector(".slider-next").onclick = function () {
  chuyenAnh(viTri + 1);
};

document.querySelector(".slider-prev").onclick = function () {
  chuyenAnh(viTri - 1);
};

tieuDe.forEach(function (item, index) {
  item.onclick = function () {
    chuyenAnh(index);
  };
});

setInterval(function () {
  chuyenAnh(viTri + 1);
}, 4000);

const danhSachSanPham = document.querySelector(
  ".slider-product-one-content-items",
);
const nutSanPhamTrai = document.querySelector(".product-prev");
const nutSanPhamPhai = document.querySelector(".product-next");

function truotSanPham(huong) {
  danhSachSanPham.scrollBy({
    left: huong * danhSachSanPham.clientWidth,
    behavior: "smooth",
  });
}

nutSanPhamTrai.onclick = function () {
  truotSanPham(-1);
};

nutSanPhamPhai.onclick = function () {
  truotSanPham(1);
};
//

const watchItems = document.querySelector(".watch-items");
const watchPrev = document.querySelector(".watch-prev");
const watchNext = document.querySelector(".watch-next");
const watchTabs = document.querySelectorAll(".watch-tab");

watchNext.addEventListener("click", function () {
  watchItems.scrollLeft += watchItems.clientWidth / 4;
});

watchPrev.addEventListener("click", function () {
  watchItems.scrollLeft -= watchItems.clientWidth / 4;
});

watchTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    watchTabs.forEach(function (item) {
      item.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
