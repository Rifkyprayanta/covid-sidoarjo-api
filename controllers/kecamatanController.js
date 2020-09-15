const covidApi = require("../models/covidModels");
const kecamatanApi = require("./../models/kecamatanModels");

exports.topTinggi5Kecamatan = (req, res, next) => {
  req.query.limit = 5;
  req.query.sort = "meninggal";
  req.query.fields =
    "_id, kecamatan, positif, meninggal, sembuh, ODP, PDP, tanggal_update";
  next();
};

exports.getTop5PositifKecamatan = async (req, res) => {
  try {
    console.log(req.query);
    const kecamatan = await kecamatanApi.find().limit(5).sort({ positif: -1 });

    res.status(200).json({
      status: "success",
      results: kecamatan.length,
      kecamatan,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getLow5PositifKecamatan = async (req, res) => {
  try {
    console.log(req.query);
    const kecamatan = await kecamatanApi.find().limit(5).sort({ positif: 1 });

    res.status(200).json({
      status: "success",
      results: kecamatan.length,
      kecamatan,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getTop5DeathKecamatan = async (req, res) => {
  try {
    console.log(req.query);
    const kecamatan = await kecamatanApi
      .find()
      .limit(5)
      .sort({ meninggal: -1 });

    res.status(200).json({
      status: "success",
      results: kecamatan.length,
      kecamatan,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getLow5DeathKecamatan = async (req, res) => {
  try {
    console.log(req.query);
    const kecamatan = await kecamatanApi.find().limit(5).sort({ meninggal: 1 });

    res.status(200).json({
      status: "success",
      results: kecamatan.length,
      kecamatan,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllKecamatan = async (req, res) => {
  try {
    console.log(req.query);
    const kecamatan = await kecamatanApi.find().sort({ kecamatan: 1 });

    res.status(200).json({
      status: "success",
      results: kecamatan.length,
      kecamatan,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createKecamatan = async (req, res) => {
  try {
    const newKecamatan = await kecamatanApi.create(req.body);

    res.status(200).json({
      status: "success",
      result: newKecamatan.length,
      newKecamatan,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getKecamatanById = async (req, res) => {
  try {
    const getKecamatan = await kecamatanApi.findById(req.params.id);

    res.status(200).json({
      status: "success",
      results: getKecamatan.length,
      getKecamatan,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateKecamatanById = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.params.body);

    const kecamatan = await kecamatanApi.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      kecamatan,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteKecamatanById = async (req, res) => {
  try {
    const kecamatan = await kecamatanApi.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      result: kecamatan.length,
      kecamatan,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
