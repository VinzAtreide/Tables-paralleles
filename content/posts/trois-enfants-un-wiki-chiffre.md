---
title: "Trois enfants, un wiki chiffré"
date: 2026-08-23
description: "Comment on construit une encyclopédie de campagne où chacun ne lit que ce que son personnage sait, et pourquoi la cryptographie s'est révélée être la partie facile."
serie: ["La Table des Trois"]
slug: trois-enfants-un-wiki-chiffre
---

La cabane s'est effondrée trois fois.

C'était la première scène de la première séance : trois enfants, une bâche bleue, un tas de branches, et trois jets de dés destinés à faire tenir debout un abri de fortune. Les trois ont échoué. Le meneur de jeu, moi, avait par ailleurs oublié de leur demander de baptiser la cabane, alors que le scénario le prévoyait noir sur blanc, à la ligne près.

Deux ratés en dix minutes. Ce sont les deux meilleurs souvenirs de la séance. On ne pleure pas un abri réussi ; on pleure un après-midi de fou rire sous une bâche qui retombe. Et le nom de la cabane, personne ne l'a réclamé, parce que personne ne savait qu'il était prévu.

Ce blog raconte ce projet-là : un père qui fait jouer trois enfants de neuf, douze et quatorze ans à *Mutants & Masterminds 3e*, et qui leur construit, autour de la table, une encyclopédie de campagne où **chacun ne peut lire que ce que son personnage sait**. Sept saisons prévues. Une trentaine de séances déjà cartographiées. Et un site qui contient aujourd'hui près de 4 000 fiches.

Ce premier billet pose le décor et les quatre décisions qui structurent tout le reste.

## Le problème que personne ne résout vraiment

Un wiki de campagne bute toujours sur la même chose. Le meneur sait tout. Les joueurs savent des choses différentes les uns des autres. Et il faudrait que chacun, en ouvrant la même page, y lise une version différente.

Les outils du marché répondent par des permissions : un serveur détient tout, et décide au moment de la requête ce qu'il vous envoie. Ça fonctionne. Mais ça déplace le problème plutôt que de le résoudre, et ça introduit trois coûts que personne n'annonce à l'avance.

D'abord, il faut faire confiance au serveur, et à l'administrateur, et à la prochaine mise à jour, et à la personne qui a coché la mauvaise case un dimanche soir. Ensuite, il faut administrer ce serveur : comptes, rôles, sauvegardes, factures. Enfin, et c'est le plus vicieux, rien ne se voit quand ça fuite. Une permission mal réglée n'affiche pas d'erreur. Elle affiche une page.

Or ici, l'enjeu n'est pas la confidentialité au sens professionnel. C'est plus fragile que ça : une gamine de neuf ans ne doit pas lire, sur sa propre fiche de personnage, la note du meneur qui dit « elle ne doit pas savoir ce qu'elles étaient ». Une fuite ne coûte pas de l'argent, elle coûte une révélation qu'on préparait depuis six mois.

## Chiffrer, plutôt qu'autoriser

Le parti pris tient en une phrase. **Le site publié est un tas d'octets illisibles, et la phrase de passe du lecteur est la seule chose qui en ouvre une partie.**

Concrètement : chaque rubrique de chaque fiche est chiffrée séparément, en AES-GCM. Chaque rubrique est rangée dans un « coffre » qui correspond à un palier de confidentialité (public, secret, très secret, notes du meneur). La clé d'un coffre ne voyage que dans le trousseau des lecteurs qui y ont droit, et ce trousseau est lui-même chiffré par la phrase de passe de son propriétaire.

Le site est publié sur des pages statiques, en public. N'importe qui peut le télécharger intégralement. Sans phrase de passe, il n'en tire rien.

Les conséquences pratiques sont plus intéressantes que la mécanique.

Il n'y a pas de serveur à qui faire confiance, donc pas de serveur à administrer. Coût d'exploitation nul. Disponibilité égale à celle de l'hébergeur. Pas de compte à créer pour un enfant de neuf ans, pas de mot de passe oublié un samedi soir : un lien avec la clé dedans, collé au dos d'un objet en carton que son personnage porte au poignet, et c'est réglé.

Montrer le site à un ami ne fuite rien. C'est la propriété qu'aucun système de permissions n'offre : la sécurité tient tout entière à la phrase de passe, jamais à la personne qui regarde l'écran.

Et la faute devient visible. Si une rubrique secrète est lisible par un joueur, c'est qu'un fragment est rangé dans le mauvais coffre, et un test automatique sait le dire. Une suite de contrôles vérifie aujourd'hui, à chaque publication, qu'aucun contenu réservé au meneur ne se retrouve dans un coffre joueur. Le jour où ça casse, la publication s'arrête.

C'est là que le titre de ce billet devient ironique : la cryptographie a été la partie facile. Elle tient en quelques centaines de lignes, elle est testée, elle ne bouge plus. Tout le reste (ce qui suit) a coûté dix fois plus.

## Un corpus n'est pas une bibliothèque

Le wiki contient près de 4 000 fiches, un corpus de référence constitué pour ma table au fil des années de pratique de la gamme. C'est une masse : des centaines de personnages, de lieux, d'organisations, deux siècles d'histoire fictive.

On pourrait croire le plus dur fait. C'est l'inverse.

Le test qui l'a montré tient en une question, posée au wiki comme on la poserait à un assistant : « trouve-moi un adversaire de niveau 4 pour un épisode qui se passe à l'école ». Réponse : rien. Zéro résultat.

Pourtant, 933 fiches sur 1 246 portent bien un niveau de puissance. Mais en gras, dans le corps du texte, au fil d'une phrase, jamais dans un champ interrogeable. La bibliothèque était pleine et le bibliothécaire absent.

