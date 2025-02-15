import mongoose, {Schema, Document} from 'mongoose';

export interface CardDocument extends Document {
    name: string;
    phone: number;
    email: string;
}

const DashboardSchema: Schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

export default mongoose.model<CardDocument>("DashboardCard", DashboardSchema);