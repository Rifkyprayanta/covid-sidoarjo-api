const moongose = require("mongoose");

const covidSidoarjoSchema = new moongose.Schema({
  positif: {
    type: Number,
    required: [true, "Data positif tidak boleh kosong!"],
  },
  sembuh: {
    type: Number,
    required: [true, "Data sembuh tidak boleh kosong!"],
  },
  meninggal: {
    type: Number,
    required: [true, "Data meninggal tidak boleh kosong!"],
  },
  ODP: {
    type: Number,
    required: [true, "Data ODP tidak boleh kosong!"],
  },
  PDP: {
    type: Number,
    required: [true, "Data PDP tidak boleh kosong!"],
  },
  tanggal_update: {
    type: Date,
    default: Date.now(),
    required: [true, "Data tanggal tidak boleh kosong!"],
    unique: true,
  },
});

const covidApi = moongose.model("covidApi", covidSidoarjoSchema);

module.exports = covidApi;
