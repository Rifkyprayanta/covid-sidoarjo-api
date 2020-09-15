# COVID SIDOARJO API

![Image of ExpressJs](https://miro.medium.com/max/600/1*YekyuOZGMw-kGOEqU4YPZg.jpeg)

COVID SIDOARJO API is a web API build with NodeJS, using framwork Express.js and database with MongoDB. This inspiration was made by me and this idea come from the [government site](https://covid19.sidoarjokab.go.id/Welcome/grafik). From this site i have an idea to build with the API using javascript technologies. I hope this source can make others developer to create their own API and i hope you can help me to develop this API. Feel free to contact me at [email](mailto:prayanta.rifky@gmail.com)

## Tools

- [VSCode](https://code.visualstudio.com/)

## Installation

Use the node package manager [express](https://expressjs.com/en/starter/installing.html) to install express. Express is node js framework that can build powerful API

```bash
npm install express
```

Use the node package manager [mongoose](https://mongoosejs.com/) to install mongoose. Mongoose is a mongodb library use for object modelling tool design and work with asynchronous env

```bash
npm install mongoose
```

Use the node package manager [nodemon](https://www.npmjs.com/package/nodemon) to install Nodemon. Nodemon is a library that helps developer to run server.js or app.js without terminate server. this tool will automatically restarting when there is file are changed.

```bash
npm install nodemon
```

## Usage

This is how to usage an API url

```api
/api/ -> Return all covid case with the id, date, confirm_case, death, recovered, ODP, and PDP
/api/kasus-positif-tinggi/ -> Return data with limit 1 and case positif is high
/api/kasus-positif-rendah/ -> Return data with limit 1 and case positif is low
/api/kasus-meninggal-tinggi/ -> Return data with limit 1 and case death is high
/api/kasus-meninggal-rendah/ -> Return data with limit 1 and case death is low
/api/kasus-sembuh-tinggi/ -> Return data with limit 1 and case recovered is high
/api/kasus-sembuh-rendah/ -> Return data with limit 1 and case recovered is low

/kecamatan/ -> Return all kecamatan with the id, date, name_sub_district, confirm_case, death, recovered, ODP, and PDP
/kecamatan/top-5-kecamatan-tinggi-positif -> Return data with limit 5 and case positif is high
/kecamatan/top-5-kecamatan-rendah-positif -> Return data with limit 5 and case positif is low
/kecamatan/top-5-kecamatan-tinggi-meninggal -> Return data with limit 5 and case death is high
/kecamatan/top-5-kecamatan-rendah-meninggal -> Return data with limit 5 and case death is low
```

## Develop

- Rifky Prayanta
