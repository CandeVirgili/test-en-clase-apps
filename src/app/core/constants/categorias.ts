import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Hamburguesas',
    id: 250,
    imgUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/05/25/16850278533720.jpg',
    productos: [
      {
        id: 1,
        nombre: 'Hamburguesa 1',
        precio: 2220,
        ingredientes: [],
        imagen:
          'https://m.media-amazon.com/images/I/81cMw0qNjTL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        id: 2,
        nombre: 'Hamburguesa 2',
        precio: 3330,
        ingredientes: [],
        imagen:
          'https://cdn-3.expansion.mx/dims4/default/d64801b/2147483647/strip/true/crop/1216x863+0+0/resize/1800x1277!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fb7%2F07%2F047d352e4fdf984a0f7f08d2e1b0%2Fpromociones-dia-de-la-hamburguesa-2023.jpg',
      },
      {
        id: 3,
        nombre: 'Hamburguesa 3',
        precio: 4440,
        ingredientes: [],
        imagen:
          'https://www.cronista.com/files/image/486/486777/636567c4a7265.jpg',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 1,
    imgUrl:
      'https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/Pepperoni-Pizza-1.jpg',
    productos: [
      {
        id: 4,
        nombre: 'Pizza común',
        precio: 1000,
        ingredientes: ['Muzarella', 'Aceitunas', 'Orégano'],
        imagen:
          'https://assets.elgourmet.com/wp-content/uploads/2023/03/pizza_Mh3H4eanyBKEsStv1YclPWTf9OUqIi.png',
      },
      {
        id: 5,
        nombre: 'Pizza especial',
        precio: 1200,
        ingredientes: ['Muzarella', 'Aceitunas', 'Morrones', 'Tomate', 'Jamon'],
        imagen:
          'https://images-gmi-pmc.edge-generalmills.com/fce31bdd-1931-4f30-adef-a5bac0864676.jpg',
      },
      {
        id: 6,
        nombre: 'Pizza 4 quesos',
        precio: 1300,
        ingredientes: ['Muzarella', 'Roquefort', 'Provolone', 'Parmesano'],
        imagen:
          'https://www.comedera.com/wp-content/uploads/2022/04/Pizza-cuatro-quesos-shutterstock_1514858234.jpg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 2,
    imgUrl:
      'https://www.recetasnestle.com.ar/sites/default/files/styles/crop_article_banner_desktop_nes/public/2023-02/postres-con-mango.jpg.jpg?itok=EcnX7DKL',
    productos: [
      {
        id: 7,
        nombre: 'Pie de lima',
        precio: 800,
        ingredientes: [],
        imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2023/08/postres-faciles-y-rapidos.jpg',
      },
      {
        id: 8,
        nombre: 'Chocotorta',
        precio: 800,
        ingredientes: [],
        imagen:
          'https://vinomanos.com/wp-content/uploads/2019/01/Chocotorta-1.jpg',
      },
      {
        id: 9,
        nombre: 'Cheesecake',
        precio: 800,
        ingredientes: [],
        imagen:'https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2023-08/postre-cheesecake-maracuya%E2%95%A0%C3%BC.jpg?itok=g-V5rbj1',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 3,
    imgUrl:
      'https://gestoriapastor.files.wordpress.com/2021/01/the-refrescos.jpg',
    productos: [
      {
        id: 10,
        nombre: 'Coca Cola',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://duranalmacen.com.ar/wp-content/uploads/2021/09/Gaseosa-Coca-Cola-500-Cc-COCA-COLA-X500ML-1-3024.jpg',
      },
      {
        id: 11,
        nombre: 'Sprite',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-08-25-at-11-08-571-f2321c146eb51f1dac16299005725116-1024-1024.jpeg',
      },
      {
        id: 12,
        nombre: 'Agua',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://acdn.mitiendanube.com/stores/001/125/346/products/eco-de-los-andes-sg-1500-l1-0cf017b27c828c039816021634251735-640-0.jpg',
      },
    ],
  },
];
