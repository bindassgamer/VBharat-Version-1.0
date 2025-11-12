import Credit from '../models/creditM.js';
export const getCredits = async (req, res) => {
  try {
    const credits = await Credit.find({ userId: req.user.id });
    res.status(200).json({ success: true, credits });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching credits', error });
  }
};