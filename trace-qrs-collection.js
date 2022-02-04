import { Mongo } from 'meteor/mongo';

class TraceQrsCollection extends Mongo.Collection {

}

export const TraceQrs = new TraceQrsCollection('traceQrs');
TraceQrs.attachBehaviour('timestampable');
