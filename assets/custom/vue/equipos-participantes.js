var app = new Vue({
    el: '#equipos',
    data: {
        message: 'Hello Vue!',
        masculinos: [
            {
                nombre: 'ARLEQUINES',
                ciudad: 'Rivera, Uruguay',
                imgSrc: 'assets/images/escudos_2019/arlequines.png'
            },{
                nombre: 'ANTIQUA',
                ciudad: 'Pelotas, RS - Brasil',
                imgSrc: 'assets/images/escudos_2019/antiqua.png'
            },
            {
                nombre: 'BÚFALOS',
                ciudad: 'Bella Unión, Uruguay',
                imgSrc: 'assets/images/escudos_2019/buffalos.png'
            },
            {
                nombre: 'JUBILAR',
                ciudad: 'Montevideo, Uruguay',
                imgSrc: 'assets/images/escudos_2019/jubilar.png'
            },
            {
                nombre: 'SAN JAVIER',
                ciudad: 'Tacuarembó, Uruguay',
                imgSrc: 'assets/images/escudos_2019/san_javier.png'
            }, {
                nombre: 'TORTUGAS',
                ciudad: 'Corrientes, Argentina',
                imgSrc: 'assets/images/escudos_2019/tortugas.png'
            },
            {
                nombre: 'RANITAS 7',
                ciudad: 'Corrientes, Argentina',
                imgSrc: 'assets/images/escudos_2019/ranitas.png'
            },
             {
                nombre: 'FARRAPOS',
                ciudad: 'Bento Gonçalves, RS - Brasil',
                imgSrc: 'assets/images/escudos_2019/farrapos.png'
            }, {
                nombre: 'SAN DIEGO',
                ciudad: 'Porto Alegre , RS - Brasil',
                imgSrc: 'assets/images/escudos_2019/san_diego.png'
            },
            {
                nombre: 'VELHO OESTE',
                ciudad: 'Chapecó , SC - Brasil',
                imgSrc: 'assets/images/escudos_2019/velho_oeste.png'
            },
            {
                nombre: 'GUASCA',
                ciudad: 'Porto Alegre , RS - Brasil',
                imgSrc: 'assets/images/escudos_2019/guasca.png'
            },
            {
                nombre: 'URTC',
                ciudad: 'Marau, RS - Brasil',
                imgSrc: 'assets/images/escudos_2019/urtc.png'
            }
        ],
        femeninos: [
            {
                nombre: 'ANTIQUA',
                ciudad: 'Pelotas, RS - Brasil',
                imgSrc: 'assets/images/escudos_2019/antiqua.png'
            }, {
                nombre: 'CRICKET',
                ciudad: 'Montevideo, Uruguay',
                imgSrc: 'assets/images/escudos_2019/mvcc.png'
            }, {
                nombre: 'SAN DIEGO',
                ciudad: 'Porto Alegre , RS - Brasil',
                imgSrc: 'assets/images/escudos_2019/san_diego.png'
            }, {
                nombre: 'VELHO OESTE',
                ciudad: 'Chapecó , SC - Brasil',
                imgSrc: 'assets/images/escudos_2019/velho_oeste.png'
            },
        ]
    },
    methods: {
        isMobile: function () {
            console.log(navigator.userAgent);
            if (/Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            } else {
                return false;
            }
        }
    }
})