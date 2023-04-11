# API Movie List

Find favorite movies and some information about it in this application

## Built With
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/redis-CC0000.svg?&style=for-the-badge&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />

## Documentation

### 1. GET /movies

Returns the list of most current movies. Accept a numeric query string page to search different results

Example: `/movies?page=2`


Response: 
<pre style="height: 100px;">
{
  "dates": {
    "maximum": ,
    "minimum": 
  },
  "page": ,
  "results": [
    {
      "adult": ,
      "backdrop_path":,
      "genre_ids": [],
      "id": ,
      "original_language": ,
      "original_title": ,
      "overview": ,
      "popularity": 10058.912,
      "poster_path": ,
      "release_date": ,
      "title": ,
      "video": false,
      "vote_average": ,
      "vote_count": 
    },
  ]
 } 
</pre>

### 2. GET /movies/:name/

Returns the list of movies with a title based on what you passed as a URL parameter. Accept a numeric query string page to search different results.

Example: `/movies/matrix?page=1`

Response:
```code
{
  "page": ,
  "results": [
    {
      "adult": ,
      "backdrop_path": ,
      "genre_ids": [],
      "id": ,
      "original_language": ,
      "original_title": ,
      "overview": ,
      "popularity": 13.79,
      "poster_path": ,
      "release_date": ,
      "title": "Hen" ,
      "video": ,
      "vote_average": ,
      "vote_count": 
    },
  ]
}    
```

### 3. GET /movies-details/:id

Takes the id of a movie and returns its details

Example: `/movies-details/677179`

Response:
```code
{
  "adult": ,
  "backdrop_path": ,
  "belongs_to_collection": {
    "id": ,
    "name": ,
    "poster_path": ,
    "backdrop_path": 
  },
  "budget": ,
  "genres": [],
  "homepage": ",
  "id": ,
  "imdb_id": ,
  "original_language": ,
  "original_title": ,
  "overview": ,
  "popularity": ,
  "poster_path": ,
  "production_companies": [
    {
      "id": ,
      "logo_path": ,
      "name": ,
      "origin_country": 
  ],
  "production_countries": [
    {
      "iso_3166_1": ,
      "name":
    }
  ],
  "release_date": 
  "revenue": ,
  "runtime": ,
  "spoken_languages": [
    {
      "english_name": ,
      "iso_639_1": ,
      "name": 
    }
  ],
  "status": ,
  "tagline": ,
  "title": ,
  "video": ,
  "vote_average": ,
  "vote_count": 
}
```

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


