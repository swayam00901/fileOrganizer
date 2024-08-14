import express from 'express';
import cors from 'cors';
import FileSystem from './FileSystem';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swaggerConfig';

const app = express();
const port = 3001;
const fs = new FileSystem();

const specs = swaggerJsdoc(swaggerOptions);

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Create a directory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               path:
 *                 type: string
 *                 example: path/to/directory
 *     responses:
 *       200:
 *         description: Directory created
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: CREATE path/to/directory
 */
app.post('/create', (req, res) => {
  const { path } = req.body;
  res.send(fs.create(path));
});

/**
 * @swagger
 * /move:
 *   post:
 *     summary: Move a directory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               src:
 *                 type: string
 *                 example: path/to/source
 *               dest:
 *                 type: string
 *                 example: path/to/destination
 *     responses:
 *       200:
 *         description: Directory moved
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: MOVE path/to/source path/to/destination
 */
app.post('/move', (req, res) => {
  const { src, dest } = req.body;
  res.send(fs.move(src, dest));
});

/**
 * @swagger
 * /delete:
 *   post:
 *     summary: Delete a directory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               path:
 *                 type: string
 *                 example: path/to/directory
 *     responses:
 *       200:
 *         description: Directory deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: DELETE path/to/directory
 */
app.post('/delete', (req, res) => {
  const { path } = req.body;
  res.send(fs.delete(path));
});

/**
 * @swagger
 * /list:
 *   get:
 *     summary: List directories
 *     responses:
 *       200:
 *         description: List of directories
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: LIST\nroot\n  directory1\n  directory2\n
 */
app.get('/list', (req, res) => {
  res.send(fs.list());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});