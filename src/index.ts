
import { PrismaClient } from "../generated/prisma/index.js";


const prisma = new PrismaClient();

// async function createMovie() {
//   const newMovie = await prisma.movie.create({
//     data: [
//       {
//         title: "The retro",
//         description: "a movie about a man in a past time",
//         genre: "sci-fi",
//         releaseDate: new Date(2023, 10, 10),
//         rating: 4.5,
//       },
//       {
//         title: "the matrix",
//         description: "Aachi movie he  ",
//         genre: "action",
//         releaseDate: new Date(2045, 1, 4),
//         rating: 4.1,
//       },
//       {
//         title: "godfather",
//         description: "mind blowing movie",
//         genre: "gangster",
//         rating: 4.2,
//         releaseDate: new Date(2023, 2, 4),
//       },
//     ],
//   });
// }

// get all movies 


async function  getAllMovies() {
    const CreateMovies = await prisma.movie.findMany();
    console.log("All movies", CreateMovies);
}
// get movie by id 
async function getMovieById(movieId: number) {
    const MovieById = await prisma.movie.findUnique({
        where : {id: movieId},
    });
    console.log("Movie by Id", MovieById);
}
//update the movie 
async function UpdateMovie(movieId:number, updatedTitle:string, updatedDescription: string) {
    const UpdateMovie = await prisma.movie.update({
        where : {id:movieId},
        data : {
            title : updatedTitle,
            description : updatedDescription,
        }
    });
    console.log("Update movie", UpdateMovie);
    
}

// delete movie 
async function deleteMovie(movieId: number){
    const deleteMovie = await prisma.movie.delete({
        where : {id:movieId},
    })
    console.log("delete movie", deleteMovie)
}




async function Main() {
  // CRUD operation perform

  // creating movie
  await getAllMovies();
}

Main()
  .then(async () => await prisma.$disconnect()) // disconnect the database
  .catch(async (e) => {
    // catch any error
    console.error(e);
    await prisma.$disconnect();
    // exit the process
  });