D'où le chantier qui occupe l'essentiel du temps depuis : reprendre les fiches une par une pour les rendre jouables plutôt que documentées. Trois rubriques ajoutées à chaque personnage : sa cote officielle dans le monde du jeu (un champ, pas une phrase) ; « pour l'incarner », trois adjectifs, la voix, trois répliques toutes prêtes, deux scènes où le sortir ; et ce qu'il apporte à *cette* campagne-ci, pas à l'ouvrage dont il vient.

157 fiches faites. 1 142 restantes. Par vagues thématiques, en commençant par ce que la table croisera vraiment.

La leçon dépasse largement le jeu de rôle : la question utile est « combien de gestes séparent le besoin de la réponse ? », bien avant « ai-je toute l'information ? ». Un corpus complet et inerte, c'est zéro information disponible avec beaucoup de disque occupé.

## Faire progresser des enfants sans feuille de calcul

*Mutants & Masterminds* fait monter les personnages en points de pouvoir. Pour un adulte, c'est une monnaie à dépenser. Pour un enfant de neuf ans, c'est un tableur, c'est-à-dire un repoussoir.

Le système retenu repose sur une coïncidence heureuse du jeu : un niveau de puissance vaut exactement quinze points, et on a décidé qu'un épisode vaut exactement un niveau. Fin de l'arithmétique. Un épisode joué, quinze points, toujours répartis de la même façon.

Sept points vont au Don, le pouvoir. Et c'est le meneur qui décide, à partir de ce que le pouvoir a réellement fait pendant la séance. On ne choisit pas son pouvoir, on le découvre après coup, dans ce qu'on en a fait.

Six points vont aux Cours. Là, c'est le joueur qui décide, et à voix haute : il choisit deux créneaux dans l'emploi du temps de son école, en expliquant pourquoi. « Je m'inscris au journal du lycée parce que je veux savoir ce qui est arrivé à Marcus. » Un choix de progression devient une déclaration d'intention narrative.

Deux points vont au Corps, automatiquement, sans discussion.

Reste le point technique qui rend tout ça jouable, et qui est le vrai coup de force : dans ce système, les plafonds de puissance ne s'appliquent qu'aux attaques et aux défenses. Voir dans le noir, entendre à travers un mur, soulever une voiture, arrêter une machine volante en refermant les mains, rien de tout ça n'est bridé. Dès le premier épisode, leurs pouvoirs sont spectaculaires. Simplement, aucun des trois ne sait encore frapper.

Une mécanique de progression réussie ne se lit pas comme une mécanique. Celle-ci se lit comme un bulletin scolaire.

## La page qui engage le meneur

Dernière décision, et c'est celle que je défendrai le plus longtemps.

La campagne repose sur une idée : des adversaires qui orchestrent les circonstances, mais jamais les choix. Dans plusieurs années, en fin de parcours, ils diront aux héros que tout était prévu depuis le début. Et les héros devront prouver le contraire.

Pour que cette scène ait un sens, il faut des preuves. D'où une page, tenue depuis la toute première séance, qui consigne toutes les décisions que le plan n'exigeait pas. Un garçon qui tend le bras vers son amie tombée alors qu'il est manifestement trop loin. Un autre qui s'arrête pour relever quelqu'un pendant que le feu se referme. Une petite qui avoue ses pouvoirs à une agence fédérale alors que se taire était plus sûr.

Ce n'est pas une mécanique de jeu : rien n'est récompensé, aucun point n'est distribué. C'est une promesse tenue par écrit. En consignant, le meneur s'interdit de transformer rétroactivement un choix en fatalité. Il s'engage autant que la fiction.

Les meilleures mécaniques de campagne longue garantissent quelque chose, là où les autres se contentent de récompenser. Celle-ci garantit que sept ans de décisions compteront.

## Ce que ce blog va raconter

Le projet a maintenant un carnet de bord, tenu au fil de l'eau, et il est bien plus intéressant que le résultat. On y trouve, en vrac, ce que les prochains billets vont creuser :

- Une journée de neuf audits, un par rôle (la sécurité, une enfant de neuf ans sur un téléphone, l'immersion, l'utilité) et ce que cette méthode trouve qu'aucune relecture ne trouve. Dont, ce jour-là, une fonctionnalité entière morte à cause d'une seule ligne, en silence.
- Douze rapports d'audit à transformer en plan d'action, dont 41 constats déjà corrigés au moment de les lire, et quatre références de code parfaitement formées qui ne correspondaient à rien d'existant. Un rapport bien mis en page ne distingue pas le fait mesuré de la citation inventée.
- Le dernier mètre : toute la chaîne fonctionnait sauf le geste final, publier. Une heure de diagnostic pour comprendre que le blocage venait de la conception même de l'environnement.
- Le statut « clos probable » : pourquoi un tableau de suivi qui ne peut pas dire « je ne sais pas » finit toujours par décrire un projet imaginaire.
- L'indicateur qui refuse de monter pendant que tous les autres progressent, et pourquoi c'est presque toujours le signe qu'il mesure une décision, pas un défaut.

Une note de méthode, pour finir. Les prénoms des trois joueurs n'apparaîtront pas ici, et les adresses du dépôt non plus. C'est le même réflexe que celui qui a présidé à tout le reste : le premier audit du projet a signalé que les identifiants techniques du système de messagerie contenaient les prénoms de trois mineurs. On ne peut pas passer six mois à chiffrer une encyclopédie pour la même famille et publier les prénoms dans un billet de blog.

*À suivre.*
