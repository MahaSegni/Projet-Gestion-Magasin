package tn.esprit.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entities.CodePromo;
import tn.esprit.spring.entities.LikeDislike;
import tn.esprit.spring.repositories.LikeDislikeRepository;
@Service
public class LikeDislikeServiceImp implements LikeDislikeService{
	@Autowired
	LikeDislikeRepository repo;
	@Override
	public List<LikeDislike> retrieveAllLikeDislike() {
		// TODO Auto-generated method stub
		return (List<LikeDislike>) repo.findAll();
	}

	@Override
	public LikeDislike addLikeDislike(LikeDislike l) {
		repo.save(l);
		return l;
	}
	@Override
	public List<LikeDislike> deleteLikeDislike(Long id) {
		repo.deleteById(id);
		return (List<LikeDislike>) repo.findAll();
	}

}
