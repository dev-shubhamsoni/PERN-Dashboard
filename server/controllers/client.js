import db from '../db/db.js';
import getCountryIso3 from 'country-iso-2-to-3'

export const getProducts = async (req, res) => {
    try {
        const products = await db
            .select('*')
            .from('ProductSchema.dataproduct');
        res.json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


};

export const getProductsStat = async (req, res) => {
    try {
        const combinedData = await db
      .select('*')
      .from('ProductSchema.dataproduct as p')
      .join('ProductStatSchema.dataproductstat as ps', 'p.id', '=', 'ps.productid');

        res.json(combinedData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


};

export const getCustomers = async (req, res) => {
    try {
        const userData = await db
        .select('*')
        .from('UserSchema.datauser')
        .where('role', '=', 'user');

        res.json(userData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


};

export const getTransactions = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 10;
    
        const offset = (page - 1) * pageSize;
    
        const data = await db('TransactionSchema.datatransaction')
          .offset(offset)
          .limit(pageSize);
    
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }


};

export const getGeography = async (req, res) => {
    try {
        const country = await db
        .select('country')
        .from('UserSchema.datauser')
        
        const mappedLocation = country.reduce((acc, {country})=>{
            const countryISO3 = getCountryIso3(country)
            if (!acc[countryISO3]){
                acc[countryISO3] = 0;
            }
            acc[countryISO3]++;
            return acc;
        },{})

        const formatedLocations = Object.entries(mappedLocation).map(([country, count])=>{
            return {id:country, value:count}
        })

        res.json(formatedLocations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


};

