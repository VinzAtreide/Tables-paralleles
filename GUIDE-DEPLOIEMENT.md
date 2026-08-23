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

(Supprimer les éventuels enregistrements A/AAAA par défaut d'OVH sur la racine,
notamment la redirection vers leur page parking.)

Puis GitHub → Settings → Pages → **Custom domain** : `tablesparalleles.fr`
→ Save → cocher **Enforce HTTPS** quand la vérification passe (jusqu'à 24 h,
souvent 15 min).

## 4. Brancher la newsletter automatique (5 min, une seule fois)

Buttondown → Settings → **Subscribing** (section RSS / automation) →
ajouter le flux `https://tablesparalleles.fr/index.xml`.
Chaque nouvel article publié partira en email aux abonnés.
Vérifier l'aperçu du premier envoi avant de confirmer l'automatisation.

## 5. Publier un article (le rituel, 2 min)

1. Écrire `content/posts/mon-slug.md` (frontmatter : title, date, description,
   serie, slug). Garder `draft: true` pendant l'écriture.
2. Retirer `draft: true` le jour J, `git add -A && git commit && git push`.
3. C'est tout : build, mise en ligne et email partent seuls.

⚠ Un article daté dans le futur ne se publie pas avant sa date — pour le
sortir, re-pousser (ou relancer le workflow) le jour même ou dater au jour J.
