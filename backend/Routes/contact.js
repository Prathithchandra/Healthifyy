// appform.js
import express from 'express';
const router = express.Router();
import Conatctmodel from '../ContactSchema.js';

// Handle POST request to /api/v1/appform
router.post('/', async (req, res) => {
  
    console.log("inside contact us");
    console.log("req body is"+JSON.stringify(req.body));
  try {
    // Create a new instance of conatcmodel using data from the request body
    const newData = new Conatctmodel({
      
      email: req.body.email,
      subject: req.body.subject,
       message: req.body.message,
    });

    // Save the new data to the database
    await newData.save();

    res.status(201).json({ message: 'Your Feedback Submitted successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Failed to save data' });
  }
});

export default router;
