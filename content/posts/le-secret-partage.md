---
title: "Le secret partagé"
date: 2026-09-14
description: "Le meneur sait tout, chaque joueur sait autre chose, et tous ouvrent la même page. Pourquoi notre wiki de campagne a choisi le chiffrement plutôt que les permissions."
serie: ["La Table des Trois"]
slug: le-secret-partage
draft: true
---

Il y a, dans le wiki de la campagne, une note posée sur la fiche de
personnage de la plus jeune joueuse de la table. Elle a neuf ans. La note
prépare une révélation que je construis depuis des mois, et elle vit à
trois centimètres de ce que sa joueuse a le droit de lire. Si elle la
découvre trop tôt, il ne se passera rien de grave. Juste une histoire en
moins.

Ce carnet raconte comment on protège cette note, et pourquoi la solution
retenue n'est pas celle des outils du marché.

Un wiki de campagne bute toujours sur la même chose. Le meneur sait tout.
Les joueurs savent des choses différentes les uns des autres. Et il
faudrait que chacun, en ouvrant la même page, y lise une version
différente.

Les outils du marché répondent par des permissions : un serveur détient
tout, et décide au moment de la requête ce qu'il vous envoie. Ça
fonctionne. Mais ça déplace le problème plutôt que de le résoudre, et ça
introduit trois coûts que personne n'annonce à l'avance.

D'abord, il faut faire confiance au serveur, et à l'administrateur, et à la
prochaine mise à jour, et à la personne qui a coché la mauvaise case un
dimanche soir. Ensuite, il faut administrer ce serveur : comptes, rôles,
sauvegardes, factures. Enfin, et c'est le plus vicieux, **rien ne se voit
quand ça fuite**. Une permission mal réglée n'affiche pas d'erreur. Elle
affiche une page.

Or ici, l'enjeu n'est pas la confidentialité au sens professionnel. C'est
plus fragile que ça : c'est la note du début de ce carnet. Une fuite ne
coûte pas de l'argent, elle coûte une révélation qu'on préparait depuis des
mois, et ce genre de perte ne se rembourse pas.

## Chiffrer, plutôt qu'autoriser

Le parti pris tient en une phrase. Le site publié est un tas d'octets
illisibles, et la phrase de passe du lecteur est la seule chose qui en
ouvre une partie.

Concrètement : chaque rubrique de chaque fiche est chiffrée séparément.
Chaque rubrique est rangée dans un « coffre » qui correspond à un palier de
confidentialité (public, secret, très secret, notes du meneur). La clé d'un
coffre ne voyage que dans le trousseau des lecteurs qui y ont droit, et ce
trousseau est lui-même chiffré par la phrase de passe de son propriétaire.

Le site est publié sur des pages statiques, en public :
[le voici](https://vinzatreide.github.io/herowiki-site/). N'importe qui
peut le visiter, le télécharger intégralement, l'archiver. Sans phrase de
passe, il n'en tire rien, et vous pouvez le constater vous-même.

## Ce que ça change à la table

Il n'y a pas de serveur à qui faire confiance, donc pas de serveur à
administrer. Coût d'exploitation nul. Disponibilité égale à celle de
l'hébergeur. Et pas de compte à créer pour un enfant de neuf ans, pas de
mot de passe oublié un samedi soir : sa phrase d'accès tient dans un QR
code imprimé sur sa licence de super-héros en carton. On scanne avec le
téléphone ou la tablette, et le wiki s'ouvre, déjà déverrouillé, sur ce que
son personnage sait.

Montrer le site à un ami ne fuite rien. C'est la propriété qu'aucun système
de permissions n'offre : la sécurité tient tout entière à la phrase de
passe, jamais à la personne qui regarde l'écran.

Et la faute devient visible. Si une rubrique secrète est lisible par un
joueur, c'est qu'un fragment est rangé dans le mauvais coffre, et un test
automatique sait le dire. Une suite de contrôles vérifie aujourd'hui, à
chaque publication, qu'aucun contenu réservé au meneur ne se retrouve dans
un coffre joueur. Le jour où ça casse, la publication s'arrête.

C'est là que le titre du premier carnet devient ironique : la cryptographie
a été la partie facile. Elle tient en quelques centaines de lignes, elle
est testée, elle ne bouge plus. Tout le reste, et notamment rendre ces
milliers de fiches jouables, a coûté dix fois plus. Ce sera le prochain
carnet.
