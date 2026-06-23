# 偏心映畫 Resonance Films 網站規格

## 專案概述

本專案為「偏心映畫 Resonance Films」單頁式網站切版，使用 Bootstrap 5 作為主要版面框架，並搭配自訂 CSS 維護品牌視覺樣式。

目前頁面檔案為：

- `Untitled-1.html`

目前自訂樣式檔案為：

- `CSS/style.css`

## 頁面區塊順序

網站由上到下依序包含以下區塊：

1. 選單導覽列
2. Banner 輪播圖，共 5 張
3. 關於我們，左圖右文
4. 產品介紹，4 個 Bootstrap card 模組
5. 頁尾資訊，含社群連結、品牌文字、版權宣告、回到頂部圖示

## 使用技術

- HTML5
- CSS3
- Bootstrap 5.0.2
- Bootstrap Icons

Bootstrap CSS 與 JS 使用本地端下載版本：

```html
../wbe1/bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.min.css
../wbe1/bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js
```

Bootstrap Icons 目前仍使用 CDN：

```html
https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css
```

若後續需要完全離線使用，請下載 Bootstrap Icons 並改為本地端引用。

## 檔案結構

目前主要檔案結構如下：

```text
wbe/
├── Untitled-1.html
├── AGENTS.md
├── CSS/
│   └── style.css
└── 圖片/
```

圖片素材目前放在桌面層級的 `片商` 資料夾：

```text
Desktop/
├── wbe/
└── 片商/
```

因此 HTML 內圖片路徑使用：

```html
../片商/圖片檔名.jpg
```

## 圖片使用對應

Banner 輪播圖 5 張：

```text
../片商/clickerhappy-black-and-white-2471167.jpg
../片商/daniel_nebreda-white-2300578.jpg
../片商/marucha-fairy-tale-3563358.jpg
../片商/stalin_choudhuri-drama-4736508.jpg
../片商/stux-art-therapy-229310.jpg
```

關於我們圖片：

```text
../片商/daniel_nebreda-white-2300578.jpg
```

產品介紹卡片圖片：

```text
../片商/stalin_choudhuri-drama-4736508.jpg
../片商/marucha-fairy-tale-3563358.jpg
../片商/clickerhappy-black-and-white-2471167.jpg
../片商/stux-art-therapy-229310.jpg
```

## HTML 維護說明

`Untitled-1.html` 主要負責頁面內容與 Bootstrap 結構。

若要修改導覽列文字，請調整：

```html
<ul class="navbar-nav">
```

若要修改輪播圖片，請調整：

```html
<div class="carousel-inner">
```

輪播需要保留：

- 第一張 `.carousel-item` 需加上 `.active`
- `data-bs-target="#heroCarousel"` 需與輪播外層 `id="heroCarousel"` 一致
- 若增減輪播張數，需同步調整 `.carousel-indicators` 的按鈕數量

若要修改產品卡片，請調整：

```html
<section id="products" class="products">
```

每張卡片使用 Bootstrap card 結構：

```html
<article class="card product-card">
```

## CSS 維護說明

自訂樣式集中於：

```text
CSS/style.css
```

主要色彩變數定義於 `:root`：

```css
:root {
  --coffee: #3a2020;
  --red: #ff1717;
  --line: #6d5555;
  --cream: #fff0f0;
  --light: #fffafa;
}
```

常用區塊 class：

- `.navbar`：上方導覽列
- `.hero-carousel`：輪播區塊
- `.section-title`：區塊標題
- `.about-img`：關於我們圖片
- `.products`：產品介紹區塊背景
- `.product-card`：產品卡片
- `.btn-more`：了解更多按鈕
- `.site-footer`：頁尾
- `.social-links`：社群連結
- `.to-top`：回到頂部圖示

RWD 樣式目前分為：

```css
@media (max-width: 991.98px) { ... }
@media (max-width: 575.98px) { ... }
```

## 後續維護建議

- 若網站要上傳主機，建議將 `片商` 圖片資料夾移入 `wbe` 專案內，例如 `images/`，並將圖片路徑改成 `images/檔名.jpg`。
- 若要完全離線展示，請下載 Bootstrap Icons，避免頁尾圖示因無網路而無法顯示。
- 若未來新增其他頁面，請沿用 `CSS/style.css`，避免每頁重複撰寫 `<style>`。
- 若新增 JavaScript 功能，建議建立 `JS/` 資料夾並將自訂腳本獨立管理。

