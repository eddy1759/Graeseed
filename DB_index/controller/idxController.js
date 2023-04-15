// Import the database configuration module
const dbConfig = require('../Config/dbConfig')

// Function to create an index on a PostgreSQL database
const createPostgreSQLIndex = async (req, res) => {
    // Extract the required parameters from the request body
    const {tablename, columnName, idxName} = req.body;
     // Get a connection to the PostgreSQL database from the pool
    const client = dbConfig.pool
    try {
        // Connect to the database
        await client.connect()
        // Create the SQL statement to create the index
        const sql = `CREATE INDEX ${idxName} on ${tablename} (${columnName})`;
        // Execute the SQL statement
        const result = await client.query(sql);
         // Send a response back to the client with a success message and the result of the operation
        res.status(200).json({
            message: 'Index created successfully',
            result
        })
        // Release the connection back to the pool
        client.release();
    } catch (error) {
         // If there is an error, log it and send an error response back to the client
        console.error(err);
        res.status(500).json({ message: 'Error creating index' });
    } finally {
        // End the connection to the database
        await pool.end();
      }

}

// Function to create an index on a MongoDB database
const createMongoDBIndex = async (req, res) => {
    // Extract the required parameters from the request body
    const { collectionName, fieldName, idxName } = req.body;
    // Get a connection to the MongoDB database
    const client = dbConfig.client

    try {
        // Connect to the database
      await client.connect();
      // Get a reference to the database
      const db = client.db(dbConfig.dbname);
       // Create the index using the fieldName and idxName parameters
      const result = await db.collection(collectionName).createIndex({ [fieldName]: 1 }, { name: idxName });
      // Send a response back to the client with a success message and the result of the operation
      res.status(200).json({ message: 'Index created successfully', result });

    } catch (err) {
        // If there is an error, log it and send an error response back to the client
        console.error(err);
      console.error(err);
      res.status(500).json({ message: 'Error creating index' });

    } finally {
        // Close the connection to the database
      await client.close();
    }
  };
  

module.exports = { createPostgreSQLIndex, createMongoDBIndex };