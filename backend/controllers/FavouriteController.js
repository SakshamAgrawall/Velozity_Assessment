import connection from '../config/db.js'

export const create = (req, res) => {
    const { Title, Year, Type, Poster } = req.body;
    const sql = "INSERT INTO favorites (Title, Year, Type, Poster) VALUES (?, ?, ?, ?)";
    connection.query(sql, [Title, Year, Type, Poster], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Error saving favorite" });
        } else {
            res.json({ message: "Favorite saved successfully" });
        }
    });
}

export const get = (req, res) => {
    const sql = "SELECT * FROM favorites";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Error fetching favorites" });
        } else {
            res.json(results);
        }
    });
}