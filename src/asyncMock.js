const products = [
    {
        id: '1',
        name: 'GUITARRA ACÚSTICA CORT STANDARD AF510 BLACK SATIN MERBAU',
        price: 162112,
        category: 'Guitarras Eléctricas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_839258-MLA43784419538_102020-O.webp',
        stock: 10,
        description: 'Cort es una empresa con muchos años en el mercado que la distingue su pasión por la guitarra. Trabajan con conocimiento, experiencia y fe en la calidad de cada uno de sus productos. Su misión es clara: entregar los mejores instrumentos a músicos apasionados de todo el mundo. Un modelo para cada guitarrista. La tapa de abeto genera un tono brillante y claro, incluso en los registros más agudos. Calidad que se hace notar. Las cuerdas de metal se caracterizan por su bajo estiramiento y resistencia a la corrosión y abrasión. Son más duraderas, sólidas y generan un sonido brillante y claro.'
    },
    {
        id: '2',
        name: 'GUITARRA ACUSTICA FENDER CD 60S ALL MAHOGANY DREADNOUGHT CUO',
        price: 193000,
        category: 'Guitarras Eléctricas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_952968-MLU70065711541_062023-O.webp',
        stock: 10,
        description: 'Guitarras prácticas y funcionales, para aficionados y profesionales. Fender es una empresa que transforma la música en todo el mundo y atraviesa una gran variedad de géneros. Es el mayor fabricante internacional y sus productos representan un ícono cultural.'
    },
    {
        id: '3',
        name: 'GUITARRA ELECTROACÚSTICA CORT STANDARD AF510E OPEN PORE',
        price: 215000,
        category: 'Guitarras Eléctricas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_604519-MLA42168032048_062020-O.webp',
        stock: 10,
        description: 'Cort es una empresa con muchos años en el mercado que la distingue su pasión por la guitarra. Trabajan con conocimiento, experiencia y fe en la calidad de cada uno de sus productos. Su misión es clara: entregar los mejores instrumentos a músicos apasionados de todo el mundo.'
    },
    /*
    {
        id: '4',
        name: '',
        price: ,
        category: 'Guitarras Clásicas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '5',
        name: '',
        price: ,
        category: 'Guitarras Clásicas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '6',
        name: '',
        price: ,
        category: 'Guitarras Clásicas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '7',
        name: '',
        price: ,
        category: 'Baterías Acusticas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '8',
        name: '',
        price: ,
        category: 'Baterías Acusticas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '9',
        name: '',
        price: ,
        category: 'Baterías Acusticas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '10',
        name: '',
        price: ,
        category: 'Baterías Electrónicas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '11',
        name: '',
        price: ,
        category: 'Baterías Electrónicas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '12',
        name: '',
        price: ,
        category: 'Baterías Electrónicas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '13',
        name: '',
        price: ,
        category: 'Teclados',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '14',
        name: '',
        price: ,
        category: 'Teclados',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '15',
        name: '',
        price: ,
        category: 'Teclados',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '16',
        name: '',
        price: ,
        category: 'Pianos',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '17',
        name: '',
        price: ,
        category: 'Pianos',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '18',
        name: '',
        price: ,
        category: 'Pianos',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '19',
        name: '',
        price: ,
        category: 'Saxofones',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '20',
        name: '',
        price: ,
        category: 'Saxofones',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '21',
        name: '',
        price: ,
        category: 'Saxofones',
        img: '',
        stock: ,
        description: ''
    },
    {
        id: '22',
        name: '',
        price: ,
        category: 'Trompetas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '23',
        name: '',
        price: ,
        category: 'Trompetas',
        img: '',
        stock: 10,
        description: ''
    },
    {
        id: '24',
        name: '',
        price: ,
        category: 'Trompetas',
        img: '',
        stock: 10,
        description: ''
    } */
]

export const getProducts = () => {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
};