import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
    tagName:'',
    model(){
        return DS.store.findAll('timesheet');
    },
    actions: {
        editTimesheet(item){
            console.log(item);
        },
        deleteTimesheet(item){
            item.deleteRecord();
            item.send();
        }
        
    },
});
