import { Options } from 'swagger-jsdoc';

const options: Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'File Organizer API',
			version: '1.0.0',
			description: 'A simple Node.js application to manage directories',
		},
		servers: [
			{
				url: 'http://localhost:3001',
			},
		],
	},
	apis: ['./src/index.ts'], // Path to the API docs
};

export default options;