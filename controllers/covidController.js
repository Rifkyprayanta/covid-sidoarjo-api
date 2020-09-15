const covidApi = require("./../models/covidModels");

exports.getKasusPositifTinggi = async (req, res) => {
  try {
    console.log(req.query);
    const covids = await covidApi.find().limit(1).sort({ positif: -1 });

    res.status(200).json({
      status: "succes",
      results: covids.length,
      covids,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getKasusPositifRendah = async (req, res) => {
  try {
    console.log(req.query);
    const covids = await covidApi.find().limit(1).sort({ positif: 1 });

    res.status(200).json({
      status: "succes",
      results: covids.length,
      covids,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getKasusMeninggalTinggi = async (req, res) => {
  try {
    console.log(req.query);
    const covids = await covidApi.find().limit(1).sort({ meninggal: -1 });

    res.status(200).json({
      status: "succes",
      results: covids.length,
      covids,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getKasusMeninggalRendah = async (req, res) => {
  try {
    console.log(req.query);
    const covids = await covidApi.find().limit(1).sort({ meninggal: 1 });

    res.status(200).json({
      status: "success",
      results: covids.length,
      covids,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getKasusSembuhTinggi = async (req, res) => {
  try {
    console.log(req.query);
    const covids = await covidApi.find().limit(1).sort({ sembuh: -1 });

    res.status(200).json({
      status: "succes",
      results: covids.length,
      covids,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getKasusSembuhRendah = async (req, res) => {
  try {
    console.log(req.query);
    const covids = await covidApi.find().limit(1).sort({ sembuh: 1 });

    res.status(200).json({
      status: "succes",
      results: covids.length,
      covids,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllCovid = async (req, res) => {
  try {
    const covids = await covidApi.find().sort({ _id: -1 });

    res.status(200).json({
      status: "succes",
      results: covids.length,
      covids,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getCovidById = async (req, res) => {
  try {
    const covidsApi = await covidApi.findById(req.params.id);

    res.status(200).json({
      status: "success",
      results: covidsApi.length,
      data: {
        covidsApi,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createCovid = async (req, res) => {
  try {
    console.log(req.body);
    const newCovid = await covidApi.create(req.body);
    res.status(200).json({
      status: "success",
      // result: dataApi.length,
      data: {
        covid: newCovid,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateCovid = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.params.body);
    const covids = await covidApi.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        covids,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteCovidbyId = async (req, res) => {
  try {
    const covids = await covidApi
      .findByIdAndDelete(req.params.id)
      .sort({ _id: -1 });

    res.status(204).json({
      status: "success",
      result: covids.length,
      data: {
        covids: covids,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
