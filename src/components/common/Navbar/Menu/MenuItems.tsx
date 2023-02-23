import Dropdown, {
    DropdownButton,
    DropdownItem,
    DropdownMenu
} from "src/components/ui/Dropdown"


import style from './menu.module.scss'
import SubMenu from "./SubMenu"


type Props = {
    data?: Array<CategoryTree>
}

type CategoryTree = {
    name: string
    children?: [ {
        name: string
        children: Array<Tree>
    } ]
}

type Tree = {
    name: string
    children?: string[]
}

const categoryTree = [
    {
        name: "Deportes",
        children: [
            {
                name: "entrenamiento fitness",
                children: [
                {
                    name: "cardio",
                    children: [
                       "Bicicletas Spinning",
                       "Bicicletas Estáticas",
                       "Caminadoras y trotadoras",
                       "Elípticas",
                       "Escaladoras",
                       "Remos",
                       "Trampolines"
                    ]
                },
                {
                    name: "fuerza",
                    children: [
                        "Pesas y Mancuernas",
                        "Máquinas para casa o gym",
                        "Discos y Barras",
                        "Proteínas & Shaker"
                    ]
                },
                {
                    name: "funcional",
                    children: [
                        "Bandas y Elásticos",
                        "Steps y caja",
                        "Cuerdas y lazos",
                        "Colchonetas",
                        "Para tonificar"
                    ]
                },
                {
                    name: "yoga/Pilates",
                    children: [
                        "Mats Yoga",
                        "Bloques, pads y cojines",
                        "Balón de pilates",
                        "Colchonetas y esterillas",
                        "Estiramiento y equilibrio",
                        "Tonificación"
                    ]
                },
                {
                    name: "Boxeo",
                    children: [
                        "Guantes de boxeo",
                        "Vendas y mitones",
                        "Sacos y puching ball",
                        "Protecciones"
                    ]
                } 
                ]

            },

            {
                name: "montaña",
                children: [
                    {
                        name: "Camping",
                        children: [
                            "Carpas",
                            "Sleepings y hamacas",
                            "Colchones y aislantes",
                            "Mesas y sillas",
                            "Menaje y neveras",,
                            "Linternas y energía",
                            "Termos",
                            "Todo para camping",
                        ]
                    },
                    {
                        name: "Ropa para senderismo",
                        children: [
                            "Buzos y sacos",
                            "Camisetas y camisas",
                            "Pantalones",
                            "Chaquetas impermeables",
                            "Chaquetas",
                            "Chalecos",
                        ]
                    },
                    {
                        name: "Calzado senderismo",
                        children: [
                            "Botas",
                            "Sandalias",
                            "Medias",
                            "Plantillas y polainas",
                            "Zapatos",

                        ]
                    },
                    {
                        name: "Morrales y maletas",
                        children: [
                            "Morrales pequeños",
                            "Morrales de viaje",
                            "Morrales de trekking",
                            "Accesorios de viaje",
                            "Accesorios",
                            "Bastones trekking",
                            "Gafas de sol",
                            "Gorra, sombreros y cuellos",
                            "Binoculares y monoculares",
                            "Guantes térmicos",
                        ]
                    },
                    {
                        name: "Escalada",
                        children: [
                            "Pies de gato, arnes y cascos",
                            "Entrenamiento",
                            "Barranquismo",
                        ]
                    },
                    // {
                    //     name: "Barranquismo",
                    // //     children: []
                    // },
                    {
                        name: "Niños senderistas",
                        children: [
                            "Camisetas",
                            "Buzos y sacos polares",
                            "Chaquetas",
                            "Pantalones",
                            "Calzado senderismo niños",
                            "Invierno",
                            "Morrales",
                            "Accesorios",
                        ]
                    },
                    // {
                    //     name: "Accesorios",
                    // //     children: []
                    // },
                    {
                        name: "Excursionismo",
                        children: [
                            "Botas de caucho",
                            "Ropa para excusionismo",
                        ]
                    }
                ]
            },
            {
                name: "acuáticos y subacuáticos",
                children: [
                    {
                        name: "Natacion",
                        children: [
                            "Toallas microfibra y algodon",
                            "Material de entrenamiento",
                            "Vestidos y trajes de baño",
                            "Gorros y protecciones",
                            "Piscinas y flotadores",
                            "Gafas de natación",
                            "Aquafitness",
                        ]
                    },
                    {
                        name: "Snorkeling y buceo",
                        children: [
                            "Aquashoes - Zapatos acuáticos",
                            "Caretas, easybreath y tubos",
                            "Boyas y accesorios",
                            "Neoprenos",
                            "Aletas",
                        ]
                    },
                    {
                        name: "Deportes en playa",
                        children: [
                            "Boomerang y frisbee",
                            "Volley de playa",
                            "Tenis de playa",
                            "Cometas",
                        ]
                    },
                    {
                        name: "Waterpolo",
                        children: [
                        "Balones y porterias",
                        "Protecciones",
                        "Bañadores",
                        "Batas",
                    ]
                    },
                    {
                        name: "Barco y vela",
                        children: [
                            "Ropa naútica",
                            "Calzado naútico",
                            "Chalecos salvavidas",
                            "Accesorios del marinero",
                        ]
                    },
                    {
                        name: "Surf y bodyboard",
                        children: [
                            "Tablas",
                            "Trajes de baño",
                            "Protección solar",
                            "Ponchos y toallas",
                            "Accesorios surfers",
                            "Trajes de neopreno",
                            
                        ]
                    },
                    {
                        name: "Natación en aguas abiertas",
                        children: [
                            "Gafas y gorros",
                            "Gafas",
                            "Boyas",
                            "Wetsuits",
                        ]
                    },
                    {
                        name: "Kayak y SUP",
                        children: [
                           " Stand-up paddle inflable",
                            "Kayaks inflables",
                            "Chalecos salvavidas",
                            "Bolsas estancas",
                            "Remos y quillas",
                            "Bombas",
                        ]
                    },

                ]
                
            },
            {
                name: "ciclismo",
                children: [
                    {
                        name: " Bicicletas",
                        children: [
                            "Bicicletas de Ruta",
                            "Bicicletas de Montaña",
                            "Bicicletas Híbridas",
                            "Bicicletas Urbanas",
                        ]
                    },
                    {
                        name: "Ropa para ciclismo",
                        children: [
                            "Mujer",
                            "Hombre",
                            "Calzado y Medias",
                        ]
                    },
                    {
                        name: "Accesorios para el ciclista",
                        children: [
                            "Entrenamiento en Casa",
                            "Hidratación",
                            "Gafas",
                            "Guantes y Mangas",
                            "Gorros y Cuellos",
                        ]
                    },
                    {
                        name: "Cascos y seguridad",
                        children: [
                            "Cascos",
                            "Candados",
                            "Luces",
                            "Timbres",
                            "Reflectivos",
                        ]
                    },
                    {
                        name: "Repuestos",
                        children: [
                            "Componentes mecánicos",
                            "Mantenimiento",
                            "Bombas de aire",
                            "Neumaticos",
                            "Llantas",
                            "Pedales",
                        ]
                    },
                    // {
                    //     name: "Triathlon",
                    // //     children: []
                    // },
                    {
                        name: "Accesorios para bicicleta",
                        children: [
                            "Maletas y Alforjas",
                            "Guardabarros",
                            "Porta Celulares",
                            "Cuentakilómetros",
                            "Soportes y Racks",
                        ]
                    },
                    
                ]
            },
            {
                name: "running y caminar",
                children: [
                    {
                        name: "Ropa",
                        // children: []
                    },
                    {
                        name: "Tenis",
                        // children: []
                    },
                    {
                        name: "Nutrición y recuperación",
                        // children: []
                    },
                    {
                        name: "Tecnología",
                        // children: []
                    },

                ]
            },
            {
                name: "deportes en equipo",
                children: [
                    {
                        name: "Fútbol",
                        // children: []
                    },
                    {
                        name: "Fútbol sala",
                        // children: []
                    },
                    {
                        name: "Baloncesto",
                        // children: []
                    },
                    {
                        name: "Voleyball y voley playa",
                        // children: []
                    },
                    {
                        name: "Rugby",
                        // children: []
                    },
                    {
                        name: "Baseball",
                        // children: []
                    },
                    {
                        name: "Fútbol americano",
                        // children: []
                    },
                    {
                        name: "Clubs y tendencias",
                        // children: []
                    },

                    {
                        name: "Otros deportes",
                        // children: []
                    },
                ]
            },
            {
                name:"deportes de raqueta",
                children: [
                    "Ping pong",
                    "Tenis de campo",
                    "Pádel",
                    "Squash",
                    "Badminton",
                    "Ropa y tenis",
                ]
            },
            {
                name: "roller/patinaje",
                children: [
                    "Patines",
                    "Patinetas / Tablas",
                    "Protecciones",
                    "Scooter /Monopatín",
                ]
            },
            {
                name: "gimnasia y ballet",
                children: [
                    "Ballet",
                    "Gimnasia artística",
                    "Gimnasia rítmica",
                    "Trampolines",
                ]
            },
            {
                name: "equitación",
                children: [
                    "Ropa para jinete",
                    "Equipamento para jinete",
                    "Equipamento para caballo",

                ]
            },
            {
                name: "golf",
                children: [
                    "Ropa para golf",
                    "Equipamento para gold"
                ]
            },
            {
                name: "precisión",
                children: [
                    "Petanca",
                    "Tiro con arco",
                    "Dardos",
                ]
            }
        ]
    },
    {
        name: "mujer",
        children: [
            {
                name: "ropa deportiva",
                children: [
                    {
                        name: "camisas y camisetas",
                        children: [
                            "Manga corta",
                            "Manga larga",
                            "Esqueletos",
                            "Tipo polo",
                            "Protección UV",
                        ]
                    },
                    {
                        name: "buzos y sacos",
                        children: [
                            "Sacos / Polares" ,
                            "Hoodies / Buzos con capota",
                            "----Fleeces / Polares (Mujer → Ropa deportiva → Buzos y sacos)",
                            "Ropa interior deportiva",
                            "Tops deportivos",
                            "Panties",
                            "Ropa interior térmica",
                        ]
                    },
                    {
                        name: "chaquetas",
                        children: [
                            "Impermeables y ponchos",
                            "Térmicas y abrigos",
                            "Cortavientos",
                            "Chalecos",
                            "Plus size",
                        ]
                    },
                    {
                        name: "pantalones",
                        children: [
                            "Sudaderas y Joggers",
                            "Shorts y faldas",
                            "Leggings y Licras",
                            "Pantalon de tela",
                            "Maternidad"
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "hombre",
        children: [
            {
                name: "chaquetas",
                children: [
                    "Impermeables",
                    "Chaquetas rompe vientos",
                ]
            },
            {
                name: "camisetas",
                children: [
                    "Camisetas manga larga",
                    "Camisetas manga corta",
                    "Camisetas sin mangas",
                    "Camisas polo",
                    "Camisetas protección solar",
                ]
            },
            {
                name: "buzos/sacos",
                children: [
                    "Sacos",
                    "Buzos con capucha",
                    "Chalecos",
                ]
            },
            {
                name: "pantalones",
                children: [
                    "Impermeables",
                    "Chaquetas rompe vientos",
                    "Licras",
                    "Sudaderas y Joggers",
                    "Pantalonetas y Bermudas",
                ]
            },
            {
                name: "ropa interior deportiva",
                children: [

                ]
            },
            {
                name: "plus size",
                children: [

                ]
            }
        ]
    }
]


export default function MenuItems ({data=categoryTree}) {

    return (
        <div data-fs-Menu className={style.fsMenu}>
            {data?.map(({name, children}, index) => (
                <>
                <Dropdown key={index}>
                    <DropdownButton>
                        {name}
                    </DropdownButton>
                    <DropdownMenu>
                        <div>
                            <DropdownItem>
                                {children && <SubMenu categoryTree={children}/>}
                            </DropdownItem>
                        </div>
                        
                    </DropdownMenu>
                </Dropdown>
                </>
            ))}
        </div>
    )
}
