import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import db_icon from './db_icon.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    db_icon
};

export const workData = [
  {
    title: 'BlueHorizon',
    description: 'Aplikasi edukasi berbasis web dengan fitur adopsi terumbu karang. Memiliki dashboard user dan panel admin untuk manajemen data. Dibangun menggunakan Laravel, MySQL, Tailwind CSS, dan GitHub sebagai version control.',
    bgImage: '/work-1.png',
    link: 'https://github.com/ahnafzaki12/BlueHorizon'
  },
  {
    title: 'AksaraPeduli',
    description: 'Platform donasi dengan autentikasi role-based untuk user dan admin. User dapat berdonasi dan melihat riwayat, admin kelola konten dan data. Dikembangkan dengan Laravel, MySQL, Tailwind CSS, dan GitHub sebagai version control.',
    bgImage: '/work-2.png',
    link: 'https://github.com/ahnafzaki12/AksaraPeduli',
  },
  {
    title: 'E-Commerce App',
    description: 'Aplikasi toko online dengan fitur CRUD produk dan pesanan untuk admin. User dapat menjelajahi produk, menambahkan ke keranjang, dan checkout. Menggunakan Next.js, MongoDB, Tailwind CSS, dan GitHub sebagai version control.',
    bgImage: '/work-3.png',
    link: 'https://github.com/ahnafzaki12/ecommerce-front',
    linkDemo: 'https://ahnaf-next-ecommerce.netlify.app/'
  },
  {
    title: 'E-Commerce App Admin',
    description: 'Aplikasi toko online dengan fitur CRUD produk dan pesanan untuk admin. User dapat menjelajahi produk, menambahkan ke keranjang, dan checkout. Menggunakan Next.js, MongoDB, Tailwind CSS, dan GitHub sebagai version control.',
    bgImage: '/work-4.png',
    link: 'https://github.com/ahnafzaki12/ecommerce-admin',
  },
  {
    title: 'AksaraPeduli Next Version',
    description: 'Versi terbaru dari platform donasi sosial dengan teknologi fullstack JavaScript. Menggunakan arsitektur API terpisah per fitur dan tampilan web yang responsif. Dibuat dengan Next.js, PostgreSQL, Tailwind CSS, dan GitHub sebagai version control.',
    bgImage: '/work-5.png',
    link: 'https://github.com/ahnafzaki12/Aksara-Next-Version',
  },
  {
    title: 'Web Construction Frontend',
    description: 'Frontend aplikasi web konstruksi menggunakan React.js. Dibuat dengan fokus pada desain responsif dan antarmuka pengguna yang modern. Dilengkapi dengan fitur layanan, proyek, dan artikel. Menggunakan GitHub sebagai version control.',
    bgImage: '/work-7.png',
    link: 'https://github.com/ahnafzaki12/frontend-construction',
  },
  {
    title: 'Web Construction Backend',
    description: 'Backend aplikasi web konstruksi menggunakan Laravel. Menyediakan API dan manajemen data untuk frontend dengan struktur yang terorganisir dan skalabel.',
    bgImage: '/work-6.png',
    link: 'https://github.com/ahnafzaki12/backend-construction',
  },
  {
    title: 'Regar Mart - ECommerce',
    description: 'Aplikasi e-commerce modern berbasis Next.js dengan fitur katalog, keranjang, dan checkout. Admin dapat mengelola produk, kategori, dan pesanan melalui dashboard interaktif.',
    bgImage: '/work-8.png',
    link: 'https://github.com/FlyHigh404/regarmart-ecommerce',
  }
];




export const serviceData = [
  {
    icon: assets.web_icon,
    title: 'Web Development',
    description: 'Mengembangkan aplikasi web responsif dengan teknologi modern seperti HTML, CSS, JavaScript, React.js, dan Laravel.',
    link: ''
  },
  {
    icon: assets.db_icon,
    title: 'Database Management',
    description: 'Merancang dan mengelola database menggunakan MySQL dan PostgreSQL untuk memastikan integritas dan efisiensi data.',
    link: ''
  },
  {
    icon: assets.ui_icon,
    title: 'UI/UX Design',
    description: 'Mendesain antarmuka yang intuitif dan user-friendly dengan pendekatan berbasis pengalaman pengguna.',
    link: ''
  },
]


export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Bahasa Pemrograman dan Tools Pengembangan',
    description: 'HTML, CSS, JavaScript, React.js, Next.js, Node.js, Laravel, SQL, PostgreSQL, Git, VSCode'
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Pendidikan',
    description: 'S1 Sistem Informasi – Universitas Pembangunan Nasional “Veteran” Jawa Timur'
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Proyek',
    description: 'Telah membangun lebih dari 5 proyek'
  }
];


export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];