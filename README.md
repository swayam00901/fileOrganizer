# File Organizer

File Organizer is a simple Node.js application that allows you to create, move, delete, and list directories using a RESTful API.

## Project Structure
fileorganizer/ ├── package.json ├── src/ │ ├── Directory.ts │ ├── FileSystem.ts │ └── index.ts ├── tsconfig.json └── README.md

## Installation

1. Clone the repository:
	```sh
	git clone https://github.com/swayam00901/fileorganizer.git
	cd fileorganizer
	```

2. Install dependencies:
	```sh
	npm install
	```

## Usage

1. Start the server (it automatic restarts):
	```sh
	npm start
	```

2. The server will run at [`http://localhost:3001`].

## API Endpoints

### Create Directory

- **URL:** `/create`
- **Method:** `POST`
- **Body:**
	```json
	{
	  "path": "path/to/directory"
	}
	```
- **Response:**
	```json
	"CREATE path/to/directory"
	```

### Move Directory

- **URL:** `/move`
- **Method:** `POST`
- **Body:**
	```json
	{
	  "src": "path/to/source",
	  "dest": "path/to/destination"
	}
	```
- **Response:**
	```json
	"MOVE path/to/source path/to/destination"
	```

### Delete Directory

- **URL:** `/delete`
- **Method:** `POST`
- **Body:**
	```json
	{
	  "path": "path/to/directory"
	}
	```
- **Response:**
	```json
	"DELETE path/to/directory"
	```

### List Directories

- **URL:** `/list`
- **Method:** `GET`
- **Response:**
	```json
	"LIST\nroot\n  directory1\n  directory2\n"
	```
## API Documentation

The API documentation is available at [`http://localhost:3001/api-docs`]