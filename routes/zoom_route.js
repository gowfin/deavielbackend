const router = require("express").Router();
const zoom = require("../models/Zoom");


router.post("/uploadzoom", async (req, res) => {
    const existingZoom = await zoom.findOne({ title: req.body.title });
  
  
    if (existingZoom) {
      return res.send(`this Link, ${req.body.title} already uploaded`);
    } else {
      // GET NEW LINK
    
  
          const zoomitem= new zoom ({
        title:req.body.title,
        link: req.body.link,
      });
   console.log(zoom)
         //SAVE VIDEO RECORD
     const  savedZoom=zoomitem.save();
      res.json({ status: "success", message: "Request Successful" });
    }
  });

  module.exports=router