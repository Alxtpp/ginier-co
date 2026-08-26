# Ginier & Co Sàrl — Site vitrine (guide d'intégration)

Site statique **multilingue (FR / EN / DE)** avec formulaire de devis relié à une boîte mail.
Aucun serveur requis : tout fonctionne sur un hébergement statique (Infomaniak, Netlify, GitHub Pages, o2switch…).

## Pages

| Fichier | Rôle |
|---|---|
| `index.html` | **Accueil** — services, avant/après, avis Yoojo, international, équipe |
| `a-propos.html` | Page **À propos de nous** |
| `devis.html` | Page **Devis** dédiée (formulaire complet, envoi mail) |
| `confidentialite.html` | **Mentions légales & confidentialité** (nLPD/RGPD) |
| `1-retro-bold.html` | Redirige vers `index.html` (compatibilité anciens liens) |
| `archive/` | Anciennes maquettes 2/3/4 (non utilisées, conservées à part) |

> ⚖️ **À compléter dans `confidentialite.html`** (via `assets/i18n.js`, clés `lg.1.*`) :
> l'adresse légale et le numéro IDE (CHE-…) de Ginier & Co Sàrl.

### Fichiers partagés (`assets/`)
- `style.css` — feuille de style commune (utilisée par `a-propos.html` et `devis.html`).
- `i18n.js` — moteur multilingue + **dictionnaire FR/EN/DE** (tout le texte y est centralisé).
- `site.js` — slider avant/après, chips du formulaire, envoi Web3Forms, menu mobile.
- `ba-1…3-avant/apres.jpg` — photos avant/après. `int-*`, `transport-*`, `montage-*` — galerie.

> ℹ️ L'accueil (`1-retro-bold.html`) embarque son CSS en interne (autonome). Les deux autres
> pages utilisent `assets/style.css`. Le dictionnaire `i18n.js` est commun aux trois pages.

## 1. Multilingue FR / EN / DE

- Le bouton **FR · EN · DE** en haut à droite bascule instantanément tout le texte.
- La langue est mémorisée (localStorage) et la langue du navigateur est détectée au premier chargement.
- **Pour modifier un texte** (dans n'importe quelle langue) : ouvrez `assets/i18n.js` et éditez la
  clé correspondante, ex. `"hero.sub": { fr:"…", en:"…", de:"…" }`. Aucun autre fichier à toucher.
- Les traductions EN/DE sont soignées mais **à faire relire par un locuteur** avant mise en ligne.

## 2. Envoi du devis dans la boîte mail (Web3Forms)

Le formulaire (`devis.html`) poste vers **Web3Forms**, qui compose un e-mail récapitulatif vers
votre boîte et joint les photos. Étapes :

1. Créez une clé **gratuite** sur https://web3forms.com (indiquez l'e-mail `info@ginier-co.ch`
   comme destinataire). Vous recevez une `access_key`.
2. Dans `devis.html`, remplacez `VOTRE_CLE_WEB3FORMS` par cette clé :
   ```html
   <input type="hidden" name="access_key" value="VOTRE_CLE_WEB3FORMS">
   ```
3. Tant que la clé n'est pas remplacée, le formulaire affiche un avertissement et **n'envoie rien**
   (garde-fou). Une fois la clé en place, l'envoi fonctionne et un message de confirmation s'affiche.

**Photos.** Le champ accepte plusieurs fichiers (JPG/PNG/HEIC). Le plan gratuit de Web3Forms limite
la **taille totale des pièces jointes** (quelques Mo) ; pour des lots de photos volumineux, prévoyez
le plan payant Web3Forms ou remplacez l'upload par un lien (WeTransfer, Google Drive). Pensez à
demander à Web3Forms l'activation de l'**accusé de réception automatique** au client (« Auto-response »).

**Anti-spam.** Un honeypot invisible (`botcheck`) est déjà en place. Pour la publicité, ajoutez au
besoin le hCaptcha proposé par Web3Forms.

## 3. Distance départ → arrivée (calcul en coulisses)

Un champ caché `distance_km` est présent dans le formulaire. Le kilométrage **ne peut pas être
calculé côté navigateur sans exposer une clé Google** — et le cahier des charges demande que le
client ne voie ni la distance, ni aucun prix. Deux options :

- **Simple (recommandé au départ)** : l'équipe calcule la distance à réception de la demande
  (les deux adresses sont dans l'e-mail) et l'ajoute au devis renvoyé manuellement.
- **Automatisé (plus tard)** : une petite fonction serverless (Netlify/Cloudflare) appelle l'API
  Google Distance Matrix côté serveur et remplit `distance_km` avant l'envoi. La clé reste cachée.

Dans tous les cas, **aucun prix ni kilométrage n'est affiché à l'écran** : le client ne reçoit que
le devis envoyé par l'équipe.

## 4. Avant / Après

- Section « Avant / Après » sur l'accueil : slider draggable (souris + tactile + clavier).
- Les photos sont dans `assets/` : `ba-1-avant.jpg` / `ba-1-apres.jpg` (× 3 paires).
- **À valider par le client** : les paires proposées viennent d'un même chantier de débarras.
  Pour changer une paire, remplacez simplement les fichiers `ba-X-avant.jpg` / `ba-X-apres.jpg`
  (gardez le même nom). Dans le HTML, l'image « après » est la balise `<img class="ba-before">`
  (calque de fond) et l'« avant » est dans `<div class="ba-after">` (calque révélé à gauche).

## 5. Avis clients (Yoojo)

Les avis affichés sont réels, repris du profil public
**https://yoojo.ch/jobber/calvin-perroy-1700890** (4,96/5 · 293 avis · « Top prestataire »).
Le lien « Voir les 293 avis sur Yoojo » pointe vers ce profil. Pour rafraîchir : mettez à jour les
cartes `.rev-card` dans `1-retro-bold.html` et les compteurs (`rev.count`, `4,96`, `293`) — pensez à
les changer aussi dans `i18n.js` (`rev.*`, `dv.trust.2`, `ab.num.*`).

## 6. Photos sources

30 photos HEIC du client ont été converties en JPG web. Pour en ajouter d'autres :
```
sips -s format jpeg -s formatOptions 82 -Z 1600 IMG_XXXX.HEIC --out assets/nom.jpg
```

## À valider avant mise en ligne
- [ ] Clé Web3Forms en place + test d'un envoi réel (mail reçu avec photos).
- [ ] Relecture des traductions EN/DE.
- [ ] Validation des paires avant/après.
- [x] Page mentions légales / confidentialité créée — **compléter l'adresse + n° IDE** (clés `lg.1.*`).
- [x] Favicon (`assets/favicon.svg`) et balises Open Graph ajoutés sur les 3 pages.
- [ ] **Passer `og:url` et `og:image` en URL absolue** avec le vrai domaine (ex. `https://ginier-co.ch/assets/int-salon.jpg`) — sinon l'aperçu ne s'affiche pas sur Facebook/LinkedIn/WhatsApp.
- [ ] Nom de domaine.
