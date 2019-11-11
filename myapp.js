Vue.component('students', {
  template: '<h4>Student registration</h4>'
})
var app = new Vue({
  el: '#app',
  data: {
    name: 'Adali',
    course: 'web',
    period: '2019-11-11',
    students:[
      {
        id: 1,
        name: 'Aimable',
        course: 'web',
        period: '2019-11-11'
      },
      {
        id: 2,
        name: 'Alex',
        course: 'web',
        period: '2019-11-11'
      },
      {
        id: 3,
        name: 'Prince',
        course: 'web',
        period: '2019-11-11'
      }
    ]
  },
  methods: {
        addStudent: function() {
            let element = this.students[this.students.length - 1];
            let auto = element.id + 1;
            return this.students.push({ id: auto, name: this.name, course: this.course, period: this.period })
        }
    }
})
