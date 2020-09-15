const mongoose = require("mongoose");

const kecamtanSidoarjoSchema = new mongoose.Schema({
  kecamatan: {
    type: String,
    required: [true, "Data Kecamatan tidak boleh kosong!"],
  },
  positif: {
    type: Number,
    required: [true, "Data positif tidak boleh kosong!"],
  },
  meninggal: {
    type: Number,
    required: [true, "Data meninggal tidak boleh kosong!"],
  },
  sembuh: {
    type: Number,
    required: [true, "Data sembuh tidak boleh kosong!"],
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
  },
});

const kecamatanApi = mongoose.model("kecamatanApi", kecamtanSidoarjoSchema);

module.exports = kecamatanApi;
