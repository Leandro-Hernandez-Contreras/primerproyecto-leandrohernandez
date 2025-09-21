// Lista de imágenes
    const images = [
  "../../public/assets/image/produccion/galeria/imgi_21_IMG_1710.jpg",
  "../../public/assets/image/produccion/galeria/imgi_22_IMG_1712.jpg",
  "../../public/assets/image/produccion/galeria/imgi_23_IMG_1708.jpg",
  "../../public/assets/image/produccion/galeria/imgi_24_IMG_1713.jpg",
  "../../public/assets/image/produccion/galeria/imgi_25_IMG_1715.jpg",
  "../../public/assets/image/produccion/galeria/imgi_26_IMG_1722.jpg",
  "../../public/assets/image/produccion/galeria/imgi_27_IMG_1721.jpg",
  "../../public/assets/image/produccion/galeria/imgi_28_IMG_1720.jpg",
  "../../public/assets/image/produccion/galeria/imgi_29_IMG_1719.jpg",
  "../../public/assets/image/produccion/galeria/imgi_30_IMG_1718.jpg",
  "../../public/assets/image/produccion/galeria/imgi_31_IMG_1716.jpg",
  "../../public/assets/image/produccion/galeria/imgi_32_IMG_1723.jpg",
  "../../public/assets/image/produccion/galeria/imgi_33_IMG_1724.jpg",
  "../../public/assets/image/produccion/galeria/imgi_34_IMG_1725.jpg",
  "../../public/assets/image/produccion/galeria/imgi_35_IMG_1726.jpg",
  "../../public/assets/image/produccion/galeria/imgi_36_IMG_1727.jpg",
  "../../public/assets/image/produccion/galeria/imgi_37_IMG_1728.jpg",
  "../../public/assets/image/produccion/galeria/imgi_38_IMG_1740.jpg",
  "../../public/assets/image/produccion/galeria/imgi_39_IMG_1736.png",
  "../../public/assets/image/produccion/galeria/imgi_40_IMG_1733.jpg",
  "../../public/assets/image/produccion/galeria/imgi_41_IMG_1732.jpg",
  "../../public/assets/image/produccion/galeria/imgi_42_IMG_1730.jpg",
  "../../public/assets/image/produccion/galeria/imgi_43_IMG_1729.jpg",
  "../../public/assets/image/produccion/galeria/imgi_44_IMG_1743.jpg",
  "../../public/assets/image/produccion/galeria/imgi_45_IMG_1744.jpg",
  "../../public/assets/image/produccion/galeria/imgi_46_IMG_1745.jpg",
  "../../public/assets/image/produccion/galeria/imgi_47_IMG_1746.jpg",
  "../../public/assets/image/produccion/galeria/imgi_48_IMG_1753.jpg",
  "../../public/assets/image/produccion/galeria/imgi_49_IMG_1754.jpg",
  "../../public/assets/image/produccion/galeria/imgi_5_IMG_1708.jpg",
  "../../public/assets/image/produccion/galeria/imgi_50_IMG_1890.jpg",
  "../../public/assets/image/produccion/galeria/imgi_51_IMG_1894.jpg",
  "../../public/assets/image/produccion/galeria/imgi_52_IMG_1895.jpg",
  "../../public/assets/image/produccion/galeria/imgi_53_IMG_1896.jpg",
  "../../public/assets/image/produccion/galeria/imgi_54_IMG_1897.jpg",
  "../../public/assets/image/produccion/galeria/imgi_55_IMG_1900.jpg",
  "../../public/assets/image/produccion/galeria/imgi_56_IMG_1908.jpg",
  "../../public/assets/image/produccion/galeria/imgi_57_IMG_1906.jpg",
  "../../public/assets/image/produccion/galeria/imgi_58_IMG_1905.jpg",
  "../../public/assets/image/produccion/galeria/imgi_59_IMG_1904.jpg",
  "../../public/assets/image/produccion/galeria/imgi_60_IMG_1902.jpg",
  "../../public/assets/image/produccion/galeria/imgi_61_IMG_1901.jpg",
  "../../public/assets/image/produccion/galeria/imgi_62_IMG_1909.jpg",
  "../../public/assets/image/produccion/galeria/imgi_63_IMG_1910.jpg",
  "../../public/assets/image/produccion/galeria/imgi_64_IMG_1911.jpg",
  "../../public/assets/image/produccion/galeria/imgi_65_IMG_1912.jpg",
  "../../public/assets/image/produccion/galeria/imgi_66_IMG_1914.jpg",
  "../../public/assets/image/produccion/galeria/imgi_67_IMG_1915.jpg",
  "../../public/assets/image/produccion/galeria/imgi_68_IMG_1921.jpg",
  "../../public/assets/image/produccion/galeria/imgi_69_IMG_1920.jpg",
  "../../public/assets/image/produccion/galeria/imgi_70_IMG_1919.jpg",
  "../../public/assets/image/produccion/galeria/imgi_71_IMG_1918.jpg",
  "../../public/assets/image/produccion/galeria/imgi_72_IMG_1917.jpg",
  "../../public/assets/image/produccion/galeria/imgi_73_IMG_1916.jpg",
  "../../public/assets/image/produccion/galeria/imgi_74_IMG_1922.jpg",
  "../../public/assets/image/produccion/galeria/imgi_75_IMG_1923.jpg",
  "../../public/assets/image/produccion/galeria/imgi_76_IMG_1924.jpg",
  "../../public/assets/image/produccion/galeria/imgi_77_IMG_1925.jpg",
  "../../public/assets/image/produccion/galeria/imgi_78_IMG_1926.jpg",
  "../../public/assets/image/produccion/galeria/imgi_79_IMG_1929.jpg",
  "../../public/assets/image/produccion/galeria/imgi_80_IMG_1930.jpg"
];
let currentIndex = 0;
  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const counter = document.getElementById("counter");

  function toggleGallery() {
    gallery.classList.toggle("hidden");
  }

  function openLightbox(index) {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.classList.remove("hidden");
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
  }

  function showImage(index) {
    lightboxImage.src = images[index];
    counter.textContent = `${index + 1} / ${images.length}`;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }