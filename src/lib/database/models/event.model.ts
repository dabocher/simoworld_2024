import { Schema, model, models } from "mongoose";

export interface EventStructure {
  _id: string;
  title: string;
  description: string;
  type: "championship" | "race" | "practice";
  simulator:
    | "Assetto Corsa Competizione"
    | "Assetto Corsa"
    | "Automobilista 2"
    | "Dirt Rally 2.0"
    | "F1"
    | "Gran Turismo Sport"
    | "iRacing"
    | "Project Cars 2"
    | "RaceRoom"
    | "rFactor 2";

  location: string;
  startDataTime: Date;
  endDataTime: Date;
  imageUrl?: string;
  price?: number;
  isFree?: boolean;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
  slots: number;
  createdAt: Date;
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  simulator: { type: String, required: true },
  location: { type: String, required: true },
  startDataTime: { type: Date, required: true },
  endDataTime: { type: Date, required: true },
  imageUrl: { type: String },
  price: { type: Number },
  isFree: { type: Boolean, default: false },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
  slots: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
