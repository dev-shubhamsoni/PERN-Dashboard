import db from '../db/db.js';


export const getSales = async (req, res) => {
    try {
        const overallStats = await db
            .select('*')
            .from('OverallStatSchema.dataoverallstat');
        res.json(overallStats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


};