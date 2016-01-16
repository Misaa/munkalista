import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var timesheets = this.store.findAll('timesheet');
        var people = this.store.findAll('person');
        return Ember.Object.create({
            timesheets: timesheets,
            people: people
        })
    },
});
