---
title: Memulai Proyek Astro.build
author: Dika Haris Abdurahman
pubDatetime: 2023-03-30T22:37:23Z
postSlug: memulai-proyek-astro-build
featured: false
draft: true
tags:
  - astro
  - static-site-generator
description: "Memulai membuat proyek baru dengan Astro.build sangatlah mudah dan cepat."
---

> Memulai membuat proyek baru dengan Astro.build sangatlah mudah dan cepat.

Halo, teman-teman! Pada tulisan ini saya ingin membagikan bagaimana caranya untuk membuat proyek baru dengan Astro.

## 1. Instalasi

Untuk memulai membuat proyek baru dengan Astro, pertama-tama kita harus menginstall Astro terlebih dahulu. Untuk menginstall Astro, kita bisa menggunakan perintah berikut:

```bash
# install proyek baru dengan template "basics"
pnpm create astro@2.1.8 -- --template basics
```

<div>
  <a href="/assets/pnpm-install-astro-build.png">
    <img src="/assets/pnpm-install-astro-build.png" class="sm:w-1/1 mx-auto" alt="Install Astro.build Menggunakan PNPM">
  </a>
</div>

Perintah di atas akan membuat proyek baru dengan template `basics`. Template `basics` adalah template yang paling sederhana dan mudah untuk dipelajari.

## 2. Menjalankan Proyek

Setelah kita membuat proyek baru dengan Astro, kita bisa menjalankan proyek tersebut dengan perintah berikut:

```bash
# masuk ke direktori proyek
cd my-astro-project

# jalankan proyek
pnpm dev
```

Perintah di atas akan menjalankan proyek Astro kita di `localhost:3000`.

<div>
  <a href="/assets/welcome-to-astro.png">
    <img src="/assets/welcome-to-astro.png" class="sm:w-1/1 mx-auto" alt="Selamat Datang di Astro.build Local Develop">
  </a>
</div>
