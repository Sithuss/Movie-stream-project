package com.streaming.team3.domain.service;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.streaming.team3.domain.dto.BuyPackageDto;
import com.streaming.team3.domain.dto.GiveReviewDto;
import com.streaming.team3.domain.dto.VO.MovieListVo;
import com.streaming.team3.domain.dto.VO.MovieVO;
import com.streaming.team3.domain.dto.VO.ReadReviewVO;
import com.streaming.team3.domain.dto.VO.WatchMovieVO;
import com.streaming.team3.domain.dto.form.MovieForm;
import com.streaming.team3.domain.entity.Genres;
import com.streaming.team3.domain.entity.Movie;
import com.streaming.team3.domain.entity.MovieLink;
import com.streaming.team3.domain.entity.People;
import com.streaming.team3.domain.repo.AccountRepo;
import com.streaming.team3.domain.repo.GenresRepo;
import com.streaming.team3.domain.repo.MovieLinkRepo;
import com.streaming.team3.domain.repo.MovieRepo;
import com.streaming.team3.domain.repo.MovieReviewRepo;
import com.streaming.team3.domain.repo.PeopleRepo;
import com.streaming.team3.domain.repo.UploaderRepo;

import jakarta.transaction.Transactional;

@Service
public class MovieService {

	public MovieService() {
	}

	@Autowired
	private MovieRepo movieRepo;

	@Autowired
	private GenresRepo genreRepo;

	@Autowired
	private MovieReviewRepo reviewRepo;

	@Autowired
	private AccountRepo accRepo;

	@Autowired
	private UploaderRepo uploaderRepo;

	@Autowired
	private MovieLinkRepo movieLinkRepo;

	@Autowired
	private PeopleRepo peopleRepo;

	public Optional<List<MovieVO>> findAllMovies() {
		return null;
	}

	public MovieVO movieDetail(int id) {
		return movieRepo.findById(id).map(MovieVO::form).get();
	}

	// private Genres getGenres(String name){
	// return genreRepo.findGenresByName(name).get();
	//
	// }
	private Specification<List<Movie>> findWithGenre(
			Optional<Integer> genre) {
		if (genre.filter(a -> a > 0).isPresent()) {
			return (root, query, cb) -> cb.equal(root.get("genres").get("id"),
					genre.get());
		}
		return Specification.where(null);
	}

	private Specification<List<Movie>> findWithKeywod(Optional<String> data){
		if(data.filter(StringUtils::hasLength).isPresent()){
			return (root, query, cb) -> cb.or(
					cb.like(cb.lower(root.get("title")), data.get().toLowerCase().concat("%")),
					cb.like(cb.lower(root.get("genres").get("name")), data.get().toLowerCase().concat("%")));
					}
		return Specification.where(null);
	}
	
	private Specification<List<Movie>> findWithCast(Optional<String> data){
		if(data.filter(StringUtils::hasLength).isPresent()){
			return (root, query, cb) -> cb.like(cb.lower(root.get("casts").get("name")),
					data.get().toLowerCase().concat("%"));
			}
		return Specification.where(null);
		}
	
	private Specification<List<Movie>> findWithDirector(Optional<String> data){
		if(data.filter(StringUtils::hasLength).isPresent()){
			return (root, query, cb) -> cb.like(cb.lower(root.get("director").get("name")),
					data.get().toLowerCase().concat("%"));
			}
		return Specification.where(null);
		}
	
	private Specification<List<Movie>> findWithScriptWriter(Optional<String> data){
		if(data.filter(StringUtils::hasLength).isPresent()){
			return (root, query, cb) -> cb.like(cb.lower(root.get("scriptWriter").get("name")),
					data.get().toLowerCase().concat("%"));
			}
		return Specification.where(null);
		}
	
	private Specification<List<Movie>> findWithMovie(Optional<String> data){
		if(data.filter(StringUtils::hasLength).isPresent()){
			return (root, query, cb) -> cb.like(cb.lower(root.get("title")),
					data.get().toLowerCase().concat("%"));
			}
		return Specification.where(null);
		}

	public Optional<MovieListVo> search(Optional<Integer> genres,Optional<String> keyword,
			Optional<String> casts,Optional<String> director,Optional<String> scriptWriter) {
		Specification specification = findWithGenre(genres)
									.and(findWithKeywod(keyword))
									.and(findWithCast(casts))
									.and(findWithDirector(director))
									.and(findWithScriptWriter(scriptWriter));		
		List<Movie> m= movieRepo.findAll(specification);
		
		return null;	}

//	@PreAuthorize("hasAuthority('User')")
	public Optional<List<ReadReviewVO>> readReview(int mvId) {
		// TODO implement here
		return null;
	}

//	@PreAuthorize("hasAuthority('User')")
	public String giveReview(GiveReviewDto review) {
		// TODO implement here
		return "";
	}

//	@PreAuthorize("hasAuthority('User')")
	public WatchMovieVO watchMovie(int id) {
		return WatchMovieVO.form(movieRepo.findById(id).get());
	}

//	@PreAuthorize("hasAuthority('User')")
	public String buyPackage(BuyPackageDto buy) {
		int packageCount = buy.getPackageCount();
		int totalCost = packageCount * 10;
		
		return "Package bought successfully! Packages: " + packageCount + ", Total Cost: $" + totalCost;
	}

//	@PreAuthorize("hasAuthority('User')")
	public String bookMark(int uId, int mId) {
		// TODO implement here
		return "";
	}

//	@PreAuthorize("hasAuthority('User')")
	public Optional<List<MovieVO>> watchedHistory(int uid) {
		// TODO implement here
		return null;
	}

