import moment from 'moment';

export default (app) => {
    const { mongoose } = app;
    const { Schema } = mongoose;
    const ModelSchema = new Schema({
        page_name: {
            type: String,
            required: true,
        },
        url: {
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
    return mongoose.model('TestModel', ModelSchema, 'activ_page');
};
