import express from 'express';

const router = express.Router();

/**
 * /
 * root router
 */
router.get('/', function(req, res) {
  res.status(200).send('Root Route');
});

export default router;
