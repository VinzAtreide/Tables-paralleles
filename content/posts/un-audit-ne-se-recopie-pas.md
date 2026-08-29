---
title: "Un audit ne se recopie pas, il se rejoue"
date: 2026-10-05
description: "Douze rapports d'agents IA, quarante et un constats périmés et quatre références inventées : ce qu'on apprend en vérifiant chaque ligne avant de la croire."
serie: ["L'Atelier"]
slug: un-audit-ne-se-recopie-pas
draft: true
---

J'utilise des agents IA pour auditer un projet personnel, le
[wiki de campagne](/2026/trois-enfants-un-wiki-chiffre/) que racontent les
carnets de la Table des Trois, mais peu importe le domaine : ce qui suit
s'applique à n'importe quel rapport produit par une IA, et probablement à
pas mal de rapports produits par des humains.

Un matin, j'avais douze rapports d'audit sur la table. Une journée entière
d'agents spécialisés, sécurité, expérience utilisateur, outillage, contenu
chacun ayant produit son document : constats, références de code,
recommandations. L'étape suivante paraissait évidente : compiler tout ça en
plan d'action. Une heure de travail, essentiellement du copier-coller
structuré.

J'ai choisi de faire autrement, et ça a tout changé.

## Rejouer plutôt que recopier

Je me suis imposé une règle simple : **aucun constat n'entre au plan d'action
sans avoir été rejoué**, c'est-à-dire vérifié, à l'instant de l'inscription,
contre l'état réel du dépôt. « Le rapport dit que » ne suffit plus ; il faut « la commande que je viens
de lancer confirme que ».

Le coût : cinq heures au lieu d'une.

Le résultat : sur l'ensemble des constats, quarante et un étaient déjà
corrigés au moment où je les lisais. Les audits avaient été produits le
matin ; des vagues de correctifs étaient passées l'après-midi même ; les
rapports décrivaient un état du monde qui n'existait plus. Les recopier
aurait généré des heures de travail à « re-corriger » du code sain, avec,
au passage, le risque bien réel d'introduire des régressions en retouchant
ce qui marchait.

## Les références qui n'existent pas

Le deuxième enseignement est plus troublant. Quatre rapports citaient des
identifiants de commits, précis, plausibles, du bon format. Vérification
faite : aucun de ces commits n'existe dans le dépôt. La commande répond
*unknown revision*, sèchement.

Ce n'est pas une erreur de copie : c'est la nature même d'un modèle de
langage. Il produit toujours un document bien formé, et rien
dans la forme ne distingue le fait mesuré de la citation inventée. Un
identifiant de commit halluciné ressemble exactement à un identifiant de
commit réel. C'est indétectable à la relecture, et c'est précisément
pourquoi la relecture ne suffit pas.

D'où le critère que j'applique désormais à tout rapport d'agent : la
valeur d'un constat se mesure à ce qu'on peut rejouer, jamais à ce qu'il
affirme. Un constat accompagné de sa commande de vérification est
une donnée. Un constat sans commande est une opinion bien mise en page.

## Le chapitre des renoncements

Le plan final compte 82 actions, chacune portant le geste qui prouve
qu'elle est encore ouverte. Mais il se termine par un chapitre que je n'ai
jamais vu dans un plan d'action généré par IA, et rarement dans les autres :
**« Ce qu'on décide de ne pas faire »**, quatorze renoncements, chacun
avec sa raison.

Un plan sans liste de renoncements ment par omission. Tout ce qui n'y
figure pas passe pour oublié, et chaque relecture future le « redécouvre »
et le remet à l'étude. Écrire noir sur blanc « ce risque est accepté, voici
pourquoi » coûte dix minutes et économise toutes les réévaluations à venir
y compris celles que vos propres agents IA vous proposeront, avec
enthousiasme, à chaque nouvel audit.

## Ce que j'en retiens

Les agents IA sont devenus mes meilleurs auditeurs : ils ne se fatiguent
jamais et ne défendent aucun territoire. Leur production reste pourtant un
matériau brut. Le travail qui crée la valeur, celui qu'on ne peut pas
déléguer, c'est la confrontation de chaque affirmation avec le réel.

Cinq heures au lieu d'une. C'est le prix d'un plan d'action dont chaque
ligne est vraie. Je le repaierai à chaque fois.
