var app = new Vue({
    el: '#patrocinadores',
    data: {
        organiza: {
            nombre: 'Arlequines Rugby',
            imgSrc: 'assets/images/apoyos/arlequines.png'
        },
        apoyan: [
            {
                sigla: 'U.R.U',
                nombre: 'Unión de Rugby del Uruguay',
                imgSrc: 'assets/images/apoyos/teros.png'
            },  {
                nombre: 'Sudamérica Rugby',
                imgSrc: 'assets/images/apoyos/sudamericaRugby.png'
            }, {
                sigla: 'F.G.R',
                nombre: 'Federación Gaúcha de Rugby',
                imgSrc: 'assets/images/apoyos/fgr.png'
            }, {
                sigla: 'I.D.R',
                nombre: 'Intendencia Municipal de Rivera',
                imgSrc: 'assets/images/apoyos/idr.png'
            }, {
                sigla: 'S.N.D',
                nombre: 'Secretaría Nacional de Deportes',
                imgSrc: 'assets/images/apoyos/secr-nacional.png'
            }, {
                sigla: 'D.G.P.A.S',
                nombre: 'Dirección General de Promoción y Acción Social',
                imgSrc: 'assets/images/apoyos/dgpas.png'
            }, {
                sigla: 'Deportes Rivera',
                imgSrc: 'assets/images/apoyos/deportes-rivera.png'
            }, {
                sigla: 'Amigos del Deporte',
                imgSrc: 'assets/images/apoyos/amigosdeldeporte-2018.png'
            },  {
                sigla: 'eip',
                imgSrc: 'assets/images/apoyos/ceip2.png'
            }, 
            {
                sigla: 'Get Into Rugby',
                imgSrc: 'assets/images/apoyos/gir_logo.png'
            }, 


        ],
        patrocinadoresCopas: [
            {
                nombre: 'COMERI',
                tipo: 'Copa de Oro',
                imgSrc: 'assets/images/sponsors/comeri.png',
                scale: 0.8
            },
            {
                nombre: 'La Picaña',
                tipo: 'Copa Vice de Oro',
                imgSrc: 'assets/images/sponsors/lapicania.png',
                scale: 0.6
            },
            {
                nombre: 'Urufor',
                tipo: 'Copa de Plata',
                imgSrc: 'assets/images/sponsors/urufor.png',
                scale: 0.6
            },
            {
                nombre: 'ScotiaBank',
                tipo: 'Copa de Bronce',
                imgSrc: 'assets/images/sponsors/scotiabank.png',
                scale: 0.6
            },
            // {
            //     nombre: 'Hotel Frontier',
            //     tipo: 'Copa de Oro',
            //     imgSrc: 'assets/images/sponsors/frontier.png',
            //     scale: 0.6
            // },
            // {
            //     nombre: 'Fortec',
            //     tipo: 'Copa de Plata',
            //     imgSrc: 'assets/images/sponsors/fortec.png',
            //     scale: 0.6
            // },
            {
                nombre: 'Dalfey',
                tipo: 'Copa de Bronce',
                imgSrc: 'assets/images/sponsors/dalfey.png',
                scale: 0.6
            },
            
            {
                nombre: 'Cabaña La Fé',
                tipo: 'Copa de Bronce',
                imgSrc: 'assets/images/sponsors/lafe.jpg',
                scale: 0.6
            },
            {
                nombre: 'Cofusa',
                tipo: 'Copa de Bronce',
                imgSrc: 'assets/images/sponsors/cofusa.jfif',
                scale: 0.6
            },
            {
                nombre: 'Gatorade',
                tipo: 'Copa Tryman',
                imgSrc: 'assets/images/sponsors/gatorade.png',
                scale: 0.8
            },
            {
                nombre: 'Zillertal',
                tipo: 'Copa Tryman',
                imgSrc: 'assets/images/sponsors/zillertal.png',
                scale: 0.8
            }, 
            // {
            //     nombre: 'Salus',
            //     tipo: 'Copa Estímulo',
            //     imgSrc: 'assets/images/sponsors/salus.png',
            //     scale: 0.6
            // },
            // {
            //     nombre: 'Pepsi',
            //     tipo: 'Copa Try Woman',
            //     imgSrc: 'assets/images/sponsors/pepsi.png',
            //     scale: 0.6
            // },
        ],
        colaboradores: [
            {
                nombre: 'Pepsi',
                tipo: 'Copa Tryman',
                imgSrc: 'assets/images/sponsors/pepsi.png',
                scale: 0.8
            },
            {
                nombre: 'Salus',
                tipo: 'Copa Tryman',
                imgSrc: 'http://www.salus.com.uy/html/img/ui/logo-salus-color.svg',
                scale: 0.8
            },
            {
                nombre: 'Paso de los toros',
                imgSrc: 'assets/images/colaboran/bg-gaseosas-head-2.png',
                scale: 0.8
            },
            
            {
                nombre: 'Petit Hotel',
                imgSrc: 'assets/images/colaboran/petit.png',
                scale: 0.8
            },
        ],


    },
    methods: {}
})