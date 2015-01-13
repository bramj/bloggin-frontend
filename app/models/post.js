import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  status: DS.attr('string'),
  release_at: DS.attr('date'),
  released_at: DS.attr('date'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
