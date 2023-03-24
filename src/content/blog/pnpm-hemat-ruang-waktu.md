---
title: "PNPM: Package Manager JavaScript yang Hemat Ruang dan Waktu"
author: Dika Haris Abdurahman
pubDatetime: 2023-03-24T07:22:11.000Z
postSlug: pnpm-hemat-ruang-waktu
featured: false
draft: false
tags:
  - pnpm
  - javascript
  - package-manager
description: "PNPM adalah package manager baru untuk JavaScript yang menawarkan banyak keuntungan dibandingkan dengan NPM dan Yarn."
---

> PNPM adalah package manager baru untuk JavaScript yang menawarkan banyak keuntungan dibandingkan dengan NPM dan Yarn.

Halo, teman-teman! Pada tulisan ini saya akan membahas tentang PNPM, sebuah package manager untuk mengelola dependensi JavaScript. Seperti kita tahu, JavaScript merupakan bahasa pemrograman yang paling banyak digunakan di dunia saat ini, digunakan untuk membuat website, aplikasi web, aplikasi mobile, dan lain-lain. Saat ini, kita tahu bahwa untuk mengelola dependensi JavaScript yang populer, orang menggunakan NPM atau Yarn. Saya sendiri saat ini menggunakan Yarn untuk mengelola dependensi JavaScript. Namun, PNPM menarik perhatian saya karena PNPM menawarkan banyak keuntungan.

## Apa itu PNPM?

PNPM merupakan singkatan dari **P**lain **N**ode **P**ackage **M**anager. PNPM adalah package manager yang cepat dan efisien yang menjanjikan untuk mengurangi ruang dan waktu yang dibutuhkan untuk menginstal dependensi. PNPM menggunakan teknik symlink untuk mengelola dependensi. Teknik ini membuat PNPM dapat mengelola dependensi dengan lebih efisien dibandingkan dengan NPM dan Yarn.

## Apa yang membuat PNPM begitu istimewa?

### Efisiensi ruang penyimpanan

Berbeda dengan NPM dan Yarn, yang menginstal dependensi ke dalam folder `node_modules` untuk setiap proyek, PNPM menyimpan dependensi di dalam folder global. Setiap proyek hanya menyimpan symlink ke folder global. Hal ini membuat PNPM dapat mengelola dependensi dengan lebih efisien. Ini berarti jika beberapa proyek menggunakan dependensi yang sama, maka PNPM hanya perlu mengunduhnya sekali saja. Tetapi PNPM juga dapat mengelola dependensi secara lokal, seperti NPM dan Yarn.

Hal ini dapat menghasilkan penghematan ruang yang signifikan dalam hal ruang penyimpanan dan waktu unduh. Misalnya, sebuah proyek dengan 50 dependensi bisa memakan hingga 500MB ruang penyimpanan dengan NPM atau Yarn, tetapi hanya 50MB dengan PNPM.

### Instalasi lebih cepat

Keuntungan lain dari PNPM adalah kemampuannya untuk melakukan instalasi dependensi secara paralel. PNPM dapat mengunduh dan menginstal dependensi secara paralel, sehingga proses instalasi menjadi lebih cepat. PNPM juga memiliki dukungan built-in untuk hoisting, yang mengurangi duplikasi dependensi dan lebih menghemat ruang.

### Benchmarks Package Managers

Berikut ini adalah hasil benchmark antara NPM, Yarn, dan PNPM:

<div>
  <a href="/assets/alotta-files.svg">
    <img src="/assets/alotta-files.svg" class="sm:w-1/1 mx-auto" alt="Benchmark antara NPM, Yarn, dan PNPM">
  </a>
</div>

### Instalasi lebih aman

PNPM, seperti Yarn, memiliki file khusus dengan checksum semua package yang terinstal. Ini memastikan integritas semua package yang diinstal sebelum kode dijalankan. Ini juga memastikan bahwa semua package yang diinstal adalah yang diharapkan.

## Bagaimana cara menginstal PNPM?

Untuk menginstal PNPM, Anda dapat mengikuti langkah-langkah berikut ini:

1. Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) dan NPM. PNPM membutuhkan Node.js versi 16 atau yang lebih baru.
2. Buka terminal atau command prompt.
3. Ketikkan perintah berikut ini untuk menginstal PNPM:

```bash
npm install -g pnpm
```

Setelah proses instalasi selesai, Anda dapat memeriksa versi PNPM dengan perintah berikut ini:

```bash
pnpm -v
```

## Migration dari NPM ke PNPM

Jika kita sudah terbiasa menggunakan NPM atau Yarn, maka beralih ke PNPM tidak akan terlalu sulit. Berikut ini adalah perbandingan antara NPM, Yarn, dan PNPM:

| NPM Command            | Yarn Command              | PNPM Equivalent           |
| ---------------------- | ------------------------- | ------------------------- |
| npm install            | yarn                      | pnpm install              |
| npm install [pkg]      | yarn add [pkg]            | pnpm add [pkg]            |
| npm uninstall [pkg]    | yarn remove [pkg]         | pnpm remove [pkg]         |
| npm update             | yarn upgrade              | pnpm update               |
| npm list               | yarn list                 | pnpm list                 |
| npm run [scriptName]   | yarn [scriptName]         | pnpm [scriptName]         |
| npx [command]          | yarn dlx [command]        | pnpm dlx [command]        |
| npm exec               | yarn exec [commandName]   | pnpm exec [commandName]   |
| npm init [initializer] | yarn create [initializer] | pnpm create [initializer] |

## Kesimpulan

PNPM memberikan banyak perbaikan dalam menghemat ruang dan waktu dalam proses instalasi dependensi. PNPM secara keselurhan tampil jauh lebih baik daripada NPM dan Yarn. Tidak heran jika perusahaan teknologi besar seperti Microsoft, Prism, Vue3 dengan cepat mengadopsi PNPM. Jadi, jika Anda ingin meningkatkan efisiensi ruang penyimpanan, kecepatan, dan keamanan proyek JavaScript, maka PNPM adalah pilihan yang tepat.

Sekian tulisan saya kali ini, semoga bermanfaat. Terima kasih!
