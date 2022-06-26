// // 日曆
// document.addEventListener('DOMContentLoaded', function () {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth',
//         // locale:'zh-tw',
//         navLinks: true,
//         //   headerToolbar:{
//         //       left: 'prev,next today',
//         //       center:'title',
//         //       right:'dayGridMonth,timeGridWeek,timeGridDay'
//         //   },

//         events: [
//             {
//                 title: '08:00 GX商務',
//                 start: '2022-06-02',
//                 // end:'2022-07-02'
//             },
//             {
//                 title: '尚餘 3 位',
//                 start: '2022-06-02',
//                 allDay: false
//                 // end:'2022-07-12T16:00:00'
//             },
//             {
//                 title: '08:00 GX商務',
//                 start: '2022-06-08',
//                 // end:'2022-07-02'
//             },
//             {
//                 title: '尚餘 3 位',
//                 start: '2022-06-08',
//                 allDay: false
//                 // end:'2022-07-12T16:00:00'
//             },
//             {
//                 title: '08:00 GX商務',
//                 start: '2022-06-17',
//                 // end:'2022-07-02'
//             },
//             {
//                 title: '尚餘 3 位',
//                 start: '2022-06-17',
//                 allDay: false
//                 // end:'2022-07-12T16:00:00'
//             },
//             {
//                 title: '08:00 GX商務',
//                 start: '2022-06-20',
//                 // end:'2022-07-02'
//             },
//             {
//                 title: '尚餘 3 位',
//                 start: '2022-06-20',
//                 allDay: false
//                 // end:'2022-07-12T16:00:00'
//             },
//             {
//                 title: '08:00 GX商務',
//                 start: '2022-06-30',
//                 // end:'2022-07-02'
//             },
//             {
//                 title: '尚餘 8 位',
//                 start: '2022-06-30',
//                 allDay: false
//                 // end:'2022-07-12T16:00:00'
//             },
//         ]
//     });


//     calendar.render();
// });

let vm = new Vue({
    el:'#calendar',
    data:{
        seat:8,
        select_day:'',//選到的日期
        limit:0,
        people:0,//人數
    },
    methods: {
        select_date(e){
            this.people=0;
            
            // console.log($(e.target.closest('ul')).find('p.on'));
            $(e.target.closest('ul')).find('p.on').removeClass("on");
            $(e.target).addClass("on");
            this.select_day=e.target.dataset.day;
            this.limit=e.target.dataset.limit;
            // console.log(this.select_day);
        },
        reduce(e){
            if(this.people>0){
                this.people--
            }
        },
        add(e){
            if(this.people<this.limit){
                this.people++
            }
        },
    },
    compute: {

    },
    watch: {

    },
    created() {

    },
    mounted(){
        let order = JSON.parse(localStorage.getItem('order'));
        console.log(order);
        this.people = order['people'];
        this.select_day = order['select_day'];
        let p_list = $('#calendar').find('p');
        for(let i=0; i<p_list.length; i++){
            // p_list[i]
            if(p_list[i].dataset.day == order['select_day']){
                $(p_list[i]).addClass("on");
            }
        }
    },
    updated(){
    },
})

$('#nextPage').click(function(){
    let order = {};
    order['people']=vm.people;
    order['select_day']=vm.select_day;
    console.log(order);
    localStorage.setItem('order', JSON.stringify(order));
})