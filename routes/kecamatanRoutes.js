const express = require("express");
const router = express.Router();
const kecamatanController = require("./../controllers/kecamatanController");

router
  .route("/top-5-kecamatan-tinggi-positif")
  .get(kecamatanController.getTop5PositifKecamatan);

router
  .route("/top-5-kecamatan-rendah-positif")
  .get(kecamatanController.getLow5PositifKecamatan);

router
  .route("/top-5-kecamatan-tinggi-meninggal")
  .get(kecamatanController.getTop5DeathKecamatan);

router
  .route("/top-5-kecamatan-rendah-meninggal")
  .get(kecamatanController.getLow5DeathKecamatan);

router
  .route("/")
  .get(kecamatanController.getAllKecamatan)
  .post(kecamatanController.createKecamatan);

router
  .route("/:id")
  .get(kecamatanController.getKecamatanById)
  .patch(kecamatanController.updateKecamatanById)
  .delete(kecamatanController.deleteKecamatanById);

module.exports = router;
