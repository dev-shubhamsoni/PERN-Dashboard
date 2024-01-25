import db from '../db/db.js';

export const getAdmins = async (req, res) => {
    try {
        const admins = await db
        .select('*')
        .from('UserSchema.datauser')
        .where('role', '=', 'admin');

        res.json(admins);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


};

export const getPerformance = async (req, res) => {
    try {
      const { id } = req.params;
  
      const performance = await db
        .select('*')
        .from('UserSchema.datauser as a')
        .join('TransactionSchema.datatransaction as c', 'a.id', 'c.user_id')
        .join('AffiliateStatSchema.dataaffiliatestat as b', 'a.id', 'b.userid')
        .where('a.id', id);
  
      res.json(performance[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };