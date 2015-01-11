import DS from 'ember-data';

export default DS.Model.extend({
  // userId: DS.attr('integer')
  title: DS.attr('string'),
  body: DS.attr('string'),
  // status: DS.attr('')
  releaseAt: DS.attr('date'),
  releasedAt: DS.attr('date'),
  deletedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
