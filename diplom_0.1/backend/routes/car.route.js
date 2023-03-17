let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Car Model
let carSchema = require("../models/Car");
let userSchema = require("../models/User")
  
// CREATE car
router.post("/create-car", (req, res, next) => {
    carSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
//Create User 
router.post("/sign-up", (req, res, next) => {
  userSchema.create(req.body, (error, data) => {
  if (error) {
    return next(error);
  } else {
    console.log(data);
    res.json(data);
  }
});
});

//LogIn
router.route("/log-in")
  .get((req, res, next) => {
    const { email } = req.query;
    userSchema.findOne(
      { email },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      }
    );
  })
  .put((req, res, next) => {
    const { email } = req.query;
    userSchema.findOneAndUpdate(
      { email },
      { isAuthenticated: true },
      { new: true },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
          
        }
      }
    );
  });
//Log out
router.route('/log-out')
  .get((req, res, next) => {
    const { email } = req.query;
    userSchema.findOne({ email }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  .put(async (req, res, next) => {
    const { email } = req.query;
    try {
      const user = await userSchema.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (user.isAuthenticated) {
        user.isAuthenticated = false;
        await user.save();
        res.json({ message: 'Logged out successfully' });
      } else {
        res.status(400).json({ message: 'User is already logged out' });
      }
    } catch (error) {
      return next(error);
    }
  });



// Read Users
router.get("/users", (req, res) => {
  userSchema.find((error, data) => {
  if (error) {
    return next(error);
  } else {
    res.json(data);
  }
});
});
  
// READ Cars
router.get("/", (req, res) => {
    carSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// READ ONE CAR
router
  .route("/car-info/:id")
  .get((req, res) => {
    carSchema.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })



  
// UPDATE car
router
  .route("/update-car/:id")
  // Get Single car
  .get((req, res) => {
    carSchema.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  
  // Update car Data
  .put((req, res, next) => {
    carSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("car updated successfully !");
        }
      }
    );
  });
  
// Delete car
router.delete("/delete-car/:id", 
(req, res, next) => {
    carSchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
  
module.exports = router;