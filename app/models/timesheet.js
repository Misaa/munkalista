import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    dateIn: DS.attr('string'),
    dateOut: DS.attr('string'),
    location: DS.attr('string'),
    description: DS.attr('string'),
    assignedId: DS.belongsTo('person',{inverse:'timesheets',async: true}),
    
    inDisplay: Ember.computed('dateIn', function() {
        var d = this.get('dateIn');
        
        return d.toString;
        //return `${this.get('dateIn')}`;
    })
});
