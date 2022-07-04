
new Vue({
    el: '#booking05',
    data: {
        day:'',
        month:'',
        cabin:'',
        dest:'',
        ppl:'',
        price:'',
        seat1:'',
        service1:'',
        seat2:'',
        service2:'',
    },
    methods: {
        
    },
    computed: {

    },
    mounted() {
        this.day = localStorage.getItem('day');
        // this.day = JSON.parse(this.day);

        this.month = localStorage.getItem('month');
        // this.month = JSON.parse(this.month);

        this.ppl = localStorage.getItem('people');
        this.ppl = JSON.parse(this.ppl);

        this.cabin = localStorage.getItem('cabin');
        // this.cabin = JSON.parse(this.cabin);

        this.dest = localStorage.getItem('dest');
        this.dest = JSON.parse(this.dest);

        this.seat1 = localStorage.getItem('seat_service');
        this.seat1 = JSON.parse(this.seat1);

        },


    updated() {
        // 訂購者
     getLastname();
     function getLastname(){        
         document.getElementById('lastname').value= localStorage.getItem('customlastName');
         console.log(document.getElementById('lastname'));
     }
 
     getName();
     function getName(){        
         document.getElementById('name').value= localStorage.getItem('customName');
     }
 
     getId();
     function getId(){        
         document.getElementById('id').value= localStorage.getItem('customId');
     }
 
     getPhone();
     function getPhone(){        
         document.getElementById('phone').value= localStorage.getItem('customPhone');
     }
 
     // 同行者
     getcoLastname();
     function getcoLastname(){        
         document.getElementById('colastname').value= localStorage.getItem('customcolastName');
     }
 
     getcoName();
     function getcoName(){        
         document.getElementById('coname').value= localStorage.getItem('customcoName');
     }
 
     getcoId();
     function getcoId(){        
         document.getElementById('coid').value= localStorage.getItem('customcoId');
     }
 
     getcoPhone();
     function getcoPhone(){        
         document.getElementById('cophone').value= localStorage.getItem('customcoPhone');
     }
        
    },

    
}) 

// document.getElementById('btn_next').addEventListener('click', e => {
//     document.getElementById('confirm').click();
// })