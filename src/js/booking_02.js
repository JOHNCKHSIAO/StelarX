// 日曆
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        // locale:'zh-tw',
        navLinks: true,
        //   headerToolbar:{
        //       left: 'prev,next today',
        //       center:'title',
        //       right:'dayGridMonth,timeGridWeek,timeGridDay'
        //   },

        events: [
            {
                title: '08:00 GX商務',
                start: '2022-06-02',
                // end:'2022-07-02'
            },
            {
                title: '尚餘 3 位',
                start: '2022-06-02',
                allDay: false
                // end:'2022-07-12T16:00:00'
            },
            {
                title: '08:00 GX商務',
                start: '2022-06-08',
                // end:'2022-07-02'
            },
            {
                title: '尚餘 3 位',
                start: '2022-06-08',
                allDay: false
                // end:'2022-07-12T16:00:00'
            },
            {
                title: '08:00 GX商務',
                start: '2022-06-17',
                // end:'2022-07-02'
            },
            {
                title: '尚餘 3 位',
                start: '2022-06-17',
                allDay: false
                // end:'2022-07-12T16:00:00'
            },
            {
                title: '08:00 GX商務',
                start: '2022-06-20',
                // end:'2022-07-02'
            },
            {
                title: '尚餘 3 位',
                start: '2022-06-20',
                allDay: false
                // end:'2022-07-12T16:00:00'
            },
            {
                title: '08:00 GX商務',
                start: '2022-06-30',
                // end:'2022-07-02'
            },
            {
                title: '尚餘 8 位',
                start: '2022-06-30',
                allDay: false
                // end:'2022-07-12T16:00:00'
            },
        ]
    });


    calendar.render();
});