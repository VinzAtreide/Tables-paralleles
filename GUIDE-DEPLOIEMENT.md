# Tables Parallèles — guide de mise en ligne

## 1. Pousser le site (5 min, PowerShell)

```powershell
cd C:\Users\ferna
git clone https://github.com/VinzAtreide/Tables-paralleles.git   # dossier vide
# copier tout le contenu du dossier livré "tables-paralleles" dedans, puis :
cd Tables-paralleles
git add -A
git commit -m "Lancement du site"
git push -u origin main
```

## 2. Activer GitHub Pages (2 min, une seule fois)

Sur github.com → dépôt `Tables-paralleles` → **Settings → Pages** →
Source : **GitHub Actions**. Le workflow `Publier le site` se lance au push ;
onglet **Actions** pour suivre (~1 min). Le site vit d'abord sur
`vinzatreide.github.io/Tables-paralleles` puis sur le domaine (étape 3).

## 3. Brancher tablesparalleles.fr (10 min, une seule fois)

Chez OVH → Web Cloud → Noms de domaine → tablesparalleles.fr → **Zone DNS** :

| Type | Sous-domaine | Cible |
|---|---|---|
| A | (vide) | 185.199.108.153 |
| A | (vide) | 185.199.109.153 |
| A | (vide) | 185.199.110.153 |
| A | (vide) | 185.199.111.153 |
| CNAME | www | vinzatreide.github.io. |

⚠ OVH crée par défaut un enregistrement A sur la racine vers son serveur de
parking (`213.186.33.5`) : il faut le SUPPRIMER, sinon GitHub répond
« Échec de la vérification DNS ». Supprimer aussi tout AAAA par défaut sur la
racine. Après correction : GitHub → Settings → Pages → « Check again ».

Puis GitHub → Settings → Pages → **Custom domain** : `tablesparalleles.fr`
→ Save → cocher **Enforce HTTPS** quand la vérification passe (jusqu'à 24 h,
souvent 15 min).

## 4. Envoyer la newsletter (2 min par article)

L'automatisation RSS→email de Buttondown est réservée aux offres payantes
(~9 $/mois) : en offre gratuite, l'envoi est manuel, et c'est très bien à
notre rythme.

À chaque publication d'article :
1. Buttondown → **Emails → New email**.
2. Titre de l'article, deux ou trois phrases d'accroche écrites pour
   l'email, lien vers l'article.
3. Aperçu, puis Send.

À reconsidérer au-delà de 100 abonnés (l'offre payante devient de toute
façon nécessaire à ce seuil, et inclut l'automatisation RSS avec le flux
`https://tablesparalleles.fr/index.xml`).

## 5. Publier un article (le rituel, 2 min)

1. Écrire `content/posts/mon-slug.md` (frontmatter : title, date, description,
   serie, slug). Garder `draft: true` pendant l'écriture.
2. Retirer `draft: true` le jour J, `git add -A && git commit && git push`.
3. C'est tout : build, mise en ligne et email partent seuls.

⚠ Un article daté dans le futur ne se publie pas avant sa date — pour le
sortir, re-pousser (ou relancer le workflow) le jour même ou dater au jour J.
