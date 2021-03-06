const { Model } = require('objection');
const path = require('path');

class EventComments extends Model {
  static get tableName() {
    return 'EventComments';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text', 'user_id', 'event_id'],

      properties: {
        id: { type: 'integer' },
        event_id: { type: 'integer' },
        user_id: { type: 'integer' },
        text: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    return {
      events: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/events.model`,
        join: {
          from: 'EventComments.event_id',
          to: 'Events.id',
        },
      },
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.resolve(__dirname, '../', 'users.model'),
        join: {
          from: 'EventComments.user_id',
          to: 'Users.id',
        },
      },
    };
  }
}

module.exports = EventComments;
