const express = require("express");
const router = express.Router();
const covidController = require("./../controllers/covidController");

// Get all covid case in Sidoarjo
router
  .route("/kasus-positif-tinggi")
  .get(covidController.getKasusPositifTinggi);
router
  .route("/kasus-positif-rendah")
  .get(covidController.getKasusPositifRendah);
router
  .route("/kasus-meninggal-tinggi")
  .get(covidController.getKasusMeninggalTinggi);
router
  .route("/kasus-positif-rendah")
  .get(covidController.getKasusMeninggalRendah);

router.route("/kasus-sembuh-tinggi").get(covidController.getKasusSembuhTinggi);
router.route("/kasus-sembuh-rendah").get(covidController.getKasusSembuhRendah);

router
  .route("/")
  .get(covidController.getAllCovid)
  .post(covidController.createCovid);

router
  .route("/:id")
  .get(covidController.getCovidById)
  .patch(covidController.updateCovid)
  .delete(covidController.deleteCovidbyId);

//router.route("/kecamatan").get(kecamatanController.getAllCovid).post(kecamataController.getKecamatanById).patchG ;

module.exports = router;
