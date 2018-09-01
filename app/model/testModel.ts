import moment from 'moment';

export default (app) => {
    const { mongoose } = app;
	   const { Schema } = mongoose;
    const ModelSchema = new Schema({
        mobile: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    });
    ModelSchema.pre('save', (next: FunctionConstructor) => {
        const _now = moment().unix();
        if (this.isNew) {
            this.created = _now;
            this.updated = _now;
        } else {
            this.updated = _now;
        }
        next();
    });
    return mongoose.model('TestModel', ModelSchema, 'test');
};
