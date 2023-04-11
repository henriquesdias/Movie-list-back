# Movie List

Find favorite movies and some information about it in this application

### Built With
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/redis-CC0000.svg?&style=for-the-badge&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />

## How to Run
 Follow the instructions to run the app locally

1. Clone this repository.
2. Install all dependencies
```bash
   npm i
```   
3. Sign up in https://www.themoviedb.org/ and get your API key. It's value will be 'API_KEY' variable in .env file.
4. Create a .env file following the file .env.example.
5. Ensure that the redis database server is running locally
```bash
   redis-server
```   
6. Run script
```bash
  npm run dev
```
7. Access http://localhost:PORT, where PORT it's value of your PORT variable in .env file.
8. To use the application, clone and configure the front-end directory following the read.me instructions from the link https://github.com/henriquesdias/movie-list-front



