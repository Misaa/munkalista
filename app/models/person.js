import DS from 'ember-data';

export default  DS.Model.extend({
  name: DS.attr('string'),
  timesheets: DS.hasMany('timesheet', {inverse: 'assignedId',async: true})
});