module.exports={
    getChart1: async (req, res) => {
        try {
            const db = req.app.get('db');
            const chart1data = await db.query('SELECT * FROM chart1');
            return res.status(200).send(chart1data);
        } catch(err) {
            throw(err);
        }
    },

    getChart2: async (req, res) => {
        try {
            const db = req.app.get('db');
            const chart2data = await db.query('SELECT * FROM chart2');
            return res.status(200).send(chart2data);
        } catch(err) {
            throw(err);
        }
    },

    getChart3: async (req, res) => {
        try {
            const db = req.app.get('db');
            const chart3data = await db.query('SELECT * FROM chart3');
            return res.status(200).send(chart3data);
        } catch(err) {
            throw(err);
        }
    }
}