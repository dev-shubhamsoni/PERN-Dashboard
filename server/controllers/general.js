import db from '../db/db.js';


export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await db
      .select('*')
      .from('UserSchema.datauser')
      .where('id', '=', id);

    res.json(userData[0]);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const getDashboard = async (req, res) => {
  try {
    const userTransaction = await db
      .select('*')
      .from('TransactionSchema.datatransaction')
      .limit(20);

    const userOverallstat = await db
      .select('*')
      .from('OverallStatSchema.dataoverallstat');

    // Combine both sets of data into a single object
    const responseData = {
      userTransaction,
      userOverallstat,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


