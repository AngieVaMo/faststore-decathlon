//import { useEffect } from "react"
import categoryTree2 from './categoryTree.json'
import Dropdown, {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from 'src/components/common/Dropdown'
import LinkUUnidades from 'src/components/ui/Link/LinkUUnidades'

import style from './menu.module.scss'
import SubMenu from './SubMenu'

console.log('ARBOL DE CATEGORIAS: ', categoryTree2)

type Props = {
  data?: Array<Tree>
}

export interface Category {
  name: string
  children: any[]
}

interface Tree {
  name: string
  children: Category[]
}

const categoryTree = [
  {
    name: 'Deportes',
    children: [
      {
        name: 'entrenamiento fitness',
        children: [
          {
            name: 'cardio',
            children: [
              'Bicicletas Spinning',
              'Bicicletas Estáticas',
              'Caminadoras y trotadoras',
              'Elípticas',
              'Escaladoras',
              'Remos',
              'Trampolines',
            ],
          },
          {
            name: 'fuerza',
            children: [
              'Pesas y Mancuernas',
              'Máquinas para casa o gym',
              'Discos y Barras',
              'Proteínas & Shaker',
            ],
          },
          {
            name: 'funcional',
            children: [
              'Bandas y Elásticos',
              'Steps y caja',
              'Cuerdas y lazos',
              'Colchonetas',
              'Para tonificar',
            ],
          },
          {
            name: 'yoga/Pilates',
            children: [
              'Mats Yoga',
              'Bloques, pads y cojines',
              'Balón de pilates',
              'Colchonetas y esterillas',
              'Estiramiento y equilibrio',
              'Tonificación',
            ],
          },
          {
            name: 'Boxeo',
            children: [
              'Guantes de boxeo',
              'Vendas y mitones',
              'Sacos y puching ball',
              'Protecciones',
            ],
          },
        ],
      },
      {
        name: 'montaña',
        children: [
          {
            name: 'Camping',
            children: [
              'Carpas',
              'Sleepings y hamacas',
              'Colchones y aislantes',
              'Mesas y sillas',
              'Menaje y neveras',
              'Linternas y energía',
              'Termos',
              'Todo para camping',
            ],
          },
          {
            name: 'Ropa para senderismo',
            children: [
              'Buzos y sacos',
              'Camisetas y camisas',
              'Pantalones',
              'Chaquetas impermeables',
              'Chaquetas',
              'Chalecos',
            ],
          },
          {
            name: 'Calzado senderismo',
            children: [
              'Botas',
              'Sandalias',
              'Medias',
              'Plantillas y polainas',
              'Zapatos',
            ],
          },
          {
            name: 'Morrales y maletas',
            children: [
              'Morrales pequeños',
              'Morrales de viaje',
              'Morrales de trekking',
              'Accesorios de viaje',
              'Accesorios',
              'Bastones trekking',
              'Gafas de sol',
              'Gorra, sombreros y cuellos',
              'Binoculares y monoculares',
              'Guantes térmicos',
            ],
          },
          {
            name: 'Escalada',
            children: [
              'Pies de gato, arnes y cascos',
              'Entrenamiento',
              'Barranquismo',
            ],
          },
          {
            name: 'Niños senderistas',
            children: [
              'Camisetas',
              'Buzos y sacos polares',
              'Chaquetas',
              'Pantalones',
              'Calzado senderismo niños',
              'Invierno',
              'Morrales',
              'Accesorios',
            ],
          },
          {
            name: 'Excursionismo',
            children: ['Botas de caucho', 'Ropa para excusionismo'],
          },
        ],
      },
      {
        name: 'acuáticos y subacuáticos',
        children: [
          {
            name: 'Natacion',
            children: [
              'Toallas microfibra y algodon',
              'Material de entrenamiento',
              'Vestidos y trajes de baño',
              'Gorros y protecciones',
              'Piscinas y flotadores',
              'Gafas de natación',
              'Aquafitness',
            ],
          },
          {
            name: 'Snorkeling y buceo',
            children: [
              'Aquashoes - Zapatos acuáticos',
              'Caretas, easybreath y tubos',
              'Boyas y accesorios',
              'Neoprenos',
              'Aletas',
            ],
          },
          {
            name: 'Deportes en playa',
            children: [
              'Boomerang y frisbee',
              'Volley de playa',
              'Tenis de playa',
              'Cometas',
            ],
          },
          {
            name: 'Waterpolo',
            children: [
              'Balones y porterias',
              'Protecciones',
              'Bañadores',
              'Batas',
            ],
          },
          {
            name: 'Barco y vela',
            children: [
              'Ropa naútica',
              'Calzado naútico',
              'Chalecos salvavidas',
              'Accesorios del marinero',
            ],
          },
          {
            name: 'Surf y bodyboard',
            children: [
              'Tablas',
              'Trajes de baño',
              'Protección solar',
              'Ponchos y toallas',
              'Accesorios surfers',
              'Trajes de neopreno',
            ],
          },
          {
            name: 'Natación en aguas abiertas',
            children: ['Gafas y gorros', 'Gafas', 'Boyas', 'Wetsuits'],
          },
          {
            name: 'Kayak y SUP',
            children: [
              ' Stand-up paddle inflable',
              'Kayaks inflables',
              'Chalecos salvavidas',
              'Bolsas estancas',
              'Remos y quillas',
              'Bombas',
            ],
          },
        ],
      },
      {
        name: 'ciclismo',
        children: [
          {
            name: ' Bicicletas',
            children: [
              'Bicicletas de Ruta',
              'Bicicletas de Montaña',
              'Bicicletas Híbridas',
              'Bicicletas Urbanas',
            ],
          },
          {
            name: 'Ropa para ciclismo',
            children: ['Mujer', 'Hombre', 'Calzado y Medias'],
          },
          {
            name: 'Accesorios para el ciclista',
            children: [
              'Entrenamiento en Casa',
              'Hidratación',
              'Gafas',
              'Guantes y Mangas',
              'Gorros y Cuellos',
            ],
          },
          {
            name: 'Cascos y seguridad',
            children: ['Cascos', 'Candados', 'Luces', 'Timbres', 'Reflectivos'],
          },
          {
            name: 'Repuestos',
            children: [
              'Componentes mecánicos',
              'Mantenimiento',
              'Bombas de aire',
              'Neumaticos',
              'Llantas',
              'Pedales',
            ],
          },
          {
            name: 'Accesorios para bicicleta',
            children: [
              'Maletas y Alforjas',
              'Guardabarros',
              'Porta Celulares',
              'Cuentakilómetros',
              'Soportes y Racks',
            ],
          },
        ],
      },
      {
        name: 'running y caminar',
        children: [
          {
            name: 'Ropa',
            children: [],
          },
          {
            name: 'Tenis',
            children: [],
          },
          {
            name: 'Nutrición y recuperación',
            children: [],
          },
          {
            name: 'Tecnología',
            children: [],
          },
        ],
      },
      {
        name: 'deportes en equipo',
        children: [
          {
            name: 'Fútbol',
            children: [],
          },
          {
            name: 'Fútbol sala',
            children: [],
          },
          {
            name: 'Baloncesto',
            children: [],
          },
          {
            name: 'Voleyball y voley playa',
            children: [],
          },
          {
            name: 'Rugby',
            children: [],
          },
          {
            name: 'Baseball',
            children: [],
          },
          {
            name: 'Fútbol americano',
            children: [],
          },
          {
            name: 'Clubs y tendencias',
            children: [],
          },

          {
            name: 'Otros deportes',
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'mujer',
    children: [
      {
        name: 'ropa deportiva',
        children: [
          {
            name: 'camisas y camisetas',
            children: [
              'Manga corta',
              'Manga larga',
              'Esqueletos',
              'Tipo polo',
              'Protección UV',
            ],
          },
          {
            name: 'buzos y sacos',
            children: [
              'Sacos / Polares',
              'Hoodies / Buzos con capota',
              '----Fleeces / Polares (Mujer → Ropa deportiva → Buzos y sacos)',
              'Ropa interior deportiva',
              'Tops deportivos',
              'Panties',
              'Ropa interior térmica',
            ],
          },
          {
            name: 'chaquetas',
            children: [
              'Impermeables y ponchos',
              'Térmicas y abrigos',
              'Cortavientos',
              'Chalecos',
              'Plus size',
            ],
          },
          {
            name: 'pantalones',
            children: [
              'Sudaderas y Joggers',
              'Shorts y faldas',
              'Leggings y Licras',
              'Pantalon de tela',
              'Maternidad',
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'hombre',
    children: [
      {
        name: 'ropa deportiva',
        children: [
          {
            name: 'chaquetas',
            children: [],
          },
          {
            name: 'camisetas',
            children: [],
          },
          {
            name: 'buzos',
            children: [],
          },
          {
            name: 'pantalones',
            children: [],
          },
        ],
      },
      {
        name: 'zapatos deportivos',
        children: [
          {
            name: 'tenis deportivos',
            children: [],
          },
          {
            name: 'senderismo',
            children: [],
          },
          {
            name: 'botas',
            children: [],
          },
          {
            name: 'playa y natación',
            children: [],
          },
        ],
      },
      {
        name: 'para la playa',
        children: [
          {
            name: 'trajes de baño',
            children: [],
          },
          {
            name: 'ropa playa',
            children: [],
          },
          {
            name: 'calzado playa',
            children: [],
          },
          {
            name: 'protección UV',
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'niños y bebés',
    children: [
      {
        name: 'ropa deportiva',
        children: [
          {
            name: 'chaquetas',
            children: [],
          },
          {
            name: 'camisetas',
            children: [],
          },
          {
            name: 'buzos',
            children: [],
          },
          {
            name: 'pantalones',
            children: [],
          },
        ],
      },
      {
        name: 'zapatos deportivos',
        children: [
          {
            name: 'tenis deportivos',
            children: [],
          },
          {
            name: 'senderismo',
            children: [],
          },
          {
            name: 'botas',
            children: [],
          },
          {
            name: 'playa y natación',
            children: [],
          },
        ],
      },
      {
        name: 'para la playa',
        children: [
          {
            name: 'trajes de baño',
            children: [],
          },
          {
            name: 'ropa playa',
            children: [],
          },
          {
            name: 'calzado playa',
            children: [],
          },
          {
            name: 'protección UV',
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'accesorios',
    children: [
      {
        name: 'ropa deportiva',
        children: [
          {
            name: 'chaquetas',
            children: [],
          },
          {
            name: 'camisetas',
            children: [],
          },
          {
            name: 'buzos',
            children: [],
          },
          {
            name: 'pantalones',
            children: [],
          },
        ],
      },
      {
        name: 'zapatos deportivos',
        children: [
          {
            name: 'tenis deportivos',
            children: [],
          },
          {
            name: 'senderismo',
            children: [],
          },
          {
            name: 'botas',
            children: [],
          },
          {
            name: 'playa y natación',
            children: [],
          },
        ],
      },
      {
        name: 'para la playa',
        children: [
          {
            name: 'trajes de baño',
            children: [],
          },
          {
            name: 'ropa playa',
            children: [],
          },
          {
            name: 'calzado playa',
            children: [],
          },
          {
            name: 'protección UV',
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'colecciones',
    children: [
      {
        name: 'ropa deportiva',
        children: [
          {
            name: 'chaquetas',
            children: [],
          },
          {
            name: 'camisetas',
            children: [],
          },
          {
            name: 'buzos',
            children: [],
          },
          {
            name: 'pantalones',
            children: [],
          },
        ],
      },
      {
        name: 'zapatos deportivos',
        children: [
          {
            name: 'tenis deportivos',
            children: [],
          },
          {
            name: 'senderismo',
            children: [],
          },
          {
            name: 'botas',
            children: [],
          },
          {
            name: 'playa y natación',
            children: [],
          },
        ],
      },
      {
        name: 'para la playa',
        children: [
          {
            name: 'trajes de baño',
            children: [],
          },
          {
            name: 'ropa playa',
            children: [],
          },
          {
            name: 'calzado playa',
            children: [],
          },
          {
            name: 'protección UV',
            children: [],
          },
        ],
      },
    ],
  },
]

export default function MenuItems({ data = categoryTree }: Props) {
  return (
    <div data-fs-menu className={style.fsMenu}>
      {data?.map(({ name, children }, index) => (
        <>
          <Dropdown key={index} data-fs-menu-depto>
            <DropdownButton>{name}</DropdownButton>
            <DropdownMenu data-fs-menu-dropdownMenu>
              <div>
                <DropdownItem data-fs-menu-dropdownitem>
                  {children && <SubMenu categoryTree={children} />}
                </DropdownItem>
              </div>
            </DropdownMenu>
          </Dropdown>
        </>
      ))}
      <LinkUUnidades />
    </div>
  )
}
