# Les projets
   miniprojet4 : la partie Angular Front End.<br>
   dmini-priojet : la pratie Spring.
 

# miniprojet 4
  dans le projet miniprojet4 (projet Angular) vous trouvez tous les composants dans miniprojet4/src/app.<br>
   
# Les composants :
  Inscription : pour l'inscription de l'utilisateur (verification mail demandé).  <br>
  Connection : pour la connexion de l'utilisateur.<br>
  Profile : Interface pour l'utilisateur connecté ou il peut consulter son profil.<br>
  user-form : Formulaire de modification pour l'utilisateur s'il veut modifier ses données.<br>
  update-psw-form : Formulaire de modification de mot de passe pour l'utilisateur s'il veut modifier son mot de passe.<br>
  Main-User : Interface pour le Modferateur ou il peut gérer les utilisateurs.<br>

# Remarques :

  Il faut télécharger et lancer les 2 parties miniprojet4 (Angular) et mini-projet (Spring) pour voir un scénario complet,
  si vous n'exécutez que la partie Angular sans la partie Spring, la partie Angular ne fonctionnera pas correctement car le passage entre les composants nécessite les données de l'utilisateur connecté qui seront ajoutées dans le service "session" après la réception de la réponse de la fonction de connexion qui se trouve dans la partie Spring (Back End).<br>

  Après la connexion vous trouverez sur la partie droite de la barre de navigation une flèche , lorsque vous cliquez dessus vous pouvez consulter votre profil et/ou vous déconnecter.<br>

  Veuillez vérifier le fichier application.properties dans "src / main / resources" dans la partie Spring et ajoutez (nom d'utilisateur) et (mot de passe) de système de gestion de bases de données et créer la base bien sûr. <br>

  Si vous souhaitez ajouter un modérateur (administrateur) vous trouverez dans la partie Spring dans le dossier "src/test/java" il existe une classe de test (testClasse) veuillez l'exécuter en tant que JunitTest et un modérateur avec l'adresse e-mail med@mod et le mot de passe 1234 sera ajouté.<br>

 Veuillez changer le "root" (emplacement des images) dans le fichier "src/main/java/ tn.esprit.spring.services.UserServiceImpl).<br>
