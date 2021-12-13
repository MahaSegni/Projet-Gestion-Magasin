package tn.esprit.spring.services;

import java.util.List;

import tn.esprit.spring.entities.LikeDislike;

public interface LikeDislikeService {
	public List<LikeDislike> retrieveAllLikeDislike();
	public LikeDislike addLikeDislike(LikeDislike l);
	List<LikeDislike> deleteLikeDislike(Long id);
}