	@Transactional
//	@PreAuthorize("hasAuthority('Uploader')")
	public MovieListVo uploadMovie(MovieForm movie) {

		// var uploader = uploaderRepo.findUploaderByEmail(
		// SecurityContextHolder.getContext().getAuthentication().getName()).orElseThrow(EntityNotFoundException::new);
		var upMovie = new Movie();
		upMovie.setTitle(movie.getTitle());
		upMovie.setDescription(movie.getDescription());
		upMovie.setReleaseDate(movie.getReleaseDate());
		upMovie.setTrailerLink(movie.getTrailerLink());
		upMovie.setUploadedDate(LocalDate.now());
		upMovie.setPremiumVC(0);
		upMovie.setMovieLength(movie.getMovieLength());

		/*
		 * try { upMovie.setPoster(movie.getPoster().getBytes()); }catch
		 * (Exception e){ }
		 */

		byte[] byteArray = {72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108,
				100};

		upMovie.setPoster(byteArray);

		// var genres = movie.getGenres().split(", ");
		// Arrays.stream(genres).map(genreName ->
		// genreRepo.findGenresByName(genreName))
		// .filter(Optional::isPresent)
		// .map(Optional::get)
		// .forEach(g -> {
		// upMovie.getGenres().add(g);
		// g.getMovies().add(upMovie);
		// });

		var genres = movie.getGenres().split(",");
		Arrays.stream(genres).map(g -> genreRepo.findGenresByName(g))
				.forEach(upMovie::addGenre);

		var casts = movie.getCasts().split(",");
		Arrays.stream(casts).map(People::new).forEach(c -> {

			c.addCastsMovie(upMovie);
			peopleRepo.save(c);
		});
		var director = movie.getDirector().split(",");
		Arrays.stream(director).map(People::new).forEach(c -> {

			c.addDirectorMovie(upMovie);
			peopleRepo.save(c);
		});
		var scriptWriter = movie.getScriptWriter().split(",");
		Arrays.stream(scriptWriter).map(People::new).forEach(c -> {

			c.addScriptWriterMovie(upMovie);
			peopleRepo.save(c);
		});

		var ml = new MovieLink(movie.getMovieLink());
		movieLinkRepo.save(ml);
		upMovie.setLink(ml);

		movieRepo.save(upMovie);

		return MovieListVo.form(upMovie);
	}

	@Transactional
//	@PreAuthorize("hasAuthority('Uploader')")
	public MovieListVo editMovie(int id, MovieForm movie) {
		Movie m = movieRepo.findById(id).get();
		m.setTitle(movie.getTitle());
		m.setDescription(movie.getDescription());
		m.setReleaseDate(movie.getReleaseDate());
		m.setTrailerLink(movie.getTrailerLink());
		m.setUploadedDate(LocalDate.now());
		m.setPremiumVC(m.getPremiumVC());
		m.setMovieLength(movie.getMovieLength());
		byte[] byteArray = {72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108,
				100};
		m.setPoster(byteArray);

		Arrays.stream(m.getGenres().toArray()).forEach(ge -> {
			((Genres) ge).getMovies().remove(m);
			m.getGenres().remove(ge);
		});;

		Arrays.stream(m.getCasts().toArray()).forEach(p -> {
			((People) p).removeCastsMovie(m);
		});

		Arrays.stream(m.getDirector().toArray()).forEach(p -> {
			((People) p).removeDirectorMovie(m);
		});

		Arrays.stream(m.getScriptWriter().toArray()).forEach(p -> {
			((People) p).removeScriptWriterMovie(m);
		});

		var genres = movie.getGenres().split(",");
		Arrays.stream(genres).map(g -> genreRepo.findGenresByName(g))
				.forEach(ge -> {
					m.addGenre(ge);
				});

		var casts = movie.getCasts().split(",");
		Arrays.stream(casts).map(People::new).forEach(c -> {
			c.addCastsMovie(m);
			peopleRepo.save(c);
		});

		var director = movie.getDirector().split(",");
		Arrays.stream(director).map(People::new).forEach(d -> {
			d.addDirectorMovie(m);
			peopleRepo.save(d);
		});

		var scriptWriter = movie.getScriptWriter().split(",");
		Arrays.stream(scriptWriter).map(People::new).forEach(s -> {
			s.addScriptWriterMovie(m);
			peopleRepo.save(s);
		});

		var ml = movieLinkRepo.findById(m.getLink().getId()).get();
		ml.setLink(movie.getMovieLink());
		m.setLink(ml);
		return MovieListVo.form(m);
	}

	@Transactional
//	@PreAuthorize("hasAuthority('Uploader')")
	public String deleteMovie(int movieId) {
		Movie m = movieRepo.findById(movieId).get();
		Arrays.stream(m.getGenres().toArray()).forEach(ge -> {
			((Genres) ge).getMovies().remove(m);
			m.getGenres().remove(ge);
		});;

		Arrays.stream(m.getCasts().toArray()).forEach(p -> {
			((People) p).removeCastsMovie(m);
		});

		Arrays.stream(m.getDirector().toArray()).forEach(p -> {
			((People) p).removeDirectorMovie(m);
		});

		Arrays.stream(m.getScriptWriter().toArray()).forEach(p -> {
			((People) p).removeScriptWriterMovie(m);
		});
		movieRepo.delete(m);
		return "Succuessfully delete";
	}

}