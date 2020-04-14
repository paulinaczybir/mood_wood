var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET LOGS joined with MOOD  */
router.get('/joined/:Parent_Id', function(req, res, next) {
  db(`SELECT log.Id, log.Text, mood.emotion FROM log INNER JOIN mood on log.MoodId=mood.Id WHERE Parent_Id=${req.params.Parent_Id};`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

//INSERT a new log with parent id
router.post("/log", function(req, res, next) {
  const regex = /'/gi;
  db(
    `INSERT INTO log (MoodId, Text, Parent_Id) VALUES ('${req.body.MoodId}', '${req.body.Text.replace(regex, "''")}', ${req.body.Parent_Id} )`
  )
    .then(results => {
      res.send({ message: "ok" });
    })
    .catch(err => res.status(500).send(err));
});


// DELETE a log from the DB -- 
router.delete("/joined/:id", function(req, res, next) {
  db(`DELETE FROM log WHERE id=${req.params.id};`)
    .then(results => {
      const payload = { message: "ok" };
      res.send(payload);
    })
    .catch(err => res.status(500).send(err));
});

// GET PARENTS -- ok
router.get("/parent", function(req, res, next) {
  db("SELECT * FROM parent;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT NEW PARENT DATA -- ok
router.post("/parent", function(req, res, next) {
  db(`INSERT INTO parent (firstname, lastname, email, username, password) 
      VALUES ('${req.body.firstname}','${req.body.lastname}', '${req.body.email}', '${req.body.username}', '${req.body.password}')`
   )
  .then(results => {
    res.send({ message: "ok" });
  })
  .catch(err => {
    res.status(500).send(err);
  });
});

// DELETE PARENT from the DB -- 
router.delete("/parent/:username", function(req, res, next) {
  db(`DELETE FROM parent WHERE username='${req.params.username}';`)
    .then(results => {
      const payload = { message: "ok" };
      res.send(payload);
    })
    .catch(err => res.status(500).send(err));
});

// GET parents BY username and password
router.get("/parent/:username/:password", function(req, res, next) {
  db(`SELECT * FROM parent WHERE username='${req.params.username}' AND password='${req.params.password}';`)
    .then(results => {
      console.log(results);
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


// Routes that may be useful for future features extention of the project, but are not used currently

/*
// GET LOGS BY ID
router.get("/log/:id", function(req, res, next) {
  db(`SELECT * FROM log WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET LOGS  
router.get('/log', function(req, res, next) {
  db("SELECT * FROM log;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  
});

// GET users KIDS listing. -- ok 
router.get('/kid', function(req, res, next) {
  db("SELECT * FROM kid;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  
});

// GET one KID -- ok
router.get("/kid/:id", function(req, res, next) {
  db(`SELECT * FROM kid WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET parents BY ID
router.get("/parent/:id", function(req, res, next) {
  db(`SELECT * FROM parent WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
}); 


// GET Logs -- ok
router.get("/log", function(req, res, next) {
  db("SELECT * FROM log;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one Log -- ok
router.get("/log/:id", function(req, res, next) {
  db(`SELECT * FROM log WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new kid ----- ok
router.post("/kid", function(req, res, next) {
  db(
    `INSERT INTO kid (firstname, parent_Id) VALUES ('${req.body.firstname}', '${req.body.parent_id}')`
  )
    .then(results => {
      res.send({ message: "ok" });
    })
    .catch(err => res.status(500).send(err));
});


// DELETE a kid from the DB -- 
router.delete("/kid/:id", function(req, res, next) {
  db(`DELETE FROM kid WHERE id=${req.params.id};`)
    .then(results => {
      const payload = { message: "ok" };
      res.send(payload);
    })
    .catch(err => res.status(500).send(err));
});
*/




module.exports = router;

