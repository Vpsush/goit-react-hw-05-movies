// import React, { Component } from 'react';
// import axios from 'axios';
// import { StyledMovies } from '../Movies.styled';
// import { Link } from 'react-router-dom';

// const API_KEY = 'c22cf15536964c1cf38cb65c76fb41a1';
// axios.defaults.baseURL = 'https://api.themoviedb.org/';

// export default class Movies extends Component {
//   state = {
//     movies: null,
//     reviews: null,
//     moviesId: null,
//     isLoading: false,
//     error: null,
//   };

//   fetchMovies = async () => {
//     try {
//       this.setState({ isLoading: true });
//       const { data } = await axios.get(`&key=${API_KEY}`);
//       this.setState({ movies: data });
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   fetchMoviesDetails = async () => {
//     try {
//       this.setState({
//         isLoading: true,
//       });
//       const { data } = await axios.get(
//         `https://jsonplaceholder.typicode.com/comments?postId=${this.state.moviesId}`
//       );

//       this.setState({
//         details: data,
//       });
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   };

//   onSelectMoviesId = moviesId => {
//     this.setState({
//       selectedMoviesId: moviesId,
//     });
//   };

//   componentDidMount() {
//     this.fetchMovies();
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.selectedMoviesId !== this.state.selectedMoviesId) {
//       this.fetchMoviesDetails();
//     }
//   }

//   render() {
//     return (
//       <StyledMovies>
//         <h1>MoviesPage</h1>
//         {this.state.error !== null && (
//           <p className="error">
//             Oops, some goes wrong... Error message: {this.state.error}
//           </p>
//         )}
//         {/* {this.state.isLoading && <Loader />} */}
//         <div className="listWrapper">
//           <ul className="moviesList">
//             {this.state.posts !== null &&
//               this.state.posts.map(movie => {
//                 return (
//                   <li
//                     key={movie.id}
//                     // onClick={() => this.onSelecPostId(post.id)}
//                     className="movieListItem"
//                   >
//                     <Link to={`/posts/${movie.id}`}>
//                       <h2 className="itemTitle">{movie.title}</h2>
//                       <p className="itemBody">
//                         <b>Body:</b> {movie.body}
//                       </p>
//                     </Link>
//                   </li>
//                 );
//               })}
//           </ul>
//           <ul className="commentsList">
//             {this.state.selectedPostId !== null && (
//               <li className="commentsListItem">
//                 Selected post id: {this.state.selectedPostId}
//               </li>
//             )}
//             {this.state.comments !== null &&
//               this.state.comments.map(comment => {
//                 return (
//                   <li key={comment.id} className="commentsListItem">
//                     <h2 className="commentTitle">Name: {comment.name}</h2>
//                     <h3 className="commentEmail">Email: {comment.email}</h3>
//                     <p className="commentBody">
//                       <b>Body:</b> {comment.body}
//                     </p>
//                   </li>
//                 );
//               })}
//           </ul>
//         </div>
//       </StyledMovies>
//     );
//   }
// }

// import { Link } from 'react-router-dom';
import { StyledMovies } from '../Movies.styled';
// import { useParams, useEffect } from 'react';
import SearchForm from '../components/SearchForm';

export default function Movies() {
  // const { movieId } = useParams();
  // useEffect(() => {
  //   if (!movieId) return;
  // }, [movieId]);

  return (
    <StyledMovies>
      <main>
        <div>
          <SearchForm />
        </div>
        {/* <h3>Additional information</h3>
        <ul>
          <li>
            <Link to=":movieId/cast">Cast</Link>
          </li>
          <li>
            <Link to=":movieId/reviews">Reviews</Link>
          </li>
        </ul> */}
      </main>
    </StyledMovies>
  );
}
