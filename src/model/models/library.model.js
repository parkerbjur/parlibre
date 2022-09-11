const { Model, DataTypes, Op } = require('sequelize');

module.exports = (sequelize) => {
    class Library extends Model {
        static async createLibrary(library) {
            const newLibrary = await Library.create({
                name: library.name,
                address: library.address || "",
                latitude: library.latitude || "",
                longitude: library.longitude || "",
            }) 
            console.log(`${newLibrary.Title} created`);
        }
        
        static async getLibrariesByRange(range) {
            const { latMin, latMax, longMin, longMax } = range;
            const libraries = await Library.findAll({
                where: {
                    [Op.and]: [
                        {[Op.between]: [latMin, latMax]},
                        {[Op.between]: [longMin, longMax]},
                    ]
                }
            })
            return libraries;
        }
    }

    Library.init({
        name: {
            type: DataTypes.STRING,   
        },
        libraryReference: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        latitude: {
            type: DataTypes.INTEGER,
        },
        longitude: {
            type: DataTypes.INTEGER,
        },
    }, {sequelize});

    // REMOVE
    Library.sync({ force: true });
}
