import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        toggle(id,des, location,assignedId) {
            this.set('toggleDisabled',true);
           
                document.getElementById("id_edit").value = id;
                document.getElementById("description_edit").value = des;
                document.getElementById("location_edit").value = location;
                document.getElementById("assignedId_edit").value = assignedId;
            
        },
        editTimesheet(){
            var id = document.getElementById("id_edit").value;
            var select = document.getElementById("assignedId_edit");
            var formData = {
                //dateIn: document.getElementById("dateIn_edit").value,
                dateOut: Date(),
                description: document.getElementById("description_edit").value,
                location: document.getElementById("location_edit").value,
                assignedId: {
                    id: select.value,
                    name: select.options[select.selectedIndex].text
                }
            };
            
            var _this = this;
            this.store.find('timesheet',id).then(function(timesheet){
                _this.store.find('person',select.value).then(function(person){
                    timesheet.set('assignedId',person);
                    //timesheet.set('dateIn',formData.dateIn);
                    timesheet.set('dateOut',formData.dateOut);
                    timesheet.set('description',formData.description);
                    timesheet.set('location',formData.location);
                    timesheet.save().then(function(){
                        _this.set('toggleDisabled',false);
                    });
                });
            });
            
        },
        deleteTimesheet(itemid){
            this.store.find('timesheet', itemid).then(function (item) {
              item.destroyRecord();
            });
        },
        submitPerson(){
            
            var formData = { name: document.getElementById("newname").value,};
            var person = this.store.createRecord('person',formData);
             person.save();
        
        },
        submit(){
            
            this.set('toggleDisabled',false);
            var select = document.getElementById("assignedId");
         
            var formData = {
                dateIn: Date(),
                description: document.getElementById("description").value,
                location: document.getElementById("location").value
            };
            
            var timesheet = this.store.createRecord('timesheet', formData);
           
            var person = this.store.all('person').filterBy("id",select.value).objectAt(0);
            
            
            timesheet.set('assignedId',person);
            
            person.get('timesheets').pushObject(timesheet);
            timesheet.save();
            person.save();
            
            
        }
    },
});
