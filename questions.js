// Application PsychoTest : 1000 questions. Gratuites : 92 (aptitudes) + 75 (administration et projets) + 83 (théorie) = 250, réparties dans tous les paquets.
// Format : { p: paquet, s: sous-thème, q: énoncé, a: [[assertion, vrai?], ...], e: explication }
window.QUESTIONS = {
 "apt": [
  {
   "s": "Séries logiques",
   "q": "Soit la série : 3, 6, 12, 24, …",
   "a": [
    [
     "La série est géométrique, de raison 2.",
     true
    ],
    [
     "On ajoute 3 à chaque terme.",
     false
    ],
    [
     "Le terme suivant est 48.",
     true
    ]
   ],
   "e": "Chaque terme est multiplié par 2 : 24 × 2 = 48. Une addition constante donnerait 3, 6, 9, 12…",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 2, 4, 8, 16, 32, …",
   "a": [
    [
     "Le terme suivant est 48.",
     false
    ],
    [
     "Les termes sont des puissances de 2.",
     true
    ],
    [
     "Le terme suivant est 64.",
     true
    ]
   ],
   "e": "Chaque terme double : 32 × 2 = 64.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 81, 27, 9, 3, …",
   "a": [
    [
     "Le terme suivant est 0.",
     false
    ],
    [
     "Le terme suivant est 1.",
     true
    ],
    [
     "On divise par 3 à chaque fois.",
     true
    ]
   ],
   "e": "3 ÷ 3 = 1.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 2, 10, 4, 20, 6, 30, …",
   "a": [
    [
     "Le terme suivant est 40.",
     false
    ],
    [
     "La série contient deux suites entrelacées.",
     true
    ],
    [
     "Le terme suivant est 8.",
     true
    ]
   ],
   "e": "Termes impairs : 2, 4, 6, 8. Termes pairs : 10, 20, 30, 40.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 5, 11, 23, 47, …",
   "a": [
    [
     "Le terme suivant est 95.",
     true
    ],
    [
     "La règle est « multiplier par 2, puis ajouter 1 ».",
     true
    ],
    [
     "Le terme suivant est 94.",
     false
    ]
   ],
   "e": "47 × 2 + 1 = 95.",
   "p": "Séries logiques"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Fractions : 1/2 + 1/3.",
   "a": [
    [
     "3/4 + 1/4 est égal à 1.",
     true
    ],
    [
     "Le dénominateur commun est 6.",
     true
    ],
    [
     "Le résultat est 5/6.",
     true
    ],
    [
     "Le résultat est 2/5.",
     false
    ]
   ],
   "e": "1/2 = 3/6 et 1/3 = 2/6, donc 5/6. On n'additionne jamais les dénominateurs. 3/4 + 1/4 = 4/4 = 1.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Trois cahiers coûtent 1 500 FC (même prix pour chacun).",
   "a": [
    [
     "Quatre cahiers coûtent 1 800 FC.",
     false
    ],
    [
     "Un cahier coûte 500 FC.",
     true
    ],
    [
     "Cinq cahiers coûtent 2 500 FC.",
     true
    ]
   ],
   "e": "1 500 ÷ 3 = 500 FC par cahier. Quatre cahiers : 4 × 500 = 2 000 FC.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Fractions et décimaux.",
   "a": [
    [
     "0,5 est égal à 1/2.",
     true
    ],
    [
     "0,25 est égal à 1/2.",
     false
    ],
    [
     "0,75 est égal à 3/4.",
     true
    ]
   ],
   "e": "0,25 = 1/4. Les deux premières égalités sont correctes.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Conversions d'unités.",
   "a": [
    [
     "3 heures égalent 180 minutes.",
     true
    ],
    [
     "2,5 km égalent 2 500 m.",
     true
    ],
    [
     "1,5 heure égale 100 minutes.",
     false
    ]
   ],
   "e": "1,5 h = 90 minutes, car 0,5 h = 30 minutes.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Puissances.",
   "a": [
    [
     "10³ est égal à 1 000.",
     true
    ],
    [
     "3² est égal à 6.",
     false
    ],
    [
     "2⁵ est égal à 32.",
     true
    ]
   ],
   "e": "3² = 3 × 3 = 9.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Calcul mental",
   "q": "Calcul : 15 × 12.",
   "a": [
    [
     "Le résultat est 180.",
     true
    ],
    [
     "On peut calculer 15 × 10 puis ajouter 15 × 2.",
     true
    ],
    [
     "Le résultat est 170.",
     false
    ]
   ],
   "e": "150 + 30 = 180.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Calcul mental",
   "q": "Carrés de nombres.",
   "a": [
    [
     "12² est égal à 124.",
     false
    ],
    [
     "15² est égal à 225.",
     true
    ],
    [
     "13² est égal à 169.",
     true
    ]
   ],
   "e": "12² = 144.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Un prix de 100 augmente de 10 %, puis encore de 10 %.",
   "a": [
    [
     "La hausse totale est de 21 %.",
     true
    ],
    [
     "Le prix final est de 121.",
     true
    ],
    [
     "Le prix final est de 120.",
     false
    ]
   ],
   "e": "110 × 1,10 = 121. Les pourcentages successifs se composent, ils ne s'additionnent pas.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Un prix de 100 subit une remise de 20 %, puis une remise de 10 %.",
   "a": [
    [
     "Le prix final est de 72.",
     true
    ],
    [
     "La remise totale est de 28 %.",
     true
    ],
    [
     "La remise totale est de 30 %.",
     false
    ]
   ],
   "e": "100 × 0,80 = 80, puis 80 × 0,90 = 72.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "La moyenne de quatre notes est 12. Trois notes valent 10, 12 et 14.",
   "a": [
    [
     "La somme des quatre notes est 48.",
     true
    ],
    [
     "La quatrième note est 16.",
     false
    ],
    [
     "La quatrième note est 12.",
     true
    ]
   ],
   "e": "48 − (10 + 12 + 14) = 12.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Problèmes de raisonnement",
   "q": "4 ouvriers terminent un travail en 6 jours (même rythme pour chacun).",
   "a": [
    [
     "8 ouvriers le terminent en 3 jours.",
     true
    ],
    [
     "8 ouvriers le terminent en 12 jours.",
     false
    ],
    [
     "Le travail représente 24 journées d'ouvrier.",
     true
    ]
   ],
   "e": "Plus il y a d'ouvriers, moins il faut de jours : 24 ÷ 8 = 3.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Interprétation de données",
   "q": "Une population passe de 1 000 à 1 200 habitants.",
   "a": [
    [
     "La hausse est de 12 %.",
     false
    ],
    [
     "La hausse est de 200 habitants.",
     true
    ],
    [
     "La hausse est de 20 %.",
     true
    ]
   ],
   "e": "200 ÷ 1 000 = 20 %.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Interprétation de données",
   "q": "Un article coûte 50 $ avant une taxe de 16 %.",
   "a": [
    [
     "Le prix taxe comprise est de 66 $.",
     false
    ],
    [
     "Le prix taxe comprise est de 58 $.",
     true
    ],
    [
     "La taxe est de 8 $.",
     true
    ]
   ],
   "e": "16 % de 50 = 8 $, donc 50 + 8 = 58 $.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Interprétation de données",
   "q": "Sur 600 électeurs : 45 % votent A, 35 % votent B, 20 % votent C.",
   "a": [
    [
     "B obtient 210 voix.",
     true
    ],
    [
     "A obtient 270 voix.",
     true
    ],
    [
     "C obtient 100 voix.",
     false
    ]
   ],
   "e": "20 % de 600 = 120 voix.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Recherche de contraire pour le mot « prudent ».",
   "a": [
    [
     "« Téméraire » est un contraire approprié.",
     true
    ],
    [
     "« Avisé » est un contraire.",
     false
    ],
    [
     "« Imprudent » est un contraire.",
     true
    ]
   ],
   "e": "« Avisé » est plutôt un synonyme de prudent. « Imprudent » et « téméraire » expriment le manque de prudence.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Trouvez l'intrus : pomme, banane, carotte, mangue.",
   "a": [
    [
     "Le critère de classement est « fruit ou légume ».",
     true
    ],
    [
     "« Carotte » est l'intrus.",
     true
    ],
    [
     "« Banane » est l'intrus.",
     false
    ]
   ],
   "e": "La pomme, la banane et la mangue sont des fruits. La carotte est un légume.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Trouvez l'intrus : lundi, mardi, janvier, jeudi.",
   "a": [
    [
     "Le critère est « jour de la semaine ».",
     true
    ],
    [
     "« Janvier » est l'intrus.",
     true
    ],
    [
     "« Jeudi » est l'intrus.",
     false
    ]
   ],
   "e": "Janvier est un mois, les autres sont des jours.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « livre est à lecteur comme film est à … ».",
   "a": [
    [
     "« Spectateur » complète l'analogie.",
     true
    ],
    [
     "La relation est une relation de contraire.",
     false
    ],
    [
     "La relation est « œuvre – public ».",
     true
    ]
   ],
   "e": "On lit un livre, on regarde un film.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Recherche de contraires pour « croître ».",
   "a": [
    [
     "« Augmenter » est un contraire.",
     false
    ],
    [
     "« Diminuer » est un contraire.",
     true
    ],
    [
     "« Décroître » est un contraire.",
     true
    ]
   ],
   "e": "« Augmenter » est plutôt un synonyme de croître.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Recherche de contraires et de synonymes pour « transparent ».",
   "a": [
    [
     "« Opaque » est un synonyme.",
     false
    ],
    [
     "« Limpide » est un synonyme.",
     true
    ],
    [
     "« Opaque » est un contraire.",
     true
    ]
   ],
   "e": "Opaque ne laisse pas passer la lumière, contrairement à transparent.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Trouvez l'intrus : chaise, table, armoire, marteau.",
   "a": [
    [
     "« Table » est l'intrus.",
     false
    ],
    [
     "Le critère est « meuble ou outil ».",
     true
    ],
    [
     "« Marteau » est l'intrus.",
     true
    ]
   ],
   "e": "Chaise, table et armoire sont des meubles. Le marteau est un outil.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Orthographe et grammaire",
   "q": "Accord du participe passé.",
   "a": [
    [
     "« Les fleurs que j'ai cueillies » est correct.",
     true
    ],
    [
     "« Les lettres que j'ai écrit » est correct.",
     false
    ],
    [
     "« Elles sont parties » est correct.",
     true
    ]
   ],
   "e": "Avec avoir, le participe s'accorde avec le COD placé avant : « les lettres que j'ai écrites ».",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Logique déductive",
   "q": "Prémisse : « S'il pleut, la route est mouillée ».",
   "a": [
    [
     "Si la route est mouillée, on peut conclure qu'il a plu.",
     false
    ],
    [
     "S'il pleut, la route est mouillée.",
     true
    ],
    [
     "Si la route n'est pas mouillée, alors il n'a pas plu.",
     true
    ]
   ],
   "e": "La route peut être mouillée pour une autre raison (camion-citerne, par exemple). En revanche, route sèche entraîne qu'il n'a pas plu.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "Règle : « Si A, alors B ». On sait que B est faux.",
   "a": [
    [
     "On ne peut rien conclure sur A.",
     false
    ],
    [
     "A est faux.",
     true
    ],
    [
     "A est vrai.",
     false
    ]
   ],
   "e": "Si A était vrai, B le serait aussi. Comme B est faux, A est forcément faux.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "A arrive avant B. C arrive après B. D arrive avant A.",
   "a": [
    [
     "D arrive en premier.",
     true
    ],
    [
     "C arrive en dernier.",
     true
    ],
    [
     "B arrive en premier.",
     false
    ]
   ],
   "e": "L'ordre est D, A, B, C.",
   "p": "Logique et déduction"
  },
  {
   "s": "Problèmes de logique",
   "q": "Règle : « Si je gagne, j'offre un cadeau ».",
   "a": [
    [
     "Si je n'ai pas offert de cadeau, je n'ai pas gagné.",
     true
    ],
    [
     "Si je gagne, j'offre un cadeau.",
     true
    ],
    [
     "Si j'ai offert un cadeau, j'ai forcément gagné.",
     false
    ]
   ],
   "e": "On peut offrir un cadeau sans avoir gagné.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "Négation de « Tous les élèves ont réussi ».",
   "a": [
    [
     "« Certains élèves n'ont pas réussi » est équivalent à la négation.",
     true
    ],
    [
     "« Aucun élève n'a réussi » est la négation.",
     false
    ],
    [
     "« Au moins un élève n'a pas réussi » est la négation.",
     true
    ]
   ],
   "e": "Pour nier « tous », il suffit qu'un seul fasse exception.",
   "p": "Logique et déduction"
  },
  {
   "s": "Cognitive Reflection Test",
   "q": "Test de réflexion cognitive de Frederick : « Une batte et une balle coûtent 1,10 $ ; la batte coûte 1 $ de plus que la balle ».",
   "a": [
    [
     "La réponse intuitive « 0,10 $ » est erronée.",
     true
    ],
    [
     "La balle coûte 0,10 $.",
     false
    ],
    [
     "La balle coûte 0,05 $.",
     true
    ]
   ],
   "e": "Si la balle coûtait 0,10 $, la batte coûterait 1,10 $ et le total serait de 1,20 $.",
   "p": "Logique et déduction"
  },
  {
   "s": "Raisonnement et sélection",
   "q": "Problème de Monty Hall : trois portes, une voiture. Après le choix du joueur, l'animateur ouvre une porte vide et propose de changer.",
   "a": [
    [
     "Les deux portes restantes ont 1 chance sur 2.",
     false
    ],
    [
     "Garder sa porte donne 1 chance sur 3 de gagner.",
     true
    ],
    [
     "Changer de porte donne 2 chances sur 3 de gagner.",
     true
    ]
   ],
   "e": "L'animateur connaît la porte gagnante, donc son choix apporte une information.",
   "p": "Logique et déduction"
  },
  {
   "s": "Raisonnement et sélection",
   "q": "À propos de l'UCAT :",
   "a": [
    [
     "Il évalue la dextérité manuelle.",
     false
    ],
    [
     "Il comprend un volet de jugement situationnel.",
     true
    ],
    [
     "Il est utilisé pour l'admission à des études de médecine et d'odontologie.",
     true
    ]
   ],
   "e": "Il comprend aussi des épreuves de raisonnement verbal, de prise de décision et de raisonnement quantitatif.",
   "p": "Logique et déduction"
  },
  {
   "s": "Matrices progressives",
   "q": "Dans une série, les figures contiennent 1, puis 2, puis 3 points.",
   "a": [
    [
     "La figure suivante contient 2 points.",
     false
    ],
    [
     "La règle est une progression régulière (+1).",
     true
    ],
    [
     "La figure suivante contient 4 points.",
     true
    ]
   ],
   "e": "Le nombre de points augmente de 1 à chaque figure.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Matrices progressives",
   "q": "À propos des performances aux matrices :",
   "a": [
    [
     "La familiarité avec les tests peut les influencer.",
     true
    ],
    [
     "Elles sont totalement indépendantes de tout apprentissage.",
     false
    ],
    [
     "L'effet Flynn a été observé notamment sur ces épreuves.",
     true
    ]
   ],
   "e": "Même un test peu verbal reste sensible à l'expérience et à la scolarité.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raisonnement abstrait",
   "q": "Code : A = 1, B = 2, C = 3.",
   "a": [
    [
     "Le mot BAC vaut 6.",
     true
    ],
    [
     "Le mot CAB vaut aussi 6.",
     true
    ],
    [
     "Le mot BAC vaut 5.",
     false
    ]
   ],
   "e": "2 + 1 + 3 = 6, quel que soit l'ordre des lettres.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raisonnement abstrait",
   "q": "Série de formes : cercle, carré, triangle, cercle, carré, …",
   "a": [
    [
     "La forme suivante est un triangle.",
     true
    ],
    [
     "La forme suivante est un cercle.",
     false
    ],
    [
     "La série suit un cycle de 3 formes.",
     true
    ]
   ],
   "e": "Le cycle est cercle, carré, triangle.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raven (matrices)",
   "q": "À propos de la structure des SPM :",
   "a": [
    [
     "Il y a 5 séries (A à E) de 12 items chacune.",
     true
    ],
    [
     "Dans les séries C à E, il y a 8 réponses possibles par item.",
     true
    ],
    [
     "Chaque item propose seulement 4 réponses possibles.",
     false
    ]
   ],
   "e": "Les séries A et B proposent 6 réponses, et les séries C, D et E en proposent 8.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "D48 (dominos)",
   "q": "À propos de la tâche demandée dans le D48 :",
   "a": [
    [
     "Il faut découvrir la logique d'une disposition de dominos.",
     true
    ],
    [
     "Il faut trouver le domino ou la valeur manquante.",
     true
    ],
    [
     "Il faut lire un texte et répondre à des questions.",
     false
    ]
   ],
   "e": "On raisonne sur des configurations de points, sans recourir à la lecture.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Cattell Culture Fair",
   "q": "À propos de l'objectif du Culture Fair Test :",
   "a": [
    [
     "Cattell visait à mesurer l'intelligence fluide.",
     true
    ],
    [
     "Il est valable dans toutes les cultures sans adaptation.",
     false
    ],
    [
     "Aucun test n'est totalement indépendant de la culture.",
     true
    ]
   ],
   "e": "Même un test non verbal suppose une certaine familiarité avec le format et le matériel.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Tests non verbaux",
   "q": "À propos du NNAT (Naglieri Nonverbal Ability Test) :",
   "a": [
    [
     "Il s'adresse à des enfants et à des adolescents.",
     true
    ],
    [
     "Il repose sur des items de type matrices.",
     true
    ],
    [
     "Il repose sur la lecture de textes.",
     false
    ]
   ],
   "e": "On y trouve du raisonnement par analogie, des séries et de la visualisation spatiale.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Une flèche pointe vers le haut.",
   "a": [
    [
     "Après une rotation de 180°, elle pointe vers le bas.",
     true
    ],
    [
     "Après une rotation de 90° vers la droite, elle pointe vers la droite.",
     true
    ],
    [
     "Après une rotation de 90° vers la droite, elle pointe vers la gauche.",
     false
    ]
   ],
   "e": "Un quart de tour dans le sens des aiguilles d'une montre amène la flèche vers la droite.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Un grand cube de 3 × 3 × 3 est peint sur toutes ses faces, puis découpé en 27 petits cubes.",
   "a": [
    [
     "1 petit cube n'a aucune face peinte.",
     true
    ],
    [
     "8 petits cubes ont exactement 3 faces peintes.",
     true
    ],
    [
     "12 petits cubes ont exactement 3 faces peintes.",
     false
    ]
   ],
   "e": "Les 8 coins ont 3 faces, les 12 arêtes ont 2 faces, les 6 centres de face en ont 1, et le cube central aucune.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement mécanique",
   "q": "À propos des engrenages :",
   "a": [
    [
     "Deux roues dentées en contact tournent en sens inverse.",
     true
    ],
    [
     "Deux roues dentées en contact tournent dans le même sens.",
     false
    ],
    [
     "Une petite roue entraînée par une grande roue tourne plus vite.",
     true
    ]
   ],
   "e": "Chaque dent pousse la dent opposée : le sens s'inverse.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Un cube a une arête de 3 cm.",
   "a": [
    [
     "Son aire totale est de 54 cm².",
     true
    ],
    [
     "Son volume est de 9 cm³.",
     false
    ],
    [
     "Son volume est de 27 cm³.",
     true
    ]
   ],
   "e": "Volume : 3 × 3 × 3 = 27. Aire : 6 faces × 9 = 54.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Cubes de Kohs",
   "q": "À propos des cubes de Kohs :",
   "a": [
    [
     "C'est une épreuve verbale.",
     false
    ],
    [
     "L'épreuve évalue le raisonnement visuo-spatial.",
     true
    ],
    [
     "Le sujet reproduit un modèle avec des cubes à faces colorées.",
     true
    ]
   ],
   "e": "Les cubes se manipulent : la langue joue très peu.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Rotation mentale",
   "q": "À propos de l'expérience de Shepard et Metzler (1971) :",
   "a": [
    [
     "Le temps de réponse augmente avec l'angle de rotation.",
     true
    ],
    [
     "Les sujets comparent des figures tridimensionnelles tournées.",
     true
    ],
    [
     "Le temps de réponse diminue avec l'angle de rotation.",
     false
    ]
   ],
   "e": "Cet effet suggère que l'on fait tourner mentalement une image de la figure.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Perception et style cognitif",
   "q": "À propos de l'illusion de Müller-Lyer :",
   "a": [
    [
     "Deux segments de même longueur paraissent différents.",
     true
    ],
    [
     "Elle prouve que les segments sont de longueurs différentes.",
     false
    ],
    [
     "La direction des pointes de flèche influence la perception.",
     true
    ]
   ],
   "e": "C'est un exemple d'illusion géométrique.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Figures complexes",
   "q": "À propos de l'arrangement d'images du Wechsler (Picture Arrangement) :",
   "a": [
    [
     "Il évalue la dextérité.",
     false
    ],
    [
     "Il évalue notamment la compréhension de situations sociales.",
     true
    ],
    [
     "Le sujet ordonne des images pour raconter une histoire logique.",
     true
    ]
   ],
   "e": "Il était présent dans les premières versions des échelles de Wechsler.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Batteries d'aptitudes",
   "q": "À propos des Differential Aptitude Tests (DAT) :",
   "a": [
    [
     "Ils comprennent aussi des épreuves de raisonnement mécanique et de relations spatiales.",
     true
    ],
    [
     "Ils comprennent notamment des épreuves de raisonnement verbal, numérique et abstrait.",
     true
    ],
    [
     "Ils mesurent les intérêts professionnels.",
     false
    ]
   ],
   "e": "Ils sont utilisés surtout pour l'orientation scolaire et professionnelle.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Batteries d'aptitudes",
   "q": "À propos du Wonderlic Personnel Test :",
   "a": [
    [
     "Il comporte plusieurs centaines d'items.",
     false
    ],
    [
     "Il doit être terminé en 12 minutes.",
     true
    ],
    [
     "Il comporte 50 items.",
     true
    ]
   ],
   "e": "C'est un test court d'aptitude cognitive générale, utilisé en sélection.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "WASI",
   "q": "Subtests de la WASI à quatre subtests :",
   "a": [
    [
     "Cubes et Matrices.",
     true
    ],
    [
     "Mémoire des chiffres et Code.",
     false
    ],
    [
     "Vocabulaire et Similitudes.",
     true
    ]
   ],
   "e": "La WASI ne comporte pas ces deux derniers subtests, présents dans le WAIS.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Créativité (TTCT, AUT, RAT)",
   "q": "À propos du Remote Associates Test (Mednick) :",
   "a": [
    [
     "Il évalue la dextérité.",
     false
    ],
    [
     "Il évalue la pensée convergente.",
     true
    ],
    [
     "Le sujet trouve un mot qui relie trois mots donnés.",
     true
    ]
   ],
   "e": "Il existe une seule bonne réponse par item.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Échelles cognitives générales",
   "q": "À propos des Reynolds Intellectual Assessment Scales (RIAS) :",
   "a": [
    [
     "Elles fournissent un indice verbal et un indice non verbal.",
     true
    ],
    [
     "Elles incluent un indice de mémoire.",
     true
    ],
    [
     "Elles ne comportent aucune épreuve non verbale.",
     false
    ]
   ],
   "e": "Elles sont plutôt courtes, avec un nombre réduit de subtests.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Tests de sélection militaire et universitaire",
   "q": "À propos du GRE General Test :",
   "a": [
    [
     "Il comprend une épreuve d'écriture analytique.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ],
    [
     "Il évalue le raisonnement verbal et quantitatif.",
     true
    ]
   ],
   "e": "Il est utilisé pour l'admission à des études supérieures.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Tests d'acquis et d'aptitudes spécifiques",
   "q": "À propos des Measures of Musical Talents de Seashore :",
   "a": [
    [
     "Elles évaluent le raisonnement mathématique.",
     false
    ],
    [
     "Elles datent de 1919.",
     true
    ],
    [
     "Elles évaluent des capacités de discrimination, par exemple de hauteur ou de rythme.",
     true
    ]
   ],
   "e": "Elles mesurent surtout la perception auditive de base.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Tests de langue",
   "q": "À propos du TCF et du TEF :",
   "a": [
    [
     "Ce sont des tests d'évaluation du niveau de français.",
     true
    ],
    [
     "Ils sont utilisés notamment pour des démarches d'études ou d'immigration.",
     true
    ],
    [
     "Ils évaluent les aptitudes mécaniques.",
     false
    ]
   ],
   "e": "Les résultats sont exprimés selon les niveaux du CECRL.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Aptitudes scolaires",
   "q": "À propos du KTEA (Kaufman Test of Educational Achievement) :",
   "a": [
    [
     "Il évalue aussi le langage écrit et oral.",
     true
    ],
    [
     "Il évalue des acquis scolaires, comme la lecture et les mathématiques.",
     true
    ],
    [
     "Il évalue la personnalité.",
     false
    ]
   ],
   "e": "Il est utilisé dans les bilans d'apprentissage.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Tests de lecture",
   "q": "À propos du TOWRE (Test of Word Reading Efficiency) :",
   "a": [
    [
     "Il évalue l'efficacité de lecture de mots.",
     true
    ],
    [
     "Il évalue le raisonnement abstrait.",
     false
    ],
    [
     "Il comprend la lecture de mots irréguliers et de pseudo-mots.",
     true
    ]
   ],
   "e": "Chaque épreuve est limitée dans le temps, ce qui mesure la fluence.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Langage et lecture",
   "q": "À propos de la Neale Analysis of Reading Ability :",
   "a": [
    [
     "Elle évalue les aptitudes numériques.",
     false
    ],
    [
     "Elle évalue la lecture orale de textes.",
     true
    ],
    [
     "On y mesure la précision et la compréhension.",
     true
    ]
   ],
   "e": "Le sujet lit des textes de difficulté croissante.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Mathématiques et échelles françaises",
   "q": "À propos du TEDI-MATH :",
   "a": [
    [
     "Il évalue des compétences de base en mathématiques chez l'enfant.",
     true
    ],
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Il est d'origine francophone.",
     true
    ]
   ],
   "e": "Il explore le dénombrement, la numération et le calcul.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Attention et vitesse",
   "q": "À propos du test de Stroop :",
   "a": [
    [
     "Il mesure la mémoire à long terme.",
     false
    ],
    [
     "Il mesure l'attention sélective et la capacité d'inhibition.",
     true
    ],
    [
     "Nommer la couleur de l'encre est plus lent quand le mot désigne une autre couleur.",
     true
    ]
   ],
   "e": "Lire le mot est automatique : il faut l'inhiber pour nommer la couleur, ce qui crée de l'interférence.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Attention et vitesse",
   "q": "À propos de la mémoire de travail :",
   "a": [
    [
     "L'empan de chiffres évalue la mémoire verbale à court terme.",
     true
    ],
    [
     "Les blocs de Corsi sont un test de personnalité.",
     false
    ],
    [
     "Les blocs de Corsi évaluent la mémoire visuo-spatiale.",
     true
    ]
   ],
   "e": "Dans le test de Corsi, on reproduit une séquence de blocs touchés par l'examinateur.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Attention et vitesse",
   "q": "À propos du compromis vitesse-précision :",
   "a": [
    [
     "La vitesse et la précision sont toujours indépendantes.",
     false
    ],
    [
     "Un test chronométré peut désavantager une personne très anxieuse.",
     true
    ],
    [
     "Aller plus vite fait souvent augmenter le nombre d'erreurs.",
     true
    ]
   ],
   "e": "Dans bien des épreuves, gagner en vitesse se paie en précision.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tests d'attention (SDMT, PASAT, Ruff)",
   "q": "À propos du Symbol Digit Modalities Test (SDMT) :",
   "a": [
    [
     "Il évalue la vitesse de traitement de l'information.",
     true
    ],
    [
     "Il dure 90 secondes.",
     true
    ],
    [
     "Il évalue la mémoire des visages.",
     false
    ]
   ],
   "e": "Le sujet associe des chiffres à des symboles selon une clé.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tests d'attention",
   "q": "À propos du TOVA (Test of Variables of Attention) :",
   "a": [
    [
     "C'est un test de performance continue informatisé.",
     true
    ],
    [
     "Il évalue le raisonnement verbal.",
     false
    ],
    [
     "Il est utilisé dans l'évaluation du TDAH.",
     true
    ]
   ],
   "e": "Il mesure l'attention soutenue et l'impulsivité.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de la SART (Sustained Attention to Response Task) :",
   "a": [
    [
     "Le sujet répond à presque tous les chiffres, sauf à un chiffre cible.",
     true
    ],
    [
     "Les erreurs de commission reflètent des lapsus d'attention.",
     true
    ],
    [
     "Elle évalue la dextérité manuelle.",
     false
    ]
   ],
   "e": "Robertson et ses collègues l'ont proposée en 1997.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de la tâche de signal d'arrêt (stop-signal) :",
   "a": [
    [
     "Elle évalue la compréhension verbale.",
     false
    ],
    [
     "Logan et Cowan l'ont décrite en 1984.",
     true
    ],
    [
     "Elle évalue la capacité d'inhiber une réponse déjà initiée.",
     true
    ]
   ],
   "e": "Un signal d'arrêt apparaît après le stimulus, et le sujet doit retenir sa réponse.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de l'Attention Network Test (ANT) :",
   "a": [
    [
     "Il évalue trois réseaux : alerte, orientation et contrôle exécutif.",
     true
    ],
    [
     "Fan et ses collègues l'ont proposé en 2002.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ]
   ],
   "e": "Il combine une tâche d'indiçage et une tâche de Flanker.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Mémoire",
   "q": "À propos de l'empan mnésique :",
   "a": [
    [
     "Miller a décrit une capacité d'environ 7 ± 2 éléments.",
     true
    ],
    [
     "Le regroupement (chunking) permet de retenir davantage.",
     true
    ],
    [
     "Miller est l'auteur du test de Rorschach.",
     false
    ]
   ],
   "e": "Regrouper des chiffres par paquets facilite la mémorisation.",
   "p": "Mémoire"
  },
  {
   "s": "Tests de mémoire",
   "q": "À propos du Benton Visual Retention Test :",
   "a": [
    [
     "Il évalue l'attention auditive.",
     false
    ],
    [
     "Il évalue la mémoire visuelle et la perception visuo-spatiale.",
     true
    ],
    [
     "Il comprend 10 figures à reproduire.",
     true
    ]
   ],
   "e": "Le sujet regarde chaque figure quelques secondes, puis la dessine de mémoire.",
   "p": "Mémoire"
  },
  {
   "s": "Tests de mémoire",
   "q": "À propos du Hopkins Verbal Learning Test (HVLT-R) :",
   "a": [
    [
     "La liste comporte 12 mots.",
     true
    ],
    [
     "Il comprend trois essais d'apprentissage.",
     true
    ],
    [
     "La liste comporte 50 mots.",
     false
    ]
   ],
   "e": "Il inclut aussi un rappel différé et une reconnaissance.",
   "p": "Mémoire"
  },
  {
   "s": "Mémoire et développement de l'enfant",
   "q": "À propos des échelles de Griffiths :",
   "a": [
    [
     "Elles évaluent le développement du jeune enfant.",
     true
    ],
    [
     "Elles explorent notamment le langage et la coordination oeil-main.",
     true
    ],
    [
     "Elles évaluent la personnalité de l'adulte.",
     false
    ]
   ],
   "e": "Elles sont utilisées pour repérer des retards de développement.",
   "p": "Mémoire"
  },
  {
   "s": "Mémoire",
   "q": "À propos du Recognition Memory Test de Warrington :",
   "a": [
    [
     "Le sujet choisit entre deux options.",
     true
    ],
    [
     "Il comprend des mots et des visages.",
     true
    ],
    [
     "Il évalue la dextérité.",
     false
    ]
   ],
   "e": "Il évalue la mémoire de reconnaissance.",
   "p": "Mémoire"
  },
  {
   "s": "Wisconsin Card Sorting Test",
   "q": "À propos de l'usage du WCST :",
   "a": [
    [
     "Il est un test de personnalité.",
     false
    ],
    [
     "Il a été utilisé en neuropsychologie pour explorer le fonctionnement frontal.",
     true
    ],
    [
     "Il a été introduit par Berg en 1948.",
     true
    ]
   ],
   "e": "Le WCST est une épreuve cognitive, pas un questionnaire.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Fonctions exécutives",
   "q": "À propos de l'Iowa Gambling Task (Bechara) :",
   "a": [
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il comporte quatre paquets de cartes.",
     true
    ],
    [
     "Il évalue la prise de décision en situation d'incertitude.",
     true
    ]
   ],
   "e": "Certains paquets rapportent beaucoup mais font perdre davantage à long terme.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Fonctions exécutives",
   "q": "À propos du test de Hayling (Burgess et Shallice) :",
   "a": [
    [
     "Le sujet complète des phrases dont il manque le dernier mot.",
     true
    ],
    [
     "Dans la seconde partie, il doit donner un mot sans rapport avec la phrase.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ]
   ],
   "e": "Il évalue l'initiation et surtout l'inhibition de réponses automatiques.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Fonctions exécutives de l'enfant",
   "q": "À propos de la tâche Jour-Nuit de Stroop pour enfants :",
   "a": [
    [
     "Elle évalue la lecture.",
     false
    ],
    [
     "Elle évalue le contrôle de l'inhibition.",
     true
    ],
    [
     "L'enfant dit « nuit » devant un soleil et « jour » devant une lune.",
     true
    ]
   ],
   "e": "Elle est accessible à de jeunes enfants qui ne lisent pas encore.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Tests de dextérité",
   "q": "À propos de la cotation du Purdue Pegboard :",
   "a": [
    [
     "On compte le nombre de chevilles placées dans un temps limité.",
     true
    ],
    [
     "Il comprend aussi une épreuve d'assemblage.",
     true
    ],
    [
     "Il se cote sur un barème de QI.",
     false
    ]
   ],
   "e": "Les épreuves principales durent 30 secondes, et l'assemblage dure plus longtemps.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Tests neuropsychologiques spécifiques",
   "q": "À propos du test de jugement d'orientation de lignes de Benton :",
   "a": [
    [
     "Il évalue la mémoire des mots.",
     false
    ],
    [
     "Le sujet associe l'orientation de lignes à un modèle en éventail.",
     true
    ],
    [
     "Il évalue la perception visuo-spatiale.",
     true
    ]
   ],
   "e": "Il comporte 30 items.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries neuropsychologiques",
   "q": "À propos du test de tapotement digital (Finger Tapping) :",
   "a": [
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il évalue la vitesse motrice fine.",
     true
    ],
    [
     "Le sujet tapote le plus vite possible avec un doigt.",
     true
    ]
   ],
   "e": "Il fait partie de la batterie de Halstead-Reitan.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries neuropsychologiques",
   "q": "À propos de la Western Aphasia Battery (WAB) :",
   "a": [
    [
     "Elle évalue l'aphasie.",
     true
    ],
    [
     "Elle évalue les intérêts professionnels.",
     false
    ],
    [
     "Elle fournit un quotient d'aphasie.",
     true
    ]
   ],
   "e": "Elle a été proposée par Kertesz.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Tests moteurs",
   "q": "À propos du Movement ABC-2 :",
   "a": [
    [
     "Il évalue la coordination motrice de l'enfant.",
     true
    ],
    [
     "Il est utilisé dans le repérage du trouble de l'acquisition de la coordination.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ]
   ],
   "e": "Il explore la dextérité manuelle, la visée et l'équilibre.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries informatisées",
   "q": "À propos du Vienna Test System :",
   "a": [
    [
     "Il se passe uniquement sur papier.",
     false
    ],
    [
     "C'est un système de tests psychologiques informatisés.",
     true
    ],
    [
     "Il est largement utilisé pour des applications de transport et de sélection.",
     true
    ]
   ],
   "e": "Il est édité par Schuhfried.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries informatisées",
   "q": "À propos de Cogstate :",
   "a": [
    [
     "Elle est utilisée en recherche clinique.",
     true
    ],
    [
     "C'est une batterie informatisée de tests cognitifs.",
     true
    ],
    [
     "Elle évalue les traits de personnalité.",
     false
    ]
   ],
   "e": "Ses épreuves sont brèves et conçues pour être répétées.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Praxies et latéralité",
   "q": "À propos des tests de dominance latérale de Harris :",
   "a": [
    [
     "Ils évaluent la préférence manuelle, oculaire et pédestre.",
     true
    ],
    [
     "Ils évaluent les aptitudes numériques.",
     false
    ],
    [
     "Ils s'utilisent notamment chez l'enfant.",
     true
    ]
   ],
   "e": "Ils déterminent la latéralité de façon plus complète que la seule main.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Vocabulaire du WAIS-IV :",
   "a": [
    [
     "Il évalue la mémoire visuelle.",
     false
    ],
    [
     "Le sujet définit des mots.",
     true
    ],
    [
     "Il évalue les connaissances lexicales et l'expression verbale.",
     true
    ]
   ],
   "e": "Les définitions sont cotées selon leur précision.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Balances du WAIS-IV :",
   "a": [
    [
     "Il présente des balances avec des formes et demande de trouver la forme manquante.",
     true
    ],
    [
     "Il évalue le raisonnement quantitatif.",
     true
    ],
    [
     "Il évalue la mémoire des mots.",
     false
    ]
   ],
   "e": "Il est un sous-test complémentaire du raisonnement perceptif.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Séquence lettres-chiffres du WAIS-IV :",
   "a": [
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Le sujet remet en ordre des chiffres et des lettres entendus.",
     true
    ],
    [
     "Il évalue la mémoire de travail.",
     true
    ]
   ],
   "e": "Il est un sous-test complémentaire de l'indice de mémoire de travail.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WISC-V et du SB5",
   "q": "À propos du sous-test Empan d'images du WISC-V :",
   "a": [
    [
     "Le sujet retient des images et les retrouve dans l'ordre ou non.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il évalue la mémoire de travail visuelle.",
     true
    ]
   ],
   "e": "Il a été introduit avec le WISC-V.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 2, 6, 18, 54, …",
   "a": [
    [
     "La série est géométrique.",
     true
    ],
    [
     "Le terme suivant est 162.",
     true
    ],
    [
     "Le terme suivant est 108.",
     false
    ],
    [
     "La raison de la série est +4.",
     false
    ]
   ],
   "e": "Chaque terme est multiplié par 3 : 54 × 3 = 162. Les écarts (+4, +12, +36) ne sont pas constants, donc ce n'est pas une série arithmétique.",
   "p": "Séries logiques"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Calcul de pourcentage : 20 % de 150.",
   "a": [
    [
     "20 % de 150 est égal à 20.",
     false
    ],
    [
     "20 % de 150 est égal à 30.",
     true
    ],
    [
     "Prendre 20 % revient à diviser par 5.",
     true
    ]
   ],
   "e": "20 % = 1/5. Donc 150 ÷ 5 = 30.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « chaud est à froid comme grand est à petit ».",
   "a": [
    [
     "La relation est une relation de synonymie.",
     false
    ],
    [
     "La relation est une relation de contraire.",
     true
    ],
    [
     "« Jour est à nuit » exprime la même relation.",
     true
    ]
   ],
   "e": "Chaud/froid et grand/petit sont des paires d'antonymes. Jour/nuit en est une aussi.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Logique déductive",
   "q": "Prémisses : « Tous les A sont B » et « Tous les B sont C ».",
   "a": [
    [
     "On peut conclure qu'aucun A n'est C.",
     false
    ],
    [
     "On peut conclure que tous les A sont C.",
     true
    ],
    [
     "On peut conclure que tous les C sont A.",
     false
    ]
   ],
   "e": "Le syllogisme est valide : A est inclus dans B, qui est inclus dans C. La réciproque (tous les C sont A) n'est pas démontrée.",
   "p": "Logique et déduction"
  },
  {
   "s": "Matrices progressives",
   "q": "À propos des matrices progressives de Raven :",
   "a": [
    [
     "Elles évaluent le raisonnement non verbal.",
     true
    ],
    [
     "Elles sont conçues pour limiter l'influence de la langue.",
     true
    ],
    [
     "Elles exigent une très bonne maîtrise du français écrit.",
     false
    ]
   ],
   "e": "Le test présente des figures à compléter. Il repose sur des formes, ce qui réduit le poids de la langue.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 1, 4, 9, 16, 25, …",
   "a": [
    [
     "Le terme suivant est 36.",
     true
    ],
    [
     "L'écart entre deux termes consécutifs est constant.",
     false
    ],
    [
     "Les termes sont des carrés parfaits.",
     true
    ]
   ],
   "e": "Ce sont les carrés de 1, 2, 3, 4, 5… donc le suivant est 6² = 36. Les écarts (3, 5, 7, 9) augmentent de 2 à chaque fois.",
   "p": "Séries logiques"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Un train parcourt 180 km en 3 heures à vitesse constante.",
   "a": [
    [
     "En 5 heures, il parcourt 300 km.",
     true
    ],
    [
     "Sa vitesse moyenne est de 90 km/h.",
     false
    ],
    [
     "Sa vitesse moyenne est de 60 km/h.",
     true
    ]
   ],
   "e": "Vitesse = distance ÷ temps = 180 ÷ 3 = 60 km/h. En 5 h : 60 × 5 = 300 km.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « médecin est à hôpital comme enseignant est à … ».",
   "a": [
    [
     "« École » complète correctement l'analogie.",
     true
    ],
    [
     "« Stylo » complète correctement l'analogie.",
     false
    ],
    [
     "La relation est « profession – lieu de travail ».",
     true
    ]
   ],
   "e": "Le médecin travaille à l'hôpital, l'enseignant à l'école. Le stylo est un outil, pas un lieu.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement spatial",
   "q": "À propos d'un cube :",
   "a": [
    [
     "Il possède 10 sommets.",
     false
    ],
    [
     "Il possède 12 arêtes.",
     true
    ],
    [
     "Il possède 6 faces.",
     true
    ]
   ],
   "e": "Un cube a 6 faces, 12 arêtes et 8 sommets.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Attention et vitesse",
   "q": "À propos d'un test de barrage (rayer des cibles parmi des distracteurs) :",
   "a": [
    [
     "Il mesure la mémoire à long terme.",
     false
    ],
    [
     "Les omissions et les fausses alarmes peuvent être relevées.",
     true
    ],
    [
     "Il mesure l'attention soutenue et la vitesse de traitement.",
     true
    ]
   ],
   "e": "Ce type de test (par exemple le d2) évalue la concentration. On compte les cibles ratées (omissions) et les mauvaises cibles barrées (fausses alarmes).",
   "p": "Attention et vitesse"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 5, 10, 15, 20, …",
   "a": [
    [
     "Le terme suivant est 25.",
     true
    ],
    [
     "C'est une suite arithmétique de raison 5.",
     true
    ],
    [
     "Le terme suivant est 30.",
     false
    ]
   ],
   "e": "On ajoute 5 à chaque fois : 20 + 5 = 25.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 100, 90, 80, 70, …",
   "a": [
    [
     "La raison est −10.",
     true
    ],
    [
     "La série est croissante.",
     false
    ],
    [
     "Le terme suivant est 60.",
     true
    ]
   ],
   "e": "On retire 10 à chaque terme, donc la série est décroissante.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 1, 1, 2, 3, 5, 8, …",
   "a": [
    [
     "Le terme suivant est 13.",
     true
    ],
    [
     "Chaque terme est la somme des deux précédents.",
     true
    ],
    [
     "Le terme suivant est 11.",
     false
    ]
   ],
   "e": "C'est la suite de Fibonacci : 5 + 8 = 13.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série de lettres : A, C, E, G, …",
   "a": [
    [
     "On saute une lettre à chaque fois.",
     true
    ],
    [
     "La lettre suivante est H.",
     false
    ],
    [
     "La lettre suivante est I.",
     true
    ]
   ],
   "e": "A, (B), C, (D), E, (F), G, (H), I : on avance de deux lettres.",
   "p": "Séries logiques"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Calcul : 25 % de 80.",
   "a": [
    [
     "Prendre 25 % revient à diviser par 4.",
     true
    ],
    [
     "Le résultat est 20.",
     true
    ],
    [
     "Le résultat est 25.",
     false
    ]
   ],
   "e": "25 % = 1/4, et 80 ÷ 4 = 20.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Un article coûte 12 000 FC. Une réduction de 10 % est accordée.",
   "a": [
    [
     "Le prix final est de 11 000 FC.",
     false
    ],
    [
     "Le prix final est de 10 800 FC.",
     true
    ],
    [
     "La réduction est de 1 200 FC.",
     true
    ]
   ],
   "e": "10 % de 12 000 = 1 200. Prix final : 12 000 − 1 200 = 10 800 FC.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Moyenne des nombres 8, 12 et 10.",
   "a": [
    [
     "La somme est 30.",
     true
    ],
    [
     "La moyenne est 12.",
     false
    ],
    [
     "La moyenne est 10.",
     true
    ]
   ],
   "e": "(8 + 12 + 10) ÷ 3 = 30 ÷ 3 = 10.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Équation : 2x + 6 = 14.",
   "a": [
    [
     "2x est égal à 8.",
     true
    ],
    [
     "x est égal à 4.",
     true
    ],
    [
     "x est égal à 10.",
     false
    ]
   ],
   "e": "2x = 14 − 6 = 8, donc x = 4.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Une somme de 50 $ est partagée dans le rapport 3 : 2.",
   "a": [
    [
     "La plus grande part est de 30 $.",
     true
    ],
    [
     "Les deux parts sont égales à 25 $.",
     false
    ],
    [
     "La plus petite part est de 20 $.",
     true
    ]
   ],
   "e": "3 + 2 = 5 parts, soit 10 $ par part. D'où 30 $ et 20 $.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Un cycliste roule à 15 km/h à vitesse constante.",
   "a": [
    [
     "En 2 heures, il parcourt 30 km.",
     true
    ],
    [
     "En 2 heures, il parcourt 17 km.",
     false
    ],
    [
     "En 4 heures, il parcourt 60 km.",
     true
    ]
   ],
   "e": "Distance = vitesse × temps : 15 × 2 = 30 km ; 15 × 4 = 60 km.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Dans une classe de 120 élèves, 30 sont absents.",
   "a": [
    [
     "Les absents représentent 30 % de la classe.",
     false
    ],
    [
     "Les absents forment un quart de la classe.",
     true
    ],
    [
     "Les absents représentent 25 % de la classe.",
     true
    ]
   ],
   "e": "30 ÷ 120 = 0,25, soit 25 %.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Recherche de synonymes pour « rapide ».",
   "a": [
    [
     "« Lent » est un synonyme.",
     false
    ],
    [
     "« Prompt » est un synonyme.",
     true
    ],
    [
     "« Véloce » est un synonyme.",
     true
    ]
   ],
   "e": "« Lent » est le contraire de « rapide ».",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « oiseau est à voler comme poisson est à … ».",
   "a": [
    [
     "La relation est « animal – mode de déplacement ».",
     true
    ],
    [
     "« Marcher » complète l'analogie.",
     false
    ],
    [
     "« Nager » complète l'analogie.",
     true
    ]
   ],
   "e": "L'oiseau vole, le poisson nage. Marcher ne convient pas au poisson.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « stylo est à écrire comme couteau est à … ».",
   "a": [
    [
     "« Couper » complète l'analogie.",
     true
    ],
    [
     "« Manger » complète l'analogie.",
     false
    ],
    [
     "La relation est « outil – fonction ».",
     true
    ]
   ],
   "e": "Un stylo sert à écrire, un couteau sert à couper.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Recherche de contraires pour « généreux ».",
   "a": [
    [
     "« Avare » est un contraire.",
     true
    ],
    [
     "« Radin » est un contraire.",
     true
    ],
    [
     "« Charitable » est un contraire.",
     false
    ]
   ],
   "e": "« Charitable » est plutôt un synonyme de généreux.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « page est à livre comme roue est à voiture ».",
   "a": [
    [
     "La relation est une relation de contraire.",
     false
    ],
    [
     "La relation est « partie – tout ».",
     true
    ],
    [
     "« Moteur est à voiture » exprime la même relation.",
     true
    ]
   ],
   "e": "La page fait partie du livre, la roue de la voiture, et le moteur aussi.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Phrase : « Aucun élève de la classe n'a échoué ».",
   "a": [
    [
     "Au moins un élève a échoué.",
     false
    ],
    [
     "Tous les élèves ont réussi.",
     true
    ],
    [
     "Il est possible que certains élèves aient échoué.",
     false
    ]
   ],
   "e": "Si aucun n'a échoué, alors tous ont réussi.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Logique déductive",
   "q": "Prémisses : « Tous les chats sont des animaux » et « Minou est un chat ».",
   "a": [
    [
     "Minou est un animal.",
     true
    ],
    [
     "Tous les animaux sont des chats.",
     false
    ],
    [
     "Minou n'est pas un animal.",
     false
    ]
   ],
   "e": "Minou appartient aux chats, qui sont inclus dans les animaux.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "Prémisses : « Certains A sont B » et « Tous les B sont C ».",
   "a": [
    [
     "Tous les A sont C.",
     false
    ],
    [
     "Certains A sont C.",
     true
    ],
    [
     "Aucun A n'est C.",
     false
    ]
   ],
   "e": "Les A qui sont B sont forcément C, mais on ne sait rien des autres A.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "Jean est plus grand que Paul. Paul est plus grand que Marc.",
   "a": [
    [
     "Marc est le plus grand des trois.",
     false
    ],
    [
     "Paul est de taille intermédiaire.",
     true
    ],
    [
     "Jean est plus grand que Marc.",
     true
    ]
   ],
   "e": "L'ordre est Jean > Paul > Marc.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "Prémisses : « Aucun médecin n'est ignorant en anatomie » et « Paul est ignorant en anatomie ».",
   "a": [
    [
     "Certains ignorants en anatomie sont médecins.",
     false
    ],
    [
     "Paul n'est pas médecin.",
     true
    ],
    [
     "Paul est médecin.",
     false
    ]
   ],
   "e": "Si Paul était médecin, il ne serait pas ignorant en anatomie.",
   "p": "Logique et déduction"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Sur un dé standard, la somme des faces opposées est 7.",
   "a": [
    [
     "La face opposée au 3 porte le 3.",
     false
    ],
    [
     "La face opposée au 2 porte le 5.",
     true
    ],
    [
     "La face opposée au 1 porte le 6.",
     true
    ]
   ],
   "e": "Les paires sont 1-6, 2-5 et 3-4.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Image dans un miroir (inversion gauche-droite).",
   "a": [
    [
     "La lettre « p » devient « q ».",
     true
    ],
    [
     "La lettre « b » devient « d ».",
     true
    ],
    [
     "La lettre « b » reste inchangée.",
     false
    ]
   ],
   "e": "Le miroir vertical inverse la gauche et la droite : la panse du « b » passe de l'autre côté.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Une feuille est pliée en deux, puis on perce un trou près du pli, à travers les deux épaisseurs.",
   "a": [
    [
     "Une fois dépliée, la feuille a 2 trous.",
     true
    ],
    [
     "Une fois dépliée, la feuille a 1 seul trou.",
     false
    ],
    [
     "Les deux trous sont symétriques par rapport au pli.",
     true
    ]
   ],
   "e": "Chaque épaisseur est percée, et les deux trous se correspondent de part et d'autre du pli.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement spatial",
   "q": "À propos des patrons de cube :",
   "a": [
    [
     "Le patron « en croix » est un patron valide.",
     true
    ],
    [
     "Un patron de cube est formé de 6 carrés.",
     true
    ],
    [
     "Un patron de cube peut avoir 5 carrés.",
     false
    ]
   ],
   "e": "Un cube a 6 faces, il faut donc 6 carrés. La croix (4 carrés en ligne plus 2 sur les côtés) se replie bien en cube.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Matrices progressives",
   "q": "Pour résoudre une matrice de type Raven :",
   "a": [
    [
     "La réponse est choisie au hasard.",
     false
    ],
    [
     "Les règles peuvent être une rotation, une alternance ou une addition d'éléments.",
     true
    ],
    [
     "On cherche des règles par ligne et par colonne.",
     true
    ]
   ],
   "e": "Chaque matrice cache une ou plusieurs règles logiques à identifier.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Matrices progressives",
   "q": "À propos des Standard Progressive Matrices (SPM) :",
   "a": [
    [
     "La difficulté augmente au fil des items.",
     true
    ],
    [
     "Elles mesurent surtout le vocabulaire.",
     false
    ],
    [
     "Elles comprennent 60 items répartis en 5 séries, de A à E.",
     true
    ]
   ],
   "e": "Les SPM évaluent le raisonnement non verbal, avec des problèmes de plus en plus complexes.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Attention et vitesse",
   "q": "À propos du test d2 (Brickenkamp) :",
   "a": [
    [
     "Le sujet barre les « d » accompagnés de deux traits.",
     true
    ],
    [
     "C'est une épreuve de concentration.",
     true
    ],
    [
     "Il évalue les traits de personnalité.",
     false
    ]
   ],
   "e": "Le d2 est un test de barrage mesurant l'attention soutenue et la vitesse.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Attention et vitesse",
   "q": "À propos de l'empan de chiffres :",
   "a": [
    [
     "La répétition à l'envers sollicite davantage la mémoire de travail.",
     true
    ],
    [
     "Il mesure la force musculaire.",
     false
    ],
    [
     "Il sollicite l'attention et la mémoire à court terme.",
     true
    ]
   ],
   "e": "Répéter des chiffres à l'envers demande de les maintenir et de les manipuler mentalement.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Un rectangle mesure 12 m sur 5 m.",
   "a": [
    [
     "Son aire est de 17 m².",
     false
    ],
    [
     "Son périmètre est de 34 m.",
     true
    ],
    [
     "Son aire est de 60 m².",
     true
    ]
   ],
   "e": "Aire = 12 × 5 = 60 m². Périmètre = 2 × (12 + 5) = 34 m.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Placement de 1 000 $ à 5 % par an, à intérêt simple, pendant 2 ans.",
   "a": [
    [
     "Les intérêts totaux sont de 50 $.",
     false
    ],
    [
     "Les intérêts totaux sont de 100 $.",
     true
    ],
    [
     "Le capital final est de 1 100 $.",
     true
    ]
   ],
   "e": "5 % de 1 000 = 50 $ par an, soit 100 $ en 2 ans.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Équation : 3x − 5 = 16.",
   "a": [
    [
     "3x est égal à 21.",
     true
    ],
    [
     "x est égal à 9.",
     false
    ],
    [
     "x est égal à 7.",
     true
    ]
   ],
   "e": "3x = 16 + 5 = 21, donc x = 7.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Un prix passe de 200 à 250.",
   "a": [
    [
     "Si le prix repasse de 250 à 200, la baisse est de 20 %.",
     true
    ],
    [
     "La hausse est de 25 %.",
     true
    ],
    [
     "La hausse est de 50 %.",
     false
    ]
   ],
   "e": "50 ÷ 200 = 25 %. Pour la baisse, 50 ÷ 250 = 20 %.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "On lance un dé équilibré à six faces.",
   "a": [
    [
     "La probabilité d'obtenir 6 est de 1/6.",
     true
    ],
    [
     "La probabilité d'obtenir un nombre supérieur à 4 est de 1/2.",
     false
    ],
    [
     "La probabilité d'obtenir un nombre pair est de 1/2.",
     true
    ]
   ],
   "e": "Supérieur à 4 : 5 ou 6, soit 2 chances sur 6 = 1/3.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Une note de 10 a pour coefficient 1, une note de 16 a pour coefficient 2.",
   "a": [
    [
     "La moyenne simple est de 13.",
     true
    ],
    [
     "La moyenne pondérée est de 13.",
     false
    ],
    [
     "La moyenne pondérée est de 14.",
     true
    ]
   ],
   "e": "Pondérée : (10 × 1 + 16 × 2) ÷ 3 = 42 ÷ 3 = 14.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Racines carrées.",
   "a": [
    [
     "√81 est égal à 9.",
     true
    ],
    [
     "√49 est égal à 7.",
     true
    ],
    [
     "√16 est égal à 5.",
     false
    ]
   ],
   "e": "√16 = 4, car 4 × 4 = 16.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Deux robinets identiques remplissent chacun une cuve en 4 heures.",
   "a": [
    [
     "Ensemble, ils la remplissent en 8 heures.",
     false
    ],
    [
     "Ensemble, ils la remplissent en 2 heures.",
     true
    ],
    [
     "Chaque robinet remplit 1/4 de la cuve par heure.",
     true
    ]
   ],
   "e": "Ensemble : 1/4 + 1/4 = 1/2 de cuve par heure, donc 2 heures.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 2, 3, 5, 7, 11, …",
   "a": [
    [
     "Le terme suivant est 13.",
     true
    ],
    [
     "Ce sont des nombres premiers consécutifs.",
     true
    ],
    [
     "Le terme suivant est 12.",
     false
    ]
   ],
   "e": "12 est divisible par 2, 3, 4 et 6 : il n'est pas premier.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 1, 3, 6, 10, 15, …",
   "a": [
    [
     "Le terme suivant est 21.",
     true
    ],
    [
     "L'écart entre deux termes augmente de 1 à chaque fois.",
     true
    ],
    [
     "Le terme suivant est 20.",
     false
    ]
   ],
   "e": "Les écarts sont 2, 3, 4, 5, puis 6 : 15 + 6 = 21.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série de lettres : J, F, M, A, M, …",
   "a": [
    [
     "La lettre suivante est J.",
     true
    ],
    [
     "La lettre suivante est A.",
     false
    ],
    [
     "Ce sont les initiales des mois de l'année.",
     true
    ]
   ],
   "e": "Janvier, février, mars, avril, mai, puis juin : J.",
   "p": "Séries logiques"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « Kinshasa est à RDC comme Brazzaville est à … ».",
   "a": [
    [
     "« République du Congo » complète l'analogie.",
     true
    ],
    [
     "Brazzaville est la capitale de l'Angola.",
     false
    ],
    [
     "Kinshasa est la capitale de la RDC.",
     true
    ]
   ],
   "e": "Brazzaville est la capitale de la République du Congo.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Trouvez l'intrus : rouge, bleu, vert, carré.",
   "a": [
    [
     "Le critère est « couleur ou forme ».",
     true
    ],
    [
     "« Vert » est l'intrus.",
     false
    ],
    [
     "« Carré » est l'intrus.",
     true
    ]
   ],
   "e": "Rouge, bleu et vert sont des couleurs. Le carré est une forme.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Phrase : « Il a étudié sérieusement, … il a réussi son examen ».",
   "a": [
    [
     "La relation exprimée est une relation de cause à conséquence.",
     true
    ],
    [
     "« Donc » convient pour relier les deux idées.",
     true
    ],
    [
     "« Pourtant » convient pour relier les deux idées.",
     false
    ]
   ],
   "e": "Étudier est la cause, réussir est la conséquence. « Pourtant » exprimerait une opposition.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Définitions de mots.",
   "a": [
    [
     "« Édifier » signifie construire.",
     true
    ],
    [
     "« Rédiger » signifie écrire un texte.",
     true
    ],
    [
     "« Dilapider » signifie économiser.",
     false
    ]
   ],
   "e": "« Dilapider » signifie dépenser de façon excessive, gaspiller.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Paronymes : « éminent » et « imminent ».",
   "a": [
    [
     "« Imminent » signifie qui va se produire très bientôt.",
     true
    ],
    [
     "Ce sont des paronymes (mots proches par la forme).",
     true
    ],
    [
     "« Éminent » signifie qui va se produire très bientôt.",
     false
    ]
   ],
   "e": "« Éminent » qualifie une personne distinguée, d'un rang élevé.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « médecin est à malade comme enseignant est à … ».",
   "a": [
    [
     "La relation est une relation de contraire.",
     false
    ],
    [
     "La relation est « professionnel – bénéficiaire ».",
     true
    ],
    [
     "« Élève » complète l'analogie.",
     true
    ]
   ],
   "e": "Le médecin soigne le malade, l'enseignant forme l'élève.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Logique déductive",
   "q": "Prémisses : « Tous les carrés sont des rectangles » et « ABCD est un rectangle ».",
   "a": [
    [
     "Tous les rectangles sont des carrés.",
     false
    ],
    [
     "ABCD est un carré.",
     false
    ],
    [
     "On ne peut pas conclure que ABCD est un carré.",
     true
    ]
   ],
   "e": "Un rectangle n'est pas toujours un carré : l'inclusion ne va que dans un sens.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "Marie est soit à l'école, soit à la maison (jamais aux deux). Elle n'est pas à l'école.",
   "a": [
    [
     "Elle est à la maison.",
     true
    ],
    [
     "Elle est à la fois à l'école et à la maison.",
     false
    ],
    [
     "On ne peut rien conclure.",
     false
    ]
   ],
   "e": "Un « ou » exclusif ne laisse que la seconde possibilité.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "Prémisse : « Tous les médecins ont étudié la médecine ».",
   "a": [
    [
     "Si Pierre n'a pas étudié la médecine, il n'est pas médecin.",
     true
    ],
    [
     "Si Pierre a étudié la médecine, il est forcément médecin.",
     false
    ],
    [
     "Tous les médecins ont étudié la médecine.",
     true
    ]
   ],
   "e": "On peut avoir étudié la médecine sans être médecin : la réciproque n'est pas valable.",
   "p": "Logique et déduction"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Vous regardez vers le nord, puis vous tournez de 90° vers la droite.",
   "a": [
    [
     "Vous regardez vers l'est.",
     true
    ],
    [
     "Après un nouveau quart de tour à droite, vous regardez vers le sud.",
     true
    ],
    [
     "Après le premier quart de tour, vous regardez vers l'ouest.",
     false
    ]
   ],
   "e": "Nord, puis est, puis sud, puis ouest : on tourne dans le sens des aiguilles d'une montre.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Un cylindre est posé sur sa base.",
   "a": [
    [
     "Vu de dessus, il apparaît comme un cercle.",
     true
    ],
    [
     "Vu de dessus, il apparaît comme un carré.",
     false
    ],
    [
     "Vu de côté, il apparaît comme un rectangle.",
     true
    ]
   ],
   "e": "La base est circulaire, et la hauteur donne un rectangle de profil.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Attention et vitesse",
   "q": "À propos du Trail Making Test :",
   "a": [
    [
     "La partie B alterne chiffres et lettres.",
     true
    ],
    [
     "La partie A consiste à relier des nombres dans l'ordre.",
     true
    ],
    [
     "Il mesure les traits de personnalité.",
     false
    ]
   ],
   "e": "Il évalue la vitesse de traitement, l'attention et la flexibilité mentale.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Attention et vitesse",
   "q": "À propos des temps de réaction :",
   "a": [
    [
     "Un temps de réaction simple est en général plus court qu'un temps de réaction de choix.",
     true
    ],
    [
     "Selon la loi de Hick, le temps augmente avec le nombre d'alternatives.",
     true
    ],
    [
     "Le temps de réaction diminue quand on ajoute des alternatives.",
     false
    ]
   ],
   "e": "Plus il y a de choix possibles, plus la décision prend du temps.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Matrices progressives",
   "q": "Dans une matrice, chaque ligne contient un cercle, un carré et un triangle, dans un ordre différent.",
   "a": [
    [
     "La figure manquante est celle qui complète les trois formes de la ligne.",
     true
    ],
    [
     "Les formes ne se répètent pas dans une même ligne.",
     true
    ],
    [
     "On trouve la réponse en regardant la taille du cadre.",
     false
    ]
   ],
   "e": "C'est une règle de distribution de trois valeurs.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Matrices progressives",
   "q": "À propos des versions des matrices de Raven :",
   "a": [
    [
     "Les SPM (standard) s'adressent à une large population.",
     true
    ],
    [
     "Les CPM (colorées) s'adressent aux enfants.",
     true
    ],
    [
     "Les APM (avancées) s'adressent aux jeunes enfants.",
     false
    ]
   ],
   "e": "Les APM sont conçues pour les adultes de niveau élevé.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Interprétation de données",
   "q": "Ventes d'une boutique : lundi 20, mardi 30, mercredi 25, jeudi 45.",
   "a": [
    [
     "La moyenne par jour est de 30.",
     true
    ],
    [
     "Le jour de plus forte vente est le mardi.",
     false
    ],
    [
     "Le total des ventes est de 120.",
     true
    ]
   ],
   "e": "20 + 30 + 25 + 45 = 120, et 120 ÷ 4 = 30. La plus forte vente est celle de jeudi (45).",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Interprétation de données",
   "q": "Un revenu de 500 $ est réparti : 40 % logement, 30 % nourriture, 20 % transport, 10 % divers.",
   "a": [
    [
     "La nourriture représente 150 $.",
     true
    ],
    [
     "Le transport représente 120 $.",
     false
    ],
    [
     "Le logement représente 200 $.",
     true
    ]
   ],
   "e": "20 % de 500 = 100 $, et non 120 $.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Interprétation de données",
   "q": "Trois écoles : A compte 120 élèves, B en compte 80, C en compte 100.",
   "a": [
    [
     "Le total est de 300 élèves.",
     true
    ],
    [
     "L'école A représente 40 % du total.",
     true
    ],
    [
     "L'école B représente 30 % du total.",
     false
    ]
   ],
   "e": "80 ÷ 300 ≈ 26,7 %. Pour A : 120 ÷ 300 = 40 %.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Interprétation de données",
   "q": "Températures relevées : 6 h = 18 °C, 12 h = 26 °C, 18 h = 22 °C.",
   "a": [
    [
     "L'écart entre le maximum et le minimum est de 8 °C.",
     true
    ],
    [
     "La température la plus basse est relevée à 12 h.",
     false
    ],
    [
     "La température la plus haute est relevée à 12 h.",
     true
    ]
   ],
   "e": "26 − 18 = 8 °C. Le minimum est relevé à 6 h.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Interprétation de données",
   "q": "Sur 60 candidats, 45 ont réussi le test.",
   "a": [
    [
     "Le taux de réussite est de 80 %.",
     false
    ],
    [
     "Le taux de réussite est de 75 %.",
     true
    ],
    [
     "15 candidats ont échoué.",
     true
    ]
   ],
   "e": "45 ÷ 60 = 0,75 = 75 %.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Interprétation de données",
   "q": "Sur 200 candidats, 40 % réussissent l'épreuve A. Parmi eux, la moitié réussit aussi l'épreuve B.",
   "a": [
    [
     "40 candidats réussissent à la fois A et B.",
     true
    ],
    [
     "80 candidats réussissent l'épreuve A.",
     true
    ],
    [
     "100 candidats réussissent l'épreuve B.",
     false
    ]
   ],
   "e": "40 % de 200 = 80, puis la moitié de 80 = 40. On ne sait rien du nombre total de réussites à B.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Raisonnement abstrait",
   "q": "Un carré tourne de 45° à chaque étape.",
   "a": [
    [
     "Après 2 étapes, il a tourné de 90°.",
     true
    ],
    [
     "Après 4 étapes, il a tourné de 90°.",
     false
    ],
    [
     "Après 8 étapes, il a fait un tour complet.",
     true
    ]
   ],
   "e": "4 × 45° = 180°, et 8 × 45° = 360°.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raisonnement abstrait",
   "q": "Un symbole alterne : noir à l'étape 1, blanc à l'étape 2, noir à l'étape 3, etc.",
   "a": [
    [
     "À l'étape 6, il est noir.",
     false
    ],
    [
     "À l'étape 5, il est noir.",
     true
    ],
    [
     "À l'étape 4, il est blanc.",
     true
    ]
   ],
   "e": "Les étapes impaires sont noires, les étapes paires sont blanches.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raisonnement abstrait",
   "q": "Série de dominos : 1-2, 2-3, 3-4, …",
   "a": [
    [
     "Le domino suivant est 4-5.",
     true
    ],
    [
     "Le second nombre d'un domino devient le premier du suivant.",
     true
    ],
    [
     "Le domino suivant est 5-4.",
     false
    ]
   ],
   "e": "On enchaîne en gardant le même ordre : 4-5.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raisonnement abstrait",
   "q": "Axes de symétrie de figures.",
   "a": [
    [
     "Un carré a 4 axes de symétrie.",
     true
    ],
    [
     "Un triangle équilatéral a 3 axes de symétrie.",
     true
    ],
    [
     "Un cercle a 3 axes de symétrie.",
     false
    ]
   ],
   "e": "Un cercle a une infinité d'axes de symétrie.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raisonnement abstrait",
   "q": "Trouvez l'intrus : 2, 4, 6, 9, 10.",
   "a": [
    [
     "« 9 » est l'intrus.",
     true
    ],
    [
     "Le critère est « nombre pair ou impair ».",
     true
    ],
    [
     "« 10 » est l'intrus.",
     false
    ]
   ],
   "e": "9 est le seul nombre impair.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Problèmes de logique",
   "q": "Ali est plus âgé que Bob. Bob est plus âgé que Cleo. Dina est plus jeune que Cleo.",
   "a": [
    [
     "Ali est le plus âgé.",
     true
    ],
    [
     "Dina est la plus jeune.",
     true
    ],
    [
     "Bob est le plus âgé.",
     false
    ]
   ],
   "e": "L'ordre est Ali > Bob > Cleo > Dina.",
   "p": "Logique et déduction"
  },
  {
   "s": "Problèmes de logique",
   "q": "A dit : « Nous mentons tous les deux ». B ne dit rien.",
   "a": [
    [
     "A ne peut pas dire la vérité.",
     true
    ],
    [
     "B dit la vérité.",
     true
    ],
    [
     "Les deux mentent.",
     false
    ]
   ],
   "e": "Si A disait vrai, il mentirait : contradiction. Donc A ment, et sa phrase est fausse : B ne ment pas.",
   "p": "Logique et déduction"
  },
  {
   "s": "Problèmes de logique",
   "q": "Prémisses : « Aucun A n'est B » et « Tous les C sont B ».",
   "a": [
    [
     "Aucun C n'est A.",
     true
    ],
    [
     "Certains C sont A.",
     false
    ],
    [
     "Tous les A sont C.",
     false
    ]
   ],
   "e": "Les C sont dans B, et aucun A n'est dans B.",
   "p": "Logique et déduction"
  },
  {
   "s": "Problèmes de logique",
   "q": "« Après-demain, nous serons vendredi ».",
   "a": [
    [
     "Demain, nous serons jeudi.",
     true
    ],
    [
     "Aujourd'hui, nous sommes mercredi.",
     true
    ],
    [
     "Aujourd'hui, nous sommes jeudi.",
     false
    ],
    [
     "Hier, nous étions mardi.",
     true
    ]
   ],
   "e": "Vendredi moins deux jours = mercredi.",
   "p": "Logique et déduction"
  },
  {
   "s": "Problèmes de logique",
   "q": "Un homme dit : « Je n'ai ni frère ni sœur, mais le père de cet homme est le fils de mon père ».",
   "a": [
    [
     "Le fils de mon père, c'est lui-même.",
     true
    ],
    [
     "L'homme dont il parle est son fils.",
     true
    ],
    [
     "L'homme dont il parle est son frère.",
     false
    ]
   ],
   "e": "Sans frère, « le fils de mon père » ne peut être que lui.",
   "p": "Logique et déduction"
  },
  {
   "s": "Calcul mental",
   "q": "Tables de multiplication.",
   "a": [
    [
     "7 × 8 est égal à 56.",
     true
    ],
    [
     "8 × 8 est égal à 56.",
     false
    ],
    [
     "9 × 6 est égal à 54.",
     true
    ]
   ],
   "e": "8 × 8 = 64.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Calcul mental",
   "q": "Divisions de 144.",
   "a": [
    [
     "144 ÷ 8 est égal à 16.",
     false
    ],
    [
     "144 ÷ 12 est égal à 12.",
     true
    ],
    [
     "144 ÷ 9 est égal à 16.",
     true
    ]
   ],
   "e": "144 ÷ 8 = 18, et 144 ÷ 9 = 16.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Calcul mental",
   "q": "Additions et soustractions.",
   "a": [
    [
     "18 + 27 est égal à 45.",
     true
    ],
    [
     "100 − 37 est égal à 63.",
     true
    ],
    [
     "56 + 19 est égal à 76.",
     false
    ]
   ],
   "e": "56 + 19 = 75.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Calcul mental",
   "q": "Calculs rapides.",
   "a": [
    [
     "0,5 × 40 est égal à 20.",
     true
    ],
    [
     "10 % de 350 est égal à 35.",
     true
    ],
    [
     "0,25 × 40 est égal à 5.",
     false
    ]
   ],
   "e": "0,25 × 40 = 10.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement mécanique",
   "q": "À propos du levier :",
   "a": [
    [
     "Un levier permet de réduire la force à exercer.",
     true
    ],
    [
     "Un levier réduit toujours le travail à fournir.",
     false
    ],
    [
     "Plus le bras de levier est long, moins l'effort nécessaire est grand.",
     true
    ]
   ],
   "e": "Le levier réduit la force, mais pas le travail : on appuie sur une plus grande distance.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement mécanique",
   "q": "À propos des poulies :",
   "a": [
    [
     "Une poulie fixe divise la force par deux.",
     false
    ],
    [
     "Une poulie mobile réduit l'effort de moitié, dans le cas idéal.",
     true
    ],
    [
     "Une poulie fixe change la direction de la force.",
     true
    ]
   ],
   "e": "La poulie fixe ne réduit pas l'effort, elle le redirige.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement mécanique",
   "q": "À propos de la pression :",
   "a": [
    [
     "Pour une même force, une plus petite surface donne une plus grande pression.",
     true
    ],
    [
     "Une aiguille pénètre facilement parce que sa surface de contact est grande.",
     false
    ],
    [
     "La pression est égale à la force divisée par la surface.",
     true
    ]
   ],
   "e": "La pointe a une très petite surface, donc une très grande pression.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 2, 5, 10, 17, 26, …",
   "a": [
    [
     "Le terme suivant est 36.",
     false
    ],
    [
     "Les écarts sont 3, 5, 7, 9 : ils augmentent de 2.",
     true
    ],
    [
     "Le terme suivant est 37.",
     true
    ]
   ],
   "e": "26 + 11 = 37. Chaque terme est n² + 1.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 1, 2, 4, 7, 11, …",
   "a": [
    [
     "Les écarts augmentent de 1 à chaque fois.",
     true
    ],
    [
     "Le terme suivant est 16.",
     true
    ],
    [
     "Le terme suivant est 15.",
     false
    ]
   ],
   "e": "Les écarts sont 1, 2, 3, 4, puis 5 : 11 + 5 = 16.",
   "p": "Séries logiques"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « température est à thermomètre comme poids est à … ».",
   "a": [
    [
     "La relation est « grandeur – instrument de mesure ».",
     true
    ],
    [
     "« Balance » complète l'analogie.",
     true
    ],
    [
     "« Chronomètre » complète l'analogie.",
     false
    ]
   ],
   "e": "Le chronomètre mesure le temps, pas le poids.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Texte : « Le directeur a décidé de reporter la réunion en raison de l'absence de plusieurs membres ».",
   "a": [
    [
     "La réunion est reportée.",
     true
    ],
    [
     "La cause du report est l'absence de plusieurs membres.",
     true
    ],
    [
     "La réunion est annulée définitivement.",
     false
    ]
   ],
   "e": "« Reporter » veut dire déplacer à une date ultérieure.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Prémisses : « Tous les participants ont reçu un certificat » et « Awa a participé ».",
   "a": [
    [
     "Awa n'a pas reçu de certificat.",
     false
    ],
    [
     "Awa a reçu un certificat.",
     true
    ],
    [
     "Toute personne ayant un certificat a participé.",
     false
    ]
   ],
   "e": "Quelqu'un d'autre a pu recevoir un certificat sans participer : la réciproque n'est pas démontrée.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement numérique",
   "q": "2 kg de farine permettent de faire 12 pains.",
   "a": [
    [
     "5 kg permettent de faire 30 pains.",
     true
    ],
    [
     "30 pains demandent 6 kg.",
     false
    ],
    [
     "18 pains demandent 3 kg.",
     true
    ]
   ],
   "e": "6 pains par kg : 30 pains demandent 5 kg.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Notes : 12, 14, 16 et 18.",
   "a": [
    [
     "La moyenne est de 15.",
     true
    ],
    [
     "La médiane est de 15.",
     true
    ],
    [
     "La moyenne est de 16.",
     false
    ]
   ],
   "e": "60 ÷ 4 = 15. Médiane : (14 + 16) ÷ 2 = 15.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Interprétation de données",
   "q": "Production d'une usine : janvier 50, février 60, mars 45.",
   "a": [
    [
     "La moyenne mensuelle est de 50.",
     false
    ],
    [
     "Le mois de plus forte production est février.",
     true
    ],
    [
     "Le total est de 155.",
     true
    ]
   ],
   "e": "155 ÷ 3 ≈ 51,7, donc la moyenne n'est pas de 50.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Interprétation de données",
   "q": "Un chiffre d'affaires passe de 80 à 100.",
   "a": [
    [
     "La hausse est de 20 %.",
     false
    ],
    [
     "La hausse est de 20 unités.",
     true
    ],
    [
     "La hausse est de 25 %.",
     true
    ]
   ],
   "e": "20 ÷ 80 = 25 %. Le pourcentage se calcule par rapport à la valeur de départ.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Interprétation de données",
   "q": "Classe 1 : 20 élèves, moyenne 12. Classe 2 : 30 élèves, moyenne 14.",
   "a": [
    [
     "La moyenne simple des deux moyennes est de 13.",
     true
    ],
    [
     "La moyenne générale est de 13.",
     false
    ],
    [
     "La moyenne générale est de 13,2.",
     true
    ]
   ],
   "e": "(20 × 12 + 30 × 14) ÷ 50 = 660 ÷ 50 = 13,2. Les effectifs sont différents : il faut pondérer.",
   "p": "Tableaux et pourcentages"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Un père a 3 fois l'âge de son fils. La somme de leurs âges est 48.",
   "a": [
    [
     "Le fils a 16 ans.",
     false
    ],
    [
     "Le père a 36 ans.",
     true
    ],
    [
     "Le fils a 12 ans.",
     true
    ]
   ],
   "e": "4 parts = 48, donc 1 part = 12 ans pour le fils, et 36 ans pour le père.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Deux trains roulent l'un vers l'autre, à 60 km/h et 40 km/h. Ils sont à 300 km l'un de l'autre.",
   "a": [
    [
     "Ils se croisent après 5 heures.",
     false
    ],
    [
     "Leur vitesse de rapprochement est de 100 km/h.",
     true
    ],
    [
     "Ils se croisent après 3 heures.",
     true
    ]
   ],
   "e": "300 ÷ 100 = 3 heures.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Conversions d'unités de surface et de volume.",
   "a": [
    [
     "1 m² égale 100 cm².",
     false
    ],
    [
     "1 m² égale 10 000 cm².",
     true
    ],
    [
     "1 litre égale 1 000 mL.",
     true
    ]
   ],
   "e": "1 m = 100 cm, donc 1 m² = 100 × 100 = 10 000 cm².",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Pourcentages inversés.",
   "a": [
    [
     "Si 15 % de x égalent 30, alors x est égal à 200.",
     true
    ],
    [
     "Si 10 % de x égalent 20, alors x est égal à 200.",
     true
    ],
    [
     "Si 15 % de x égalent 30, alors x est égal à 450.",
     false
    ]
   ],
   "e": "30 ÷ 0,15 = 200.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Fractions d'un nombre.",
   "a": [
    [
     "Le 1/4 de 80 vaut 20.",
     true
    ],
    [
     "Les 3/5 de 50 valent 35.",
     false
    ],
    [
     "Les 2/3 de 90 valent 60.",
     true
    ]
   ],
   "e": "3/5 de 50 = 50 ÷ 5 × 3 = 30.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement numérique",
   "q": "Deux nombres vérifient x + y = 10 et x − y = 2.",
   "a": [
    [
     "x est égal à 4.",
     false
    ],
    [
     "x est égal à 6.",
     true
    ],
    [
     "y est égal à 4.",
     true
    ]
   ],
   "e": "En additionnant : 2x = 12, donc x = 6 et y = 4.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « pluie est à parapluie comme soleil est à … ».",
   "a": [
    [
     "« Parasol » complète l'analogie.",
     true
    ],
    [
     "La relation est « phénomène – protection ».",
     true
    ],
    [
     "« Tempête » complète l'analogie.",
     false
    ]
   ],
   "e": "Le parapluie protège de la pluie, le parasol protège du soleil.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Phrase : « Malgré la fatigue, il a terminé le travail ».",
   "a": [
    [
     "Il n'a pas terminé le travail.",
     false
    ],
    [
     "Il a terminé le travail.",
     true
    ],
    [
     "Il était fatigué.",
     true
    ]
   ],
   "e": "« Malgré » exprime une opposition : la fatigue n'a pas empêché de finir.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Sens de proverbes.",
   "a": [
    [
     "« Petit à petit, l'oiseau fait son nid » : on réussit sans effort.",
     false
    ],
    [
     "« L'habit ne fait pas le moine » : il ne faut pas juger sur l'apparence.",
     true
    ],
    [
     "« Qui sème le vent récolte la tempête » : les actes imprudents ont des conséquences graves.",
     true
    ]
   ],
   "e": "Ce dernier proverbe valorise la persévérance, pas l'absence d'effort.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement verbal",
   "q": "À propos du mot « bénévole » :",
   "a": [
    [
     "Un bénévole agit sans être rémunéré.",
     true
    ],
    [
     "« Volontaire » est un synonyme.",
     true
    ],
    [
     "« Salarié » est un synonyme.",
     false
    ]
   ],
   "e": "Un salarié est payé pour son travail, contrairement à un bénévole.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Orthographe et grammaire",
   "q": "Homophones « a » et « à ».",
   "a": [
    [
     "« Il a un livre » est correct.",
     true
    ],
    [
     "« Il va a l'école » est incorrect.",
     true
    ],
    [
     "« Elle à faim » est correct.",
     false
    ]
   ],
   "e": "On écrit « Elle a faim » (verbe avoir) et « Il va à l'école » (préposition).",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Orthographe et grammaire",
   "q": "Homophones « ce » et « se ».",
   "a": [
    [
     "« Il se lave les mains » est correct.",
     true
    ],
    [
     "« Il ce lave les mains » est correct.",
     false
    ],
    [
     "« Ce garçon est grand » est correct.",
     true
    ]
   ],
   "e": "« Se » accompagne un verbe pronominal. « Ce » introduit un nom.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Orthographe et grammaire",
   "q": "Pluriels irréguliers.",
   "a": [
    [
     "Le pluriel de « cheval » est « chevals ».",
     false
    ],
    [
     "Le pluriel de « journal » est « journaux ».",
     true
    ],
    [
     "Le pluriel de « travail » est « travaux ».",
     true
    ]
   ],
   "e": "On écrit « chevaux ».",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Logique déductive",
   "q": "Implication « Si P alors Q ».",
   "a": [
    [
     "Elle est fausse quand P est vrai et Q est faux.",
     true
    ],
    [
     "Elle équivaut à « Si Q alors P ».",
     false
    ],
    [
     "Elle équivaut à « Si non Q alors non P ».",
     true
    ]
   ],
   "e": "« Si Q alors P » est la réciproque, qui n'est pas équivalente.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "Disjonction inclusive « A ou B » (ou les deux).",
   "a": [
    [
     "Si A et B sont tous deux vrais, « A ou B » est vrai.",
     true
    ],
    [
     "Si A est faux, alors B est vrai.",
     true
    ],
    [
     "Si A est vrai, alors B doit être faux.",
     false
    ]
   ],
   "e": "Le « ou » inclusif admet que les deux soient vrais.",
   "p": "Logique et déduction"
  },
  {
   "s": "Logique déductive",
   "q": "Table de vérité.",
   "a": [
    [
     "« A ou B » est faux seulement si A et B sont tous deux faux.",
     true
    ],
    [
     "« A et B » est vrai si A est vrai, quel que soit B.",
     false
    ],
    [
     "« A et B » est vrai seulement si A et B sont tous deux vrais.",
     true
    ]
   ],
   "e": "« Et » exige les deux conditions.",
   "p": "Logique et déduction"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 2, 6, 12, 20, 30, …",
   "a": [
    [
     "Le terme suivant est 40.",
     false
    ],
    [
     "Les écarts augmentent de 2 à chaque fois.",
     true
    ],
    [
     "Le terme suivant est 42.",
     true
    ]
   ],
   "e": "Les écarts sont 4, 6, 8, 10, puis 12 : 30 + 12 = 42.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 3, 5, 9, 17, 33, …",
   "a": [
    [
     "Le terme suivant est 65.",
     true
    ],
    [
     "La règle est « multiplier par 2, puis retirer 1 ».",
     true
    ],
    [
     "Le terme suivant est 49.",
     false
    ]
   ],
   "e": "33 × 2 − 1 = 65.",
   "p": "Séries logiques"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série de lettres : Z, X, V, T, …",
   "a": [
    [
     "La lettre suivante est S.",
     false
    ],
    [
     "La lettre suivante est R.",
     true
    ],
    [
     "On recule de deux lettres à chaque fois.",
     true
    ]
   ],
   "e": "Z, (Y), X, (W), V, (U), T, (S), R.",
   "p": "Séries logiques"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Orientation de la lettre « p ».",
   "a": [
    [
     "Une rotation de 180° donne « d ».",
     true
    ],
    [
     "Une rotation de 180° donne « q ».",
     false
    ],
    [
     "Une symétrie dans un miroir vertical donne « q ».",
     true
    ]
   ],
   "e": "La rotation de 180° retourne la lettre tête en bas, ce qui donne « d ».",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Les aiguilles d'une horloge.",
   "a": [
    [
     "À 9 h, elles forment un angle de 180°.",
     false
    ],
    [
     "À 6 h, elles forment un angle de 180°.",
     true
    ],
    [
     "À 3 h, elles forment un angle de 90°.",
     true
    ]
   ],
   "e": "À 9 h, l'angle est de 90°, comme à 3 h.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Raisonnement abstrait",
   "q": "Matrice de nombres : (2, 4, 8), (3, 6, 12), (5, 10, ?).",
   "a": [
    [
     "Le nombre manquant est 20.",
     true
    ],
    [
     "La deuxième colonne vaut le double de la première.",
     true
    ],
    [
     "Le nombre manquant est 15.",
     false
    ]
   ],
   "e": "La troisième colonne vaut le quadruple de la première : 5 × 4 = 20.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raisonnement abstrait",
   "q": "Équivalences : 2 ● = 6 ▲, et 1 ▲ = 2 ■.",
   "a": [
    [
     "1 ● équivaut à 3 ▲.",
     true
    ],
    [
     "1 ● équivaut à 2 ■.",
     false
    ],
    [
     "1 ● équivaut à 6 ■.",
     true
    ]
   ],
   "e": "1 ● = 3 ▲ = 3 × 2 ■ = 6 ■.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Mémoire",
   "q": "À propos de la courbe de l'oubli d'Ebbinghaus :",
   "a": [
    [
     "Ebbinghaus utilisait des syllabes sans signification.",
     true
    ],
    [
     "L'oubli est rapide au début, puis ralentit.",
     true
    ],
    [
     "La mémorisation espacée est moins efficace que la mémorisation massée.",
     false
    ]
   ],
   "e": "Les révisions espacées dans le temps améliorent la rétention.",
   "p": "Mémoire"
  },
  {
   "s": "Mémoire",
   "q": "À propos de la figure complexe de Rey :",
   "a": [
    [
     "Elle évalue aussi la mémoire visuelle, par le rappel.",
     true
    ],
    [
     "Elle évalue la copie, donc l'organisation visuo-constructive.",
     true
    ],
    [
     "C'est un test de personnalité.",
     false
    ]
   ],
   "e": "Le sujet copie d'abord la figure, puis la redessine de mémoire.",
   "p": "Mémoire"
  },
  {
   "s": "Attention et vitesse",
   "q": "À propos du subtest Code (substitution symbole-chiffre) de Wechsler :",
   "a": [
    [
     "Il évalue la vitesse de traitement.",
     true
    ],
    [
     "Le sujet associe des symboles à des chiffres selon une clé.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ]
   ],
   "e": "Plus l'on associe de symboles correctement dans le temps imparti, meilleur est le score.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Attention et vitesse",
   "q": "Types d'attention :",
   "a": [
    [
     "L'attention divisée consiste à traiter plusieurs tâches à la fois.",
     true
    ],
    [
     "L'attention soutenue est la capacité de rester concentré dans la durée.",
     true
    ],
    [
     "L'attention sélective consiste à ignorer tous les stimuli.",
     false
    ]
   ],
   "e": "L'attention sélective consiste à se concentrer sur un stimulus en ignorant les distracteurs.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Raven (matrices)",
   "q": "À propos de la passation des matrices progressives standard (SPM) de Raven :",
   "a": [
    [
     "Elles évaluent surtout le vocabulaire.",
     false
    ],
    [
     "Les items vont du plus facile au plus difficile.",
     true
    ],
    [
     "Elles ont été conçues pour être passées sans limite de temps.",
     true
    ]
   ],
   "e": "Le Raven est une épreuve non verbale : on cherche la figure manquante d'une matrice.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raven (matrices)",
   "q": "À propos de la cotation des SPM :",
   "a": [
    [
     "Le score brut maximal est de 60.",
     true
    ],
    [
     "Le score brut est converti à l'aide de normes selon l'âge.",
     true
    ],
    [
     "Les normes d'un pays valent pour tous les pays.",
     false
    ]
   ],
   "e": "Les normes dépendent de la population et de l'époque de standardisation.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Raven (matrices)",
   "q": "À propos de l'usage du Raven :",
   "a": [
    [
     "Il remplace à lui seul un bilan psychologique complet.",
     false
    ],
    [
     "Il reste sensible à la scolarité et à l'effet Flynn.",
     true
    ],
    [
     "Il est utilisé dans de nombreux pays, dont en contexte de sélection et d'orientation.",
     true
    ]
   ],
   "e": "Un test unique ne suffit jamais à décrire une personne.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "D48 (dominos)",
   "q": "À propos du test des dominos D48 :",
   "a": [
    [
     "Il comporte 100 items.",
     false
    ],
    [
     "Il comporte 48 items.",
     true
    ],
    [
     "Sa durée est d'environ 25 minutes.",
     true
    ]
   ],
   "e": "Le D48 est un test collectif à durée limitée.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "D48 (dominos)",
   "q": "À propos de la nature du D48 :",
   "a": [
    [
     "Elle est considérée comme fortement saturée en facteur g.",
     true
    ],
    [
     "C'est une épreuve non verbale.",
     true
    ],
    [
     "Elle évalue la personnalité.",
     false
    ]
   ],
   "e": "Les consignes sont brèves et la langue joue un rôle réduit.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "D48 (dominos)",
   "q": "À propos de l'utilisation du D48 :",
   "a": [
    [
     "C'est un test de mémoire.",
     false
    ],
    [
     "Il ne remplace pas les autres épreuves d'un bilan.",
     true
    ],
    [
     "Il a été conçu par Anstey.",
     true
    ]
   ],
   "e": "C'est une épreuve de raisonnement logique non verbal.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Cattell Culture Fair",
   "q": "À propos du Culture Fair Intelligence Test de Cattell :",
   "a": [
    [
     "Il cherche à réduire l'influence de la culture et de la langue.",
     true
    ],
    [
     "L'échelle 3 est conçue pour de jeunes enfants de 4 ans.",
     false
    ],
    [
     "Il comporte trois échelles selon l'âge.",
     true
    ]
   ],
   "e": "L'échelle 1 concerne les plus jeunes. L'échelle 3 s'adresse à des adolescents et adultes de niveau plus élevé.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Cattell Culture Fair",
   "q": "À propos des épreuves du Culture Fair Test :",
   "a": [
    [
     "Il comprend quatre sous-tests, dont les séries et les matrices.",
     true
    ],
    [
     "Il comprend aussi des épreuves de classification.",
     true
    ],
    [
     "Il comprend une épreuve de vocabulaire.",
     false
    ]
   ],
   "e": "Les épreuves sont non verbales : séries, classifications, matrices et conditions (topologie).",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Batteries d'aptitudes",
   "q": "À propos de la GATB (General Aptitude Test Battery) :",
   "a": [
    [
     "Elle comprend 12 épreuves.",
     true
    ],
    [
     "Elle évalue 9 aptitudes.",
     true
    ],
    [
     "Elle mesure uniquement la personnalité.",
     false
    ]
   ],
   "e": "Elle a été conçue par le service américain de l'emploi pour l'orientation et le placement.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Batteries d'aptitudes",
   "q": "Aptitudes évaluées par la GATB :",
   "a": [
    [
     "K correspond à l'intelligence verbale.",
     false
    ],
    [
     "N correspond à l'aptitude numérique.",
     true
    ],
    [
     "S correspond à l'aptitude spatiale.",
     true
    ]
   ],
   "e": "K correspond à la coordination motrice. L'aptitude verbale est notée V.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Batteries d'aptitudes",
   "q": "À propos du raisonnement abstrait dans les DAT :",
   "a": [
    [
     "L'épreuve évalue le vocabulaire.",
     false
    ],
    [
     "On présente une série de figures et il faut choisir la figure suivante.",
     true
    ],
    [
     "L'épreuve évalue le raisonnement non verbal.",
     true
    ]
   ],
   "e": "C'est une épreuve proche des matrices et des séries logiques.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Batteries d'aptitudes",
   "q": "À propos du raisonnement mécanique dans les DAT :",
   "a": [
    [
     "Il évalue l'orthographe.",
     false
    ],
    [
     "Il fait appel à la compréhension des leviers, poulies et engrenages.",
     true
    ],
    [
     "Il présente des situations mécaniques illustrées, avec une question.",
     true
    ]
   ],
   "e": "L'orthographe est évaluée par une autre épreuve de la batterie.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Batteries d'aptitudes",
   "q": "À propos du Bennett Mechanical Comprehension Test :",
   "a": [
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il est utilisé pour des postes techniques et mécaniques.",
     true
    ],
    [
     "Il évalue la compréhension des principes mécaniques et physiques.",
     true
    ]
   ],
   "e": "Il est utilisé en sélection pour des métiers comme mécanicien ou technicien.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Tests d'attention (d2, Bourdon)",
   "q": "À propos de la structure du test d2 :",
   "a": [
    [
     "Il comporte 14 lignes.",
     true
    ],
    [
     "Le temps par ligne est de 60 secondes.",
     false
    ],
    [
     "Chaque ligne contient 47 caractères, et le temps par ligne est de 20 secondes.",
     true
    ]
   ],
   "e": "Le sujet barre les « d » accompagnés de deux traits, en suivant le rythme imposé.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tests d'attention (d2, Bourdon)",
   "q": "À propos des scores du d2 :",
   "a": [
    [
     "Le nombre total d'éléments traités mesure la vitesse.",
     true
    ],
    [
     "Le pourcentage d'erreurs renseigne sur la précision.",
     true
    ],
    [
     "Le score principal est un score de personnalité.",
     false
    ]
   ],
   "e": "On croise vitesse et précision pour interpréter la performance d'attention.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tests d'attention (d2, Bourdon)",
   "q": "À propos du test de Bourdon :",
   "a": [
    [
     "C'est un test de vocabulaire.",
     false
    ],
    [
     "C'est un test de barrage.",
     true
    ],
    [
     "Le sujet doit barrer certaines lettres dans un texte ou une grille.",
     true
    ]
   ],
   "e": "Il évalue l'attention soutenue et sélective, ainsi que la vitesse.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Labyrinthes de Porteus",
   "q": "À propos des labyrinthes de Porteus :",
   "a": [
    [
     "Ce sont des épreuves non verbales.",
     true
    ],
    [
     "Ils évaluent la planification et l'anticipation.",
     true
    ],
    [
     "Ils mesurent la mémoire des chiffres.",
     false
    ]
   ],
   "e": "Le sujet trace un chemin sans impasse, en anticipant.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Labyrinthes de Porteus",
   "q": "À propos de l'histoire des labyrinthes de Porteus :",
   "a": [
    [
     "Leur difficulté augmente d'un labyrinthe à l'autre.",
     true
    ],
    [
     "Ils datent de 1980.",
     false
    ],
    [
     "Ils ont été conçus par Stanley Porteus.",
     true
    ]
   ],
   "e": "Ils ont été créés dès 1914.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Cubes de Kohs",
   "q": "À propos de l'héritage des cubes de Kohs :",
   "a": [
    [
     "Le subtest Cubes des échelles de Wechsler s'en inspire.",
     true
    ],
    [
     "Elle date du XIXᵉ siècle.",
     false
    ],
    [
     "Samuel Kohs a conçu l'épreuve vers 1920.",
     true
    ]
   ],
   "e": "Wechsler a repris ce principe dans ses échelles.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Wisconsin Card Sorting Test",
   "q": "À propos du Wisconsin Card Sorting Test (WCST) :",
   "a": [
    [
     "Le sujet classe des cartes selon la couleur, la forme ou le nombre.",
     true
    ],
    [
     "La règle de classement change sans avertissement.",
     true
    ],
    [
     "La règle est annoncée avant chaque série.",
     false
    ]
   ],
   "e": "Le sujet doit deviner la règle à partir des retours « bon » et « mauvais ».",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Wisconsin Card Sorting Test",
   "q": "À propos de ce que mesure le WCST :",
   "a": [
    [
     "Une erreur persévérative consiste à continuer d'appliquer l'ancienne règle.",
     true
    ],
    [
     "Il évalue la flexibilité mentale et les fonctions exécutives.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ]
   ],
   "e": "Les erreurs persévératives indiquent une difficulté à changer de stratégie.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Tours de Londres et de Hanoï",
   "q": "À propos de la tour de Londres :",
   "a": [
    [
     "Elle évalue la planification.",
     true
    ],
    [
     "Elle a été proposée par Shallice en 1982.",
     true
    ],
    [
     "Elle évalue la mémoire des visages.",
     false
    ]
   ],
   "e": "Le sujet déplace des boules colorées pour atteindre une configuration cible en un nombre minimal de coups.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Tours de Londres et de Hanoï",
   "q": "À propos de la tour de Hanoï :",
   "a": [
    [
     "Il est interdit de poser un grand disque sur un petit disque.",
     true
    ],
    [
     "Il faut déplacer des disques d'une tige à une autre.",
     true
    ],
    [
     "Il est permis de poser un grand disque sur un petit disque.",
     false
    ]
   ],
   "e": "Cette contrainte oblige à planifier les déplacements.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Test de Bender",
   "q": "À propos du test de Bender (Gestalt visuo-moteur) :",
   "a": [
    [
     "Le sujet copie 9 figures.",
     true
    ],
    [
     "Les figures sont des mots à lire.",
     false
    ],
    [
     "Lauretta Bender en est l'auteur.",
     true
    ]
   ],
   "e": "Il évalue la perception visuelle et la coordination visuo-motrice.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Test de Bender",
   "q": "À propos de la cotation et de l'usage du Bender :",
   "a": [
    [
     "Il est aussi utilisé pour repérer des troubles visuo-constructifs.",
     true
    ],
    [
     "Le système de Koppitz est utilisé chez l'enfant.",
     true
    ],
    [
     "C'est uniquement un test projectif sans cotation.",
     false
    ]
   ],
   "e": "Il existe des systèmes de cotation pour les enfants et pour les adultes.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Tests de mémoire",
   "q": "À propos du test d'apprentissage verbal de Rey (RAVLT) :",
   "a": [
    [
     "Elle est présentée en 5 essais de rappel.",
     true
    ],
    [
     "La liste comporte 15 mots.",
     true
    ],
    [
     "La liste comporte 30 mots.",
     false
    ]
   ],
   "e": "On mesure l'apprentissage sur plusieurs essais, puis le rappel différé.",
   "p": "Mémoire"
  },
  {
   "s": "Tests de mémoire",
   "q": "À propos du MMSE (Mini-Mental State Examination) :",
   "a": [
    [
     "Il suffit à poser un diagnostic définitif.",
     false
    ],
    [
     "Son score maximal est de 30.",
     true
    ],
    [
     "C'est un outil de dépistage du déclin cognitif.",
     true
    ]
   ],
   "e": "Un score bas appelle un bilan neuropsychologique complet.",
   "p": "Mémoire"
  },
  {
   "s": "Tests de mémoire",
   "q": "À propos du MoCA (Montreal Cognitive Assessment) :",
   "a": [
    [
     "Un score inférieur à 26 suggère de rechercher un trouble cognitif.",
     true
    ],
    [
     "Son score maximal est de 30.",
     true
    ],
    [
     "Il remplace un bilan neuropsychologique complet.",
     false
    ]
   ],
   "e": "C'est un outil de dépistage, plus sensible que le MMSE pour les troubles légers.",
   "p": "Mémoire"
  },
  {
   "s": "Tests de dextérité",
   "q": "À propos du Purdue Pegboard :",
   "a": [
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il comporte des épreuves main droite, main gauche et deux mains.",
     true
    ],
    [
     "Il a été conçu par Tiffin, en 1948.",
     true
    ]
   ],
   "e": "C'est un test de dextérité manuelle utilisé en sélection pour des postes de précision.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Tests de dextérité",
   "q": "À propos du Minnesota Rate of Manipulation Test :",
   "a": [
    [
     "Il comprend des épreuves de placement et de retournement de pièces.",
     true
    ],
    [
     "Il évalue le raisonnement verbal.",
     false
    ],
    [
     "Il évalue la rapidité de manipulation d'objets.",
     true
    ]
   ],
   "e": "Il mesure la dextérité manuelle grossière, utile pour certains postes manuels.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Rotation mentale",
   "q": "À propos du test de rotation mentale de Vandenberg et Kuse :",
   "a": [
    [
     "Il évalue le raisonnement spatial.",
     true
    ],
    [
     "Il évalue la mémoire des mots.",
     false
    ],
    [
     "Il date de 1978.",
     true
    ]
   ],
   "e": "Il s'appuie sur les figures de Shepard et Metzler, présentées comme des items à choix.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Watson-Glaser",
   "q": "À propos du test de pensée critique de Watson et Glaser :",
   "a": [
    [
     "Il est utilisé en recrutement de cadres et de professions juridiques.",
     true
    ],
    [
     "Il évalue des capacités de raisonnement critique.",
     true
    ],
    [
     "Il évalue les intérêts professionnels.",
     false
    ]
   ],
   "e": "Il existe depuis les années 1940 et a été révisé plusieurs fois.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Watson-Glaser",
   "q": "Aspects évalués par le Watson-Glaser (version classique) :",
   "a": [
    [
     "L'inférence.",
     true
    ],
    [
     "La reconnaissance des hypothèses implicites.",
     true
    ],
    [
     "La dextérité manuelle.",
     false
    ]
   ],
   "e": "On y trouve aussi la déduction, l'interprétation et l'évaluation d'arguments.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "WASI",
   "q": "À propos de la WASI (Wechsler Abbreviated Scale of Intelligence) :",
   "a": [
    [
     "Elle comporte 15 subtests.",
     false
    ],
    [
     "Elle propose une version à quatre subtests.",
     true
    ],
    [
     "Elle propose aussi une version à deux subtests.",
     true
    ]
   ],
   "e": "Elle fournit une estimation rapide du QI.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Mill Hill Vocabulary Scale",
   "q": "À propos de l'échelle de vocabulaire Mill Hill :",
   "a": [
    [
     "Elle évalue le vocabulaire.",
     true
    ],
    [
     "Elle évalue le raisonnement spatial.",
     false
    ],
    [
     "Elle est souvent associée aux matrices de Raven.",
     true
    ]
   ],
   "e": "Elle complète une épreuve non verbale par une mesure verbale.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Tests d'attention (SDMT, PASAT, Ruff)",
   "q": "À propos du PASAT (Paced Auditory Serial Addition Test) :",
   "a": [
    [
     "Il se passe en silence, sans stimulus sonore.",
     false
    ],
    [
     "Le sujet additionne des chiffres consécutifs entendus.",
     true
    ],
    [
     "Il sollicite l'attention et la mémoire de travail.",
     true
    ]
   ],
   "e": "Il est utilisé en neuropsychologie, notamment après un traumatisme crânien.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tests d'attention (SDMT, PASAT, Ruff)",
   "q": "À propos du test 2 et 7 de Ruff :",
   "a": [
    [
     "Le sujet barre les 2 et les 7 parmi des distracteurs.",
     true
    ],
    [
     "Il évalue l'intelligence verbale.",
     false
    ],
    [
     "Il évalue l'attention sélective et soutenue.",
     true
    ]
   ],
   "e": "On compare la vitesse et la précision selon les conditions de distraction.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tests de mémoire",
   "q": "À propos du California Verbal Learning Test (CVLT) :",
   "a": [
    [
     "Les mots appartiennent à plusieurs catégories sémantiques.",
     true
    ],
    [
     "Il utilise une liste de 16 mots.",
     true
    ],
    [
     "Il utilise une liste de 50 mots.",
     false
    ]
   ],
   "e": "On étudie l'apprentissage, le rappel différé et le rôle des indices.",
   "p": "Mémoire"
  },
  {
   "s": "Tests de mémoire",
   "q": "À propos du Rivermead Behavioural Memory Test :",
   "a": [
    [
     "Il évalue seulement la mémoire des chiffres.",
     false
    ],
    [
     "Il demande par exemple de retenir un nom ou un rendez-vous.",
     true
    ],
    [
     "Il évalue la mémoire à partir de tâches de la vie quotidienne.",
     true
    ]
   ],
   "e": "Il a une bonne validité écologique.",
   "p": "Mémoire"
  },
  {
   "s": "Tests de mémoire",
   "q": "À propos du test des 5 mots de Dubois :",
   "a": [
    [
     "Il évalue la dextérité.",
     false
    ],
    [
     "Il comporte 5 mots à retenir.",
     true
    ],
    [
     "Il comprend un rappel libre puis un rappel indicé.",
     true
    ]
   ],
   "e": "Il est utilisé comme outil rapide de dépistage de troubles mnésiques.",
   "p": "Mémoire"
  },
  {
   "s": "Fonctions exécutives",
   "q": "À propos du BADS (Behavioural Assessment of the Dysexecutive Syndrome) :",
   "a": [
    [
     "Il se rapproche de situations de la vie quotidienne.",
     true
    ],
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Il comporte 6 épreuves.",
     true
    ]
   ],
   "e": "Il explore la planification, la flexibilité et la résolution de problèmes.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Fonctions exécutives",
   "q": "À propos de la BREF (batterie rapide d'efficience frontale) :",
   "a": [
    [
     "Elle évalue les intérêts professionnels.",
     false
    ],
    [
     "Son score maximal est de 18.",
     true
    ],
    [
     "Elle comprend 6 épreuves.",
     true
    ]
   ],
   "e": "Elle explore les fonctions exécutives en quelques minutes.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Fonctions exécutives",
   "q": "À propos des tâches Go/No-Go :",
   "a": [
    [
     "Une erreur de commission consiste à répondre à un stimulus qu'il fallait ignorer.",
     true
    ],
    [
     "Elles évaluent l'inhibition de réponse.",
     true
    ],
    [
     "Elles évaluent le vocabulaire.",
     false
    ]
   ],
   "e": "Le sujet répond vite à certains stimuli et doit se retenir pour d'autres.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Fonctions exécutives",
   "q": "À propos du test de l'horloge :",
   "a": [
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Le sujet dessine une horloge indiquant une heure donnée.",
     true
    ],
    [
     "Il sollicite des fonctions exécutives et visuo-constructives.",
     true
    ]
   ],
   "e": "Il est souvent utilisé en dépistage de troubles cognitifs.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Tests d'acquis et d'aptitudes spécifiques",
   "q": "À propos du WRAT (Wide Range Achievement Test) :",
   "a": [
    [
     "Il évalue des acquis scolaires de base.",
     true
    ],
    [
     "Il évalue la lecture, l'orthographe et le calcul.",
     true
    ],
    [
     "Il évalue les traits de personnalité.",
     false
    ]
   ],
   "e": "Il aide à situer le niveau scolaire d'un enfant ou d'un adulte.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Tests d'acquis et d'aptitudes spécifiques",
   "q": "À propos du MLAT (Modern Language Aptitude Test) :",
   "a": [
    [
     "Il a été conçu par Carroll et Sapon.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ],
    [
     "Il évalue l'aptitude à apprendre une langue étrangère.",
     true
    ]
   ],
   "e": "Il comprend notamment des épreuves d'apprentissage de vocabulaire et de discrimination des sons.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Tests d'acquis et d'aptitudes spécifiques",
   "q": "À propos du Minnesota Clerical Test :",
   "a": [
    [
     "Il évalue la rapidité et la précision en travail de bureau.",
     true
    ],
    [
     "Il comprend la comparaison de nombres et de noms.",
     true
    ],
    [
     "Il évalue la dextérité fine.",
     false
    ]
   ],
   "e": "Le sujet repère les paires identiques le plus vite possible.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Créativité (TTCT, AUT, RAT)",
   "q": "À propos du test de pensée créative de Torrance (TTCT) :",
   "a": [
    [
     "Il existe en versions verbale et figurale.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ],
    [
     "Il évalue notamment la fluidité, la flexibilité, l'originalité et l'élaboration.",
     true
    ]
   ],
   "e": "Il mesure la pensée divergente.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Créativité (TTCT, AUT, RAT)",
   "q": "À propos de la tâche des usages alternatifs (Guilford) :",
   "a": [
    [
     "Elle mesure la pensée divergente.",
     true
    ],
    [
     "Elle mesure la mémoire à court terme.",
     false
    ],
    [
     "Le sujet imagine un maximum d'usages pour un objet courant.",
     true
    ]
   ],
   "e": "On peut compter le nombre d'idées et leur originalité.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Créativité (TTCT, AUT, RAT)",
   "q": "Pensée divergente et pensée convergente :",
   "a": [
    [
     "La pensée convergente produit toujours plusieurs réponses.",
     false
    ],
    [
     "La pensée convergente cherche une solution unique.",
     true
    ],
    [
     "La pensée divergente produit de nombreuses idées possibles.",
     true
    ]
   ],
   "e": "Les deux sont complémentaires dans la résolution de problèmes.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Tests neuropsychologiques spécifiques",
   "q": "À propos du ZAREKI-R :",
   "a": [
    [
     "Il évalue des compétences de numération et de calcul.",
     true
    ],
    [
     "Il sert à repérer des difficultés de calcul chez l'enfant.",
     true
    ],
    [
     "Il évalue la lecture de textes.",
     false
    ]
   ],
   "e": "Il s'inscrit dans l'évaluation de la dyscalculie.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Tests neuropsychologiques spécifiques",
   "q": "À propos du Visual Organization Test de Hooper :",
   "a": [
    [
     "Il présente des dessins d'objets fragmentés.",
     true
    ],
    [
     "Il évalue la dextérité.",
     false
    ],
    [
     "Le sujet doit nommer l'objet.",
     true
    ]
   ],
   "e": "Il évalue l'organisation visuelle et la reconnaissance d'objets.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Tests neuropsychologiques spécifiques",
   "q": "À propos du test de reconnaissance de visages de Benton :",
   "a": [
    [
     "Il évalue la reconnaissance de visages inconnus.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il existe une forme courte et une forme longue.",
     true
    ]
   ],
   "e": "La forme longue comporte 54 items.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Tests neuropsychologiques spécifiques",
   "q": "À propos du Token Test (De Renzi et Vignolo) :",
   "a": [
    [
     "Il évalue la compréhension de consignes verbales.",
     true
    ],
    [
     "Il évalue la dextérité fine.",
     false
    ],
    [
     "Il utilise des jetons de formes, de couleurs et de tailles différentes.",
     true
    ]
   ],
   "e": "Il est utilisé pour détecter des troubles de la compréhension liés à l'aphasie.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Tests non verbaux",
   "q": "À propos de la Leiter International Performance Scale :",
   "a": [
    [
     "Elle a été conçue par Russell Leiter dans les années 1930.",
     true
    ],
    [
     "Elle peut être passée sans consignes parlées, par gestes et démonstration.",
     true
    ],
    [
     "Elle exige une bonne maîtrise de la lecture.",
     false
    ]
   ],
   "e": "Elle est destinée aux personnes qui ne parlent pas la langue de passation ou qui ont des troubles du langage.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Tests non verbaux",
   "q": "À propos de l'UNIT (Universal Nonverbal Intelligence Test) :",
   "a": [
    [
     "Il évalue l'intelligence sans exiger de langage parlé.",
     true
    ],
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Il comprend six subtests, dont la mémoire symbolique et les labyrinthes.",
     true
    ]
   ],
   "e": "Il convient à des personnes sourdes, ou dont la langue maternelle est différente de celle de l'examinateur.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Tests non verbaux",
   "q": "À propos du TONI-4 (Test of Nonverbal Intelligence) :",
   "a": [
    [
     "Il comporte 60 items.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il évalue le raisonnement abstrait de façon non verbale.",
     true
    ]
   ],
   "e": "Il s'adresse à une large tranche d'âge, d'environ 6 à 89 ans.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Tests non verbaux",
   "q": "À propos de la Wechsler Nonverbal Scale of Ability (WNV) :",
   "a": [
    [
     "Elle évalue les aptitudes cognitives sans recours au langage.",
     true
    ],
    [
     "Elle s'adresse à des personnes d'environ 4 à 21 ans.",
     true
    ],
    [
     "Elle s'adresse aux adultes de plus de 60 ans.",
     false
    ]
   ],
   "e": "Elle comprend des épreuves comme Matrices, Code et Empan spatial.",
   "p": "Matrices et tests non verbaux"
  },
  {
   "s": "Échelles cognitives générales",
   "q": "À propos du Cognitive Assessment System (CAS) de Das et Naglieri :",
   "a": [
    [
     "Il repose sur la théorie PASS.",
     true
    ],
    [
     "PASS désigne un test de personnalité.",
     false
    ],
    [
     "PASS signifie planification, attention, traitement simultané, traitement successif.",
     true
    ]
   ],
   "e": "Cette théorie s'inspire des travaux de Luria.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Échelles cognitives générales",
   "q": "À propos des Differential Ability Scales (DAS-II) :",
   "a": [
    [
     "Elles ne s'adressent qu'aux adultes.",
     false
    ],
    [
     "Elles fournissent un indice d'aptitude conceptuelle générale (GCA).",
     true
    ],
    [
     "Elles proposent aussi un score composite non verbal.",
     true
    ]
   ],
   "e": "Elles s'adressent à des enfants et adolescents d'environ 2 ans et demi à 17 ans.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Échelles cognitives générales",
   "q": "À propos du Kaufman Brief Intelligence Test (KBIT-2) :",
   "a": [
    [
     "C'est une mesure brève de l'intelligence.",
     true
    ],
    [
     "Il dure plusieurs heures.",
     false
    ],
    [
     "Il comprend une échelle verbale et une échelle non verbale.",
     true
    ]
   ],
   "e": "Sa durée est d'environ 20 minutes.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Tests de sélection militaire et universitaire",
   "q": "À propos de l'ASVAB :",
   "a": [
    [
     "Il évalue plusieurs aptitudes, dont le raisonnement mécanique.",
     true
    ],
    [
     "Il évalue uniquement la personnalité.",
     false
    ],
    [
     "Il est utilisé pour la sélection et l'affectation dans l'armée américaine.",
     true
    ]
   ],
   "e": "C'est une batterie d'aptitudes à usage multiple.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Tests de sélection militaire et universitaire",
   "q": "À propos de l'AFQT (Armed Forces Qualification Test) :",
   "a": [
    [
     "Il s'exprime en rang percentile.",
     true
    ],
    [
     "C'est un score composite issu de quatre épreuves de l'ASVAB.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ]
   ],
   "e": "Il combine la connaissance des mots, la compréhension de paragraphe, le raisonnement arithmétique et les mathématiques.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Tests de sélection militaire et universitaire",
   "q": "À propos de l'Army General Classification Test (AGCT) :",
   "a": [
    [
     "Il a été utilisé aux États-Unis pendant la Seconde Guerre mondiale.",
     true
    ],
    [
     "C'est un test collectif.",
     true
    ],
    [
     "Il a été créé au XIXᵉ siècle.",
     false
    ]
   ],
   "e": "Il date de 1940 et il a servi à classer un grand nombre de recrues.",
   "p": "Batteries d'aptitudes et admission"
  },
  {
   "s": "Tests de langue",
   "q": "À propos du Cadre européen commun de référence pour les langues (CECRL) :",
   "a": [
    [
     "C2 est le niveau le plus bas.",
     false
    ],
    [
     "Il comprend six niveaux, de A1 à C2.",
     true
    ],
    [
     "A1 est le niveau le plus bas.",
     true
    ]
   ],
   "e": "Les niveaux vont de l'utilisateur élémentaire (A) à l'utilisateur expérimenté (C).",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Tests de langue",
   "q": "À propos du DELF et du DALF :",
   "a": [
    [
     "Le DALF couvre le niveau A1.",
     false
    ],
    [
     "Le DELF couvre les niveaux A1 à B2.",
     true
    ],
    [
     "Le DALF couvre les niveaux C1 et C2.",
     true
    ]
   ],
   "e": "Ce sont des diplômes de langue française reconnus au plan international.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Tests de langue",
   "q": "À propos du TOEFL iBT et de l'IELTS :",
   "a": [
    [
     "Le TOEFL iBT est noté sur 120.",
     true
    ],
    [
     "Le TOEFL iBT est noté sur 9.",
     false
    ],
    [
     "L'IELTS utilise une échelle de bandes de 0 à 9.",
     true
    ]
   ],
   "e": "Ce sont des tests d'anglais, utilisés pour l'admission universitaire.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Tests d'attention",
   "q": "À propos du test d'attention de la vie quotidienne (TEA) :",
   "a": [
    [
     "Il évalue différentes formes d'attention.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il propose des tâches proches de la vie quotidienne, comme la recherche sur une carte.",
     true
    ]
   ],
   "e": "Il a été conçu par Robertson et ses collègues.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tests d'attention",
   "q": "À propos du test de Stroop de Golden :",
   "a": [
    [
     "Il mesure l'interférence.",
     true
    ],
    [
     "Il mesure la mémoire visuelle.",
     false
    ],
    [
     "Il comporte trois planches : mots, couleurs et mots-couleurs.",
     true
    ]
   ],
   "e": "La planche mots-couleurs est la plus difficile.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Cognitive Reflection Test",
   "q": "Test de réflexion cognitive : « 5 machines fabriquent 5 objets en 5 minutes. Combien de temps faut-il à 100 machines pour fabriquer 100 objets ? »",
   "a": [
    [
     "Il faut 5 minutes.",
     true
    ],
    [
     "Il faut 100 minutes.",
     false
    ],
    [
     "Chaque machine fabrique un objet en 5 minutes.",
     true
    ]
   ],
   "e": "Ce test oppose la réponse intuitive à la réponse réfléchie.",
   "p": "Logique et déduction"
  },
  {
   "s": "Tests de mémoire",
   "q": "À propos de la figure complexe de Rey-Osterrieth :",
   "a": [
    [
     "Le score maximal est de 100.",
     false
    ],
    [
     "Le score maximal à la copie est de 36.",
     true
    ],
    [
     "On évalue la copie, puis le rappel immédiat et différé.",
     true
    ]
   ],
   "e": "La figure comporte 18 éléments, cotés chacun de 0 à 2.",
   "p": "Mémoire"
  },
  {
   "s": "Tests de négligence visuelle",
   "q": "À propos du test des cloches de Gauthier :",
   "a": [
    [
     "Le sujet barre des cloches parmi des dessins distracteurs.",
     true
    ],
    [
     "Il évalue la négligence spatiale unilatérale.",
     true
    ],
    [
     "Il évalue la mémoire des mots.",
     false
    ]
   ],
   "e": "Il comporte 35 cibles parmi de nombreux distracteurs.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tests de négligence visuelle",
   "q": "À propos du test de bissection de lignes :",
   "a": [
    [
     "Une déviation constante vers un côté peut suggérer une négligence spatiale.",
     true
    ],
    [
     "Le sujet marque le milieu de lignes horizontales.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ]
   ],
   "e": "Il est très simple, et fréquemment utilisé chez des personnes ayant eu un accident vasculaire cérébral.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Aptitudes scolaires",
   "q": "À propos du CogAT (Cognitive Abilities Test) :",
   "a": [
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Il comporte des batteries verbale, quantitative et non verbale.",
     true
    ],
    [
     "Il est utilisé en contexte scolaire.",
     true
    ]
   ],
   "e": "Il est utilisé notamment pour repérer des élèves à haut potentiel.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Aptitudes scolaires",
   "q": "À propos de l'OLSAT (Otis-Lennon School Ability Test) :",
   "a": [
    [
     "Il est utilisé en contexte scolaire.",
     true
    ],
    [
     "Il évalue des habiletés verbales et non verbales.",
     true
    ],
    [
     "Il évalue la dextérité.",
     false
    ]
   ],
   "e": "Il est issu de la tradition des tests d'Otis.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Aptitudes scolaires",
   "q": "À propos du WIAT (Wechsler Individual Achievement Test) :",
   "a": [
    [
     "Il est souvent associé à une évaluation de l'intelligence.",
     true
    ],
    [
     "Il évalue les acquis en lecture, en mathématiques et en expression écrite.",
     true
    ],
    [
     "Il évalue uniquement l'attention.",
     false
    ]
   ],
   "e": "On compare parfois les acquis aux aptitudes, avec prudence.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Aptitudes scolaires",
   "q": "À propos du SAT et de l'ACT :",
   "a": [
    [
     "Le SAT est noté de 400 à 1 600.",
     true
    ],
    [
     "Le SAT est noté de 0 à 10.",
     false
    ],
    [
     "L'ACT évalue notamment l'anglais, les mathématiques, la lecture et les sciences.",
     true
    ]
   ],
   "e": "Ce sont des tests d'admission à l'université aux États-Unis.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Tests de lecture",
   "q": "À propos du Gray Oral Reading Test (GORT) :",
   "a": [
    [
     "Il évalue le calcul.",
     false
    ],
    [
     "Il évalue la lecture orale.",
     true
    ],
    [
     "On peut y mesurer la vitesse, la précision et la compréhension.",
     true
    ]
   ],
   "e": "Le sujet lit des textes de difficulté croissante.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Fonctions exécutives",
   "q": "À propos des épreuves de fluence verbale :",
   "a": [
    [
     "La fluence phonémique demande des mots commençant par une lettre donnée.",
     true
    ],
    [
     "La fluence sémantique demande des mots d'une catégorie, comme les animaux.",
     true
    ],
    [
     "Elles évaluent la dextérité manuelle.",
     false
    ]
   ],
   "e": "Le temps est en général limité à une minute par épreuve.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Raisonnement et sélection",
   "q": "À propos du test de discrimination de formes visuelles de Benton :",
   "a": [
    [
     "Il évalue la perception visuelle.",
     true
    ],
    [
     "Il évalue la mémoire des mots.",
     false
    ],
    [
     "Chaque item présente une figure cible et quatre choix.",
     true
    ]
   ],
   "e": "Le sujet doit retrouver la figure identique à la cible.",
   "p": "Logique et déduction"
  },
  {
   "s": "Raisonnement et sélection",
   "q": "Tâche de sélection de Wason : quatre cartes montrent E, K, 4 et 7. Règle : « Si une carte porte une voyelle, l'autre face porte un nombre pair ».",
   "a": [
    [
     "Il faut retourner la carte 7.",
     true
    ],
    [
     "Il faut retourner la carte 4.",
     false
    ],
    [
     "Il faut retourner la carte E.",
     true
    ]
   ],
   "e": "La carte 7 pourrait cacher une voyelle, ce qui violerait la règle. La carte 4 ne peut pas la contredire.",
   "p": "Logique et déduction"
  },
  {
   "s": "Raisonnement et sélection",
   "q": "À propos du Miller Analogies Test (MAT) :",
   "a": [
    [
     "Il comportait 120 analogies à résoudre en 60 minutes.",
     true
    ],
    [
     "Il évaluait la dextérité manuelle.",
     false
    ],
    [
     "Il a été utilisé pour l'admission aux études supérieures.",
     true
    ]
   ],
   "e": "C'est un test de raisonnement verbal par analogies.",
   "p": "Logique et déduction"
  },
  {
   "s": "Raisonnement et sélection",
   "q": "À propos du LSAT :",
   "a": [
    [
     "Il évalue notamment le raisonnement logique et la compréhension de lecture.",
     true
    ],
    [
     "Il évalue les aptitudes mécaniques.",
     false
    ],
    [
     "Il sert à l'admission aux études de droit.",
     true
    ]
   ],
   "e": "Son score s'échelonne de 120 à 180.",
   "p": "Logique et déduction"
  },
  {
   "s": "Raisonnement et sélection",
   "q": "À propos du MCAT :",
   "a": [
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Il sert à l'admission aux études de médecine.",
     true
    ],
    [
     "Son score total va de 472 à 528.",
     true
    ]
   ],
   "e": "Chaque section est notée de 118 à 132.",
   "p": "Logique et déduction"
  },
  {
   "s": "Raisonnement et sélection",
   "q": "À propos de l'admission à Mensa :",
   "a": [
    [
     "Le seuil correspond au 98ᵉ percentile.",
     true
    ],
    [
     "Il faut obtenir un QI de 85.",
     false
    ],
    [
     "Il faut obtenir un score situé parmi les 2 % supérieurs d'un test reconnu.",
     true
    ]
   ],
   "e": "Un QI d'environ 130 correspond au 98ᵉ percentile.",
   "p": "Logique et déduction"
  },
  {
   "s": "Batteries neuropsychologiques",
   "q": "À propos de la batterie de Halstead-Reitan :",
   "a": [
    [
     "Elle comprend notamment un test de catégories et un test de rythme.",
     true
    ],
    [
     "C'est une batterie neuropsychologique.",
     true
    ],
    [
     "C'est un test de personnalité.",
     false
    ]
   ],
   "e": "Elle comprend aussi le Trail Making et un test d'oscillation digitale.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries neuropsychologiques",
   "q": "À propos du Category Test et du Tactual Performance Test de Halstead :",
   "a": [
    [
     "Le Category Test évalue la formation de concepts.",
     true
    ],
    [
     "Le Tactual Performance Test se réalise les yeux bandés.",
     true
    ],
    [
     "Le Category Test évalue la dextérité.",
     false
    ]
   ],
   "e": "Le Tactual Performance Test évalue le tact, la mémoire et la perception spatiale.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries neuropsychologiques",
   "q": "À propos de la batterie de Luria-Nebraska :",
   "a": [
    [
     "C'est une batterie neuropsychologique.",
     true
    ],
    [
     "C'est un questionnaire de personnalité.",
     false
    ],
    [
     "Elle s'inspire des travaux de Luria.",
     true
    ]
   ],
   "e": "Golden et ses collègues l'ont mise au point.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries neuropsychologiques",
   "q": "À propos du BDAE (Boston Diagnostic Aphasia Examination) :",
   "a": [
    [
     "Goodglass et Kaplan en sont les auteurs.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ],
    [
     "Il évalue l'aphasie.",
     true
    ]
   ],
   "e": "Il explore la compréhension, l'expression, la répétition et la dénomination.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries neuropsychologiques",
   "q": "À propos du CELF-5 :",
   "a": [
    [
     "C'est un outil d'évaluation du langage.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ],
    [
     "Il s'adresse à des enfants, adolescents et jeunes adultes.",
     true
    ]
   ],
   "e": "Il évalue la compréhension et l'expression du langage.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries neuropsychologiques",
   "q": "À propos de la dénomination rapide automatisée (RAN) :",
   "a": [
    [
     "Elle est liée à l'apprentissage de la lecture.",
     true
    ],
    [
     "Le sujet nomme le plus vite possible des couleurs, des chiffres ou des objets.",
     true
    ],
    [
     "Elle évalue la dextérité.",
     false
    ]
   ],
   "e": "Denckla et Rudel l'ont proposée, et elle sert à repérer des risques de difficultés de lecture.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Perception et style cognitif",
   "q": "À propos du test des figures intriquées de Witkin (EFT) :",
   "a": [
    [
     "Il évalue la dépendance et l'indépendance à l'égard du champ.",
     true
    ],
    [
     "Le sujet repère une figure simple cachée dans une figure complexe.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ]
   ],
   "e": "Witkin décrit un style cognitif plus ou moins analytique.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Perception et style cognitif",
   "q": "À propos de l'épreuve du cadre et du bâton (Rod and Frame) :",
   "a": [
    [
     "Elle évalue la mémoire verbale.",
     false
    ],
    [
     "Elle évalue la dépendance à l'égard du champ.",
     true
    ],
    [
     "Le sujet doit placer un bâton à la verticale dans un cadre incliné.",
     true
    ]
   ],
   "e": "Elle a été proposée par Witkin et Asch.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Perception et style cognitif",
   "q": "À propos du Test of Visual-Perceptual Skills (TVPS) :",
   "a": [
    [
     "Il évalue le raisonnement verbal.",
     false
    ],
    [
     "Il évalue la perception visuelle.",
     true
    ],
    [
     "Il est utilisé chez les enfants.",
     true
    ]
   ],
   "e": "Il explore notamment la discrimination et la mémoire visuelles.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Perception et style cognitif",
   "q": "À propos du test d'Ishihara :",
   "a": [
    [
     "Il utilise des planches de points colorés.",
     true
    ],
    [
     "Il évalue l'intelligence.",
     false
    ],
    [
     "Il sert à dépister des anomalies de la vision des couleurs.",
     true
    ]
   ],
   "e": "Il repère surtout les déficiences rouge-vert.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Tests moteurs",
   "q": "À propos du BOT-2 (Bruininks-Oseretsky) :",
   "a": [
    [
     "Il s'adresse à des enfants, adolescents et jeunes adultes.",
     true
    ],
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Il évalue la compétence motrice.",
     true
    ]
   ],
   "e": "Il explore les habiletés motrices fines et globales.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Tests moteurs",
   "q": "À propos du Grooved Pegboard :",
   "a": [
    [
     "Il y a 25 trous.",
     true
    ],
    [
     "Il évalue la mémoire verbale.",
     false
    ],
    [
     "Le sujet place des chevilles à encoche dans des trous.",
     true
    ]
   ],
   "e": "Il demande de tourner chaque cheville pour qu'elle s'insère dans le trou.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Tests moteurs",
   "q": "À propos du Nine-Hole Peg Test :",
   "a": [
    [
     "Il évalue la dextérité du membre supérieur.",
     true
    ],
    [
     "Il utilise 9 chevilles.",
     true
    ],
    [
     "Il évalue la compréhension du langage.",
     false
    ]
   ],
   "e": "Il est très utilisé en réadaptation.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Mémoire et développement de l'enfant",
   "q": "À propos du WRAML (Wide Range Assessment of Memory and Learning) :",
   "a": [
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Il s'adresse à des enfants et à des adultes.",
     true
    ],
    [
     "Il évalue la mémoire et l'apprentissage.",
     true
    ]
   ],
   "e": "Il inclut des épreuves verbales et visuelles.",
   "p": "Mémoire"
  },
  {
   "s": "Mémoire et développement de l'enfant",
   "q": "À propos de la Children's Memory Scale (CMS) :",
   "a": [
    [
     "Elle inclut des épreuves verbales et visuelles.",
     true
    ],
    [
     "Elle évalue la mémoire chez l'enfant.",
     true
    ],
    [
     "Elle s'adresse à des adultes de plus de 70 ans.",
     false
    ]
   ],
   "e": "Cohen l'a conçue pour des enfants d'environ 5 à 16 ans.",
   "p": "Mémoire"
  },
  {
   "s": "Mémoire et développement de l'enfant",
   "q": "À propos de l'échelle Merrill-Palmer-R :",
   "a": [
    [
     "Elle est utilisée avec des enfants ayant peu de langage.",
     true
    ],
    [
     "Elle évalue les adultes.",
     false
    ],
    [
     "Elle évalue le développement des jeunes enfants.",
     true
    ]
   ],
   "e": "Elle utilise beaucoup de tâches de manipulation, avec peu de consignes verbales.",
   "p": "Mémoire"
  },
  {
   "s": "Mémoire et développement de l'enfant",
   "q": "À propos des Mullen Scales of Early Learning :",
   "a": [
    [
     "Elles évaluent les adultes.",
     false
    ],
    [
     "Elles évaluent des enfants de la naissance à environ 5 ans.",
     true
    ],
    [
     "Elles comprennent des échelles de langage réceptif et expressif.",
     true
    ]
   ],
   "e": "Elles incluent aussi la motricité globale et fine, et la réception visuelle.",
   "p": "Mémoire"
  },
  {
   "s": "Fonctions exécutives de l'enfant",
   "q": "À propos du TEA-Ch :",
   "a": [
    [
     "Il utilise des tâches ludiques.",
     true
    ],
    [
     "C'est un test de personnalité.",
     false
    ],
    [
     "C'est un test d'attention pour enfants.",
     true
    ]
   ],
   "e": "Il est dérivé du test d'attention de la vie quotidienne de l'adulte.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Fonctions exécutives de l'enfant",
   "q": "À propos des Children's Color Trails :",
   "a": [
    [
     "Ils évaluent le vocabulaire.",
     false
    ],
    [
     "Ils utilisent des couleurs et des chiffres à relier.",
     true
    ],
    [
     "Ils évaluent l'attention et la flexibilité chez l'enfant.",
     true
    ]
   ],
   "e": "Ils sont proches du Trail Making, avec moins de dépendance au langage.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Fonctions exécutives de l'enfant",
   "q": "À propos du DCCS (Dimensional Change Card Sort) :",
   "a": [
    [
     "L'enfant trie des cartes d'abord selon la couleur, puis selon la forme.",
     true
    ],
    [
     "Des enfants d'âge préscolaire persévèrent souvent dans la première règle.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ]
   ],
   "e": "Il évalue la flexibilité cognitive.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Fonctions exécutives de l'enfant",
   "q": "À propos de la NIH Toolbox Cognition Battery :",
   "a": [
    [
     "Elle évalue la personnalité.",
     false
    ],
    [
     "Elle évalue notamment la mémoire de travail et la vitesse de traitement.",
     true
    ],
    [
     "Elle couvre une large étendue d'âge.",
     true
    ]
   ],
   "e": "Elle inclut aussi des épreuves d'attention, de langage et de mémoire épisodique.",
   "p": "Fonctions exécutives"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de la tâche d'indiçage de Posner :",
   "a": [
    [
     "Un indice précède la cible et oriente l'attention.",
     true
    ],
    [
     "Elle évalue le vocabulaire.",
     false
    ],
    [
     "Les essais invalides ralentissent la réponse.",
     true
    ]
   ],
   "e": "Elle étudie l'orientation de l'attention.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de la tâche de Flanker d'Eriksen :",
   "a": [
    [
     "Elle évalue la mémoire à long terme.",
     false
    ],
    [
     "Une lettre cible est entourée de lettres congruentes ou incongruentes.",
     true
    ],
    [
     "Les essais incongruents ralentissent la réponse.",
     true
    ]
   ],
   "e": "Elle mesure le contrôle de l'interférence.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de la tâche de Simon :",
   "a": [
    [
     "Elle évalue la dextérité manuelle fine.",
     false
    ],
    [
     "Elle étudie la compatibilité entre la position du stimulus et celle de la réponse.",
     true
    ],
    [
     "Une position incompatible ralentit la réponse.",
     true
    ]
   ],
   "e": "La position du stimulus est non pertinente, mais elle influence quand même la réponse.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de la tâche n-back :",
   "a": [
    [
     "Elle évalue la personnalité.",
     false
    ],
    [
     "Le sujet indique si un stimulus est identique à celui présenté n positions plus tôt.",
     true
    ],
    [
     "Elle sollicite la mise à jour de la mémoire de travail.",
     true
    ]
   ],
   "e": "Plus n est grand, plus la tâche est difficile.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de l'épreuve d'empan de lecture (reading span) de Daneman et Carpenter :",
   "a": [
    [
     "Le sujet lit des phrases et retient le dernier mot de chacune.",
     true
    ],
    [
     "Elle évalue la mémoire de travail.",
     true
    ],
    [
     "Elle évalue la dextérité.",
     false
    ]
   ],
   "e": "Elle combine un traitement (lecture) et un stockage (mots à retenir).",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de la tâche de balayage mnésique de Sternberg :",
   "a": [
    [
     "Le temps de réponse augmente avec la taille de l'ensemble.",
     true
    ],
    [
     "Le temps de réponse diminue avec la taille de l'ensemble.",
     false
    ],
    [
     "Le sujet mémorise un ensemble d'items, puis dit si un item sonde en fait partie.",
     true
    ]
   ],
   "e": "Sternberg a décrit cet effet en 1966.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Tâches cognitives expérimentales",
   "q": "À propos de la tâche de vigilance psychomotrice (PVT) :",
   "a": [
    [
     "Le sujet répond le plus vite possible à un stimulus visuel.",
     true
    ],
    [
     "Elle évalue le vocabulaire.",
     false
    ],
    [
     "Elle est sensible à la privation de sommeil.",
     true
    ]
   ],
   "e": "La version standard dure environ 10 minutes.",
   "p": "Attention et vitesse"
  },
  {
   "s": "Langage et lecture",
   "q": "À propos du CTOPP (Comprehensive Test of Phonological Processing) :",
   "a": [
    [
     "Il évalue les aptitudes mécaniques.",
     false
    ],
    [
     "Il évalue aussi la mémoire phonologique et la dénomination rapide.",
     true
    ],
    [
     "Il évalue la conscience phonologique.",
     true
    ]
   ],
   "e": "Ces habiletés sont liées à l'apprentissage de la lecture.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Langage et lecture",
   "q": "À propos du Test of Written Language (TOWL) :",
   "a": [
    [
     "Il évalue la dextérité.",
     false
    ],
    [
     "Il est utilisé chez l'enfant et l'adolescent.",
     true
    ],
    [
     "Il évalue l'expression écrite.",
     true
    ]
   ],
   "e": "Il explore le vocabulaire écrit, la rédaction d'histoires et l'orthographe.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Langage et lecture",
   "q": "À propos des Woodcock Reading Mastery Tests :",
   "a": [
    [
     "Ils évaluent des compétences en lecture.",
     true
    ],
    [
     "Ils évaluent la personnalité.",
     false
    ],
    [
     "Ils comprennent notamment l'identification de mots.",
     true
    ]
   ],
   "e": "Ils comprennent aussi la compréhension de textes.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Langage et lecture",
   "q": "À propos de l'ECLA-16+ :",
   "a": [
    [
     "Il s'adresse à des adolescents et à des adultes.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ],
    [
     "C'est un outil francophone d'évaluation de la lecture.",
     true
    ]
   ],
   "e": "Il sert au repérage de difficultés de lecture à partir de 16 ans.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Langage et lecture",
   "q": "À propos de la BELEC :",
   "a": [
    [
     "C'est une batterie francophone d'évaluation du langage écrit.",
     true
    ],
    [
     "Elle sert à repérer des troubles de la lecture et de l'orthographe.",
     true
    ],
    [
     "Elle évalue l'intelligence non verbale.",
     false
    ]
   ],
   "e": "Elle a été conçue notamment par Mousty et ses collègues.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Langage et lecture",
   "q": "À propos de l'Odédys :",
   "a": [
    [
     "Il est d'origine francophone.",
     true
    ],
    [
     "C'est un outil de dépistage des dyslexies.",
     true
    ],
    [
     "Il évalue les intérêts professionnels.",
     false
    ]
   ],
   "e": "Il évalue la lecture de mots réguliers, irréguliers et de pseudo-mots.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Mathématiques et échelles françaises",
   "q": "À propos du KeyMath-3 :",
   "a": [
    [
     "Il couvre des domaines comme le calcul et les applications.",
     true
    ],
    [
     "Il évalue des compétences mathématiques.",
     true
    ],
    [
     "Il évalue la lecture de textes.",
     false
    ]
   ],
   "e": "Il est utilisé dans les bilans scolaires.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Mathématiques et échelles françaises",
   "q": "À propos de la NEMI-2 (Nouvelle échelle métrique de l'intelligence) :",
   "a": [
    [
     "Elle s'inscrit dans l'héritage de l'approche de Binet-Simon.",
     true
    ],
    [
     "Elle évalue la personnalité de l'adulte.",
     false
    ],
    [
     "C'est une échelle française d'intelligence pour enfants.",
     true
    ]
   ],
   "e": "Elle est associée aux travaux de Zazzo.",
   "p": "Acquis scolaires, lecture et langues"
  },
  {
   "s": "Batteries informatisées",
   "q": "À propos de la CANTAB :",
   "a": [
    [
     "Elle utilise un écran tactile.",
     true
    ],
    [
     "Elle se passe uniquement à l'oral.",
     false
    ],
    [
     "C'est une batterie neuropsychologique informatisée.",
     true
    ]
   ],
   "e": "Ses épreuves reposent surtout sur des stimuli visuels.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries informatisées",
   "q": "À propos de CNS Vital Signs :",
   "a": [
    [
     "C'est un test projectif.",
     false
    ],
    [
     "Elle comprend des épreuves comme le Stroop.",
     true
    ],
    [
     "C'est une batterie informatisée d'évaluation cognitive.",
     true
    ]
   ],
   "e": "Elle évalue notamment l'attention et la vitesse de traitement.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Batteries informatisées",
   "q": "À propos d'ImPACT :",
   "a": [
    [
     "C'est un outil informatisé utilisé dans l'évaluation des commotions cérébrales.",
     true
    ],
    [
     "On le fait passer en début de saison, comme mesure de référence.",
     true
    ],
    [
     "Il évalue les intérêts professionnels.",
     false
    ]
   ],
   "e": "On compare ensuite un résultat après un choc à la mesure de référence.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Mémoire",
   "q": "À propos de la tâche de Brown-Peterson :",
   "a": [
    [
     "Elle évalue la dextérité.",
     false
    ],
    [
     "Elle étudie l'oubli à court terme.",
     true
    ],
    [
     "Le sujet retient une information pendant qu'il effectue une tâche distractive.",
     true
    ]
   ],
   "e": "Plus le délai de distraction augmente, plus le rappel diminue.",
   "p": "Mémoire"
  },
  {
   "s": "Mémoire",
   "q": "À propos du test Doors and People :",
   "a": [
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Il évalue la mémoire verbale et visuelle.",
     true
    ],
    [
     "Il évalue le rappel et la reconnaissance.",
     true
    ]
   ],
   "e": "Baddeley et ses collègues l'ont conçu.",
   "p": "Mémoire"
  },
  {
   "s": "Praxies et latéralité",
   "q": "À propos du test d'imitation de gestes de Bergès-Lézine :",
   "a": [
    [
     "Il s'adresse à de jeunes enfants.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Le sujet imite des gestes de la main et des doigts.",
     true
    ]
   ],
   "e": "Il évalue le schéma corporel et les praxies.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Praxies et latéralité",
   "q": "À propos de l'épreuve de Head (orientation droite-gauche) :",
   "a": [
    [
     "Le sujet reproduit des gestes se rapportant à la droite et à la gauche.",
     true
    ],
    [
     "Elle évalue l'orientation spatiale.",
     true
    ],
    [
     "Elle évalue la mémoire des mots.",
     false
    ]
   ],
   "e": "Elle est utilisée chez l'enfant et chez l'adulte.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Praxies et latéralité",
   "q": "À propos de l'Edinburgh Handedness Inventory (Oldfield) :",
   "a": [
    [
     "Il comporte 10 items.",
     true
    ],
    [
     "Il évalue l'intelligence.",
     false
    ],
    [
     "Il évalue la préférence manuelle.",
     true
    ]
   ],
   "e": "Le quotient de latéralité va de −100 à +100.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Praxies et latéralité",
   "q": "À propos de l'échelle de Snellen :",
   "a": [
    [
     "Une acuité de 20/20 correspond à une vision normale.",
     true
    ],
    [
     "Elle évalue l'acuité visuelle.",
     true
    ],
    [
     "Elle évalue la perception des couleurs.",
     false
    ]
   ],
   "e": "L'échelle de Snellen utilise des lettres de tailles décroissantes.",
   "p": "Neuropsychologie et motricité"
  },
  {
   "s": "Figures complexes",
   "q": "À propos de la figure complexe de Taylor :",
   "a": [
    [
     "Elle permet de réduire l'effet de pratique à la reprise du test.",
     true
    ],
    [
     "Elle évalue le vocabulaire.",
     false
    ],
    [
     "Elle sert de forme alternative à la figure de Rey.",
     true
    ]
   ],
   "e": "Elle est de même nature que la figure de Rey, avec un dessin différent.",
   "p": "Espace, perception et mécanique"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Similitudes du WAIS-IV :",
   "a": [
    [
     "Il évalue le raisonnement verbal abstrait.",
     true
    ],
    [
     "Le sujet explique ce que deux mots ont en commun.",
     true
    ],
    [
     "Il évalue la vitesse de traitement.",
     false
    ]
   ],
   "e": "Par exemple : « en quoi une orange et une banane se ressemblent-elles ? ».",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Compréhension du WAIS-IV :",
   "a": [
    [
     "Il évalue le jugement pratique et la connaissance des normes.",
     true
    ],
    [
     "Il demande d'expliquer des situations sociales ou des règles de conduite.",
     true
    ],
    [
     "Il évalue la dextérité manuelle.",
     false
    ]
   ],
   "e": "Il est un sous-test complémentaire de la compréhension verbale.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Matrices du WAIS-IV :",
   "a": [
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il évalue le raisonnement fluide.",
     true
    ],
    [
     "Le sujet complète une matrice dont une case est manquante.",
     true
    ]
   ],
   "e": "Il est proche des matrices de Raven.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Puzzles visuels du WAIS-IV :",
   "a": [
    [
     "Il évalue le raisonnement perceptif.",
     true
    ],
    [
     "Il évalue le calcul mental.",
     false
    ],
    [
     "Le sujet choisit les pièces qui, ensemble, reconstituent un puzzle.",
     true
    ]
   ],
   "e": "Il fait partie de l'indice de raisonnement perceptif.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Arithmétique du WAIS-IV :",
   "a": [
    [
     "Il fait appel à la mémoire de travail.",
     true
    ],
    [
     "Il permet l'usage d'une calculatrice.",
     false
    ],
    [
     "Le sujet résout mentalement des problèmes présentés à l'oral.",
     true
    ]
   ],
   "e": "Il est chronométré, et il fait partie de l'indice de mémoire de travail.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Mémoire des chiffres du WAIS-IV :",
   "a": [
    [
     "L'épreuve à l'envers sollicite davantage la mémoire de travail.",
     true
    ],
    [
     "Il comprend des épreuves à l'endroit, à l'envers et dans l'ordre croissant.",
     true
    ],
    [
     "Il évalue le raisonnement visuo-spatial.",
     false
    ]
   ],
   "e": "Il fait partie de l'indice de mémoire de travail.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Symboles du WAIS-IV :",
   "a": [
    [
     "Il évalue la vitesse de traitement.",
     true
    ],
    [
     "Le sujet cherche si un symbole cible figure dans un groupe de symboles.",
     true
    ],
    [
     "Il évalue le raisonnement verbal.",
     false
    ]
   ],
   "e": "Il fait partie de l'indice de vitesse de traitement.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Barrage du WAIS-IV :",
   "a": [
    [
     "Il évalue la mémoire verbale.",
     false
    ],
    [
     "Le sujet barre des cibles dans un ensemble de dessins.",
     true
    ],
    [
     "Il évalue la vitesse de traitement visuelle.",
     true
    ]
   ],
   "e": "Il est un sous-test complémentaire de l'indice de vitesse de traitement.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WAIS-IV",
   "q": "À propos du sous-test Compléments d'images du WAIS-IV :",
   "a": [
    [
     "Il évalue le calcul.",
     false
    ],
    [
     "Le sujet repère l'élément manquant d'une image.",
     true
    ],
    [
     "Il évalue la perception visuelle et l'attention aux détails.",
     true
    ]
   ],
   "e": "Il est un sous-test complémentaire.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Sous-tests du WISC-V et du SB5",
   "q": "À propos du Stanford-Binet 5 :",
   "a": [
    [
     "Ces épreuves portent sur le vocabulaire et sur des séries d'objets ou des matrices.",
     true
    ],
    [
     "Il commence par deux épreuves d'orientation (routage).",
     true
    ],
    [
     "Il commence par un questionnaire de personnalité.",
     false
    ]
   ],
   "e": "Le résultat de ces épreuves détermine le niveau de départ des autres épreuves.",
   "p": "Sous-tests du WAIS et du WISC"
  },
  {
   "s": "Problèmes de raisonnement",
   "q": "Dans 4 ans, Aline aura le double de l'âge de Paul. Paul a aujourd'hui 8 ans.",
   "a": [
    [
     "Dans 4 ans, Paul aura 12 ans.",
     true
    ],
    [
     "Aline a aujourd'hui 24 ans.",
     false
    ],
    [
     "Aline a aujourd'hui 20 ans.",
     true
    ]
   ],
   "e": "Dans 4 ans, Aline aura 24 ans. Aujourd'hui, elle a donc 20 ans.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Problèmes de raisonnement",
   "q": "On mélange 2 L de solution à 10 % et 3 L de solution à 20 %.",
   "a": [
    [
     "La concentration finale est de 15 %.",
     false
    ],
    [
     "La concentration finale est de 16 %.",
     true
    ],
    [
     "Le volume total est de 5 L.",
     true
    ]
   ],
   "e": "(2 × 0,10 + 3 × 0,20) ÷ 5 = 0,80 ÷ 5 = 0,16.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Problèmes de raisonnement",
   "q": "Une somme de 120 $ est partagée dans le rapport 1 : 2 : 3.",
   "a": [
    [
     "La plus grande part est de 60 $.",
     true
    ],
    [
     "La plus petite part est de 20 $.",
     true
    ],
    [
     "La plus petite part est de 30 $.",
     false
    ]
   ],
   "e": "1 + 2 + 3 = 6 parts de 20 $ chacune.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Problèmes de raisonnement",
   "q": "Un trajet aller se fait à 60 km/h et le retour à 40 km/h, sur la même distance.",
   "a": [
    [
     "La vitesse moyenne sur l'ensemble du trajet est de 48 km/h.",
     true
    ],
    [
     "Elle n'est pas égale à la moyenne simple des vitesses.",
     true
    ],
    [
     "La vitesse moyenne est de 50 km/h.",
     false
    ]
   ],
   "e": "La vitesse moyenne se calcule avec la distance totale et le temps total, soit 2 × 60 × 40 ÷ 100 = 48.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Problèmes de raisonnement",
   "q": "Une urne contient 3 boules rouges et 2 boules bleues. On tire 2 boules sans remise.",
   "a": [
    [
     "La probabilité de tirer deux boules rouges est de 3/10.",
     true
    ],
    [
     "La première probabilité est de 3/5.",
     true
    ],
    [
     "La probabilité de tirer deux boules rouges est de 9/25.",
     false
    ]
   ],
   "e": "3/5 × 2/4 = 6/20 = 3/10. 9/25 correspondrait à un tirage avec remise.",
   "p": "Raisonnement numérique et calcul"
  },
  {
   "s": "Séries logiques",
   "q": "Soit la série : 2, 3, 5, 9, 17, …",
   "a": [
    [
     "Les écarts sont 1, 2, 4, 8, puis 16.",
     true
    ],
    [
     "Le terme suivant est 33.",
     true
    ],
    [
     "Le terme suivant est 25.",
     false
    ]
   ],
   "e": "17 + 16 = 33.",
   "p": "Séries logiques"
  },
  {
   "s": "Raisonnement verbal",
   "q": "Analogie : « ordinateur est à clavier comme voiture est à … ».",
   "a": [
    [
     "« Route » complète l'analogie.",
     false
    ],
    [
     "La relation est « appareil – dispositif de commande ».",
     true
    ],
    [
     "« Volant » complète l'analogie.",
     true
    ]
   ],
   "e": "Le clavier sert à commander l'ordinateur, le volant à diriger la voiture.",
   "p": "Raisonnement verbal et langue"
  },
  {
   "s": "Raisonnement spatial",
   "q": "Une flèche pointe vers le haut et tourne de 270° dans le sens des aiguilles d'une montre.",
   "a": [
    [
     "Elle pointe alors vers la droite.",
     false
    ],
    [
     "Cette rotation équivaut à 90° dans le sens inverse.",
     true
    ],
    [
     "Elle pointe alors vers la gauche.",
     true
    ]
   ],
   "e": "270° dans le sens horaire équivalent à un quart de tour vers la gauche.",
   "p": "Espace, perception et mécanique"
  }
 ],
 "per": [
  {
   "p": "Organisation de l'État congolais",
   "s": "Pouvoirs",
   "q": "À propos de la séparation des pouvoirs en RDC :",
   "a": [
    [
     "Le pouvoir exécutif est exercé par le Président de la République et le Gouvernement.",
     true
    ],
    [
     "Le Parlement ne comprend qu'une seule chambre.",
     false
    ],
    [
     "Le pouvoir législatif est exercé par le Parlement, composé de l'Assemblée nationale et du Sénat.",
     true
    ]
   ],
   "e": "Le Parlement congolais est bicaméral : Assemblée nationale et Sénat."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Séparation des pouvoirs",
   "q": "À propos du principe de séparation des pouvoirs :",
   "a": [
    [
     "Il distingue le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire.",
     true
    ],
    [
     "Il interdit toute forme de collaboration entre les pouvoirs.",
     false
    ],
    [
     "Il vise à éviter la concentration du pouvoir entre les mêmes mains.",
     true
    ]
   ],
   "e": "Les pouvoirs sont séparés, mais ils collaborent : par exemple, le Gouvernement est responsable devant l'Assemblée nationale."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Nature de l'État",
   "q": "À propos de la nature de l'État congolais :",
   "a": [
    [
     "La RDC est un État fédéral.",
     false
    ],
    [
     "La RDC est un État de droit.",
     true
    ],
    [
     "La Constitution proclame le caractère uni et indivisible de la RDC.",
     true
    ]
   ],
   "e": "La RDC est un État unitaire décentralisé, avec des provinces dotées de compétences propres."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Pouvoir judiciaire",
   "q": "À propos de l'indépendance de la justice :",
   "a": [
    [
     "Le ministre de la Justice peut dicter sa décision à un juge.",
     false
    ],
    [
     "Le pouvoir judiciaire est indépendant des pouvoirs exécutif et législatif.",
     true
    ],
    [
     "Le Conseil supérieur de la magistrature est une institution prévue par la Constitution.",
     true
    ]
   ],
   "e": "L'indépendance du juge est une garantie du procès équitable."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Province",
   "q": "À propos de la province et des ETD :",
   "a": [
    [
     "La province est dotée de la personnalité juridique.",
     true
    ],
    [
     "La commune est une subdivision de la ville.",
     true
    ],
    [
     "La province fait partie des ETD.",
     false
    ]
   ],
   "e": "La province est une composante politique et administrative de la République, distincte des ETD."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Décentralisation",
   "q": "À propos de la décentralisation et de la déconcentration :",
   "a": [
    [
     "La déconcentration confie des pouvoirs à des agents locaux de l'État.",
     true
    ],
    [
     "La déconcentration crée des collectivités autonomes dirigées par des élus.",
     false
    ],
    [
     "La décentralisation transfère des compétences à des entités dotées de la personnalité juridique.",
     true
    ]
   ],
   "e": "La déconcentration reste dans le cadre d'une même personne juridique, l'État."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Ressources",
   "q": "À propos des ressources des provinces :",
   "a": [
    [
     "La Constitution prévoit qu'une part de 40 % des recettes à caractère national revient aux provinces.",
     true
    ],
    [
     "Une Caisse nationale de péréquation est prévue pour financer des projets d'investissement.",
     true
    ],
    [
     "Les provinces ne perçoivent aucune recette.",
     false
    ]
   ],
   "e": "Les provinces disposent de recettes propres et d'une quote-part des recettes nationales."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Libre administration",
   "q": "À propos de la libre administration des provinces :",
   "a": [
    [
     "Elle suppose des organes locaux élus et des ressources propres.",
     true
    ],
    [
     "Les provinces gèrent librement leurs affaires dans le cadre de la Constitution et des lois.",
     true
    ],
    [
     "Elle exclut tout contrôle de l'État.",
     false
    ]
   ],
   "e": "La libre administration n'exclut pas un contrôle de légalité."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Recrutement",
   "q": "Selon la loi de 2016, à propos de l'âge de recrutement :",
   "a": [
    [
     "L'âge maximum est en principe de 35 ans, avec une dérogation possible jusqu'à 40 ans.",
     true
    ],
    [
     "L'âge minimum est de 18 ans.",
     true
    ],
    [
     "L'âge maximum est de 60 ans.",
     false
    ]
   ],
   "e": "Ces limites d'âge concernent l'entrée dans la carrière."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Positions",
   "q": "À propos des positions de l'agent de carrière :",
   "a": [
    [
     "L'agent peut être placé en détachement.",
     true
    ],
    [
     "La suspension équivaut à une révocation.",
     false
    ],
    [
     "La suspension est une mesure conservatoire, et non une sanction.",
     true
    ]
   ],
   "e": "La suspension permet d'écarter provisoirement l'agent présumé fautif, dans l'intérêt du service."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Concours",
   "q": "À propos de l'organisation d'un concours administratif :",
   "a": [
    [
     "Il repose sur l'égalité des candidats.",
     true
    ],
    [
     "Le jury peut favoriser un candidat qu'il connaît.",
     false
    ],
    [
     "Les épreuves sont notées selon un barème connu.",
     true
    ]
   ],
   "e": "Le favoritisme est contraire au principe d'égalité d'accès aux emplois publics."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Délégation",
   "q": "À propos de la délégation dans l'administration :",
   "a": [
    [
     "La délégation de pouvoir doit reposer sur un texte.",
     true
    ],
    [
     "Une délégation peut être donnée sans aucune limite ni texte.",
     false
    ],
    [
     "La délégation de signature permet à un subordonné de signer au nom de son supérieur.",
     true
    ]
   ],
   "e": "La délégation est encadrée pour garantir la responsabilité de l'autorité."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Budget-programme",
   "q": "À propos du budget-programme :",
   "a": [
    [
     "Il repose sur une logique de résultats.",
     true
    ],
    [
     "Il alloue des crédits sans lien avec les résultats.",
     false
    ],
    [
     "Il alloue des crédits à des actions menées dans le cadre de politiques publiques.",
     true
    ]
   ],
   "e": "Le budget-programme relie les moyens aux objectifs et à la performance."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Exécution",
   "q": "À propos de la séparation de l'ordonnateur et du comptable :",
   "a": [
    [
     "Le comptable public est celui qui engage la dépense.",
     false
    ],
    [
     "Le comptable public paie la dépense après contrôle de sa régularité.",
     true
    ],
    [
     "L'ordonnateur prescrit l'exécution des recettes et des dépenses.",
     true
    ]
   ],
   "e": "Cette séparation vise à prévenir les détournements en divisant les rôles."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Régies financières",
   "q": "À propos des régies financières :",
   "a": [
    [
     "La DGI est chargée des douanes et accises.",
     false
    ],
    [
     "La DGDA est chargée des douanes et accises.",
     true
    ],
    [
     "La DGI est chargée des impôts.",
     true
    ]
   ],
   "e": "La DGRAD s'occupe des recettes administratives, judiciaires, domaniales et de participations."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Recettes",
   "q": "À propos des recettes publiques :",
   "a": [
    [
     "L'impôt est un prélèvement obligatoire sans contrepartie directe et individualisée.",
     true
    ],
    [
     "La redevance rémunère un service rendu à l'usager.",
     true
    ],
    [
     "L'impôt donne droit à une contrepartie directe et individualisée.",
     false
    ]
   ],
   "e": "La redevance suppose une contrepartie ; l'impôt finance les charges publiques en général."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Planification budgétaire",
   "q": "À propos du cadre de dépenses à moyen terme (CDMT) :",
   "a": [
    [
     "Il fixe des enveloppes de dépenses sur plusieurs années.",
     true
    ],
    [
     "Il ne concerne que l'exercice en cours.",
     false
    ],
    [
     "Il aide à relier la planification et le budget.",
     true
    ]
   ],
   "e": "Il donne une vision pluriannuelle des priorités."
  },
  {
   "p": "Marchés publics",
   "s": "Catégories",
   "q": "À propos des catégories de marchés publics :",
   "a": [
    [
     "Il y a des marchés de travaux.",
     true
    ],
    [
     "Il n'existe que des marchés de travaux.",
     false
    ],
    [
     "Il y a des marchés de prestations intellectuelles.",
     true
    ]
   ],
   "e": "La loi distingue travaux, fournitures, services et prestations intellectuelles."
  },
  {
   "p": "Marchés publics",
   "s": "Institutions",
   "q": "À propos de la Direction générale de contrôle des marchés publics (DGCMP) :",
   "a": [
    [
     "Elle contrôle a priori les procédures de passation et d'attribution.",
     true
    ],
    [
     "Elle valide et met à jour la législation sur les marchés publics.",
     false
    ],
    [
     "Elle a été créée par le décret n° 10/27 du 28 juin 2010.",
     true
    ]
   ],
   "e": "La validation et la mise à jour de la législation relèvent de l'ARMP."
  },
  {
   "p": "Marchés publics",
   "s": "Acteurs",
   "q": "À propos de l'autorité contractante :",
   "a": [
    [
     "C'est la personne publique qui passe le marché.",
     true
    ],
    [
     "Une entreprise privée est toujours autorité contractante.",
     false
    ],
    [
     "Elle peut être un ministère, une province ou un établissement public.",
     true
    ]
   ],
   "e": "Le champ de la loi comprend aussi les services déconcentrés et les entités décentralisées."
  },
  {
   "p": "Marchés publics",
   "s": "Planification",
   "q": "À propos de la planification des marchés publics :",
   "a": [
    [
     "La publicité des avis d'appel d'offres favorise la concurrence.",
     true
    ],
    [
     "Un marché peut être passé sans plan ni publicité.",
     false
    ],
    [
     "Un plan de passation prévoit les marchés à passer pendant l'année.",
     true
    ]
   ],
   "e": "Planifier et publier sont deux garanties de transparence."
  },
  {
   "p": "Théories de l'administration",
   "s": "Fayol",
   "q": "À propos d'Henri Fayol :",
   "a": [
    [
     "Il a proposé 14 principes de gestion.",
     true
    ],
    [
     "Il est l'auteur de l'organisation scientifique du travail.",
     false
    ],
    [
     "Il décrit cinq fonctions : prévoir, organiser, commander, coordonner, contrôler.",
     true
    ]
   ],
   "e": "L'organisation scientifique du travail est associée à Taylor."
  },
  {
   "p": "Théories de l'administration",
   "s": "Crozier",
   "q": "À propos de Michel Crozier :",
   "a": [
    [
     "Il montre que le contrôle d'une zone d'incertitude donne du pouvoir.",
     true
    ],
    [
     "Il est le théoricien du taylorisme.",
     false
    ],
    [
     "Il est l'auteur de « Le phénomène bureaucratique ».",
     true
    ]
   ],
   "e": "Crozier étudie le pouvoir dans les organisations."
  },
  {
   "p": "Théories de l'administration",
   "s": "Service public",
   "q": "À propos des lois de Rolland sur le service public :",
   "a": [
    [
     "Le principe de continuité exige que le service public ne soit pas interrompu à volonté.",
     true
    ],
    [
     "Le principe d'égalité impose un traitement identique à des usagers dans la même situation.",
     true
    ],
    [
     "Le principe de continuité autorise l'administration à interrompre le service à volonté.",
     false
    ]
   ],
   "e": "Le troisième principe est l'adaptation (mutabilité) du service aux besoins."
  },
  {
   "p": "Théories de l'administration",
   "s": "Structures",
   "q": "À propos des structures d'organisation :",
   "a": [
    [
     "La structure matricielle comporte une double ligne d'autorité.",
     true
    ],
    [
     "La structure fonctionnelle regroupe les unités par produit.",
     false
    ],
    [
     "La structure fonctionnelle regroupe les unités par fonction.",
     true
    ]
   ],
   "e": "Regrouper par produit ou par marché correspond à la structure divisionnelle."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Légalité",
   "q": "À propos du principe de légalité :",
   "a": [
    [
     "Le recours pour excès de pouvoir vise à faire annuler un acte illégal.",
     true
    ],
    [
     "Le recours pour excès de pouvoir vise à obtenir des dommages-intérêts.",
     false
    ],
    [
     "L'administration doit agir conformément à la loi.",
     true
    ]
   ],
   "e": "La réparation relève plutôt du recours en responsabilité."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Contrats",
   "q": "À propos des contrats administratifs :",
   "a": [
    [
     "L'administration y dispose de prérogatives de puissance publique.",
     true
    ],
    [
     "Ils sont régis uniquement par le droit civil.",
     false
    ],
    [
     "Les marchés publics sont des contrats administratifs.",
     true
    ]
   ],
   "e": "Le régime des contrats administratifs déroge au droit commun des contrats."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Actes",
   "q": "À propos des actes réglementaires et individuels :",
   "a": [
    [
     "Une décision de nomination d'un agent est un acte réglementaire.",
     false
    ],
    [
     "Un acte réglementaire a une portée générale et impersonnelle.",
     true
    ],
    [
     "Un acte individuel vise une ou plusieurs personnes déterminées.",
     true
    ]
   ],
   "e": "Une nomination vise une personne déterminée : c'est un acte individuel."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Contrôle",
   "q": "À propos de la Cour des comptes :",
   "a": [
    [
     "Elle n'a aucun pouvoir de contrôle sur les comptes publics.",
     false
    ],
    [
     "Elle exerce un contrôle juridictionnel sur les comptes publics.",
     true
    ],
    [
     "Elle est l'institution supérieure de contrôle des finances publiques.",
     true
    ]
   ],
   "e": "Son rôle est de juger les comptes des comptables publics et de vérifier la régularité de l'exécution du budget."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Corruption",
   "q": "À propos de la corruption :",
   "a": [
    [
     "Accepter un pot-de-vin relève de la corruption active.",
     false
    ],
    [
     "La corruption passive consiste, pour un agent public, à solliciter ou accepter un avantage indu.",
     true
    ],
    [
     "La corruption active consiste à offrir un avantage indu à un agent public.",
     true
    ]
   ],
   "e": "Celui qui offre commet la corruption active, celui qui reçoit commet la corruption passive."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Valeurs",
   "q": "À propos des valeurs du service public :",
   "a": [
    [
     "L'impartialité en fait partie.",
     true
    ],
    [
     "L'intégrité en fait partie.",
     true
    ],
    [
     "La recherche du profit personnel en fait partie.",
     false
    ]
   ],
   "e": "L'agent public sert l'intérêt général, et non son intérêt personnel."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Cadres internationaux",
   "q": "À propos de l'Agenda 2063 de l'Union africaine :",
   "a": [
    [
     "Il a été adopté par l'ONU en 2015.",
     false
    ],
    [
     "C'est un cadre stratégique de l'Union africaine.",
     true
    ],
    [
     "Il vise la transformation socio-économique du continent.",
     true
    ]
   ],
   "e": "L'ONU a adopté l'Agenda 2030, avec les ODD."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Budget et performance",
   "q": "À propos du décret portant gouvernance budgétaire (2022) :",
   "a": [
    [
     "Il vise à renforcer la discipline budgétaire.",
     true
    ],
    [
     "Il organise la déconcentration de l'ordonnancement.",
     true
    ],
    [
     "Il supprime le budget-programme.",
     false
    ]
   ],
   "e": "Il précise les modalités de mise en œuvre des innovations de la loi de 2011 sur les finances publiques."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Planification locale",
   "q": "À propos d'un plan de développement local :",
   "a": [
    [
     "Il est élaboré avec la participation de la population.",
     true
    ],
    [
     "Il est établi sans aucune consultation.",
     false
    ],
    [
     "Il fixe les priorités de développement d'une entité.",
     true
    ]
   ],
   "e": "Un plan élaboré avec les populations est mieux adapté et mieux accepté."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Circulaire",
   "q": "À propos de la circulaire :",
   "a": [
    [
     "Elle émane d'une autorité hiérarchique.",
     true
    ],
    [
     "C'est un contrat conclu avec un fournisseur.",
     false
    ],
    [
     "Elle précise l'application d'un texte aux services.",
     true
    ]
   ],
   "e": "La circulaire explique comment appliquer une loi ou un règlement."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Voie hiérarchique",
   "q": "À propos de la voie hiérarchique :",
   "a": [
    [
     "Une demande d'un agent est en principe transmise par son chef hiérarchique.",
     true
    ],
    [
     "L'agent doit toujours contourner son chef.",
     false
    ],
    [
     "La transmission se fait sous le couvert de la hiérarchie.",
     true
    ]
   ],
   "e": "Respecter la voie hiérarchique garantit l'information de chaque niveau."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Style administratif",
   "q": "À propos du style administratif :",
   "a": [
    [
     "Il est clair et concis.",
     true
    ],
    [
     "Il utilise du jargon pour impressionner le lecteur.",
     false
    ],
    [
     "Il privilégie des phrases courtes.",
     true
    ]
   ],
   "e": "Un message administratif doit être compris du premier coup."
  },
  {
   "p": "Organisation administrative",
   "s": "Secrétaire général",
   "q": "À propos du secrétaire général d'un ministère :",
   "a": [
    [
     "Il est nommé par ordonnance présidentielle, sur proposition du ministre de la Fonction publique.",
     true
    ],
    [
     "Il est l'autorité administrative du ministère.",
     true
    ],
    [
     "Il est élu par les agents du ministère.",
     false
    ]
   ],
   "e": "Il assure la liaison entre le cabinet politique et l'administration du ministère."
  },
  {
   "p": "Organisation administrative",
   "s": "Loi organique 16/001",
   "q": "À propos du champ d'application de la loi organique n° 16/001 du 3 mai 2016 :",
   "a": [
    [
     "Elle ne concerne que les provinces.",
     false
    ],
    [
     "Elle s'applique aussi aux administrations de l'Assemblée nationale et du Sénat.",
     true
    ],
    [
     "Elle s'applique à l'administration des ministères.",
     true
    ]
   ],
   "e": "Elle couvre aussi l'administration de la Cour des comptes et celles des provinces et des ETD."
  },
  {
   "p": "Organisation administrative",
   "s": "Primature",
   "q": "À propos de la Primature :",
   "a": [
    [
     "Le Premier ministre dispose d'un cabinet.",
     true
    ],
    [
     "Un secrétariat général à la Primature assure l'administration.",
     true
    ],
    [
     "Le Premier ministre n'a pas de cabinet.",
     false
    ]
   ],
   "e": "La structure suit la même logique qu'un ministère : cabinet politique et secrétariat général."
  },
  {
   "p": "Organisation administrative",
   "s": "Coordination",
   "q": "À propos de la coordination gouvernementale :",
   "a": [
    [
     "Le Conseil des ministres est une juridiction.",
     false
    ],
    [
     "Des comités interministériels peuvent coordonner des dossiers transversaux.",
     true
    ],
    [
     "Le Conseil des ministres réunit le Gouvernement.",
     true
    ]
   ],
   "e": "Les décisions du Gouvernement sont prises collectivement dans le cadre de son programme."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Triple contrainte",
   "q": "À propos de la triple contrainte :",
   "a": [
    [
     "Modifier l'une des contraintes influence les autres.",
     true
    ],
    [
     "Elle associe notamment les délais, les coûts et le périmètre.",
     true
    ],
    [
     "Les trois contraintes sont indépendantes.",
     false
    ]
   ],
   "e": "Par exemple, ajouter du périmètre augmente souvent les délais ou les coûts."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Initiation",
   "q": "À propos de la charte de projet :",
   "a": [
    [
     "Elle nomme le chef de projet.",
     true
    ],
    [
     "Elle autorise formellement le projet.",
     true
    ],
    [
     "Elle est rédigée après la clôture du projet.",
     false
    ]
   ],
   "e": "La charte donne au chef de projet l'autorité d'engager des ressources."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Jalons",
   "q": "À propos des jalons :",
   "a": [
    [
     "Il marque l'achèvement d'une étape importante.",
     true
    ],
    [
     "Un jalon est un événement sans durée.",
     true
    ],
    [
     "Un jalon dure toujours trois mois.",
     false
    ]
   ],
   "e": "Un jalon n'a pas de durée propre."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Gantt",
   "q": "À propos du diagramme de Gantt :",
   "a": [
    [
     "Il représente les tâches dans le temps.",
     true
    ],
    [
     "Il ne montre jamais les durées.",
     false
    ],
    [
     "C'est un diagramme à barres.",
     true
    ]
   ],
   "e": "Il porte le nom de Henry Gantt."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "PERT",
   "q": "Estimations PERT d'une tâche : optimiste 2, probable 4, pessimiste 12.",
   "a": [
    [
     "L'écart-type vaut environ 1,67.",
     true
    ],
    [
     "La durée espérée est de 5.",
     true
    ],
    [
     "La durée espérée est de 4.",
     false
    ]
   ],
   "e": "(2 + 4 × 4 + 12) ÷ 6 = 5. Écart-type : (12 − 2) ÷ 6 ≈ 1,67."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Réserves de délai",
   "q": "À propos des réserves de délai :",
   "a": [
    [
     "Elles absorbent une partie des incertitudes.",
     true
    ],
    [
     "Elles remplacent le suivi du projet.",
     false
    ],
    [
     "Elles peuvent être ajoutées au calendrier.",
     true
    ]
   ],
   "e": "Une réserve ne dispense pas de suivre l'avancement."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Valeur acquise",
   "q": "À propos de la méthode de la valeur acquise :",
   "a": [
    [
     "PV est la valeur planifiée.",
     true
    ],
    [
     "EV est la valeur acquise du travail réalisé.",
     true
    ],
    [
     "AC est la valeur planifiée.",
     false
    ]
   ],
   "e": "AC est le coût réel (actual cost)."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Rentabilité",
   "q": "À propos de la valeur actuelle nette (VAN) :",
   "a": [
    [
     "Une VAN positive indique en principe un projet rentable.",
     true
    ],
    [
     "C'est la somme des flux actualisés.",
     true
    ],
    [
     "La VAN est toujours positive.",
     false
    ]
   ],
   "e": "La VAN tient compte de la valeur du temps."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Processus de gestion des coûts",
   "q": "À propos de la gestion des coûts d'un projet :",
   "a": [
    [
     "La maîtrise des coûts intervient avant toute estimation.",
     false
    ],
    [
     "Elle comprend l'estimation des coûts et la détermination du budget.",
     true
    ],
    [
     "Elle comprend la maîtrise des coûts pendant l'exécution.",
     true
    ]
   ],
   "e": "On estime d'abord, on fixe le budget, puis on suit les écarts pendant l'exécution."
  },
  {
   "p": "Gestion des risques",
   "s": "Réponses",
   "q": "À propos des stratégies face aux menaces :",
   "a": [
    [
     "Atténuer signifie ignorer le risque.",
     false
    ],
    [
     "Éviter, transférer, atténuer et accepter sont des stratégies.",
     true
    ],
    [
     "Souscrire une assurance est une forme de transfert.",
     true
    ]
   ],
   "e": "Atténuer vise à réduire la probabilité ou l'impact."
  },
  {
   "p": "Gestion des risques",
   "s": "Identification",
   "q": "À propos des techniques d'identification des risques :",
   "a": [
    [
     "L'identification des risques est interdite en phase de planification.",
     false
    ],
    [
     "Le brainstorming en fait partie.",
     true
    ],
    [
     "La méthode Delphi consulte des experts de façon anonyme.",
     true
    ]
   ],
   "e": "Les risques peuvent être identifiés dès l'initiation."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Parties prenantes",
   "q": "À propos du registre des parties prenantes :",
   "a": [
    [
     "Il est rédigé une fois, puis jamais revu.",
     false
    ],
    [
     "Il est mis à jour au fil du projet.",
     true
    ],
    [
     "Il identifie les parties prenantes et leurs attentes.",
     true
    ]
   ],
   "e": "Les attentes et l'influence évoluent au cours du projet."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Réunions",
   "q": "À propos des réunions de projet :",
   "a": [
    [
     "Un compte rendu précise les actions et leurs responsables.",
     true
    ],
    [
     "Un ordre du jour annonce les points à traiter.",
     true
    ],
    [
     "Une réunion efficace n'a pas besoin d'objectif.",
     false
    ]
   ],
   "e": "Sans objectif, une réunion fait perdre du temps."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Communication interculturelle",
   "q": "À propos de la communication dans un contexte multiculturel :",
   "a": [
    [
     "Un message adapté au contexte local est mieux compris.",
     true
    ],
    [
     "La culture n'influence pas la communication.",
     false
    ],
    [
     "Il faut tenir compte des langues et des cultures.",
     true
    ]
   ],
   "e": "Les codes, les silences et les formules varient d'une culture à l'autre."
  },
  {
   "p": "Agile et Scrum",
   "s": "Sprint",
   "q": "À propos du sprint :",
   "a": [
    [
     "Un sprint dure toujours six mois.",
     false
    ],
    [
     "Il produit un incrément utilisable.",
     true
    ],
    [
     "Sa durée est fixe, d'un mois au plus.",
     true
    ]
   ],
   "e": "Des sprints courts permettent d'ajuster rapidement."
  },
  {
   "p": "Agile et Scrum",
   "s": "Estimation agile",
   "q": "À propos de l'estimation agile :",
   "a": [
    [
     "Un point d'effort correspond exactement à une heure.",
     false
    ],
    [
     "Les points d'effort mesurent un effort relatif.",
     true
    ],
    [
     "Le planning poker aide l'équipe à estimer ensemble.",
     true
    ]
   ],
   "e": "Les points comparent les tâches entre elles."
  },
  {
   "p": "Agile et Scrum",
   "s": "Burndown",
   "q": "À propos du diagramme d'avancement (burndown) :",
   "a": [
    [
     "Il montre le budget dépensé uniquement.",
     false
    ],
    [
     "Il permet de visualiser l'avancement d'un sprint.",
     true
    ],
    [
     "Il montre le travail restant dans le temps.",
     true
    ]
   ],
   "e": "La courbe descend à mesure que le travail est terminé."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "PMBOK 7",
   "q": "À propos du Guide PMBOK (7ᵉ édition) :",
   "a": [
    [
     "Il ne contient aucun principe.",
     false
    ],
    [
     "Il présente 12 principes.",
     true
    ],
    [
     "Il présente 8 domaines de performance.",
     true
    ]
   ],
   "e": "La 7ᵉ édition est davantage centrée sur les principes et la valeur."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "PRINCE2",
   "q": "À propos de l'organisation selon PRINCE2 :",
   "a": [
    [
     "La méthode exclut toute gestion par exception.",
     false
    ],
    [
     "La méthode utilise une gestion par étapes.",
     true
    ],
    [
     "Le comité de pilotage (Project Board) dirige le projet.",
     true
    ]
   ],
   "e": "La gestion par exception délègue dans des tolérances définies."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "PMO",
   "q": "À propos du bureau de gestion de projets (PMO) :",
   "a": [
    [
     "Il exécute à lui seul tous les projets.",
     false
    ],
    [
     "Il standardise les méthodes et les outils.",
     true
    ],
    [
     "Il peut fournir un soutien et une gouvernance.",
     true
    ]
   ],
   "e": "Le PMO soutient les chefs de projet, mais ne les remplace pas."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Théorie du changement",
   "q": "À propos de la théorie du changement :",
   "a": [
    [
     "Elle explicite des hypothèses causales.",
     true
    ],
    [
     "Elle explique comment les activités conduisent aux résultats attendus.",
     true
    ],
    [
     "C'est un calendrier de paiement des fournisseurs.",
     false
    ]
   ],
   "e": "Elle rend visible la logique d'intervention."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Collecte de données",
   "q": "À propos de la collecte de données :",
   "a": [
    [
     "On peut utiliser des enquêtes, des entretiens et des groupes de discussion.",
     true
    ],
    [
     "Un seul outil suffit toujours.",
     false
    ],
    [
     "Combiner des données quantitatives et qualitatives est fréquent.",
     true
    ]
   ],
   "e": "Plusieurs outils permettent de croiser les informations."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Redevabilité",
   "q": "À propos de la redevabilité envers les bénéficiaires :",
   "a": [
    [
     "Partager les résultats avec les bénéficiaires est une bonne pratique.",
     true
    ],
    [
     "Elle est inutile dans un projet de développement.",
     false
    ],
    [
     "Un mécanisme de plaintes et de retour d'information est utile.",
     true
    ]
   ],
   "e": "Les bénéficiaires doivent pouvoir exprimer leurs préoccupations."
  },
  {
   "p": "Qualité et changements",
   "s": "Outils de qualité",
   "q": "À propos du diagramme d'Ishikawa :",
   "a": [
    [
     "Il sert à calculer le chemin critique.",
     false
    ],
    [
     "On l'appelle aussi diagramme en arête de poisson.",
     true
    ],
    [
     "Il organise les causes possibles d'un problème en catégories.",
     true
    ]
   ],
   "e": "Il sert à l'analyse des causes."
  },
  {
   "p": "Qualité et changements",
   "s": "Périmètre",
   "q": "À propos de la dérive du périmètre (scope creep) :",
   "a": [
    [
     "On la limite par une maîtrise rigoureuse du périmètre.",
     true
    ],
    [
     "Elle est toujours souhaitable.",
     false
    ],
    [
     "Elle correspond à des ajouts non contrôlés.",
     true
    ]
   ],
   "e": "Elle augmente les coûts et les délais sans validation."
  },
  {
   "p": "Approvisionnement et contrats",
   "s": "Contrats",
   "q": "À propos des types de contrats d'approvisionnement :",
   "a": [
    [
     "Le contrat forfaitaire fixe un prix global.",
     true
    ],
    [
     "Le contrat remboursable rémunère les coûts plus des honoraires.",
     true
    ],
    [
     "Le contrat en régie supprime tout risque pour le client.",
     false
    ]
   ],
   "e": "En régie, le client paie le temps passé, donc il supporte le risque de dérapage."
  },
  {
   "p": "Approvisionnement et contrats",
   "s": "Évaluation des offres",
   "q": "À propos de l'évaluation des offres :",
   "a": [
    [
     "L'offre économiquement la plus avantageuse combine plusieurs critères.",
     true
    ],
    [
     "Elle examine généralement la conformité et l'aspect technique avant le prix.",
     true
    ],
    [
     "Il faut toujours choisir le prix le plus bas.",
     false
    ]
   ],
   "e": "Le prix le plus bas n'est pas toujours la meilleure offre."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Théories de la motivation",
   "q": "À propos des théories X et Y de McGregor :",
   "a": [
    [
     "La théorie Y suppose que les employés peuvent rechercher des responsabilités.",
     true
    ],
    [
     "La théorie X est fondée sur la confiance.",
     false
    ],
    [
     "La théorie X suppose que les employés évitent le travail et ont besoin de contrôle.",
     true
    ]
   ],
   "e": "La théorie Y suppose la confiance et l'initiative."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Cohésion",
   "q": "À propos de la charte d'équipe :",
   "a": [
    [
     "Elle est imposée sans discussion et jamais révisée.",
     false
    ],
    [
     "Elle est élaborée avec l'équipe.",
     true
    ],
    [
     "Elle fixe des règles de fonctionnement communes.",
     true
    ]
   ],
   "e": "Une charte construite ensemble est mieux appliquée."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Éthique du chef de projet",
   "q": "À propos du code d'éthique du PMI :",
   "a": [
    [
     "Il s'applique aux membres de la profession.",
     true
    ],
    [
     "Il repose sur la responsabilité, le respect, l'équité et l'honnêteté.",
     true
    ],
    [
     "Il autorise de dissimuler des informations importantes.",
     false
    ]
   ],
   "e": "L'honnêteté implique de ne pas dissimuler des informations essentielles."
  },
  {
   "p": "Clôture et gouvernance de projet",
   "s": "Bilan",
   "q": "À propos du bilan final de projet :",
   "a": [
    [
     "Il comprend la libération des ressources.",
     true
    ],
    [
     "Il comprend un rapport final.",
     true
    ],
    [
     "Il se limite à un message de remerciement.",
     false
    ]
   ],
   "e": "Le rapport final documente les résultats, les écarts et les enseignements."
  },
  {
   "p": "Clôture et gouvernance de projet",
   "s": "Archivage",
   "q": "À propos de l'archivage des documents de projet :",
   "a": [
    [
     "Il facilite l'audit et la capitalisation.",
     true
    ],
    [
     "Il demande un classement clair et des règles de conservation.",
     true
    ],
    [
     "Il est inutile après la clôture.",
     false
    ]
   ],
   "e": "Les archives de projet servent aussi aux projets futurs."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Appel à propositions",
   "q": "À propos d'un appel à propositions :",
   "a": [
    [
     "La sélection se fait sans critères.",
     false
    ],
    [
     "Les propositions sont jugées selon des critères de sélection.",
     true
    ],
    [
     "Il comprend souvent une note conceptuelle avant la proposition complète.",
     true
    ]
   ],
   "e": "La note conceptuelle présente l'idée avant le dossier détaillé."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Cycle de projet",
   "q": "À propos du cycle d'un projet de développement :",
   "a": [
    [
     "Il commence par l'évaluation finale.",
     false
    ],
    [
     "Il comprend l'analyse des besoins et la conception.",
     true
    ],
    [
     "Il comprend la mise en œuvre et le suivi-évaluation.",
     true
    ]
   ],
   "e": "L'évaluation finale clôt le cycle et nourrit les projets suivants."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Constitution",
   "q": "À propos de la Constitution du 18 février 2006 :",
   "a": [
    [
     "Elle a été adoptée par référendum.",
     true
    ],
    [
     "Elle a instauré la IIIᵉ République.",
     true
    ],
    [
     "Elle a été adoptée par un décret du Premier ministre.",
     false
    ]
   ],
   "e": "La Constitution a été soumise au référendum populaire, puis promulguée, et elle est en vigueur depuis le 18 février 2006."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Gouvernement",
   "q": "À propos de la responsabilité du Gouvernement devant l'Assemblée nationale :",
   "a": [
    [
     "Le Gouvernement est comptable de son action devant l'Assemblée nationale.",
     true
    ],
    [
     "La motion de censure met en cause la responsabilité collective du Gouvernement.",
     true
    ],
    [
     "La motion de défiance vise le Gouvernement tout entier.",
     false
    ]
   ],
   "e": "La motion de défiance vise la responsabilité individuelle d'un membre du Gouvernement."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Président de la République",
   "q": "Selon la Constitution du 18 février 2006, à propos du Président de la République :",
   "a": [
    [
     "Il est élu par le Parlement réuni en Congrès.",
     false
    ],
    [
     "Son mandat est de cinq ans, renouvelable une seule fois.",
     true
    ],
    [
     "Il est élu au suffrage universel direct.",
     true
    ]
   ],
   "e": "Le Congrès réunit l'Assemblée nationale et le Sénat, notamment pour déférer le Président de la République devant la Cour constitutionnelle."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Pouvoir judiciaire",
   "q": "À propos des hautes juridictions prévues par la Constitution de 2006 :",
   "a": [
    [
     "Le Conseil d'État est la juridiction suprême de l'ordre administratif.",
     true
    ],
    [
     "Elle prévoit une Cour constitutionnelle, une Cour de cassation et un Conseil d'État.",
     true
    ],
    [
     "La Cour de cassation est la juridiction suprême de l'ordre administratif.",
     false
    ]
   ],
   "e": "La Cour de cassation est au sommet de l'ordre judiciaire, le Conseil d'État au sommet de l'ordre administratif."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Services publics",
   "q": "À propos de la loi organique n° 16/001 du 3 mai 2016 :",
   "a": [
    [
     "C'est une loi organique.",
     true
    ],
    [
     "Elle porte organisation et fonctionnement des services publics du pouvoir central, des provinces et des entités territoriales décentralisées.",
     true
    ],
    [
     "Elle date de 2008.",
     false
    ]
   ],
   "e": "Elle date du 3 mai 2016."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Territoire",
   "q": "À propos de l'organisation territoriale de la RDC :",
   "a": [
    [
     "Les provinces sont dotées de la personnalité juridique.",
     true
    ],
    [
     "La RDC est composée de la ville de Kinshasa et de 25 provinces.",
     true
    ],
    [
     "La Constitution de 2006 prévoit seulement 11 provinces.",
     false
    ]
   ],
   "e": "L'article 2 de la Constitution prévoit Kinshasa et 25 provinces, soit 26 entités."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Répartition des compétences",
   "q": "À propos de la répartition des compétences entre le pouvoir central et les provinces :",
   "a": [
    [
     "Certaines compétences sont concurrentes entre le pouvoir central et les provinces.",
     true
    ],
    [
     "Certaines compétences sont exclusives au pouvoir central.",
     true
    ],
    [
     "Les provinces n'ont aucune compétence propre.",
     false
    ]
   ],
   "e": "La Constitution détermine la sphère exclusive du pouvoir central, celle des provinces et une zone concurrente."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Institutions d'appui",
   "q": "À propos des institutions d'appui à la démocratie :",
   "a": [
    [
     "La CENI fait partie du pouvoir judiciaire.",
     false
    ],
    [
     "Le CSAC régule l'audiovisuel et la communication.",
     true
    ],
    [
     "La CENI est chargée d'organiser le processus électoral.",
     true
    ]
   ],
   "e": "La CENI (Commission électorale nationale indépendante) et le CSAC (Conseil supérieur de l'audiovisuel et de la communication) sont des institutions d'appui à la démocratie."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Gouvernement",
   "q": "À propos de la composition du Gouvernement :",
   "a": [
    [
     "Le Gouvernement comprend notamment le Premier ministre et des ministres.",
     true
    ],
    [
     "Le Premier ministre est le chef du Gouvernement.",
     true
    ],
    [
     "Le Président de la République est le chef du Gouvernement.",
     false
    ]
   ],
   "e": "Le Président de la République est le chef de l'État. Le Premier ministre dirige le Gouvernement."
  },
  {
   "p": "Organisation de l'État congolais",
   "s": "Langues",
   "q": "À propos des langues en RDC :",
   "a": [
    [
     "Le kikongo, le lingala, le swahili et le tshiluba sont des langues nationales.",
     true
    ],
    [
     "Le français est la langue officielle.",
     true
    ],
    [
     "L'anglais est une langue nationale.",
     false
    ]
   ],
   "e": "Les quatre langues nationales sont le kikongo, le lingala, le swahili et le tshiluba."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "ETD",
   "q": "À propos des entités territoriales décentralisées (ETD) :",
   "a": [
    [
     "La province est une ETD.",
     false
    ],
    [
     "La ville est une ETD.",
     true
    ],
    [
     "La chefferie est une ETD.",
     true
    ]
   ],
   "e": "Selon l'article 3 de la Constitution, les ETD sont la ville, la commune, le secteur et la chefferie. La province est une entité distincte."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Textes",
   "q": "À propos des lois de 2008 sur la décentralisation :",
   "a": [
    [
     "La loi n° 08/012 du 31 juillet 2008 porte sur la libre administration des provinces.",
     true
    ],
    [
     "La loi n° 08/016 du 7 octobre 2008 porte sur la composition, l'organisation et le fonctionnement des ETD.",
     true
    ],
    [
     "La loi n° 08/016 porte statut des agents de carrière.",
     false
    ]
   ],
   "e": "Le statut des agents de carrière a été fixé par la loi n° 16/013 du 15 juillet 2016."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Institutions provinciales",
   "q": "À propos des institutions provinciales :",
   "a": [
    [
     "La province est administrée par un gouvernement provincial et une assemblée provinciale.",
     true
    ],
    [
     "Les députés provinciaux sont élus au suffrage universel direct pour cinq ans.",
     true
    ],
    [
     "Le gouverneur est nommé par le Premier ministre.",
     false
    ]
   ],
   "e": "Le gouverneur est élu par les députés provinciaux."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Gouverneur",
   "q": "À propos du gouverneur et du vice-gouverneur de province :",
   "a": [
    [
     "Leur mandat est de cinq ans, renouvelable une seule fois.",
     true
    ],
    [
     "Ils sont élus au suffrage universel direct.",
     false
    ],
    [
     "Ils sont élus par les députés provinciaux.",
     true
    ]
   ],
   "e": "Le suffrage universel direct est utilisé pour les députés provinciaux."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Tutelle",
   "q": "À propos de la tutelle et du pouvoir hiérarchique :",
   "a": [
    [
     "La tutelle s'exerce sans aucun texte légal.",
     false
    ],
    [
     "Il n'y a pas de tutelle sans texte.",
     true
    ],
    [
     "La tutelle est un contrôle exercé sur une entité décentralisée.",
     true
    ]
   ],
   "e": "Le pouvoir hiérarchique, lui, existe au sein d'une même administration, entre supérieur et subordonné."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Subsidiarité",
   "q": "À propos du principe de subsidiarité :",
   "a": [
    [
     "Il signifie que le pouvoir central décide de tout.",
     false
    ],
    [
     "Il privilégie l'échelon le plus proche des citoyens pour traiter une question.",
     true
    ],
    [
     "Il justifie un échelon supérieur lorsque l'échelon local ne peut pas agir efficacement.",
     true
    ]
   ],
   "e": "La subsidiarité répartit les responsabilités selon l'efficacité de chaque échelon."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Découpage",
   "q": "À propos du découpage territorial de 2015 :",
   "a": [
    [
     "Il a porté le nombre de provinces à 25, plus la ville de Kinshasa.",
     true
    ],
    [
     "Avant le découpage, la RDC comptait 11 provinces, Kinshasa comprise.",
     true
    ],
    [
     "Il a créé 50 provinces.",
     false
    ]
   ],
   "e": "Les 25 provinces et Kinshasa forment 26 entités provinciales."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Compétences des ETD",
   "q": "À propos des compétences de la ville et de la commune :",
   "a": [
    [
     "La commune a des compétences proches de celles de la ville.",
     true
    ],
    [
     "La ville a des compétences en matière de voirie urbaine.",
     true
    ],
    [
     "La ville n'a aucune compétence en matière d'assainissement.",
     false
    ]
   ],
   "e": "La ville intervient notamment en voirie, eau potable, électricité, assainissement et assistance sociale."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "ETD rurales",
   "q": "À propos du secteur, de la chefferie et du territoire :",
   "a": [
    [
     "Le secteur et la chefferie sont des ETD.",
     true
    ],
    [
     "La commune est une subdivision du secteur.",
     false
    ],
    [
     "Le territoire est une entité administrative déconcentrée.",
     true
    ]
   ],
   "e": "La commune est une subdivision de la ville."
  },
  {
   "p": "Décentralisation et provinces",
   "s": "Décentralisation",
   "q": "À propos des avantages attendus de la décentralisation :",
   "a": [
    [
     "Elle rapproche l'administration des administrés.",
     true
    ],
    [
     "Elle supprime le rôle de l'État.",
     false
    ],
    [
     "Elle vise à créer des centres d'impulsion et de développement à la base.",
     true
    ]
   ],
   "e": "Le constituant a voulu consolider l'unité nationale et rapprocher les décisions des populations."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Statut",
   "q": "À propos de la loi n° 16/013 du 15 juillet 2016 :",
   "a": [
    [
     "Elle date de 1981.",
     false
    ],
    [
     "Elle a remplacé le statut de 1981.",
     true
    ],
    [
     "Elle porte statut des agents de carrière des services publics de l'État.",
     true
    ]
   ],
   "e": "La loi du 17 juillet 1981 portant statut du personnel de carrière a été remplacée par la loi de 2016."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Recrutement",
   "q": "À propos du recrutement dans les services publics de l'État :",
   "a": [
    [
     "Le recrutement se fait en principe sur concours.",
     true
    ],
    [
     "L'égalité d'accès aux emplois publics est un principe constitutionnel.",
     true
    ],
    [
     "Le recrutement se fait par simple lettre de recommandation.",
     false
    ]
   ],
   "e": "Le concours est la voie de recrutement par défaut."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Carrière",
   "q": "À propos de la période probatoire :",
   "a": [
    [
     "Elle précède la nomination à titre définitif.",
     true
    ],
    [
     "Elle permet d'apprécier l'aptitude de l'agent.",
     true
    ],
    [
     "La nomination est définitive dès le premier jour, sans évaluation.",
     false
    ]
   ],
   "e": "Le statut conditionne la nomination à titre définitif à une période probatoire."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Statuts",
   "q": "À propos des statuts des agents publics :",
   "a": [
    [
     "La Constitution institue des statuts distincts pour les agents de carrière, l'enseignement supérieur, les militaires et la police.",
     true
    ],
    [
     "Tous les agents de l'État relèvent d'un statut unique.",
     false
    ],
    [
     "Les membres des Forces armées ont un statut propre.",
     true
    ]
   ],
   "e": "La RDC ne retient plus le principe d'un statut unique pour tous les agents publics."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Code du travail",
   "q": "À propos du Code du travail et des services publics :",
   "a": [
    [
     "Le Code du travail date de 2016.",
     false
    ],
    [
     "Certains travailleurs des services publics relèvent du Code du travail, en vertu d'un contrat.",
     true
    ],
    [
     "Le Code du travail est la loi n° 015-2002 du 16 octobre 2002.",
     true
    ]
   ],
   "e": "La loi n° 16/010 du 15 juillet 2016 a modifié et complété ce code."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Devoirs",
   "q": "À propos des droits et devoirs de l'agent public :",
   "a": [
    [
     "L'agent public est tenu à la discrétion professionnelle.",
     true
    ],
    [
     "L'agent public a droit à une rémunération.",
     true
    ],
    [
     "L'agent public peut utiliser les biens de l'État à titre personnel.",
     false
    ]
   ],
   "e": "Les biens de l'État servent le service public, non les intérêts privés."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Discipline",
   "q": "À propos de la discipline des agents publics :",
   "a": [
    [
     "Les droits de la défense doivent être respectés.",
     true
    ],
    [
     "Une sanction peut être prononcée sans entendre l'agent.",
     false
    ],
    [
     "Une faute disciplinaire peut entraîner une sanction.",
     true
    ]
   ],
   "e": "Le respect de la défense est une garantie fondamentale."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Neutralité",
   "q": "À propos de la neutralité du service public :",
   "a": [
    [
     "L'agent public doit servir l'intérêt général.",
     true
    ],
    [
     "Il doit traiter les usagers sans discrimination.",
     true
    ],
    [
     "Il peut refuser de servir un usager en raison de son origine.",
     false
    ]
   ],
   "e": "La neutralité et l'égalité sont des principes du service public."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Organisation",
   "q": "À propos des outils d'organisation d'une administration :",
   "a": [
    [
     "Une fiche de poste décrit les missions et les compétences requises.",
     true
    ],
    [
     "Un organigramme décrit le budget annuel.",
     false
    ],
    [
     "Un organigramme représente la structure et les liens hiérarchiques.",
     true
    ]
   ],
   "e": "Ces outils servent à clarifier qui fait quoi et sous l'autorité de qui."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Performance",
   "q": "À propos de l'évaluation de la performance des agents :",
   "a": [
    [
     "Elle est inutile dans l'administration.",
     false
    ],
    [
     "Elle vise à apprécier les résultats et les compétences de l'agent.",
     true
    ],
    [
     "Elle peut être prise en compte pour l'avancement.",
     true
    ]
   ],
   "e": "Elle aide à orienter la formation et la promotion."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Hiérarchie des normes",
   "q": "À propos de la hiérarchie des normes :",
   "a": [
    [
     "Un arrêté ne peut pas contredire une loi.",
     true
    ],
    [
     "La Constitution se situe au sommet de la hiérarchie des normes.",
     true
    ],
    [
     "Un arrêté peut abroger la Constitution.",
     false
    ]
   ],
   "e": "Les normes inférieures doivent respecter les normes supérieures : Constitution, lois, décrets, arrêtés."
  },
  {
   "p": "Fonction publique et carrière",
   "s": "Fin de carrière",
   "q": "À propos de la fin de carrière des agents :",
   "a": [
    [
     "Des allocations de fin de carrière sont prévues.",
     true
    ],
    [
     "Les agents de carrière ne bénéficient d'aucune protection sociale.",
     false
    ],
    [
     "Les agents de carrière ont droit à une pension de retraite.",
     true
    ]
   ],
   "e": "Le statut organise la retraite, l'honorariat et les droits sociaux des agents."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Loi sur les finances publiques",
   "q": "À propos de la loi n° 11/011 du 13 juillet 2011 :",
   "a": [
    [
     "Elle est relative aux finances publiques.",
     true
    ],
    [
     "Elle a été modifiée par la loi n° 18/010 du 9 juillet 2018.",
     true
    ],
    [
     "Elle exclut tout budget-programme.",
     false
    ]
   ],
   "e": "Elle a introduit les budgets-programmes et la gestion axée sur les résultats."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Loi sur les finances publiques",
   "q": "À propos des innovations de la loi de 2011 :",
   "a": [
    [
     "Elle prend en compte la libre administration des provinces.",
     true
    ],
    [
     "Elle prévoit une approche budgétaire pluriannuelle.",
     true
    ],
    [
     "Elle ne concerne que les entreprises privées.",
     false
    ]
   ],
   "e": "Elle a été adoptée pour tenir compte de la Constitution de 2006 et de la décentralisation."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Principes budgétaires",
   "q": "À propos des principes budgétaires classiques :",
   "a": [
    [
     "Le principe d'universalité exige d'inscrire toutes les recettes et toutes les dépenses.",
     true
    ],
    [
     "Le principe d'annualité limite l'autorisation du budget à un exercice.",
     true
    ],
    [
     "Le principe d'unité impose un budget distinct par ministère.",
     false
    ]
   ],
   "e": "L'unité signifie que l'ensemble des recettes et des dépenses figure dans un document unique."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Exécution",
   "q": "À propos des phases de la dépense publique :",
   "a": [
    [
     "L'ordonnancement intervient après le paiement.",
     false
    ],
    [
     "Les quatre phases sont l'engagement, la liquidation, l'ordonnancement et le paiement.",
     true
    ],
    [
     "L'engagement précède la liquidation.",
     true
    ]
   ],
   "e": "Le paiement est la dernière phase, après l'ordonnancement."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Loi de finances",
   "q": "À propos de la loi de finances :",
   "a": [
    [
     "Elle est votée par le Parlement.",
     true
    ],
    [
     "Elle prévoit et autorise les recettes et les dépenses de l'exercice.",
     true
    ],
    [
     "Elle est décidée seule par le ministre des Finances.",
     false
    ]
   ],
   "e": "Le vote du Parlement donne l'autorisation budgétaire."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Loi de règlement",
   "q": "À propos de la loi de règlement :",
   "a": [
    [
     "Elle constate les résultats de l'exécution du budget.",
     true
    ],
    [
     "Elle précède l'examen du budget de l'exercice suivant.",
     true
    ],
    [
     "Elle autorise de nouvelles dépenses pour l'année suivante.",
     false
    ]
   ],
   "e": "Elle permet au Parlement de contrôler comment le budget voté a été exécuté."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Exercice budgétaire",
   "q": "À propos de l'exercice budgétaire :",
   "a": [
    [
     "Il commence le 1ᵉʳ janvier.",
     true
    ],
    [
     "Il commence le 1ᵉʳ juillet.",
     false
    ],
    [
     "Il correspond en principe à l'année civile.",
     true
    ]
   ],
   "e": "L'exercice va du 1ᵉʳ janvier au 31 décembre."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Contrôle",
   "q": "À propos du contrôle des finances publiques :",
   "a": [
    [
     "Le contrôle est inutile quand les gestionnaires sont honnêtes.",
     false
    ],
    [
     "La Cour des comptes exerce un contrôle juridictionnel.",
     true
    ],
    [
     "Le Parlement contrôle notamment lors du vote de la loi de finances et de la loi de règlement.",
     true
    ]
   ],
   "e": "Le contrôle garantit la légalité et le respect de l'autorisation budgétaire."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Contrôle",
   "q": "À propos des formes de contrôle :",
   "a": [
    [
     "Le contrôle a priori intervient après le paiement.",
     false
    ],
    [
     "Le contrôle a priori intervient avant la dépense.",
     true
    ],
    [
     "Le contrôle a posteriori intervient après la dépense.",
     true
    ]
   ],
   "e": "Les deux formes se complètent."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Dépenses",
   "q": "À propos des dépenses publiques :",
   "a": [
    [
     "Les dépenses de fonctionnement permettent le fonctionnement courant des services.",
     true
    ],
    [
     "Les dépenses d'investissement augmentent le patrimoine public.",
     true
    ],
    [
     "Les salaires sont des dépenses d'investissement.",
     false
    ]
   ],
   "e": "Les salaires sont des dépenses de fonctionnement."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Équilibre budgétaire",
   "q": "À propos du déficit budgétaire :",
   "a": [
    [
     "Il apparaît lorsque les recettes dépassent les dépenses.",
     false
    ],
    [
     "Il peut être financé par l'emprunt.",
     true
    ],
    [
     "Il apparaît lorsque les dépenses dépassent les recettes.",
     true
    ]
   ],
   "e": "Lorsque les recettes dépassent les dépenses, on parle d'excédent."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Budgets provinciaux",
   "q": "À propos des budgets des provinces :",
   "a": [
    [
     "Les provinces ont leur propre budget.",
     true
    ],
    [
     "Les provinces n'ont pas de budget propre.",
     false
    ],
    [
     "Le budget provincial est adopté par l'assemblée provinciale.",
     true
    ]
   ],
   "e": "La libre administration suppose une autonomie budgétaire."
  },
  {
   "p": "Finances publiques et budget",
   "s": "Transparence",
   "q": "À propos de la transparence budgétaire :",
   "a": [
    [
     "Un budget citoyen est une version simplifiée destinée au public.",
     true
    ],
    [
     "Elle suppose la publication des documents budgétaires.",
     true
    ],
    [
     "Le secret total sur le budget est un principe de bonne gouvernance.",
     false
    ]
   ],
   "e": "La transparence permet aux citoyens et au Parlement de contrôler l'action publique."
  },
  {
   "p": "Marchés publics",
   "s": "Cadre légal",
   "q": "À propos de la loi n° 10/010 du 27 avril 2010 :",
   "a": [
    [
     "Elle date de 2020.",
     false
    ],
    [
     "Elle remplace l'ordonnance-loi n° 69-054 du 5 décembre 1969.",
     true
    ],
    [
     "Elle est relative aux marchés publics.",
     true
    ]
   ],
   "e": "L'ancien système ne répondait plus aux exigences de transparence et d'efficacité."
  },
  {
   "p": "Marchés publics",
   "s": "Procédures",
   "q": "À propos des procédures de passation :",
   "a": [
    [
     "Le gré à gré est la règle générale.",
     false
    ],
    [
     "Le gré à gré est une procédure dérogatoire.",
     true
    ],
    [
     "L'appel d'offres ouvert est la règle générale.",
     true
    ]
   ],
   "e": "Les procédures dérogatoires sont limitativement encadrées par la loi."
  },
  {
   "p": "Marchés publics",
   "s": "Procédures",
   "q": "À propos des procédures dérogatoires :",
   "a": [
    [
     "Les marchés spéciaux en font partie.",
     true
    ],
    [
     "L'appel d'offres restreint en fait partie.",
     true
    ],
    [
     "L'appel d'offres ouvert est une procédure dérogatoire.",
     false
    ]
   ],
   "e": "L'appel d'offres ouvert est la procédure de droit commun."
  },
  {
   "p": "Marchés publics",
   "s": "Institutions",
   "q": "À propos de l'Autorité de régulation des marchés publics (ARMP) :",
   "a": [
    [
     "Elle assure la régulation du système de passation des marchés publics.",
     true
    ],
    [
     "C'est un établissement public à caractère administratif créé par le décret n° 10/21 du 2 juin 2010.",
     true
    ],
    [
     "Elle contrôle a priori chaque marché à la place de la DGCMP.",
     false
    ]
   ],
   "e": "Le contrôle a priori relève de la Direction générale de contrôle des marchés publics."
  },
  {
   "p": "Marchés publics",
   "s": "Séparation des fonctions",
   "q": "À propos de la séparation des fonctions dans les marchés publics :",
   "a": [
    [
     "La même personne doit gérer, passer et contrôler le marché.",
     false
    ],
    [
     "La régulation est confiée à un organe distinct des autorités contractantes.",
     true
    ],
    [
     "La loi distingue la gestion, la passation, le contrôle et la régulation.",
     true
    ]
   ],
   "e": "La séparation réduit les risques de conflits d'intérêts."
  },
  {
   "p": "Marchés publics",
   "s": "Principes",
   "q": "À propos des principes des marchés publics :",
   "a": [
    [
     "Le favoritisme local est un principe de la passation.",
     false
    ],
    [
     "La transparence est un principe de la passation.",
     true
    ],
    [
     "L'égalité de traitement des candidats est un principe de la passation.",
     true
    ]
   ],
   "e": "Les marchés publics reposent sur la transparence, la concurrence et l'égalité de traitement."
  },
  {
   "p": "Marchés publics",
   "s": "Seuils",
   "q": "À propos des seuils des marchés publics :",
   "a": [
    [
     "Ils sont fixés par décret.",
     true
    ],
    [
     "Sous les seuils, une mise en concurrence d'au moins trois fournisseurs est exigée.",
     true
    ],
    [
     "Chaque ministre les fixe librement pour chaque contrat.",
     false
    ]
   ],
   "e": "Les seuils déterminent la procédure, le contrôle et l'approbation."
  },
  {
   "p": "Marchés publics",
   "s": "Provinces",
   "q": "À propos des marchés publics au niveau provincial :",
   "a": [
    [
     "Les provinces sont exclues du champ de la loi.",
     false
    ],
    [
     "Des édits provinciaux organisent les dispositions spécifiques aux provinces.",
     true
    ],
    [
     "Chaque province indique les seuils applicables dans sa juridiction.",
     true
    ]
   ],
   "e": "La décentralisation s'étend aussi à la commande publique."
  },
  {
   "p": "Marchés publics",
   "s": "Contentieux",
   "q": "À propos de la structure de la loi sur les marchés publics :",
   "a": [
    [
     "Elle comporte un titre sur le contentieux des marchés publics.",
     true
    ],
    [
     "Elle comporte des titres sur la passation, l'exécution et le contrôle.",
     true
    ],
    [
     "Elle ne prévoit aucune voie de recours.",
     false
    ]
   ],
   "e": "Les litiges nés à l'occasion des marchés publics sont encadrés par la loi."
  },
  {
   "p": "Marchés publics",
   "s": "Fraude",
   "q": "À propos des pratiques frauduleuses dans les marchés publics :",
   "a": [
    [
     "Le fractionnement artificiel d'un marché pour éviter les seuils est une bonne pratique.",
     false
    ],
    [
     "La collusion entre soumissionnaires fausse la concurrence.",
     true
    ],
    [
     "Le conflit d'intérêts compromet l'impartialité de la décision.",
     true
    ]
   ],
   "e": "Fractionner artificiellement un marché pour échapper au contrôle est une fraude."
  },
  {
   "p": "Théories de l'administration",
   "s": "Weber",
   "q": "À propos de Max Weber et de la bureaucratie :",
   "a": [
    [
     "Il décrit une bureaucratie rationnelle-légale.",
     true
    ],
    [
     "Il a proposé 14 principes de gestion.",
     false
    ],
    [
     "Il met en avant la hiérarchie, les règles écrites et la spécialisation.",
     true
    ]
   ],
   "e": "Les 14 principes de gestion sont attribués à Fayol."
  },
  {
   "p": "Théories de l'administration",
   "s": "Taylor",
   "q": "À propos de Frederick Taylor :",
   "a": [
    [
     "Il a utilisé l'étude des temps et des mouvements.",
     true
    ],
    [
     "Il est le père de l'organisation scientifique du travail.",
     true
    ],
    [
     "Il est le fondateur de l'école des relations humaines.",
     false
    ]
   ],
   "e": "L'école des relations humaines est associée à Elton Mayo."
  },
  {
   "p": "Théories de l'administration",
   "s": "Mayo",
   "q": "À propos d'Elton Mayo :",
   "a": [
    [
     "Il a conçu la bureaucratie rationnelle-légale.",
     false
    ],
    [
     "Il est associé à l'école des relations humaines.",
     true
    ],
    [
     "Il est associé aux expériences de Hawthorne.",
     true
    ]
   ],
   "e": "Il a montré l'importance des facteurs sociaux et de l'attention portée aux travailleurs."
  },
  {
   "p": "Théories de l'administration",
   "s": "Simon",
   "q": "À propos de Herbert Simon :",
   "a": [
    [
     "Selon lui, les décideurs recherchent souvent une solution satisfaisante plutôt qu'optimale.",
     true
    ],
    [
     "Il a défendu une rationalité parfaite des décideurs.",
     false
    ],
    [
     "Il a développé le concept de rationalité limitée.",
     true
    ]
   ],
   "e": "La rationalité est limitée par l'information, le temps et les capacités de traitement."
  },
  {
   "p": "Théories de l'administration",
   "s": "Nouveau management public",
   "q": "À propos du nouveau management public :",
   "a": [
    [
     "Il met l'accent sur la performance et les résultats.",
     true
    ],
    [
     "Il rejette toute mesure de la performance.",
     false
    ],
    [
     "Il a inspiré le budget-programme.",
     true
    ]
   ],
   "e": "Il emprunte au secteur privé des outils de gestion axée sur les résultats."
  },
  {
   "p": "Théories de l'administration",
   "s": "Gouvernance",
   "q": "À propos de la bonne gouvernance :",
   "a": [
    [
     "La redevabilité est l'obligation de rendre compte de son action.",
     true
    ],
    [
     "Elle suppose la transparence et la redevabilité.",
     true
    ],
    [
     "Elle exclut la participation des citoyens.",
     false
    ]
   ],
   "e": "La participation, l'État de droit et l'efficacité en font partie."
  },
  {
   "p": "Théories de l'administration",
   "s": "Drucker",
   "q": "À propos de Peter Drucker :",
   "a": [
    [
     "Il est l'auteur de la bureaucratie rationnelle-légale.",
     false
    ],
    [
     "Il est associé au management par objectifs.",
     true
    ],
    [
     "Il l'a popularisé dans les années 1950.",
     true
    ]
   ],
   "e": "Le management par objectifs fixe des cibles et évalue les résultats."
  },
  {
   "p": "Théories de l'administration",
   "s": "Mintzberg",
   "q": "À propos de Henry Mintzberg :",
   "a": [
    [
     "Il est l'auteur de la théorie du phénomène bureaucratique.",
     false
    ],
    [
     "Il décrit des configurations d'organisation, comme la bureaucratie mécaniste.",
     true
    ],
    [
     "Il décrit plusieurs mécanismes de coordination.",
     true
    ]
   ],
   "e": "Le phénomène bureaucratique est associé à Crozier."
  },
  {
   "p": "Théories de l'administration",
   "s": "Fayol",
   "q": "À propos des principes de Fayol :",
   "a": [
    [
     "L'unité de direction est l'un de ses principes.",
     true
    ],
    [
     "L'unité de commandement est l'un de ses principes.",
     true
    ],
    [
     "Fayol rejette la division du travail.",
     false
    ]
   ],
   "e": "Fayol défend au contraire la division du travail."
  },
  {
   "p": "Théories de l'administration",
   "s": "Changement",
   "q": "À propos de la gestion du changement :",
   "a": [
    [
     "Lewin décrit trois étapes : décongeler, changer, recongeler.",
     true
    ],
    [
     "Kotter propose un modèle en huit étapes.",
     true
    ],
    [
     "Lewin est l'auteur du taylorisme.",
     false
    ]
   ],
   "e": "Ces modèles servent à conduire le changement dans les organisations."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Acte administratif",
   "q": "À propos de l'acte administratif unilatéral :",
   "a": [
    [
     "C'est une décision prise par une autorité administrative.",
     true
    ],
    [
     "Il résulte toujours d'un contrat entre deux parties.",
     false
    ],
    [
     "Il peut faire grief aux administrés.",
     true
    ]
   ],
   "e": "L'acte unilatéral s'impose sans l'accord des intéressés."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Juridictions",
   "q": "À propos des juridictions administratives :",
   "a": [
    [
     "La loi organique n° 16/027 organise les juridictions de l'ordre administratif.",
     true
    ],
    [
     "Le Conseil d'État est au sommet de l'ordre administratif.",
     true
    ],
    [
     "Elles jugent les litiges entre particuliers.",
     false
    ]
   ],
   "e": "Les litiges entre particuliers relèvent de l'ordre judiciaire."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Domaine",
   "q": "À propos du domaine public et du domaine privé de l'État :",
   "a": [
    [
     "L'administration peut vendre librement un bien du domaine public.",
     false
    ],
    [
     "Le domaine public est en principe inaliénable.",
     true
    ],
    [
     "Le domaine privé est soumis à un régime proche du droit privé.",
     true
    ]
   ],
   "e": "Un bien du domaine public doit d'abord être déclassé pour pouvoir être vendu."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Responsabilité",
   "q": "À propos de la responsabilité de l'administration :",
   "a": [
    [
     "L'administration n'est jamais responsable.",
     false
    ],
    [
     "La victime peut demander réparation du préjudice subi.",
     true
    ],
    [
     "L'administration peut voir sa responsabilité engagée en cas de faute de service.",
     true
    ]
   ],
   "e": "La responsabilité administrative est un élément de l'État de droit."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Établissements publics",
   "q": "À propos de la loi n° 08/009 du 7 juillet 2008 :",
   "a": [
    [
     "Un établissement public est doté de la personnalité juridique.",
     true
    ],
    [
     "Elle porte dispositions générales applicables aux établissements publics.",
     true
    ],
    [
     "Un établissement public n'a pas de patrimoine propre.",
     false
    ]
   ],
   "e": "Un établissement public dispose d'une autonomie administrative et financière."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Entreprises publiques",
   "q": "À propos de la loi n° 08/007 du 7 juillet 2008 :",
   "a": [
    [
     "Elle date de 2008.",
     true
    ],
    [
     "Elle porte sur le Code du travail.",
     false
    ],
    [
     "Elle porte dispositions générales relatives à la transformation des entreprises publiques.",
     true
    ]
   ],
   "e": "Elle fait partie des réformes des entreprises du portefeuille de l'État."
  },
  {
   "p": "Droit administratif et service public",
   "s": "Recours",
   "q": "À propos des recours contre un acte administratif :",
   "a": [
    [
     "Le recours gracieux est adressé à l'auteur de l'acte.",
     true
    ],
    [
     "Le recours contentieux est adressé à l'auteur de l'acte.",
     false
    ],
    [
     "Le recours hiérarchique est adressé au supérieur de l'auteur de l'acte.",
     true
    ]
   ],
   "e": "Le recours contentieux est porté devant un juge."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Code de conduite",
   "q": "À propos du Code de conduite de l'agent public de l'État :",
   "a": [
    [
     "Il a été institué par le décret-loi n° 017/2002.",
     true
    ],
    [
     "À son entrée en fonction, l'agent doit en prendre connaissance et s'engager par écrit à le respecter.",
     true
    ],
    [
     "Il ne s'applique qu'aux ministres.",
     false
    ]
   ],
   "e": "Ce code concerne tous les agents publics de l'État et fixe des exigences de compétence, d'intégrité et de loyauté."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Lutte contre la corruption",
   "q": "À propos de l'APLC (Agence de prévention et de lutte contre la corruption) :",
   "a": [
    [
     "Elle remplace la Cour des comptes.",
     false
    ],
    [
     "Elle est l'autorité nationale de référence en matière de lutte contre la corruption.",
     true
    ],
    [
     "Elle a été créée en mars 2020.",
     true
    ]
   ],
   "e": "L'APLC coordonne les services de lutte contre la corruption, mais elle n'a pas pris la place des institutions de contrôle."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Contrôle",
   "q": "À propos de l'Inspection générale des finances (IGF) :",
   "a": [
    [
     "C'est une régie financière chargée de percevoir les impôts.",
     false
    ],
    [
     "C'est un organe de contrôle des finances publiques.",
     true
    ],
    [
     "Elle intervient dans le dispositif de lutte contre la corruption.",
     true
    ]
   ],
   "e": "Les régies financières sont la DGI, la DGDA et la DGRAD."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Cadre international",
   "q": "À propos du cadre international de lutte contre la corruption :",
   "a": [
    [
     "L'Union africaine dispose d'une convention de prévention et de lutte contre la corruption.",
     true
    ],
    [
     "Ces conventions n'ont aucune portée pour les États qui les ratifient.",
     false
    ],
    [
     "La Convention des Nations unies contre la corruption est un instrument de référence.",
     true
    ]
   ],
   "e": "Les États qui les ratifient s'engagent à adopter des mesures de prévention et de répression."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Conflit d'intérêts",
   "q": "À propos du conflit d'intérêts :",
   "a": [
    [
     "Il n'existe que pour les élus.",
     false
    ],
    [
     "Il apparaît quand un intérêt privé interfère avec l'intérêt public.",
     true
    ],
    [
     "L'agent concerné doit se déporter ou se récuser.",
     true
    ]
   ],
   "e": "Tout agent public peut être concerné, y compris dans un jury de concours ou une commission d'appel d'offres."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Transparence",
   "q": "À propos de la déclaration de patrimoine :",
   "a": [
    [
     "Elle contribue à prévenir l'enrichissement illicite.",
     true
    ],
    [
     "Selon la Constitution, certains hauts responsables doivent déclarer leur patrimoine.",
     true
    ],
    [
     "Elle ne peut jamais être contrôlée.",
     false
    ]
   ],
   "e": "La déclaration de patrimoine rend possible un contrôle de l'évolution de la situation d'un responsable."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Redevabilité",
   "q": "À propos de la redevabilité :",
   "a": [
    [
     "C'est l'obligation de rendre compte de son action.",
     true
    ],
    [
     "Elle s'applique uniquement au secteur privé.",
     false
    ],
    [
     "Le contrôle parlementaire est un mécanisme de redevabilité.",
     true
    ]
   ],
   "e": "Les autorités publiques rendent compte devant les citoyens, le Parlement et les organes de contrôle."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Lanceurs d'alerte",
   "q": "À propos du lanceur d'alerte :",
   "a": [
    [
     "Il doit être protégé contre les représailles.",
     true
    ],
    [
     "Il signale un comportement illégal ou dangereux.",
     true
    ],
    [
     "Il doit toujours être sanctionné.",
     false
    ]
   ],
   "e": "La protection des lanceurs d'alerte encourage le signalement des abus."
  },
  {
   "p": "Éthique et bonne gouvernance",
   "s": "Éthique professionnelle",
   "q": "À propos du contrôle de l'éthique professionnelle en RDC :",
   "a": [
    [
     "Un observatoire de surveillance de la corruption et de l'éthique professionnelle a été créé.",
     true
    ],
    [
     "Il fait partie des institutions impliquées dans la lutte contre la corruption.",
     true
    ],
    [
     "Il n'existe aucun organe de surveillance de l'éthique professionnelle en RDC.",
     false
    ]
   ],
   "e": "Il s'ajoute à d'autres institutions, comme l'APLC et l'IGF."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Politiques publiques",
   "q": "À propos du cycle d'une politique publique :",
   "a": [
    [
     "Il comprend la mise à l'agenda, la formulation, la décision, la mise en œuvre et l'évaluation.",
     true
    ],
    [
     "L'évaluation précède la mise à l'agenda.",
     false
    ],
    [
     "L'évaluation permet d'ajuster la politique.",
     true
    ]
   ],
   "e": "L'évaluation intervient après la mise en œuvre et peut ouvrir un nouveau cycle."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Cadres internationaux",
   "q": "À propos des Objectifs de développement durable (ODD) :",
   "a": [
    [
     "Ils ne concernent que l'environnement.",
     false
    ],
    [
     "Ils font partie de l'Agenda 2030, adopté en 2015.",
     true
    ],
    [
     "Il y a 17 ODD.",
     true
    ]
   ],
   "e": "Les ODD couvrent aussi la pauvreté, la santé, l'éducation, l'égalité et les institutions."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Planification stratégique",
   "q": "À propos de la planification stratégique :",
   "a": [
    [
     "Elle comprend un diagnostic, une vision et des objectifs.",
     true
    ],
    [
     "L'analyse SWOT identifie forces, faiblesses, opportunités et menaces.",
     true
    ],
    [
     "Un plan stratégique est une simple liste d'activités sans objectifs.",
     false
    ]
   ],
   "e": "Un plan stratégique relie la vision aux objectifs, aux actions et aux indicateurs."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Indicateurs",
   "q": "À propos des indicateurs :",
   "a": [
    [
     "Une valeur de référence permet de mesurer le progrès.",
     true
    ],
    [
     "Un indicateur permet de mesurer un résultat.",
     true
    ],
    [
     "Un bon indicateur se passe de toute cible.",
     false
    ]
   ],
   "e": "Un indicateur doit être associé à une valeur de départ et à une cible."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Objectifs",
   "q": "À propos des objectifs SMART :",
   "a": [
    [
     "Il comporte une échéance.",
     true
    ],
    [
     "Un objectif SMART est mesurable.",
     true
    ],
    [
     "Il peut rester vague.",
     false
    ]
   ],
   "e": "SMART : spécifique, mesurable, atteignable, réaliste, temporel."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Évaluation",
   "q": "À propos des critères d'évaluation d'une politique ou d'un projet :",
   "a": [
    [
     "La pertinence en fait partie.",
     true
    ],
    [
     "L'efficacité et l'efficience en font partie.",
     true
    ],
    [
     "L'efficience mesure la popularité d'une politique.",
     false
    ]
   ],
   "e": "L'efficience compare les résultats obtenus aux ressources utilisées."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Participation",
   "q": "À propos de la participation citoyenne :",
   "a": [
    [
     "Un budget participatif associe les citoyens aux choix budgétaires.",
     true
    ],
    [
     "La participation est incompatible avec une bonne gouvernance.",
     false
    ],
    [
     "La consultation améliore l'acceptation d'une politique.",
     true
    ]
   ],
   "e": "La participation fait partie des principes de la bonne gouvernance."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Suivi",
   "q": "À propos d'un tableau de bord :",
   "a": [
    [
     "Il aide à la décision.",
     true
    ],
    [
     "Il n'est produit qu'une fois, à la fin de l'année.",
     false
    ],
    [
     "C'est un outil de suivi d'indicateurs.",
     true
    ]
   ],
   "e": "Il est mis à jour régulièrement pour suivre l'avancement."
  },
  {
   "p": "Planification et politiques publiques",
   "s": "Chaîne des résultats",
   "q": "À propos de la chaîne des résultats :",
   "a": [
    [
     "Elle relie les intrants, les activités, les extrants, les effets et l'impact.",
     true
    ],
    [
     "L'impact est une ressource utilisée au départ.",
     false
    ],
    [
     "Un extrant est un produit direct d'une activité.",
     true
    ]
   ],
   "e": "Les ressources sont des intrants. L'impact est un changement à long terme."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Lettre administrative",
   "q": "À propos d'une lettre administrative :",
   "a": [
    [
     "L'objet résume son contenu.",
     true
    ],
    [
     "La référence permet de retrouver le dossier.",
     true
    ],
    [
     "L'objet est facultatif et ne doit jamais figurer.",
     false
    ]
   ],
   "e": "L'objet permet au destinataire de comprendre l'essentiel dès la lecture."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Note de service",
   "q": "À propos de la note de service :",
   "a": [
    [
     "Elle est adressée au grand public.",
     false
    ],
    [
     "Elle est adressée aux agents d'un service.",
     true
    ],
    [
     "C'est un écrit interne qui donne des instructions.",
     true
    ]
   ],
   "e": "Elle sert à diffuser rapidement une consigne ou une information dans un service."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Procès-verbal",
   "q": "À propos du procès-verbal :",
   "a": [
    [
     "Il peut contenir des éléments inventés.",
     false
    ],
    [
     "Il est signé par les personnes qualifiées.",
     true
    ],
    [
     "Il consigne fidèlement ce qui a été dit ou décidé.",
     true
    ]
   ],
   "e": "Le procès-verbal a une valeur de preuve."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Compte rendu",
   "q": "À propos du compte rendu et du procès-verbal :",
   "a": [
    [
     "Le procès-verbal est plus formel et plus détaillé.",
     true
    ],
    [
     "Le compte rendu est toujours plus long que le procès-verbal.",
     false
    ],
    [
     "Le compte rendu résume l'essentiel d'une réunion.",
     true
    ]
   ],
   "e": "Le compte rendu retient les points importants et les décisions."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Rapport",
   "q": "À propos du rapport administratif :",
   "a": [
    [
     "Il informe l'autorité sur une situation.",
     true
    ],
    [
     "Il ne comporte jamais de conclusion.",
     false
    ],
    [
     "Il propose souvent des recommandations.",
     true
    ]
   ],
   "e": "Un bon rapport est structuré : introduction, développement, conclusion."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Copie et ampliation",
   "q": "À propos des copies d'un document :",
   "a": [
    [
     "L'ampliation est une copie destinée à des destinataires.",
     true
    ],
    [
     "L'ampliation désigne un original perdu.",
     false
    ],
    [
     "La copie conforme certifie la conformité à l'original.",
     true
    ]
   ],
   "e": "Les ampliations servent à informer les services concernés."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Archivage",
   "q": "À propos de l'archivage :",
   "a": [
    [
     "On distingue les archives courantes, intermédiaires et définitives.",
     true
    ],
    [
     "Les archives sont conservées selon leur durée d'utilité administrative.",
     true
    ],
    [
     "Les archives courantes peuvent être détruites sans tri.",
     false
    ]
   ],
   "e": "Un tri préalable évite de détruire des documents à conserver."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Courrier",
   "q": "À propos du traitement du courrier :",
   "a": [
    [
     "Le courrier arrivé et le courrier départ sont enregistrés.",
     true
    ],
    [
     "Un accusé de réception peut être délivré.",
     true
    ],
    [
     "Le courrier confidentiel est ouvert par tous les agents.",
     false
    ]
   ],
   "e": "Un courrier confidentiel est remis au destinataire sans être ouvert par d'autres."
  },
  {
   "p": "Rédaction et communication administratives",
   "s": "Communication institutionnelle",
   "q": "À propos du communiqué :",
   "a": [
    [
     "Un porte-parole peut parler au nom d'une institution.",
     true
    ],
    [
     "Un communiqué est destiné à informer la presse ou le public.",
     true
    ],
    [
     "Un communiqué est une lettre confidentielle.",
     false
    ]
   ],
   "e": "Il sert à communiquer une position officielle."
  },
  {
   "p": "Organisation administrative",
   "s": "Ministère",
   "q": "À propos de la structure d'un ministère :",
   "a": [
    [
     "Le secrétariat général est l'organe politique du ministre.",
     false
    ],
    [
     "Le cabinet est l'organe politique du ministre.",
     true
    ],
    [
     "Il comprend un cabinet et un secrétariat général.",
     true
    ]
   ],
   "e": "Le secrétariat général est la partie administrative du ministère."
  },
  {
   "p": "Organisation administrative",
   "s": "Ministres",
   "q": "À propos de la nomination des ministres :",
   "a": [
    [
     "Le ministre est nommé par ordonnance présidentielle sur proposition du Premier ministre.",
     true
    ],
    [
     "Le vice-ministre assure l'intérim du ministre en cas d'absence.",
     true
    ],
    [
     "Le vice-ministre est élu par le Parlement.",
     false
    ]
   ],
   "e": "Le vice-ministre collabore avec le secrétaire général sur la structure administrative et financière."
  },
  {
   "p": "Organisation administrative",
   "s": "Structures",
   "q": "À propos de la hiérarchie des unités administratives :",
   "a": [
    [
     "Le bureau est une unité supérieure à la direction.",
     false
    ],
    [
     "La division est dirigée par un chef de division.",
     true
    ],
    [
     "La direction est une unité supérieure de l'administration centrale.",
     true
    ]
   ],
   "e": "L'ordre habituel est : direction, division, bureau."
  },
  {
   "p": "Organisation administrative",
   "s": "Cabinet",
   "q": "À propos du cabinet du ministre :",
   "a": [
    [
     "Il comprend notamment un directeur de cabinet et un secrétaire particulier.",
     true
    ],
    [
     "Il est organisé selon le décret n° 07/01 du 26 mai 2007 sur les cabinets ministériels.",
     true
    ],
    [
     "Le directeur de cabinet dirige le secrétariat général.",
     false
    ]
   ],
   "e": "Le cabinet et le secrétariat général sont deux organes distincts."
  },
  {
   "p": "Organisation administrative",
   "s": "Administration publique",
   "q": "À propos de la notion d'administration publique :",
   "a": [
    [
     "Elle est au service de l'intérêt général.",
     true
    ],
    [
     "Elle désigne l'ensemble des services administratifs du pouvoir central, des provinces et des ETD.",
     true
    ],
    [
     "Elle est au service des intérêts personnels du chef de service.",
     false
    ]
   ],
   "e": "L'intérêt général est la finalité de l'administration."
  },
  {
   "p": "Organisation administrative",
   "s": "Service public",
   "q": "À propos du service public :",
   "a": [
    [
     "C'est un organisme ou une activité d'intérêt général relevant de l'administration publique.",
     true
    ],
    [
     "Un service public est toujours une entreprise privée.",
     false
    ],
    [
     "Un établissement public est une personne morale de droit public.",
     true
    ]
   ],
   "e": "Le service public peut aussi être assuré par des organismes publics spécialisés."
  },
  {
   "p": "Organisation administrative",
   "s": "Administration provinciale",
   "q": "À propos de l'administration des provinces :",
   "a": [
    [
     "Il n'existe aucune administration provinciale.",
     false
    ],
    [
     "Il existe une administration rattachée au gouverneur.",
     true
    ],
    [
     "Il existe des ministères provinciaux.",
     true
    ]
   ],
   "e": "La loi organique prévoit aussi l'administration de l'assemblée provinciale."
  },
  {
   "p": "Organisation administrative",
   "s": "Organisation du travail",
   "q": "À propos de la ligne hiérarchique et de l'état-major :",
   "a": [
    [
     "Les fonctions d'état-major (staff) conseillent la hiérarchie.",
     true
    ],
    [
     "La ligne hiérarchique comprend ceux qui dirigent les opérations.",
     true
    ],
    [
     "L'état-major dispose de l'autorité hiérarchique sur toute la ligne.",
     false
    ]
   ],
   "e": "Les conseillers n'ont pas d'autorité hiérarchique propre sur la ligne."
  },
  {
   "p": "Organisation administrative",
   "s": "Organisation du travail",
   "q": "À propos du principe d'unité de commandement :",
   "a": [
    [
     "Chaque agent reçoit ses ordres d'un seul supérieur.",
     true
    ],
    [
     "Il évite les ordres contradictoires.",
     true
    ],
    [
     "Il impose à chaque agent d'avoir quatre supérieurs.",
     false
    ]
   ],
   "e": "C'est un principe de Fayol."
  },
  {
   "p": "Organisation administrative",
   "s": "Déconcentration",
   "q": "À propos des services déconcentrés :",
   "a": [
    [
     "Ils sont des entités territoriales décentralisées.",
     false
    ],
    [
     "Ce sont des services de l'administration centrale implantés dans les provinces.",
     true
    ],
    [
     "Ils relèvent de l'autorité de l'administration centrale.",
     true
    ]
   ],
   "e": "Les ETD sont la ville, la commune, le secteur et la chefferie."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Définitions",
   "q": "À propos de la définition d'un projet :",
   "a": [
    [
     "Il vise à produire un résultat ou un produit unique.",
     true
    ],
    [
     "Un projet est une entreprise temporaire.",
     true
    ],
    [
     "Un projet est une activité répétitive et permanente.",
     false
    ]
   ],
   "e": "Un projet a un début et une fin. Une activité répétitive relève de l'exploitation."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Définitions",
   "q": "À propos des différences entre un projet et une opération courante :",
   "a": [
    [
     "Un projet n'a jamais de fin.",
     false
    ],
    [
     "Une opération courante est répétitive.",
     true
    ],
    [
     "Un projet a un début et une fin.",
     true
    ]
   ],
   "e": "Un projet se termine lorsque ses objectifs sont atteints ou abandonnés."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Cycle de projet",
   "q": "À propos du cycle de projet (approche PCM) :",
   "a": [
    [
     "L'évaluation précède la programmation.",
     false
    ],
    [
     "L'identification précède la formulation.",
     true
    ],
    [
     "Il comprend la programmation, l'identification, la formulation, le financement, la mise en œuvre et l'évaluation.",
     true
    ]
   ],
   "e": "Le cycle se referme sur l'évaluation, qui alimente la programmation suivante."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Cadre logique",
   "q": "À propos du cadre logique :",
   "a": [
    [
     "Il comprend des indicateurs, des sources de vérification et des hypothèses.",
     true
    ],
    [
     "Il ne comprend pas d'indicateurs.",
     false
    ],
    [
     "Il structure l'objectif global, l'objectif spécifique, les résultats et les activités.",
     true
    ]
   ],
   "e": "Le cadre logique relie les moyens, les activités et les résultats attendus."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Arbre à problèmes",
   "q": "À propos de l'arbre à problèmes :",
   "a": [
    [
     "Le problème central est au milieu.",
     true
    ],
    [
     "Les causes sont placées au-dessus du problème central.",
     false
    ],
    [
     "Les causes sont placées en dessous et les effets au-dessus.",
     true
    ]
   ],
   "e": "On retourne ensuite l'arbre à problèmes pour obtenir l'arbre à objectifs."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Hypothèses",
   "q": "À propos des hypothèses dans un cadre logique :",
   "a": [
    [
     "Elles remplacent les indicateurs.",
     false
    ],
    [
     "Ce sont des conditions extérieures nécessaires à la réussite.",
     true
    ],
    [
     "Elles échappent en grande partie au contrôle du projet.",
     true
    ]
   ],
   "e": "Une hypothèse fausse peut compromettre un résultat même si les activités sont bien menées."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Faisabilité",
   "q": "À propos de l'étude de faisabilité :",
   "a": [
    [
     "Elle précède la décision de lancer le projet.",
     true
    ],
    [
     "Elle évalue la faisabilité technique, financière et organisationnelle.",
     true
    ],
    [
     "Elle est faite une fois le projet terminé.",
     false
    ]
   ],
   "e": "Elle aide à décider de lancer, de modifier ou d'abandonner le projet."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Phases",
   "q": "À propos des groupes de processus du PMI :",
   "a": [
    [
     "Il y a cinq groupes : initiation, planification, exécution, suivi et maîtrise, clôture.",
     true
    ],
    [
     "La planification se situe avant l'exécution.",
     true
    ],
    [
     "La clôture est le premier groupe de processus.",
     false
    ]
   ],
   "e": "La clôture marque la fin du projet."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Livrables",
   "q": "À propos des livrables :",
   "a": [
    [
     "Un livrable est une réunion de suivi.",
     false
    ],
    [
     "Un livrable est un produit ou un résultat vérifiable.",
     true
    ],
    [
     "Il est accepté selon des critères d'acceptation.",
     true
    ]
   ],
   "e": "Les critères d'acceptation permettent de savoir si le livrable est conforme."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Organisation",
   "q": "À propos des structures d'organisation de projet :",
   "a": [
    [
     "Dans une structure par projet, le chef de projet a peu d'autorité.",
     false
    ],
    [
     "Il existe des structures fonctionnelle, matricielle et par projet.",
     true
    ],
    [
     "Dans une structure matricielle, un membre peut avoir deux supérieurs.",
     true
    ]
   ],
   "e": "La structure par projet donne au chef de projet une autorité forte."
  },
  {
   "p": "Cycle de projet et cadre logique",
   "s": "Rôles",
   "q": "À propos des rôles dans un projet :",
   "a": [
    [
     "Le sponsor soutient le projet et en défend les enjeux.",
     true
    ],
    [
     "Le chef de projet est toujours le bailleur de fonds.",
     false
    ],
    [
     "Le chef de projet dirige la réalisation du projet.",
     true
    ]
   ],
   "e": "Ce sont des rôles distincts, même si une personne peut en cumuler dans de petites organisations."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "WBS",
   "q": "À propos de la structure de découpage du projet (WBS) :",
   "a": [
    [
     "Elle décompose hiérarchiquement le travail en livrables.",
     true
    ],
    [
     "C'est un calendrier avec des dates.",
     false
    ],
    [
     "La règle des 100 % impose que le WBS couvre l'ensemble du périmètre.",
     true
    ]
   ],
   "e": "Le WBS organise le travail, le calendrier vient ensuite."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "WBS",
   "q": "À propos du lot de travaux (work package) :",
   "a": [
    [
     "C'est le niveau le plus bas du WBS.",
     true
    ],
    [
     "C'est le niveau le plus élevé du WBS.",
     false
    ],
    [
     "Il peut être estimé et affecté à un responsable.",
     true
    ]
   ],
   "e": "Les lots de travaux servent de base à l'estimation des délais et des coûts."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Dépendances",
   "q": "À propos des dépendances entre tâches :",
   "a": [
    [
     "La dépendance fin-début est la plus courante.",
     true
    ],
    [
     "Dans une dépendance fin-début, B commence avant le début de A.",
     false
    ],
    [
     "Dans une dépendance fin-début, B commence après la fin de A.",
     true
    ]
   ],
   "e": "Il existe aussi les dépendances début-début, fin-fin et début-fin."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Chemin critique",
   "q": "À propos du chemin critique :",
   "a": [
    [
     "Il correspond au chemin le plus long du réseau.",
     true
    ],
    [
     "Les tâches du chemin critique ont une marge totale nulle.",
     true
    ],
    [
     "Il correspond au chemin le plus court.",
     false
    ]
   ],
   "e": "Tout retard sur une tâche critique retarde la fin du projet."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Chemin critique",
   "q": "Réseau : A (3 jours) précède B (4 jours) et C (6 jours). B et C précèdent D (2 jours).",
   "a": [
    [
     "Le chemin critique est A-C-D.",
     true
    ],
    [
     "La durée du projet est de 9 jours.",
     false
    ],
    [
     "La durée du projet est de 11 jours.",
     true
    ]
   ],
   "e": "A-C-D = 3 + 6 + 2 = 11 jours. A-B-D = 3 + 4 + 2 = 9 jours."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Marges",
   "q": "Même réseau : A (3), B (4), C (6), D (2).",
   "a": [
    [
     "Les tâches A, C et D n'ont pas de marge.",
     true
    ],
    [
     "La tâche A a une marge de 2 jours.",
     false
    ],
    [
     "La tâche B a une marge totale de 2 jours.",
     true
    ]
   ],
   "e": "La marge de B est la différence entre 11 et 9 jours."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Compression",
   "q": "À propos de la compression du calendrier :",
   "a": [
    [
     "Le crashing consiste à ajouter des ressources sur les tâches critiques.",
     true
    ],
    [
     "Le crashing consiste à réduire le périmètre sans en parler au client.",
     false
    ],
    [
     "Le fast tracking consiste à faire en parallèle des tâches normalement séquentielles.",
     true
    ]
   ],
   "e": "Ces techniques raccourcissent le calendrier, mais augmentent souvent les coûts ou les risques."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Estimation",
   "q": "À propos des méthodes d'estimation :",
   "a": [
    [
     "L'estimation ascendante part du total pour le répartir.",
     false
    ],
    [
     "L'estimation paramétrique utilise un ratio, comme un coût par mètre carré.",
     true
    ],
    [
     "L'estimation analogique s'appuie sur des projets similaires.",
     true
    ]
   ],
   "e": "L'estimation ascendante part des lots de travaux pour les additionner."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Estimation",
   "q": "À propos de l'estimation ascendante :",
   "a": [
    [
     "Elle est en général plus précise que l'analogique.",
     true
    ],
    [
     "Elle part des lots de travaux et les additionne.",
     true
    ],
    [
     "Elle est plus rapide et moins précise.",
     false
    ]
   ],
   "e": "Elle demande plus de temps, mais elle est plus détaillée."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Ressources",
   "q": "À propos de la gestion des ressources :",
   "a": [
    [
     "La matrice RACI précise qui est responsable, qui approuve, qui est consulté et qui est informé.",
     true
    ],
    [
     "Le nivellement des ressources ajuste le calendrier selon leur disponibilité.",
     true
    ],
    [
     "RACI désigne un type de budget.",
     false
    ]
   ],
   "e": "RACI : Responsible, Accountable, Consulted, Informed."
  },
  {
   "p": "Planification : WBS, Gantt et chemin critique",
   "s": "Ligne de base",
   "q": "À propos de la ligne de base d'un projet :",
   "a": [
    [
     "Elle permet de mesurer les écarts.",
     true
    ],
    [
     "Elle peut être modifiée librement, sans contrôle.",
     false
    ],
    [
     "C'est la version approuvée du périmètre, du calendrier et du coût.",
     true
    ]
   ],
   "e": "Les changements de ligne de base passent par un processus de maîtrise des modifications."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Coûts",
   "q": "À propos des types de coûts :",
   "a": [
    [
     "Les coûts indirects sont partagés entre plusieurs activités.",
     true
    ],
    [
     "Les coûts fixes varient proportionnellement au volume.",
     false
    ],
    [
     "Les coûts directs sont imputables à un projet précis.",
     true
    ]
   ],
   "e": "Les coûts fixes ne dépendent pas du volume produit."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Réserves",
   "q": "À propos des réserves budgétaires :",
   "a": [
    [
     "La réserve pour aléas couvre des risques identifiés.",
     true
    ],
    [
     "Une réserve pour aléas représente le bénéfice du projet.",
     false
    ],
    [
     "La réserve de gestion couvre des imprévus non identifiés.",
     true
    ]
   ],
   "e": "Les réserves protègent le budget contre les incertitudes."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Valeur acquise",
   "q": "Un projet a : BAC = 100 000, PV = 45 000, EV = 40 000, AC = 50 000.",
   "a": [
    [
     "Le projet est en avance sur le calendrier.",
     false
    ],
    [
     "L'écart de coût (CV = EV − AC) est de −10 000.",
     true
    ],
    [
     "L'indice de performance des coûts (CPI = EV ÷ AC) est de 0,8.",
     true
    ]
   ],
   "e": "SPI = 40 000 ÷ 45 000 ≈ 0,89 : le projet est en retard."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Valeur acquise",
   "q": "Mêmes données : BAC = 100 000 ; EV = 40 000 ; AC = 50 000 ; CPI = 0,8.",
   "a": [
    [
     "L'EAC est de 90 000.",
     false
    ],
    [
     "L'estimation à l'achèvement (EAC = BAC ÷ CPI) est de 125 000.",
     true
    ],
    [
     "Le reste à dépenser (ETC = EAC − AC) est de 75 000.",
     true
    ]
   ],
   "e": "100 000 ÷ 0,8 = 125 000, et 125 000 − 50 000 = 75 000."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Valeur acquise",
   "q": "À propos de l'interprétation du CPI et du SPI :",
   "a": [
    [
     "Un CPI inférieur à 1 signale un dépassement des coûts.",
     true
    ],
    [
     "Un SPI inférieur à 1 signale un retard.",
     true
    ],
    [
     "Un CPI supérieur à 1 signale un dépassement des coûts.",
     false
    ]
   ],
   "e": "Un CPI supérieur à 1 signale au contraire des coûts inférieurs aux prévisions."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Rentabilité",
   "q": "On investit 1 000 aujourd'hui pour recevoir 1 100 dans un an. Le taux d'actualisation est de 10 %.",
   "a": [
    [
     "La VAN est nulle.",
     true
    ],
    [
     "Le taux de rentabilité interne (TRI) est de 10 %.",
     true
    ],
    [
     "La VAN est de 100.",
     false
    ]
   ],
   "e": "−1 000 + 1 100 ÷ 1,10 = 0."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Rentabilité",
   "q": "On investit 1 000 et on reçoit 250 par an.",
   "a": [
    [
     "Cet indicateur ne tient pas compte de l'actualisation.",
     true
    ],
    [
     "Le délai de récupération est de 2,5 ans.",
     false
    ],
    [
     "Le délai de récupération est de 4 ans.",
     true
    ]
   ],
   "e": "1 000 ÷ 250 = 4."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Trésorerie",
   "q": "À propos du plan de trésorerie d'un projet :",
   "a": [
    [
     "Il se limite au budget total sans échéancier.",
     false
    ],
    [
     "Il aide à éviter des ruptures de financement.",
     true
    ],
    [
     "Il décrit les décaissements et les encaissements dans le temps.",
     true
    ]
   ],
   "e": "Un budget total ne dit pas à quel moment l'argent sera nécessaire."
  },
  {
   "p": "Coûts, valeur acquise et rentabilité",
   "s": "Contrats",
   "q": "À propos des types de contrats :",
   "a": [
    [
     "Dans un contrat forfaitaire, le prix est fixé à l'avance.",
     true
    ],
    [
     "Dans un forfait, le client supporte tout dépassement.",
     false
    ],
    [
     "Dans un contrat en régie ou remboursable, le client supporte davantage le risque de dépassement.",
     true
    ]
   ],
   "e": "Dans un forfait, c'est en principe le prestataire qui supporte le risque de dépassement."
  },
  {
   "p": "Gestion des risques",
   "s": "Définition",
   "q": "À propos de la définition d'un risque de projet :",
   "a": [
    [
     "Il peut avoir un effet positif ou négatif.",
     true
    ],
    [
     "Un risque est un problème déjà survenu.",
     false
    ],
    [
     "Un risque est un événement incertain.",
     true
    ]
   ],
   "e": "Un problème déjà survenu s'appelle une question ou une difficulté."
  },
  {
   "p": "Gestion des risques",
   "s": "Évaluation",
   "q": "À propos de la matrice probabilité-impact :",
   "a": [
    [
     "Elle ne tient compte que de la probabilité.",
     false
    ],
    [
     "La criticité combine la probabilité et l'impact.",
     true
    ],
    [
     "Elle permet de prioriser les risques.",
     true
    ]
   ],
   "e": "Un risque peu probable mais très grave peut rester prioritaire."
  },
  {
   "p": "Gestion des risques",
   "s": "Réponses",
   "q": "À propos des stratégies face aux opportunités :",
   "a": [
    [
     "Exploiter est une stratégie.",
     true
    ],
    [
     "Partager est une stratégie.",
     true
    ],
    [
     "Transférer est la stratégie propre aux opportunités.",
     false
    ]
   ],
   "e": "Les stratégies sont exploiter, partager, améliorer et accepter."
  },
  {
   "p": "Gestion des risques",
   "s": "Registre",
   "q": "À propos du registre des risques :",
   "a": [
    [
     "Il liste les risques, leurs propriétaires et leurs réponses.",
     true
    ],
    [
     "Il est rédigé une fois, puis jamais revu.",
     false
    ],
    [
     "Il est mis à jour tout au long du projet.",
     true
    ]
   ],
   "e": "Les risques évoluent, et le registre doit évoluer avec eux."
  },
  {
   "p": "Gestion des risques",
   "s": "Valeur monétaire",
   "q": "Un risque a une probabilité de 20 % et un impact de 50 000.",
   "a": [
    [
     "La valeur monétaire attendue est de 100 000.",
     false
    ],
    [
     "Elle peut aider à dimensionner une réserve pour aléas.",
     true
    ],
    [
     "La valeur monétaire attendue est de 10 000.",
     true
    ]
   ],
   "e": "0,20 × 50 000 = 10 000."
  },
  {
   "p": "Gestion des risques",
   "s": "Risques résiduels",
   "q": "À propos des risques résiduels et secondaires :",
   "a": [
    [
     "Un risque résiduel subsiste après la réponse.",
     true
    ],
    [
     "Un risque secondaire est généré par la réponse elle-même.",
     true
    ],
    [
     "Un risque résiduel existe avant toute réponse.",
     false
    ]
   ],
   "e": "Il faut anticiper ces risques lorsqu'on choisit une réponse."
  },
  {
   "p": "Gestion des risques",
   "s": "Plans",
   "q": "À propos du plan de contingence :",
   "a": [
    [
     "Il est inutile quand un risque est identifié.",
     false
    ],
    [
     "Il est activé si le risque survient.",
     true
    ],
    [
     "Un déclencheur indique quand l'appliquer.",
     true
    ]
   ],
   "e": "Il prépare une réponse avant que le risque ne se réalise."
  },
  {
   "p": "Gestion des risques",
   "s": "Suivi",
   "q": "À propos du suivi des risques :",
   "a": [
    [
     "Les risques sont identifiés au démarrage, puis jamais revus.",
     false
    ],
    [
     "Il se poursuit pendant toute la durée du projet.",
     true
    ],
    [
     "La tolérance au risque dépend de l'organisation.",
     true
    ]
   ],
   "e": "Une revue régulière est une bonne pratique."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Parties prenantes",
   "q": "À propos des parties prenantes d'un projet :",
   "a": [
    [
     "Ce sont des personnes ou des organisations qui peuvent affecter le projet ou en être affectées.",
     true
    ],
    [
     "Seuls les membres de l'équipe sont des parties prenantes.",
     false
    ],
    [
     "Les bénéficiaires et le sponsor en font partie.",
     true
    ]
   ],
   "e": "Il faut identifier toutes les parties prenantes, y compris celles qui n'appartiennent pas à l'équipe."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Parties prenantes",
   "q": "À propos de la matrice pouvoir-intérêt :",
   "a": [
    [
     "Une partie prenante à fort pouvoir et à fort intérêt est gérée de près.",
     true
    ],
    [
     "Une partie prenante à fort pouvoir et à faible intérêt est ignorée.",
     false
    ],
    [
     "Une partie prenante à faible pouvoir et à faible intérêt est simplement surveillée.",
     true
    ]
   ],
   "e": "Une partie prenante à fort pouvoir et à faible intérêt doit être tenue satisfaite."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Plan de communication",
   "q": "À propos du plan de communication :",
   "a": [
    [
     "Il précise qui reçoit quelle information, quand et par quel canal.",
     true
    ],
    [
     "Il prévoit un message unique, identique pour tous.",
     false
    ],
    [
     "Il est adapté aux différents publics.",
     true
    ]
   ],
   "e": "Un directeur et un technicien n'ont pas les mêmes besoins d'information."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Canaux de communication",
   "q": "Le nombre de canaux de communication se calcule par n(n − 1) ÷ 2.",
   "a": [
    [
     "Pour 5 personnes, il y a 5 canaux.",
     false
    ],
    [
     "Pour 5 personnes, il y a 10 canaux.",
     true
    ],
    [
     "Avec 6 personnes, il y a 15 canaux.",
     true
    ]
   ],
   "e": "5 × 4 ÷ 2 = 10, et 6 × 5 ÷ 2 = 15."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Modèle de communication",
   "q": "À propos du modèle de communication :",
   "a": [
    [
     "La rétroaction est inutile.",
     false
    ],
    [
     "Il comprend un émetteur, un message, un canal et un récepteur.",
     true
    ],
    [
     "La rétroaction permet de vérifier la compréhension.",
     true
    ]
   ],
   "e": "Le bruit (langue, distraction, mauvais canal) peut déformer le message."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Rapports",
   "q": "À propos du rapport d'avancement :",
   "a": [
    [
     "Il ne présente que les bonnes nouvelles.",
     false
    ],
    [
     "Il annonce les prochaines étapes.",
     true
    ],
    [
     "Il présente les réalisations, les écarts et les risques.",
     true
    ]
   ],
   "e": "Un rapport honnête permet de décider et de corriger à temps."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Conflits",
   "q": "À propos de la gestion des conflits :",
   "a": [
    [
     "Collaborer cherche une solution profitable aux deux parties.",
     true
    ],
    [
     "Le compromis suppose des concessions de part et d'autre.",
     true
    ],
    [
     "Éviter le conflit résout toujours sa cause.",
     false
    ]
   ],
   "e": "Éviter peut calmer la situation, mais la cause du conflit demeure."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Engagement",
   "q": "À propos de l'engagement des parties prenantes :",
   "a": [
    [
     "Les parties prenantes résistantes n'ont aucune importance.",
     false
    ],
    [
     "On peut les classer comme inconscientes, résistantes, neutres, favorables ou meneuses.",
     true
    ],
    [
     "L'objectif est de faire évoluer chacune vers le niveau d'engagement souhaité.",
     true
    ]
   ],
   "e": "Une partie prenante résistante peut bloquer un projet."
  },
  {
   "p": "Parties prenantes et communication",
   "s": "Gestion de l'information",
   "q": "À propos de la gestion des documents du projet :",
   "a": [
    [
     "Plusieurs versions non datées peuvent circuler.",
     false
    ],
    [
     "Le contrôle des versions évite d'utiliser un document périmé.",
     true
    ],
    [
     "Les documents doivent être centralisés.",
     true
    ]
   ],
   "e": "Une seule version de référence limite les erreurs."
  },
  {
   "p": "Agile et Scrum",
   "s": "Manifeste agile",
   "q": "À propos du Manifeste agile :",
   "a": [
    [
     "Il rejette toute documentation.",
     false
    ],
    [
     "Il valorise la collaboration avec le client plus que la négociation contractuelle.",
     true
    ],
    [
     "Il date de 2001.",
     true
    ]
   ],
   "e": "Il préfère un logiciel opérationnel à une documentation exhaustive, sans supprimer la documentation utile."
  },
  {
   "p": "Agile et Scrum",
   "s": "Rôles Scrum",
   "q": "À propos des rôles dans Scrum :",
   "a": [
    [
     "Le Product Owner maximise la valeur du produit.",
     true
    ],
    [
     "Le Scrum Master est le chef hiérarchique de l'équipe.",
     false
    ],
    [
     "Le Scrum Master aide l'équipe à appliquer Scrum.",
     true
    ]
   ],
   "e": "Les rôles de Scrum sont le Product Owner, le Scrum Master et les Développeurs."
  },
  {
   "p": "Agile et Scrum",
   "s": "Événements Scrum",
   "q": "À propos des événements Scrum :",
   "a": [
    [
     "La rétrospective est la démonstration du produit aux parties prenantes.",
     false
    ],
    [
     "Le Daily Scrum dure au maximum 15 minutes.",
     true
    ],
    [
     "La planification du sprint prépare le travail à réaliser.",
     true
    ]
   ],
   "e": "La revue de sprint présente l'incrément. La rétrospective améliore la manière de travailler."
  },
  {
   "p": "Agile et Scrum",
   "s": "Artefacts Scrum",
   "q": "À propos des artefacts de Scrum :",
   "a": [
    [
     "Le Sprint Backlog contient le travail choisi pour le sprint.",
     true
    ],
    [
     "Le Sprint Backlog est géré par le client seul.",
     false
    ],
    [
     "Le Product Backlog est une liste ordonnée de ce qui est nécessaire.",
     true
    ]
   ],
   "e": "Les artefacts sont le Product Backlog, le Sprint Backlog et l'incrément."
  },
  {
   "p": "Agile et Scrum",
   "s": "Definition of Done",
   "q": "À propos de la définition de « terminé » (Definition of Done) :",
   "a": [
    [
     "Elle est partagée par toute l'équipe.",
     true
    ],
    [
     "Elle est décidée après le sprint par le client seul.",
     false
    ],
    [
     "Elle fixe les critères pour qu'un incrément soit considéré comme terminé.",
     true
    ]
   ],
   "e": "Elle garantit une même compréhension de la qualité attendue."
  },
  {
   "p": "Agile et Scrum",
   "s": "User story",
   "q": "À propos de la user story :",
   "a": [
    [
     "C'est un contrat juridique.",
     false
    ],
    [
     "Elle décrit un besoin du point de vue de l'utilisateur.",
     true
    ],
    [
     "Elle suit souvent la forme « en tant que..., je veux... afin de... ».",
     true
    ]
   ],
   "e": "Elle sert de base de discussion, non de contrat."
  },
  {
   "p": "Agile et Scrum",
   "s": "Kanban",
   "q": "À propos du Kanban :",
   "a": [
    [
     "Il limite le travail en cours (WIP).",
     true
    ],
    [
     "Il visualise le flux de travail.",
     true
    ],
    [
     "Il interdit l'usage d'un tableau.",
     false
    ]
   ],
   "e": "Un tableau Kanban comprend souvent les colonnes à faire, en cours, terminé."
  },
  {
   "p": "Agile et Scrum",
   "s": "Vélocité",
   "q": "À propos de la vélocité d'une équipe :",
   "a": [
    [
     "Elle aide à prévoir les sprints futurs.",
     true
    ],
    [
     "Elle représente la quantité de travail terminée par sprint.",
     true
    ],
    [
     "Elle mesure la vitesse d'un véhicule.",
     false
    ]
   ],
   "e": "Elle se calcule sur plusieurs sprints, pour éviter les écarts isolés."
  },
  {
   "p": "Agile et Scrum",
   "s": "Agile et prédictif",
   "q": "À propos des approches prédictive et agile :",
   "a": [
    [
     "L'approche agile est toujours meilleure que l'approche prédictive.",
     false
    ],
    [
     "L'approche prédictive planifie l'essentiel au départ.",
     true
    ],
    [
     "L'approche agile convient mieux lorsque les exigences changent.",
     true
    ]
   ],
   "e": "Le choix dépend du contexte, du risque et de la stabilité des exigences."
  },
  {
   "p": "Agile et Scrum",
   "s": "MVP",
   "q": "À propos du produit minimum viable (MVP) :",
   "a": [
    [
     "Il contient les fonctions essentielles.",
     true
    ],
    [
     "Il permet de tester des hypothèses avec de vrais utilisateurs.",
     true
    ],
    [
     "C'est la version finale complète du produit.",
     false
    ]
   ],
   "e": "Le MVP permet d'apprendre vite et à moindre coût."
  },
  {
   "p": "Agile et Scrum",
   "s": "Rétrospective",
   "q": "À propos de la rétrospective de sprint :",
   "a": [
    [
     "Elle évalue uniquement les performances individuelles.",
     false
    ],
    [
     "Elle a lieu à la fin du sprint.",
     true
    ],
    [
     "Elle vise à améliorer la manière de travailler.",
     true
    ]
   ],
   "e": "Elle porte sur les processus, les relations et les outils."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "PMBOK",
   "q": "À propos du Guide PMBOK (6ᵉ édition) :",
   "a": [
    [
     "Il décrit 10 domaines de connaissance.",
     true
    ],
    [
     "Il décrit 6 groupes de processus.",
     false
    ],
    [
     "Il décrit 5 groupes de processus.",
     true
    ]
   ],
   "e": "Les 5 groupes sont l'initiation, la planification, l'exécution, le suivi et la maîtrise, la clôture."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "PMBOK",
   "q": "À propos des domaines de connaissance du PMBOK :",
   "a": [
    [
     "La gestion de l'intégration en fait partie.",
     true
    ],
    [
     "La gestion des approvisionnements en fait partie.",
     true
    ],
    [
     "La gestion de la rentabilité en fait partie.",
     false
    ]
   ],
   "e": "On y trouve aussi le périmètre, l'échéancier, les coûts, la qualité, les ressources, les communications, les risques et les parties prenantes."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "PMI",
   "q": "À propos du PMI :",
   "a": [
    [
     "La certification PMP est réservée à l'approche agile.",
     false
    ],
    [
     "Il délivre la certification PMP.",
     true
    ],
    [
     "Il s'agit du Project Management Institute.",
     true
    ]
   ],
   "e": "Le PMP couvre des approches prédictives, agiles et hybrides."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "PRINCE2",
   "q": "À propos de PRINCE2 :",
   "a": [
    [
     "La méthode comprend 5 principes seulement.",
     false
    ],
    [
     "La méthode comprend 7 principes, 7 thèmes et 7 processus.",
     true
    ],
    [
     "Le nom signifie PRojects IN Controlled Environments.",
     true
    ]
   ],
   "e": "PRINCE2 est une méthode structurée, très utilisée dans le secteur public."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "PRINCE2",
   "q": "À propos des principes de PRINCE2 :",
   "a": [
    [
     "Il est inutile de définir les rôles et les responsabilités.",
     false
    ],
    [
     "La justification continue de l'intérêt du projet en fait partie.",
     true
    ],
    [
     "Apprendre de l'expérience en fait partie.",
     true
    ]
   ],
   "e": "Les rôles et responsabilités définis font partie des principes."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "Approche hybride",
   "q": "À propos des approches hybrides :",
   "a": [
    [
     "Elles sont adaptées à des projets qui combinent des parties stables et des parties incertaines.",
     true
    ],
    [
     "Elles combinent des éléments agiles et prédictifs.",
     true
    ],
    [
     "Elles interdisent l'usage de plans.",
     false
    ]
   ],
   "e": "On peut planifier le cadre global et itérer sur certaines parties."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "Normes",
   "q": "À propos de la norme ISO 21500 :",
   "a": [
    [
     "Elle donne des lignes directrices sur le management de projet.",
     true
    ],
    [
     "Elle est publiée par l'Organisation internationale de normalisation.",
     true
    ],
    [
     "Elle impose une certification obligatoire à tous les chefs de projet.",
     false
    ]
   ],
   "e": "Elle fournit des lignes directrices, sans imposer de certification individuelle."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "Programmes et portefeuilles",
   "q": "À propos des programmes et des portefeuilles :",
   "a": [
    [
     "Un programme regroupe des projets liés, gérés de façon coordonnée.",
     true
    ],
    [
     "Un portefeuille regroupe des projets et programmes alignés sur la stratégie.",
     true
    ],
    [
     "Un portefeuille est un projet unique.",
     false
    ]
   ],
   "e": "Le portefeuille permet d'arbitrer les priorités entre initiatives."
  },
  {
   "p": "PMBOK et PRINCE2",
   "s": "Valeur",
   "q": "À propos de la valeur d'un projet :",
   "a": [
    [
     "Un projet doit être lié à la stratégie de l'organisation.",
     true
    ],
    [
     "La valeur est égale au coût du projet.",
     false
    ],
    [
     "La valeur ne se limite pas au coût.",
     true
    ]
   ],
   "e": "La valeur compare les bénéfices attendus aux ressources engagées."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Suivi et évaluation",
   "q": "À propos du suivi et de l'évaluation :",
   "a": [
    [
     "L'évaluation porte un jugement sur la pertinence, l'efficacité et l'impact.",
     true
    ],
    [
     "L'évaluation est un suivi continu identique en tout point.",
     false
    ],
    [
     "Le suivi est une collecte continue d'informations.",
     true
    ]
   ],
   "e": "L'évaluation est ponctuelle et plus approfondie."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Indicateurs",
   "q": "À propos des niveaux de résultats :",
   "a": [
    [
     "Un effet (outcome) est un changement à moyen terme.",
     true
    ],
    [
     "Un extrant (output) est un produit direct d'une activité.",
     true
    ],
    [
     "Un intrant est un impact.",
     false
    ]
   ],
   "e": "Un intrant est une ressource utilisée au départ."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Plan de S&E",
   "q": "À propos du plan de suivi-évaluation :",
   "a": [
    [
     "Il n'est utile qu'à la fin du projet.",
     false
    ],
    [
     "Il précise les indicateurs, les sources, la fréquence et les responsables.",
     true
    ],
    [
     "Il comprend une valeur de référence.",
     true
    ]
   ],
   "e": "Il est conçu dès la planification."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Ligne de base",
   "q": "À propos de la situation de référence (baseline) :",
   "a": [
    [
     "Elle permet de mesurer le changement.",
     true
    ],
    [
     "Elle décrit la situation avant l'intervention.",
     true
    ],
    [
     "Elle est établie après la fin du projet.",
     false
    ]
   ],
   "e": "Sans situation de départ, on ne peut pas mesurer d'évolution."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Critères d'évaluation",
   "q": "À propos des critères d'évaluation du CAD de l'OCDE :",
   "a": [
    [
     "La cohérence a été ajoutée en 2019.",
     true
    ],
    [
     "Ils sont au nombre de six.",
     true
    ],
    [
     "La popularité en fait partie.",
     false
    ]
   ],
   "e": "Pertinence, cohérence, efficacité, efficience, impact et durabilité."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Types d'évaluation",
   "q": "À propos des types d'évaluation :",
   "a": [
    [
     "L'évaluation ex post a lieu avant l'intervention.",
     false
    ],
    [
     "L'évaluation ex ante a lieu avant l'intervention.",
     true
    ],
    [
     "L'évaluation à mi-parcours a lieu en cours de projet.",
     true
    ]
   ],
   "e": "L'évaluation ex post a lieu après la fin de l'intervention."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Triangulation",
   "q": "À propos de la triangulation :",
   "a": [
    [
     "Elle améliore la fiabilité des conclusions.",
     true
    ],
    [
     "Elle consiste à répéter la même source plusieurs fois.",
     false
    ],
    [
     "Elle croise plusieurs sources ou méthodes.",
     true
    ]
   ],
   "e": "Plusieurs sources indépendantes qui convergent renforcent une conclusion."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Rapport d'évaluation",
   "q": "À propos du rapport d'évaluation :",
   "a": [
    [
     "Il se limite à un résumé du budget.",
     false
    ],
    [
     "Il documente des leçons apprises.",
     true
    ],
    [
     "Il présente des constats, des conclusions et des recommandations.",
     true
    ]
   ],
   "e": "Les recommandations doivent être utiles et réalisables."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Indicateurs",
   "q": "À propos de la désagrégation des indicateurs :",
   "a": [
    [
     "Cela rend l'indicateur inutile.",
     false
    ],
    [
     "On peut ventiler un indicateur par sexe ou par âge.",
     true
    ],
    [
     "Cela révèle des écarts entre groupes.",
     true
    ]
   ],
   "e": "Une moyenne peut masquer des inégalités."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Évaluation d'impact",
   "q": "À propos de l'évaluation d'impact :",
   "a": [
    [
     "Elle mesure les effets attribuables à l'intervention.",
     true
    ],
    [
     "Elle peut utiliser un groupe témoin.",
     true
    ],
    [
     "Elle est impossible pour un projet de développement.",
     false
    ]
   ],
   "e": "Un groupe de comparaison permet d'isoler l'effet du projet."
  },
  {
   "p": "Suivi-évaluation",
   "s": "Gestion axée sur les résultats",
   "q": "À propos de la gestion axée sur les résultats (GAR) :",
   "a": [
    [
     "Elle ignore la mesure des résultats.",
     false
    ],
    [
     "Elle s'oriente vers les résultats plutôt que vers les seules activités.",
     true
    ],
    [
     "Elle repose sur des indicateurs et des cibles.",
     true
    ]
   ],
   "e": "Elle demande de définir, mesurer et rendre compte des résultats."
  },
  {
   "p": "Qualité et changements",
   "s": "Qualité",
   "q": "À propos de la qualité d'un projet :",
   "a": [
    [
     "La qualité mesure la conformité aux exigences.",
     true
    ],
    [
     "La qualité est un luxe réservé aux grands projets.",
     false
    ],
    [
     "Le grade désigne une catégorie ou une classe de produit.",
     true
    ]
   ],
   "e": "Un grade bas peut être acceptable, mais une qualité basse ne l'est pas."
  },
  {
   "p": "Qualité et changements",
   "s": "PDCA",
   "q": "À propos du cycle PDCA de Deming :",
   "a": [
    [
     "Il signifie Plan-Deliver-Close-Audit.",
     false
    ],
    [
     "Il signifie Plan-Do-Check-Act.",
     true
    ],
    [
     "Il soutient l'amélioration continue.",
     true
    ]
   ],
   "e": "Planifier, faire, vérifier, agir."
  },
  {
   "p": "Qualité et changements",
   "s": "Outils de qualité",
   "q": "À propos du diagramme de Pareto :",
   "a": [
    [
     "Il aide à prioriser les causes principales d'un problème.",
     true
    ],
    [
     "Il mesure la variance d'un processus.",
     false
    ],
    [
     "Il illustre la règle du 80/20.",
     true
    ]
   ],
   "e": "Un petit nombre de causes explique souvent la plus grande part des effets."
  },
  {
   "p": "Qualité et changements",
   "s": "Outils de qualité",
   "q": "À propos des cartes de contrôle :",
   "a": [
    [
     "Elles permettent de suivre la stabilité d'un processus.",
     true
    ],
    [
     "Elles comportent des limites de contrôle.",
     true
    ],
    [
     "Elles servent à planifier les ressources.",
     false
    ]
   ],
   "e": "Un point hors limites signale une variation anormale."
  },
  {
   "p": "Qualité et changements",
   "s": "Coût de la qualité",
   "q": "À propos du coût de la qualité :",
   "a": [
    [
     "La prévention et l'évaluation font partie des coûts de conformité.",
     true
    ],
    [
     "Les défaillances internes et externes font partie des coûts de non-conformité.",
     true
    ],
    [
     "La non-qualité ne coûte rien.",
     false
    ]
   ],
   "e": "Prévenir coûte en général moins cher que réparer."
  },
  {
   "p": "Qualité et changements",
   "s": "Gestion des modifications",
   "q": "À propos de la maîtrise des modifications :",
   "a": [
    [
     "Tout changement demandé est accepté automatiquement.",
     false
    ],
    [
     "Un comité de contrôle des modifications (CCB) peut décider.",
     true
    ],
    [
     "Une demande de changement est évaluée avant d'être acceptée.",
     true
    ]
   ],
   "e": "Chaque changement a des effets sur le coût, le délai et la qualité."
  },
  {
   "p": "Qualité et changements",
   "s": "Changement organisationnel",
   "q": "À propos du changement dans les organisations :",
   "a": [
    [
     "La communication et la formation facilitent l'adoption.",
     true
    ],
    [
     "La résistance au changement est fréquente.",
     true
    ],
    [
     "Il est inutile d'accompagner les personnes concernées.",
     false
    ]
   ],
   "e": "Un produit livré mais non utilisé n'apporte pas de valeur."
  },
  {
   "p": "Qualité et changements",
   "s": "Recette",
   "q": "À propos de l'acceptation d'un livrable (recette) :",
   "a": [
    [
     "Elle a lieu avant toute livraison.",
     false
    ],
    [
     "Elle consiste en la validation par le client selon des critères définis.",
     true
    ],
    [
     "Des tests et des revues la précèdent.",
     true
    ]
   ],
   "e": "La recette intervient après la livraison, sur la base des critères d'acceptation."
  },
  {
   "p": "Approvisionnement et contrats",
   "s": "Achat ou production",
   "q": "À propos de la décision de faire ou d'acheter (make or buy) :",
   "a": [
    [
     "Elle tient compte du coût, des compétences et des délais.",
     true
    ],
    [
     "Elle compare la production interne à l'achat externe.",
     true
    ],
    [
     "Il faut toujours acheter à l'extérieur.",
     false
    ]
   ],
   "e": "Aucune option n'est meilleure dans tous les cas."
  },
  {
   "p": "Approvisionnement et contrats",
   "s": "Appel d'offres",
   "q": "À propos de l'appel d'offres :",
   "a": [
    [
     "Il s'appuie sur un cahier des charges.",
     true
    ],
    [
     "Les critères d'évaluation sont connus à l'avance.",
     true
    ],
    [
     "Les critères d'évaluation sont tenus secrets.",
     false
    ]
   ],
   "e": "La transparence des critères garantit l'égalité entre les candidats."
  },
  {
   "p": "Approvisionnement et contrats",
   "s": "Termes de référence",
   "q": "À propos des termes de référence (TdR) :",
   "a": [
    [
     "Ils décrivent les objectifs, les tâches et les livrables attendus.",
     true
    ],
    [
     "Ils servent de base à une consultation ou à un appel d'offres.",
     true
    ],
    [
     "Ce sont des contrats déjà signés.",
     false
    ]
   ],
   "e": "Les TdR cadrent la demande avant la signature d'un contrat."
  },
  {
   "p": "Approvisionnement et contrats",
   "s": "Garanties",
   "q": "À propos des garanties dans les contrats :",
   "a": [
    [
     "Une garantie de bonne exécution protège l'autorité contractante.",
     true
    ],
    [
     "Il est recommandé de tout payer d'avance, sans garantie.",
     false
    ],
    [
     "Une retenue de garantie peut être appliquée sur les paiements.",
     true
    ]
   ],
   "e": "Les garanties limitent le risque de mauvaise exécution."
  },
  {
   "p": "Approvisionnement et contrats",
   "s": "Gestion des contrats",
   "q": "À propos de la gestion des contrats :",
   "a": [
    [
     "Un avenant formalise une modification du contrat.",
     true
    ],
    [
     "Un contrat ne peut jamais être modifié.",
     false
    ],
    [
     "Elle comprend le suivi de l'exécution.",
     true
    ]
   ],
   "e": "Les modifications doivent être écrites et approuvées."
  },
  {
   "p": "Approvisionnement et contrats",
   "s": "Éthique des achats",
   "q": "À propos de l'éthique dans les achats :",
   "a": [
    [
     "Les relations personnelles avec un fournisseur sont sans importance.",
     false
    ],
    [
     "Une déclaration d'intérêts aide à prévenir les conflits d'intérêts.",
     true
    ],
    [
     "Les cadeaux de fournisseurs doivent être encadrés.",
     true
    ]
   ],
   "e": "L'impartialité protège l'organisation et le fournisseur."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Équipes",
   "q": "À propos des étapes de développement d'une équipe (Tuckman) :",
   "a": [
    [
     "La dissolution clôt le cycle.",
     true
    ],
    [
     "La turbulence correspond à la phase de performance.",
     false
    ],
    [
     "Elles comprennent formation, turbulence, normalisation et performance.",
     true
    ]
   ],
   "e": "La turbulence (storming) est une phase de tensions et de clarification des rôles."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Leadership",
   "q": "À propos du leadership situationnel de Hersey et Blanchard :",
   "a": [
    [
     "Le style doit s'adapter à la maturité des collaborateurs.",
     true
    ],
    [
     "Il décrit quatre styles : directif, persuasif, participatif, délégatif.",
     true
    ],
    [
     "Il recommande un style unique, quelle que soit la situation.",
     false
    ]
   ],
   "e": "Un débutant a besoin d'un cadrage plus fort qu'un expert."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Délégation",
   "q": "À propos de la délégation :",
   "a": [
    [
     "Il faut préciser les résultats attendus.",
     true
    ],
    [
     "On peut déléguer une tâche, mais on conserve la responsabilité finale.",
     true
    ],
    [
     "Déléguer signifie abandonner tout suivi.",
     false
    ]
   ],
   "e": "La délégation s'accompagne d'un suivi proportionné."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Feedback",
   "q": "À propos du feedback (méthode SBI) :",
   "a": [
    [
     "Il consiste à critiquer le caractère de la personne.",
     false
    ],
    [
     "SBI signifie Situation, Comportement, Impact.",
     true
    ],
    [
     "Il décrit un fait observable, pas un jugement sur la personne.",
     true
    ]
   ],
   "e": "Un feedback précis est plus facile à entendre et à utiliser."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Équipes virtuelles",
   "q": "À propos des équipes virtuelles :",
   "a": [
    [
     "Les fuseaux horaires doivent être pris en compte.",
     true
    ],
    [
     "Des outils collaboratifs facilitent le travail à distance.",
     true
    ],
    [
     "La communication y est moins nécessaire.",
     false
    ]
   ],
   "e": "À distance, il faut communiquer davantage et plus clairement."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Décision",
   "q": "À propos des modes de décision :",
   "a": [
    [
     "La décision autocratique implique toujours le consensus.",
     false
    ],
    [
     "On peut décider à la majorité.",
     true
    ],
    [
     "On peut décider par consensus.",
     true
    ]
   ],
   "e": "Une décision autocratique est prise par une personne seule."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Intelligence émotionnelle",
   "q": "À propos de l'intelligence émotionnelle d'un chef de projet :",
   "a": [
    [
     "Elle aide à comprendre et à gérer les émotions.",
     true
    ],
    [
     "Elle est inutile dans un projet.",
     false
    ],
    [
     "Elle améliore les relations dans l'équipe.",
     true
    ]
   ],
   "e": "Un chef de projet passe beaucoup de temps à communiquer et à négocier."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Gestion du temps",
   "q": "À propos de la matrice d'Eisenhower :",
   "a": [
    [
     "Elle classe les tâches selon l'urgence et l'importance.",
     true
    ],
    [
     "Une tâche ni urgente ni importante est prioritaire.",
     false
    ],
    [
     "Une tâche urgente et importante est à traiter immédiatement.",
     true
    ]
   ],
   "e": "Les tâches importantes mais non urgentes sont à planifier."
  },
  {
   "p": "Leadership et gestion d'équipe",
   "s": "Santé au travail",
   "q": "À propos de la charge de travail dans une équipe projet :",
   "a": [
    [
     "Une charge excessive peut conduire à l'épuisement.",
     true
    ],
    [
     "Le chef de projet doit être attentif à la répartition de la charge.",
     true
    ],
    [
     "La surcharge n'a jamais d'effet sur la qualité.",
     false
    ]
   ],
   "e": "La surcharge augmente les erreurs et les départs."
  },
  {
   "p": "Clôture et gouvernance de projet",
   "s": "Clôture",
   "q": "À propos de la clôture d'un projet :",
   "a": [
    [
     "Elle est inutile quand les livrables sont terminés.",
     false
    ],
    [
     "Elle comprend l'acceptation finale des livrables.",
     true
    ],
    [
     "Elle comprend la capitalisation des leçons apprises.",
     true
    ]
   ],
   "e": "La clôture formalise la fin du projet et libère les ressources."
  },
  {
   "p": "Clôture et gouvernance de projet",
   "s": "Transfert",
   "q": "À propos du transfert des résultats aux bénéficiaires :",
   "a": [
    [
     "Il peut s'accompagner d'une formation.",
     true
    ],
    [
     "Il prépare l'exploitation des résultats après le projet.",
     true
    ],
    [
     "Il n'est pas nécessaire si le projet est réussi.",
     false
    ]
   ],
   "e": "Sans transfert, les résultats risquent de ne pas être utilisés."
  },
  {
   "p": "Clôture et gouvernance de projet",
   "s": "Gouvernance",
   "q": "À propos de la gouvernance d'un projet :",
   "a": [
    [
     "Le comité de pilotage gère les tâches quotidiennes de l'équipe.",
     false
    ],
    [
     "Le chef de projet gère le projet au quotidien.",
     true
    ],
    [
     "Le comité de pilotage prend les décisions stratégiques.",
     true
    ]
   ],
   "e": "La gouvernance clarifie qui décide de quoi."
  },
  {
   "p": "Clôture et gouvernance de projet",
   "s": "Revues de jalon",
   "q": "À propos des revues de jalon (stage gates) :",
   "a": [
    [
     "Elles sont décidées uniquement par le prestataire.",
     false
    ],
    [
     "Elles s'appuient sur des critères définis.",
     true
    ],
    [
     "Elles permettent de décider de continuer, d'ajuster ou d'arrêter.",
     true
    ]
   ],
   "e": "Elles limitent le risque de poursuivre un projet qui ne se justifie plus."
  },
  {
   "p": "Clôture et gouvernance de projet",
   "s": "Audit",
   "q": "À propos de l'audit de projet :",
   "a": [
    [
     "Il vérifie la conformité aux règles et aux procédures.",
     true
    ],
    [
     "Il est toujours réalisé par le chef de projet lui-même.",
     false
    ],
    [
     "C'est une évaluation indépendante.",
     true
    ]
   ],
   "e": "L'indépendance donne de la crédibilité à l'audit."
  },
  {
   "p": "Clôture et gouvernance de projet",
   "s": "Durabilité",
   "q": "À propos de la durabilité des résultats d'un projet :",
   "a": [
    [
     "Elle se limite à la durée du projet.",
     false
    ],
    [
     "L'implication des acteurs locaux la favorise.",
     true
    ],
    [
     "Elle désigne la capacité de maintenir les bénéfices après la fin du projet.",
     true
    ]
   ],
   "e": "La durabilité est l'un des critères d'évaluation du CAD de l'OCDE."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Bailleurs",
   "q": "À propos de la relation avec un bailleur de fonds :",
   "a": [
    [
     "Le financement est généralement soumis à des conditions.",
     true
    ],
    [
     "Le bailleur n'attend aucun rapport.",
     false
    ],
    [
     "Des rapports narratifs et financiers sont attendus.",
     true
    ]
   ],
   "e": "La redevabilité envers le bailleur fait partie du contrat de financement."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Budget",
   "q": "À propos du budget d'un projet financé :",
   "a": [
    [
     "Toutes les dépenses sont éligibles par défaut.",
     false
    ],
    [
     "Les règles d'éligibilité des dépenses doivent être respectées.",
     true
    ],
    [
     "Il est détaillé par activités.",
     true
    ]
   ],
   "e": "Une dépense non éligible peut être refusée et remboursée."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Audit des fonds",
   "q": "À propos de l'audit des fonds d'un projet :",
   "a": [
    [
     "Il est interdit pour les projets financés par des bailleurs.",
     false
    ],
    [
     "Un audit externe peut être exigé.",
     true
    ],
    [
     "Il vérifie l'usage régulier des fonds.",
     true
    ]
   ],
   "e": "L'audit rassure les bailleurs sur la bonne gestion."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Partenariats",
   "q": "À propos des partenariats avec des acteurs locaux :",
   "a": [
    [
     "Ils sont inutiles dans un projet de développement.",
     false
    ],
    [
     "Ils renforcent l'appropriation des résultats.",
     true
    ],
    [
     "Ils peuvent inclure des ONG locales et des collectivités.",
     true
    ]
   ],
   "e": "Les acteurs locaux connaissent le contexte et assurent la continuité."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Genre et inclusion",
   "q": "À propos de l'approche genre dans un projet :",
   "a": [
    [
     "Elle contribue à l'inclusion des groupes vulnérables.",
     true
    ],
    [
     "Elle est incompatible avec l'efficacité du projet.",
     false
    ],
    [
     "Elle analyse les besoins différents des femmes et des hommes.",
     true
    ]
   ],
   "e": "Une analyse inclusive améliore souvent la pertinence du projet."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Intégrité",
   "q": "À propos de la lutte contre la fraude dans les projets financés :",
   "a": [
    [
     "Une politique de tolérance zéro est fréquente.",
     true
    ],
    [
     "La fraude est acceptable si elle est de faible montant.",
     false
    ],
    [
     "Des procédures de contrôle interne limitent les risques.",
     true
    ]
   ],
   "e": "Le contrôle interne combine séparation des tâches, validations et documentation."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Impact environnemental",
   "q": "À propos de l'étude d'impact environnemental et social :",
   "a": [
    [
     "Elle est souvent exigée avant certains projets.",
     true
    ],
    [
     "Elle est faite après la fin des travaux.",
     false
    ],
    [
     "Elle évalue les effets d'un projet sur l'environnement et les populations.",
     true
    ]
   ],
   "e": "L'étude doit précéder la décision pour pouvoir limiter les impacts."
  },
  {
   "p": "Projets de développement et bailleurs",
   "s": "Coordination",
   "q": "À propos de la coordination entre acteurs d'un secteur :",
   "a": [
    [
     "Elle améliore la cohérence de l'action.",
     true
    ],
    [
     "Elle est inutile quand plusieurs organisations interviennent.",
     false
    ],
    [
     "Elle limite les doublons entre projets.",
     true
    ]
   ],
   "e": "La coordination évite que plusieurs projets financent la même chose au même endroit."
  }
 ],
 "theo": [
  {
   "s": "Histoire",
   "q": "À propos des tests Army Alpha et Army Beta (1917) :",
   "a": [
    [
     "Ils ont été conçus pour évaluer rapidement un grand nombre de recrues.",
     true
    ],
    [
     "Le Beta s'adressait aux recrues qui ne lisaient pas ou peu l'anglais.",
     true
    ],
    [
     "L'Alpha est un test entièrement non verbal.",
     false
    ]
   ],
   "e": "L'Alpha était écrit. Le Beta utilisait des consignes et des items non verbaux.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire",
   "q": "À propos de Wechsler :",
   "a": [
    [
     "Il a publié le Wechsler-Bellevue en 1939.",
     true
    ],
    [
     "Il a critiqué la notion d'âge mental pour les adultes.",
     true
    ],
    [
     "Il a publié son premier test en 1905.",
     false
    ]
   ],
   "e": "1905 est la date de l'échelle de Binet-Simon.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire",
   "q": "À propos de l'histoire de quelques tests :",
   "a": [
    [
     "Le 16PF de Cattell date de 1949.",
     true
    ],
    [
     "Le TAT a été publié en 1935 par Morgan et Murray.",
     true
    ],
    [
     "Le WAIS date de 1905.",
     false
    ]
   ],
   "e": "Le WAIS est paru en 1955. 1905 est la date de l'échelle de Binet-Simon.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des méthodes",
   "q": "À propos du coefficient alpha :",
   "a": [
    [
     "Il estime la validité de critère.",
     false
    ],
    [
     "Cronbach l'a publié en 1951.",
     true
    ],
    [
     "Il estime la cohérence interne.",
     true
    ]
   ],
   "e": "Il généralise les travaux de Kuder et Richardson.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des méthodes",
   "q": "À propos du modèle de Rasch (origine) :",
   "a": [
    [
     "Il date de 1920.",
     false
    ],
    [
     "Georg Rasch l'a publié en 1960.",
     true
    ],
    [
     "Il relève de la théorie de réponse à l'item.",
     true
    ]
   ],
   "e": "Il a été proposé dans son ouvrage sur des tests d'intelligence et de lecture.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des tests",
   "q": "À propos des éditions successives du MMPI :",
   "a": [
    [
     "Le MMPI a été publié en 1943.",
     true
    ],
    [
     "Le MMPI-2 date de 1989.",
     true
    ],
    [
     "Le MMPI-2 date de 1943.",
     false
    ]
   ],
   "e": "Le MMPI-2-RF est arrivé plus tard, en 2008.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des tests",
   "q": "À propos de l'échelle de distance sociale de Bogardus :",
   "a": [
    [
     "Elle mesure l'acceptation de contact avec un groupe social.",
     true
    ],
    [
     "Elle date de 1925.",
     true
    ],
    [
     "Elle mesure les aptitudes spatiales.",
     false
    ]
   ],
   "e": "C'est l'une des premières échelles d'attitudes.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Fidélité",
   "q": "À propos de la méthode de bissection (split-half) :",
   "a": [
    [
     "Elle mesure la validité de critère.",
     false
    ],
    [
     "Le test est scindé en deux moitiés comparées entre elles.",
     true
    ],
    [
     "La formule de Spearman-Brown corrige l'effet de la longueur.",
     true
    ]
   ],
   "e": "On estime la cohérence interne, puis on corrige pour retrouver la fidélité du test entier.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Fidélité",
   "q": "À propos des formes parallèles d'un test :",
   "a": [
    [
     "Elles limitent l'effet de mémorisation du test-retest.",
     true
    ],
    [
     "Elles servent à mesurer la validité prédictive.",
     false
    ],
    [
     "Ce sont deux versions équivalentes du même test.",
     true
    ]
   ],
   "e": "On compare les scores obtenus aux deux formes pour estimer la fidélité.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Théorie classique des tests",
   "q": "À propos de l'erreur standard de mesure : SEM = σ × √(1 − r).",
   "a": [
    [
     "Si r = 1, le SEM vaut 0.",
     true
    ],
    [
     "Si r = 0, le SEM est égal à l'écart-type.",
     true
    ],
    [
     "Si r = 1, le SEM est égal à l'écart-type.",
     false
    ]
   ],
   "e": "Une mesure parfaitement fidèle n'a aucune erreur.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Fidélité",
   "q": "À propos des scores de différence (par exemple QI verbal moins QI de performance) :",
   "a": [
    [
     "Ils sont souvent moins fiables que les scores dont ils sont issus.",
     true
    ],
    [
     "Ils sont toujours plus fiables que les scores d'origine.",
     false
    ],
    [
     "Leur fidélité dépend de la corrélation entre les deux scores.",
     true
    ]
   ],
   "e": "Plus les deux scores sont corrélés, moins leur différence est fiable.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Mesure du changement",
   "q": "À propos de l'effet de pratique :",
   "a": [
    [
     "Les scores peuvent augmenter lors de passations répétées, sans changement réel.",
     true
    ],
    [
     "Des formes parallèles peuvent le réduire.",
     true
    ],
    [
     "Il disparaît toujours dès la deuxième passation.",
     false
    ]
   ],
   "e": "Il complique l'interprétation des évaluations répétées.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Fidélité",
   "q": "Calcul avec la formule de Spearman-Brown : un test a une fidélité de 0,60. On double sa longueur avec des items équivalents.",
   "a": [
    [
     "La fidélité estimée devient 0,75.",
     true
    ],
    [
     "La formule est 2r ÷ (1 + r).",
     true
    ],
    [
     "La fidélité estimée devient 1,20.",
     false
    ]
   ],
   "e": "2 × 0,60 ÷ 1,60 = 0,75. Une fidélité ne peut pas dépasser 1.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Équité",
   "q": "À propos du biais culturel dans les tests :",
   "a": [
    [
     "Un item peut favoriser un groupe plutôt qu'un autre.",
     true
    ],
    [
     "Une adaptation et une validation locales sont recommandées.",
     true
    ],
    [
     "Un test traduit est automatiquement équivalent à l'original.",
     false
    ]
   ],
   "e": "Une traduction littérale peut changer le sens d'un item. On vérifie l'équivalence par des analyses statistiques et des essais auprès de la population visée.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité",
   "q": "À propos de la démonstration de la validité :",
   "a": [
    [
     "La matrice multitraits-multiméthodes de Campbell et Fiske sert à l'étudier.",
     true
    ],
    [
     "Un seul coefficient suffit à la démontrer de façon définitive.",
     false
    ],
    [
     "L'analyse factorielle peut aider à étudier la validité de construit.",
     true
    ]
   ],
   "e": "La validité s'établit par un ensemble de preuves, accumulées au fil du temps.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité",
   "q": "Sensibilité et spécificité :",
   "a": [
    [
     "Un test très sensible n'a jamais de faux positifs.",
     false
    ],
    [
     "La sensibilité est la proportion de personnes concernées correctement détectées.",
     true
    ],
    [
     "La spécificité est la proportion de personnes non concernées correctement identifiées.",
     true
    ]
   ],
   "e": "Un test peut détecter presque tout le monde, mais aussi signaler à tort des personnes saines.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Équité",
   "q": "À propos de l'influence de l'examinateur :",
   "a": [
    [
     "La passation standardisée limite ces effets.",
     true
    ],
    [
     "Le comportement de l'examinateur peut influencer les résultats.",
     true
    ],
    [
     "L'examinateur n'a aucune influence si le test est écrit.",
     false
    ]
   ],
   "e": "Même pour un test écrit, les consignes et l'attitude de l'examinateur comptent.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité",
   "q": "À propos du biais de prédiction :",
   "a": [
    [
     "Une différence de moyennes équivaut à un biais de prédiction.",
     false
    ],
    [
     "Un test peut mieux prédire un critère dans un groupe que dans un autre.",
     true
    ],
    [
     "On le repère par des analyses de régression pour chaque groupe.",
     true
    ]
   ],
   "e": "Les moyennes peuvent différer sans que la prédiction soit biaisée.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité",
   "q": "À propos de la méthode de Mantel-Haenszel :",
   "a": [
    [
     "Elle compare la réussite de deux groupes de même niveau global.",
     true
    ],
    [
     "Elle compare uniquement les moyennes totales de deux groupes.",
     false
    ],
    [
     "Elle sert à repérer un fonctionnement différentiel des items (DIF).",
     true
    ]
   ],
   "e": "On apparie les personnes selon leur score total, puis on compare leur réussite à l'item.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité des méthodes de sélection",
   "q": "À propos des travaux de Schmidt et Hunter (1998) sur la sélection :",
   "a": [
    [
     "L'entretien structuré prédit mieux que l'entretien non structuré.",
     true
    ],
    [
     "Les tests d'aptitude cognitive font partie des meilleurs prédicteurs de performance.",
     true
    ],
    [
     "La graphologie est un très bon prédicteur de performance.",
     false
    ]
   ],
   "e": "La validité de la graphologie est proche de zéro.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité des performances",
   "q": "À propos des épreuves à choix forcé :",
   "a": [
    [
     "Un résultat significativement inférieur au hasard suggère des réponses volontairement fausses.",
     true
    ],
    [
     "Un résultat inférieur au hasard est toujours un résultat normal.",
     false
    ],
    [
     "Un résultat proche du hasard n'est pas forcément un signe de simulation.",
     true
    ]
   ],
   "e": "Un résultat très inférieur au hasard est improbable sans intention de se tromper.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Sélection du personnel",
   "q": "À propos du modèle de Cleary :",
   "a": [
    [
     "Un test est jugé équitable si la droite de régression est la même pour les groupes.",
     true
    ],
    [
     "Il s'intéresse au biais de prédiction.",
     true
    ],
    [
     "Il ne s'applique qu'aux tests de personnalité.",
     false
    ]
   ],
   "e": "Il compare la prédiction d'un critère entre groupes.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Étalonnage",
   "q": "À propos de la note T :",
   "a": [
    [
     "Une note T de 40 est au-dessus de la moyenne.",
     false
    ],
    [
     "Sa moyenne est de 50.",
     true
    ],
    [
     "Son écart-type est de 10.",
     true
    ]
   ],
   "e": "T = 40 se situe un écart-type sous la moyenne.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Étalonnage",
   "q": "À propos de la stratification des normes :",
   "a": [
    [
     "Elles permettent des comparaisons plus justes.",
     true
    ],
    [
     "Il ne faut jamais tenir compte de l'âge.",
     false
    ],
    [
     "Les normes peuvent être établies par âge, sexe ou niveau d'études.",
     true
    ]
   ],
   "e": "Comparer un enfant de 6 ans à un adolescent n'aurait aucun sens.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Étalonnage",
   "q": "Équivalences entre un QI (moyenne 100, écart-type 15) et un rang percentile :",
   "a": [
    [
     "Un QI de 100 correspond environ au percentile 50.",
     true
    ],
    [
     "Un QI de 115 correspond environ au percentile 84.",
     true
    ],
    [
     "Un QI de 130 correspond environ au percentile 84.",
     false
    ]
   ],
   "e": "130 est à +2 écarts-types, soit environ le percentile 98.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Interprétation de scores",
   "q": "À propos des seuils d'interprétation du PHQ-9 :",
   "a": [
    [
     "Un score de 20 ou plus indique des symptômes sévères.",
     true
    ],
    [
     "Un score de 5 à 9 indique des symptômes légers.",
     true
    ],
    [
     "Un score de 1 à 4 indique des symptômes sévères.",
     false
    ]
   ],
   "e": "Les seuils sont 5, 10, 15 et 20. Ils orientent, sans remplacer l'évaluation clinique.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Corrélation observée de 0,36 entre deux tests dont les fidélités sont 0,64 et 0,81.",
   "a": [
    [
     "Le dénominateur de la correction vaut 0,72.",
     true
    ],
    [
     "La corrélation corrigée de l'atténuation est de 0,50.",
     true
    ],
    [
     "La corrélation corrigée est de 0,18.",
     false
    ]
   ],
   "e": "0,36 ÷ √(0,64 × 0,81) = 0,36 ÷ 0,72 = 0,50.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Pour un item, 20 personnes sur 25 du groupe supérieur et 8 sur 25 du groupe inférieur le réussissent.",
   "a": [
    [
     "L'indice de discrimination est de 12.",
     false
    ],
    [
     "Il se calcule comme (U − L) ÷ n.",
     true
    ],
    [
     "L'indice de discrimination est de 0,48.",
     true
    ]
   ],
   "e": "(20 − 8) ÷ 25 = 0,48.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Deux groupes ont des moyennes de 110 et de 100, avec un écart-type commun de 15.",
   "a": [
    [
     "La différence est de 10 points.",
     true
    ],
    [
     "Le d de Cohen est de 10.",
     false
    ],
    [
     "Le d de Cohen est d'environ 0,67.",
     true
    ]
   ],
   "e": "d = 10 ÷ 15 ≈ 0,67.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs de base",
   "q": "Une note de 10 a un coefficient de 1, une note de 16 a un coefficient de 2, et une note de 12 a un coefficient de 3.",
   "a": [
    [
     "La somme pondérée est de 78.",
     true
    ],
    [
     "La moyenne pondérée est de 12.",
     false
    ],
    [
     "La moyenne pondérée est de 13.",
     true
    ]
   ],
   "e": "10 + 32 + 36 = 78, et 78 ÷ 6 = 13.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Statistiques",
   "q": "À propos de l'écart-type :",
   "a": [
    [
     "La variance est le carré de l'écart-type.",
     true
    ],
    [
     "Il mesure la dispersion autour de la moyenne.",
     true
    ],
    [
     "Il peut être négatif.",
     false
    ],
    [
     "Si tous les scores sont identiques, l'écart-type vaut 0.",
     true
    ]
   ],
   "e": "Un écart-type est toujours supérieur ou égal à 0.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos du mode :",
   "a": [
    [
     "C'est la valeur la plus fréquente.",
     true
    ],
    [
     "Il y a toujours exactement un mode.",
     false
    ],
    [
     "Une distribution peut avoir plusieurs modes.",
     true
    ]
   ],
   "e": "Une distribution peut être bimodale, ou n'avoir aucun mode.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos du d de Cohen :",
   "a": [
    [
     "0,2 est un effet petit, 0,5 moyen et 0,8 grand.",
     true
    ],
    [
     "Il exprime une différence de moyennes en écarts-types.",
     true
    ],
    [
     "d = 0,8 correspond à un petit effet.",
     false
    ]
   ],
   "e": "Ce sont des repères conventionnels : ils s'interprètent selon le contexte.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos de l'asymétrie d'une distribution :",
   "a": [
    [
     "Avec une asymétrie négative, la queue est à gauche.",
     true
    ],
    [
     "Avec une asymétrie positive, la queue est à droite et la moyenne dépasse la médiane.",
     true
    ],
    [
     "La moyenne est toujours égale à la médiane.",
     false
    ]
   ],
   "e": "Elles ne coïncident que pour une distribution symétrique.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos des coefficients de corrélation :",
   "a": [
    [
     "Le rho de Spearman repose sur les rangs.",
     true
    ],
    [
     "Le coefficient phi relie deux variables continues.",
     false
    ],
    [
     "La corrélation point-bisériale relie une variable dichotomique et une variable continue.",
     true
    ]
   ],
   "e": "Le coefficient phi relie deux variables dichotomiques.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos de la puissance statistique :",
   "a": [
    [
     "Elle diminue quand la taille d'échantillon augmente.",
     false
    ],
    [
     "Un seuil conventionnel est de 0,80.",
     true
    ],
    [
     "C'est la probabilité de détecter un effet réel.",
     true
    ]
   ],
   "e": "Plus l'échantillon est grand, plus la puissance est élevée.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos de la méta-analyse :",
   "a": [
    [
     "Elle combine les résultats de plusieurs études.",
     true
    ],
    [
     "Elle se limite à une seule étude.",
     false
    ],
    [
     "Elle permet d'estimer une validité moyenne, avec corrections éventuelles.",
     true
    ]
   ],
   "e": "Elle est très utilisée pour établir la validité des outils de sélection.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos de la kurtosis :",
   "a": [
    [
     "Une distribution leptokurtique a un pic aigu et des queues épaisses.",
     true
    ],
    [
     "Elle mesure la fidélité d'un test.",
     false
    ],
    [
     "Elle décrit la forme des queues de la distribution.",
     true
    ]
   ],
   "e": "Une kurtosis nulle est celle de la loi normale, selon la définition usuelle.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Choix des tests statistiques",
   "q": "À propos du khi-deux d'indépendance :",
   "a": [
    [
     "Il compare deux moyennes.",
     false
    ],
    [
     "Il compare des effectifs observés et des effectifs attendus.",
     true
    ],
    [
     "Il teste l'association entre deux variables catégorielles.",
     true
    ]
   ],
   "e": "Par exemple : le lien entre le sexe et le choix d'une filière.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Construction de tests",
   "q": "À propos du tableau de spécification :",
   "a": [
    [
     "Il relie les contenus à évaluer au nombre d'items.",
     true
    ],
    [
     "Il remplace l'analyse d'items.",
     false
    ],
    [
     "Il aide à assurer la validité de contenu.",
     true
    ]
   ],
   "e": "C'est un plan de construction, pas une analyse des résultats.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Construction de tests",
   "q": "À propos des consignes d'un test :",
   "a": [
    [
     "Chaque examinateur peut improviser les consignes.",
     false
    ],
    [
     "Elles doivent être claires et standardisées.",
     true
    ],
    [
     "Des exemples d'entraînement peuvent être proposés.",
     true
    ]
   ],
   "e": "La standardisation garantit que tous passent le test dans les mêmes conditions.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Analyse d'items",
   "q": "À propos des distracteurs d'un QCM :",
   "a": [
    [
     "Un bon distracteur doit être absurde.",
     false
    ],
    [
     "Un distracteur que personne ne choisit doit être revu.",
     true
    ],
    [
     "Un bon distracteur est plausible.",
     true
    ]
   ],
   "e": "Un distracteur absurde n'a aucun intérêt : il est éliminé d'emblée.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Construction de tests",
   "q": "À propos du nombre de points d'une échelle de Likert :",
   "a": [
    [
     "Un trop petit nombre de niveaux peut perdre de l'information.",
     true
    ],
    [
     "Une échelle à 2 niveaux contient toujours plus d'information.",
     false
    ],
    [
     "On utilise souvent 5 ou 7 niveaux de réponse.",
     true
    ]
   ],
   "e": "Plus de niveaux permettent plus de nuances, mais peuvent aussi compliquer la tâche.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Théorie de réponse à l'item",
   "q": "À propos des modèles à 1, 2 et 3 paramètres :",
   "a": [
    [
     "Le modèle 1PL possède trois paramètres.",
     false
    ],
    [
     "Le modèle 3PL ajoute un paramètre de pseudo-hasard.",
     true
    ],
    [
     "Le modèle 2PL ajoute la discrimination.",
     true
    ]
   ],
   "e": "1PL : difficulté. 2PL : difficulté et discrimination. 3PL : plus la devinette.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Analyse factorielle",
   "q": "Analyse factorielle exploratoire et confirmatoire :",
   "a": [
    [
     "La confirmatoire teste un modèle défini à l'avance.",
     true
    ],
    [
     "L'exploratoire cherche la structure des données.",
     true
    ],
    [
     "La confirmatoire ne fait aucune hypothèse.",
     false
    ]
   ],
   "e": "La confirmatoire vérifie si un modèle théorique s'ajuste aux données.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Théorie de réponse à l'item",
   "q": "À propos du système PROMIS :",
   "a": [
    [
     "Il s'appuie sur la théorie de réponse à l'item.",
     true
    ],
    [
     "Il utilise la formule de Stern pour calculer un QI.",
     false
    ],
    [
     "Il exprime les scores en notes T (moyenne 50, écart-type 10).",
     true
    ]
   ],
   "e": "Il mesure des résultats rapportés par les patients, souvent avec des tests adaptatifs.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Psychométrie avancée",
   "q": "À propos du modèle bifactoriel :",
   "a": [
    [
     "Chaque item dépend d'un facteur général et d'un facteur spécifique.",
     true
    ],
    [
     "L'oméga hiérarchique estime la part de variance due au facteur général.",
     true
    ],
    [
     "Il suppose qu'il n'y a pas de facteur général.",
     false
    ]
   ],
   "e": "Il est utilisé notamment pour l'étude de la structure de l'intelligence.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Fondements de la psychométrie",
   "q": "À propos de Meehl (1954) :",
   "a": [
    [
     "Il a conclu que le jugement clinique est toujours supérieur.",
     false
    ],
    [
     "Il a comparé la prédiction clinique et la prédiction statistique.",
     true
    ],
    [
     "Il a montré que les méthodes statistiques sont en général au moins aussi bonnes que le jugement clinique.",
     true
    ]
   ],
   "e": "Son livre a influencé l'usage de méthodes actuarielles.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Fondements de la psychométrie",
   "q": "À propos du concept de validité de Borsboom :",
   "a": [
    [
     "Cette conception met l'accent sur un lien causal.",
     true
    ],
    [
     "Elle réduit la validité à la fidélité.",
     false
    ],
    [
     "Un test est valide si l'attribut mesuré existe et cause les résultats.",
     true
    ]
   ],
   "e": "Elle a ouvert un débat avec la conception de Messick.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos de l'échelle de Brunet-Lézine :",
   "a": [
    [
     "C'est un test de personnalité pour adultes.",
     false
    ],
    [
     "Elle s'adresse aux jeunes enfants.",
     true
    ],
    [
     "Elle évalue le développement psychomoteur de la petite enfance.",
     true
    ]
   ],
   "e": "Elle explore la posture, la coordination, le langage et la sociabilité.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "Conditions de passation chez l'enfant :",
   "a": [
    [
     "Il faut établir le contact et adapter la durée, avec des pauses si nécessaire.",
     true
    ],
    [
     "L'enfant doit être évalué sans aucun contact préalable.",
     false
    ],
    [
     "La fatigue et l'anxiété peuvent influencer les résultats.",
     true
    ]
   ],
   "e": "Un enfant mis en confiance donne une meilleure image de ses capacités.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos de l'échelle de Bayley-III :",
   "a": [
    [
     "Elle évalue les adolescents de 14 ans.",
     false
    ],
    [
     "Elle comprend des échelles cognitive, de langage et motrice.",
     true
    ],
    [
     "Elle évalue des enfants de 1 à 42 mois.",
     true
    ]
   ],
   "e": "Des questionnaires complètent l'évaluation, notamment pour le comportement adaptatif.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos du Denver II :",
   "a": [
    [
     "Il évalue les adultes.",
     false
    ],
    [
     "C'est un outil de dépistage du développement de la naissance à 6 ans.",
     true
    ],
    [
     "Il ne permet pas à lui seul de poser un diagnostic.",
     true
    ]
   ],
   "e": "Un résultat suspect conduit à une évaluation plus approfondie.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos des Ages and Stages Questionnaires (ASQ-3) :",
   "a": [
    [
     "Ils explorent notamment la communication et la motricité.",
     true
    ],
    [
     "Ils sont remplis par les parents.",
     true
    ],
    [
     "Ils évaluent la personnalité de l'adulte.",
     false
    ]
   ],
   "e": "Ils comprennent aussi la résolution de problèmes et le domaine personnel-social.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos de l'inventaire MacArthur-Bates (CDI) :",
   "a": [
    [
     "Il évalue le vocabulaire et les gestes du jeune enfant.",
     true
    ],
    [
     "Il est rempli par les parents.",
     true
    ],
    [
     "Il s'adresse aux adolescents de 16 ans.",
     false
    ]
   ],
   "e": "Il concerne des enfants d'environ 8 à 30 mois.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Évaluation de l'autisme",
   "q": "À propos de l'ADOS-2 :",
   "a": [
    [
     "C'est une observation semi-structurée.",
     true
    ],
    [
     "Le module employé dépend de l'âge et du niveau de langage.",
     true
    ],
    [
     "C'est un questionnaire d'auto-évaluation.",
     false
    ]
   ],
   "e": "L'examinateur propose des activités et observe la communication et les interactions.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Langage de l'enfant",
   "q": "À propos de l'EVIP :",
   "a": [
    [
     "Elle évalue les aptitudes mécaniques.",
     false
    ],
    [
     "C'est l'adaptation française du Peabody Picture Vocabulary Test.",
     true
    ],
    [
     "Elle évalue le vocabulaire réceptif.",
     true
    ]
   ],
   "e": "L'enfant désigne l'image correspondant au mot entendu.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos des subtests de Wechsler :",
   "a": [
    [
     "« Similitudes » est une épreuve verbale.",
     true
    ],
    [
     "« Cubes » évalue le raisonnement visuo-spatial.",
     true
    ],
    [
     "« Vocabulaire » est un subtest non verbal.",
     false
    ]
   ],
   "e": "Le subtest « Vocabulaire » fait appel au langage.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos des échelles de Wechsler selon l'âge :",
   "a": [
    [
     "Le WAIS s'adresse aux jeunes enfants.",
     false
    ],
    [
     "Le WISC s'adresse aux enfants et aux adolescents.",
     true
    ],
    [
     "Le WPPSI s'adresse aux jeunes enfants.",
     true
    ]
   ],
   "e": "WPPSI : préscolaire. WISC : enfants et adolescents. WAIS : adultes.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos de la structure du WISC-V :",
   "a": [
    [
     "Le QI total repose sur 7 subtests.",
     true
    ],
    [
     "Il s'adresse aux adultes de 16 à 90 ans.",
     false
    ],
    [
     "Il fournit cinq indices primaires.",
     true
    ]
   ],
   "e": "Le WISC-V s'adresse aux enfants de 6 à 16 ans.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Tests d'intelligence",
   "q": "À propos de la K-ABC II :",
   "a": [
    [
     "Elle ne propose aucune échelle non verbale.",
     false
    ],
    [
     "Elle s'adresse aux enfants de 3 à 18 ans.",
     true
    ],
    [
     "Elle s'appuie sur deux modèles, celui de Luria et celui de Cattell-Horn-Carroll.",
     true
    ]
   ],
   "e": "Une échelle non verbale permet d'évaluer des enfants peu à l'aise avec la langue de passation.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Tests d'intelligence",
   "q": "À propos de la relation entre Wechsler et Raven :",
   "a": [
    [
     "Les corrélations entre les deux sont généralement élevées.",
     true
    ],
    [
     "Les deux sont fortement liés au facteur g.",
     true
    ],
    [
     "Les deux ne sont jamais corrélés.",
     false
    ]
   ],
   "e": "Ils mesurent des aspects proches de l'intelligence générale.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Facteur g",
   "q": "À propos des matrices de Raven :",
   "a": [
    [
     "Elles sont considérées comme une bonne mesure du facteur g.",
     true
    ],
    [
     "John Raven les a conçues en 1936.",
     true
    ],
    [
     "Ce sont des épreuves essentiellement verbales.",
     false
    ]
   ],
   "e": "Elles sont non verbales et très saturées en facteur g, l'intelligence générale décrite par Spearman.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Notion de QI",
   "q": "À propos du QI de déviation :",
   "a": [
    [
     "Sa moyenne est fixée à 100.",
     true
    ],
    [
     "Il se calcule en divisant l'âge mental par l'âge réel.",
     false
    ],
    [
     "Le score est comparé à celui de personnes du même âge.",
     true
    ],
    [
     "Il a remplacé la formule de Stern dans les échelles modernes.",
     true
    ]
   ],
   "e": "Dans les échelles de Wechsler, le QI est un score standardisé et non un rapport d'âges.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Théories de l'intelligence",
   "q": "À propos des théories de l'intelligence :",
   "a": [
    [
     "Sternberg a créé le test de Rorschach.",
     false
    ],
    [
     "Gardner a proposé la théorie des intelligences multiples.",
     true
    ],
    [
     "Sternberg a proposé une théorie triarchique (analytique, créative, pratique).",
     true
    ]
   ],
   "e": "Ces théories élargissent la notion d'intelligence, mais restent débattues sur le plan empirique.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Facteur g",
   "q": "À propos du vieillissement et de l'intelligence :",
   "a": [
    [
     "L'intelligence cristallisée peut continuer à progresser avec l'âge.",
     true
    ],
    [
     "L'intelligence fluide augmente jusqu'à 80 ans.",
     false
    ],
    [
     "L'intelligence fluide diminue plus tôt que l'intelligence cristallisée.",
     true
    ]
   ],
   "e": "Les connaissances et le vocabulaire se maintiennent mieux que le raisonnement face à la nouveauté.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Notion de QI",
   "q": "À propos de la régression vers la moyenne :",
   "a": [
    [
     "Un score extrême tend à être moins extrême à la seconde passation.",
     true
    ],
    [
     "Elle est liée à la fidélité imparfaite des scores.",
     true
    ],
    [
     "Elle prouve que le test est biaisé.",
     false
    ]
   ],
   "e": "Elle apparaît dès qu'une mesure contient une part d'erreur.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Facteur g",
   "q": "À propos de l'organisation des aptitudes cognitives :",
   "a": [
    [
     "Les corrélations entre tests d'aptitudes sont presque toujours positives.",
     true
    ],
    [
     "Outre g, il existe des facteurs de groupe.",
     true
    ],
    [
     "Le facteur g est une région précise du cerveau, prouvée.",
     false
    ]
   ],
   "e": "Le facteur g est un résultat statistique, non une localisation cérébrale établie.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Tests de lecture",
   "q": "À propos du test de l'Alouette (Lefavrais) :",
   "a": [
    [
     "Il évalue le calcul mental.",
     false
    ],
    [
     "Il dure au maximum 3 minutes.",
     true
    ],
    [
     "Il évalue la lecture, en vitesse et en précision.",
     true
    ]
   ],
   "e": "Le texte est volontairement dépourvu de sens, pour limiter l'aide du contexte.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Évaluation fonctionnelle",
   "q": "À propos de l'indice de Barthel :",
   "a": [
    [
     "Son score va de 0 à 100.",
     true
    ],
    [
     "Il évalue l'autonomie dans les activités de la vie quotidienne.",
     true
    ],
    [
     "Il évalue la créativité.",
     false
    ]
   ],
   "e": "Un score plus élevé indique une meilleure autonomie.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Évaluation fonctionnelle",
   "q": "À propos de l'échelle de fardeau de Zarit :",
   "a": [
    [
     "Elle évalue le fardeau ressenti par l'aidant d'une personne dépendante.",
     true
    ],
    [
     "Elle évalue le QI de la personne aidée.",
     false
    ],
    [
     "La version de base comporte 22 items.",
     true
    ]
   ],
   "e": "Il existe aussi une version courte de 12 items.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Dépistage cognitif",
   "q": "À propos du MoCA et du niveau d'études :",
   "a": [
    [
     "On ajoute 1 point si la personne a 12 ans d'études ou moins.",
     true
    ],
    [
     "Le score maximal est de 30.",
     true
    ],
    [
     "On retire 5 points si la personne a un faible niveau d'études.",
     false
    ]
   ],
   "e": "Cette correction vise à limiter l'effet du niveau d'études sur le score.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Interprétation neuropsychologique",
   "q": "À propos du National Adult Reading Test (NART) :",
   "a": [
    [
     "Il sert à estimer le niveau intellectuel antérieur à un trouble.",
     true
    ],
    [
     "Il évalue la dextérité.",
     false
    ],
    [
     "Le sujet lit des mots irréguliers.",
     true
    ]
   ],
   "e": "Nelson l'a proposé en 1982.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Dépendances et changement",
   "q": "À propos de l'échelle URICA :",
   "a": [
    [
     "Elle évalue les aptitudes spatiales.",
     false
    ],
    [
     "Elle s'appuie sur le modèle de Prochaska et DiClemente.",
     true
    ],
    [
     "Elle évalue le stade de motivation au changement.",
     true
    ]
   ],
   "e": "Elle distingue notamment la précontemplation et l'action.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Qualité de vie",
   "q": "À propos du Brief Pain Inventory :",
   "a": [
    [
     "Il évalue l'intelligence.",
     false
    ],
    [
     "Il évalue l'intensité de la douleur.",
     true
    ],
    [
     "Il évalue aussi son retentissement sur les activités.",
     true
    ]
   ],
   "e": "Cleeland en est l'auteur.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Définitions",
   "q": "Tests normatifs et tests critériés :",
   "a": [
    [
     "Un test normatif compare le score à celui d'un groupe.",
     true
    ],
    [
     "Un test critérié compare le score à un seuil de maîtrise.",
     true
    ],
    [
     "Un test critérié classe toujours les personnes par percentile.",
     false
    ]
   ],
   "e": "Un permis de conduire est un exemple de test critérié : on est reçu ou non selon un seuil.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Définitions",
   "q": "Tests collectifs et tests individuels :",
   "a": [
    [
     "Un test collectif permet toujours d'observer le comportement de chacun.",
     false
    ],
    [
     "Un test individuel permet une observation qualitative plus fine.",
     true
    ],
    [
     "Un test collectif se passe à plusieurs personnes à la fois.",
     true
    ]
   ],
   "e": "Avec un groupe, l'examinateur ne peut pas suivre chaque personne de près.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Définitions",
   "q": "À propos des niveaux de mesure de Stevens :",
   "a": [
    [
     "L'échelle de rapport n'a pas de zéro absolu.",
     false
    ],
    [
     "L'échelle nominale classe sans ordre.",
     true
    ],
    [
     "L'échelle ordinale classe avec un ordre.",
     true
    ]
   ],
   "e": "L'échelle de rapport possède un zéro absolu, comme la masse en kilogrammes.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Usage professionnel des tests",
   "q": "À propos du choix d'un test :",
   "a": [
    [
     "Il faut tenir compte de l'objectif de l'évaluation et de la population.",
     true
    ],
    [
     "Le prix du test est le seul critère à retenir.",
     false
    ],
    [
     "Il faut vérifier la qualité des normes, de la fidélité et de la validité.",
     true
    ]
   ],
   "e": "Le coût compte, mais jamais plus que la qualité psychométrique.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Usage professionnel des tests",
   "q": "À propos de l'expérience de passation des tests (testwiseness) :",
   "a": [
    [
     "Elle peut utiliser des stratégies comme éliminer des réponses.",
     true
    ],
    [
     "Elle ne dépend jamais de l'expérience.",
     false
    ],
    [
     "Une personne habituée aux tests peut mieux gérer son temps.",
     true
    ]
   ],
   "e": "Ces habiletés peuvent avantager certains candidats, sans lien avec le trait mesuré.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Standardisation de la passation",
   "q": "À propos du chronométrage :",
   "a": [
    [
     "Les limites de temps indiquées dans le manuel doivent être respectées.",
     true
    ],
    [
     "Un dépassement peut invalider la comparaison aux normes.",
     true
    ],
    [
     "Le temps est toujours indicatif et sans importance.",
     false
    ]
   ],
   "e": "Le chronométrage fait partie de la procédure standard.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Tests emblématiques",
   "q": "À propos des planches du Rorschach :",
   "a": [
    [
     "Les planches VIII, IX et X sont multicolores.",
     true
    ],
    [
     "Toutes les planches sont multicolores.",
     false
    ],
    [
     "Les planches II et III comportent du rouge.",
     true
    ]
   ],
   "e": "Les planches I, IV, V, VI et VII sont achromatiques.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Éthique et déontologie",
   "q": "À propos de la confidentialité au début d'une évaluation :",
   "a": [
    [
     "La personne est informée des limites de la confidentialité.",
     true
    ],
    [
     "Elle est informée de l'usage des résultats.",
     true
    ],
    [
     "Il n'est pas nécessaire de l'informer.",
     false
    ]
   ],
   "e": "Cela fait partie du consentement éclairé.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Histoire",
   "q": "À propos de l'échelle de Binet-Simon :",
   "a": [
    [
     "Elle date de 1905.",
     true
    ],
    [
     "C'est une des premières échelles d'intelligence.",
     true
    ],
    [
     "Elle a été créée par Wechsler.",
     false
    ]
   ],
   "e": "Alfred Binet et Théodore Simon l'ont conçue en 1905 pour repérer les enfants ayant besoin d'un soutien scolaire. Wechsler a créé ses propres échelles plus tard.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Notion de QI",
   "q": "À propos du QI standard (échelles de Wechsler) :",
   "a": [
    [
     "La moyenne est de 100.",
     true
    ],
    [
     "L'écart-type est de 15.",
     true
    ],
    [
     "Un QI de 70 se situe à +2 écarts-types de la moyenne.",
     false
    ],
    [
     "Un QI de 130 se situe à environ +2 écarts-types de la moyenne.",
     true
    ]
   ],
   "e": "130 = 100 + 2 × 15. Environ 2 % de la population se situe au-dessus de ce seuil.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Fidélité",
   "q": "À propos de la fidélité d'un test :",
   "a": [
    [
     "L'alpha de Cronbach estime la cohérence interne.",
     true
    ],
    [
     "Elle renvoie à la constance des résultats.",
     true
    ],
    [
     "Un test fidèle est forcément valide.",
     false
    ],
    [
     "La méthode test-retest permet de l'estimer.",
     true
    ]
   ],
   "e": "Un test peut mesurer de façon très stable… autre chose que ce qu'il prétend mesurer. La fidélité est nécessaire à la validité, mais ne la garantit pas.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Validité",
   "q": "À propos de la validité d'un test :",
   "a": [
    [
     "On distingue notamment validité de contenu, de critère et de construit.",
     true
    ],
    [
     "Un test fidèle est automatiquement valide.",
     false
    ],
    [
     "Un test valide mesure ce qu'il prétend mesurer.",
     true
    ]
   ],
   "e": "Une balance qui affiche toujours 3 kg de trop est fidèle, mais pas valide.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Étalonnage",
   "q": "À propos de l'étalonnage :",
   "a": [
    [
     "Il permet de situer un score par rapport à un groupe de référence.",
     true
    ],
    [
     "Des normes établies dans un pays valent sans vérification dans un autre contexte culturel.",
     false
    ],
    [
     "Les percentiles en sont une forme de présentation.",
     true
    ]
   ],
   "e": "Les normes dépendent de l'échantillon de référence. Un test importé doit être adapté et réétalonné localement.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos des échelles de Wechsler :",
   "a": [
    [
     "Le WISC s'adresse aux adultes.",
     false
    ],
    [
     "Le WISC s'adresse aux enfants.",
     true
    ],
    [
     "Le WAIS s'adresse aux adultes.",
     true
    ]
   ],
   "e": "WAIS : adultes. WISC : enfants et adolescents. WPPSI : jeunes enfants d'âge préscolaire.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Statistiques",
   "q": "À propos de la courbe normale :",
   "a": [
    [
     "Environ 50 % des scores se situent entre −1 et +1 écart-type.",
     false
    ],
    [
     "Environ 95 % des scores se situent entre −2 et +2 écarts-types.",
     true
    ],
    [
     "La moyenne, la médiane et le mode coïncident.",
     true
    ],
    [
     "Environ 68 % des scores se situent entre −1 et +1 écart-type.",
     true
    ]
   ],
   "e": "Ce sont les propriétés classiques de la loi normale, très utilisées pour interpréter les scores standardisés.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Définitions",
   "q": "À propos d'un test psychométrique :",
   "a": [
    [
     "La passation se fait sans consigne, de façon libre.",
     false
    ],
    [
     "Il repose sur la standardisation de la passation et de la cotation.",
     true
    ],
    [
     "Il permet de quantifier un trait ou une aptitude.",
     true
    ]
   ],
   "e": "Même consigne, mêmes conditions, même cotation : c'est ce qui rend les scores comparables d'une personne à l'autre.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Théories de l'intelligence",
   "q": "À propos de Cattell et Horn :",
   "a": [
    [
     "L'intelligence cristallisée renvoie aux connaissances acquises.",
     true
    ],
    [
     "L'intelligence cristallisée est indépendante de toute expérience.",
     false
    ],
    [
     "Ils distinguent intelligence fluide et intelligence cristallisée.",
     true
    ],
    [
     "L'intelligence fluide renvoie au raisonnement face à des problèmes nouveaux.",
     true
    ]
   ],
   "e": "La première dépend peu de la culture (matrices). La seconde dépend de l'éducation (vocabulaire, culture générale).",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Théories de l'intelligence",
   "q": "À propos de Spearman et Thurstone :",
   "a": [
    [
     "Thurstone a proposé des aptitudes mentales primaires.",
     true
    ],
    [
     "Spearman a proposé le facteur g (intelligence générale).",
     true
    ],
    [
     "Spearman est l'auteur du MMPI.",
     false
    ]
   ],
   "e": "Le MMPI a été créé par Hathaway et McKinley. Spearman a mis en évidence le facteur g en 1904.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Histoire",
   "q": "À propos des débuts de la psychométrie :",
   "a": [
    [
     "Galton a ouvert un laboratoire anthropométrique en 1884.",
     true
    ],
    [
     "Wundt a fondé son laboratoire de psychologie à Paris.",
     false
    ],
    [
     "J. McK. Cattell a employé l'expression « mental test » en 1890.",
     true
    ]
   ],
   "e": "Wundt a fondé le premier laboratoire de psychologie expérimentale à Leipzig, en 1879.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire",
   "q": "À propos du Stanford-Binet :",
   "a": [
    [
     "Terman en a publié la révision en 1916, à Stanford.",
     true
    ],
    [
     "Il a été créé par Wechsler.",
     false
    ],
    [
     "Il a contribué à populariser le QI.",
     true
    ]
   ],
   "e": "Il s'agit d'une adaptation américaine de l'échelle de Binet-Simon.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Notion de QI",
   "q": "À propos du quotient intellectuel de Stern :",
   "a": [
    [
     "Un enfant de 10 ans ayant un âge mental de 8 ans a un QI de 80.",
     true
    ],
    [
     "Un enfant de 10 ans ayant un âge mental de 8 ans a un QI de 125.",
     false
    ],
    [
     "La formule est âge mental ÷ âge chronologique × 100.",
     true
    ]
   ],
   "e": "8 ÷ 10 × 100 = 80.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Notion de QI",
   "q": "À propos de l'interprétation d'un QI :",
   "a": [
    [
     "Il peut varier selon le test utilisé et les conditions de passation.",
     true
    ],
    [
     "Il ne résume pas toute l'intelligence ni la réussite d'une personne.",
     true
    ],
    [
     "Il reste strictement identique toute la vie.",
     false
    ]
   ],
   "e": "Un score s'interprète toujours avec une marge d'erreur et dans son contexte.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Fidélité",
   "q": "À propos du coefficient de fidélité :",
   "a": [
    [
     "Un coefficient de 0,10 indique une excellente fidélité.",
     false
    ],
    [
     "Un coefficient de 0,90 est meilleur que 0,50.",
     true
    ],
    [
     "Il varie de 0 à 1.",
     true
    ]
   ],
   "e": "Plus il se rapproche de 1, plus les résultats sont stables.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Fidélité",
   "q": "À propos de l'erreur standard de mesure :",
   "a": [
    [
     "Le score observé est toujours le score vrai exact.",
     false
    ],
    [
     "Elle indique la marge d'incertitude autour d'un score.",
     true
    ],
    [
     "Plus la fidélité est élevée, plus elle est petite.",
     true
    ]
   ],
   "e": "Un score observé est le score vrai plus une part d'erreur.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Fidélité",
   "q": "Facteurs qui influencent la fidélité :",
   "a": [
    [
     "Allonger un test avec des items de qualité tend à l'augmenter.",
     true
    ],
    [
     "Une consigne ambiguë ou la fatigue peuvent la diminuer.",
     true
    ],
    [
     "Elle ne dépend jamais des conditions de passation.",
     false
    ]
   ],
   "e": "Les conditions de passation, la longueur et la qualité des items jouent toutes un rôle.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Validité",
   "q": "Types de validité de critère :",
   "a": [
    [
     "La validité de contenu se définit par la corrélation avec un critère futur.",
     false
    ],
    [
     "La validité concourante compare des mesures obtenues à peu près en même temps.",
     true
    ],
    [
     "La validité prédictive compare le score à un critère obtenu plus tard.",
     true
    ]
   ],
   "e": "La validité de contenu évalue si les items couvrent bien le domaine à mesurer.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité",
   "q": "À propos de la validité apparente :",
   "a": [
    [
     "Le test semble mesurer ce qu'il est censé mesurer.",
     true
    ],
    [
     "Elle ne garantit pas la validité réelle.",
     true
    ],
    [
     "Elle est équivalente à la validité de construit.",
     false
    ]
   ],
   "e": "Un test peut sembler pertinent sans l'être, et inversement.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité",
   "q": "À propos de la validité de construit :",
   "a": [
    [
     "La validité discriminante suppose une faible corrélation avec des concepts différents.",
     true
    ],
    [
     "La validité discriminante suppose une forte corrélation avec un concept sans rapport.",
     false
    ],
    [
     "La validité convergente suppose une corrélation forte avec des mesures du même concept.",
     true
    ]
   ],
   "e": "Un test doit à la fois se rapprocher de ce qui lui ressemble et se distinguer de ce qui est différent.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Étalonnage",
   "q": "À propos de la note z :",
   "a": [
    [
     "Elle se calcule par (X − moyenne) ÷ écart-type.",
     true
    ],
    [
     "Une note z de +1 correspond à un écart-type sous la moyenne.",
     false
    ],
    [
     "Une note z de 0 correspond à la moyenne.",
     true
    ]
   ],
   "e": "z = +1 signifie un écart-type au-dessus de la moyenne.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Étalonnage",
   "q": "À propos des rangs percentiles :",
   "a": [
    [
     "Le percentile 50 correspond à la médiane.",
     true
    ],
    [
     "Un percentile de 80 signifie 80 % de bonnes réponses.",
     false
    ],
    [
     "Un percentile de 80 signifie un score supérieur à celui de 80 % du groupe.",
     true
    ]
   ],
   "e": "Le percentile situe la personne dans un groupe de référence : ce n'est pas un pourcentage de réussite.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos de Wechsler et de ses échelles (publication, contenu) :",
   "a": [
    [
     "Wechsler a publié le WISC en 1949.",
     true
    ],
    [
     "Elles combinent des épreuves verbales et non verbales.",
     true
    ],
    [
     "Le WISC est destiné aux adultes de plus de 60 ans.",
     false
    ]
   ],
   "e": "Le WISC est destiné aux enfants et aux adolescents.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos du WISC-V :",
   "a": [
    [
     "Il fournit plusieurs indices et pas seulement un QI total.",
     true
    ],
    [
     "Il ne donne aucun score total.",
     false
    ],
    [
     "La mémoire de travail est l'un de ses indices.",
     true
    ]
   ],
   "e": "Parmi ses indices figurent aussi la compréhension verbale, le visuo-spatial, le raisonnement fluide et la vitesse de traitement.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Facteur g",
   "q": "À propos du modèle de Spearman :",
   "a": [
    [
     "Il distingue un facteur général g et des facteurs spécifiques s.",
     true
    ],
    [
     "Il s'appuie sur les corrélations positives entre épreuves cognitives.",
     true
    ],
    [
     "Le facteur g est propre à chaque épreuve.",
     false
    ]
   ],
   "e": "Le facteur g est commun à toutes les épreuves. Les facteurs s sont propres à chacune d'elles.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Facteur g",
   "q": "À propos des modèles factoriels de l'intelligence :",
   "a": [
    [
     "Carroll a proposé un modèle à trois strates.",
     true
    ],
    [
     "Gardner a proposé la théorie des intelligences multiples.",
     true
    ],
    [
     "Carroll est l'auteur du test de Rorschach.",
     false
    ],
    [
     "Le modèle CHC intègre les travaux de Cattell, Horn et Carroll.",
     true
    ]
   ],
   "e": "Carroll a synthétisé des centaines d'analyses factorielles en 1993.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Statistiques",
   "q": "Série de scores : 4, 6, 8, 10.",
   "a": [
    [
     "Il y a un mode unique.",
     false
    ],
    [
     "La médiane est 7.",
     true
    ],
    [
     "La moyenne est 7.",
     true
    ]
   ],
   "e": "Moyenne : 28 ÷ 4 = 7. Médiane : moyenne des deux valeurs centrales, (6 + 8) ÷ 2 = 7. Aucune valeur ne se répète.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos du coefficient de corrélation r :",
   "a": [
    [
     "Il varie de −1 à +1.",
     true
    ],
    [
     "r = 0 prouve une relation causale certaine.",
     false
    ],
    [
     "Une corrélation n'implique pas une relation de cause à effet.",
     true
    ],
    [
     "r = −0,80 indique une relation négative forte.",
     true
    ]
   ],
   "e": "r = 0 signifie l'absence de relation linéaire.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos des QI (moyenne 100, écart-type 15) :",
   "a": [
    [
     "Environ 16 % des personnes se situent au-dessus de +1 écart-type.",
     true
    ],
    [
     "Un QI de 70 est à −3 écarts-types.",
     false
    ],
    [
     "Un QI de 115 est à +1 écart-type.",
     true
    ],
    [
     "Un QI de 85 est à −1 écart-type.",
     true
    ]
   ],
   "e": "70 = 100 − 2 × 15, soit −2 écarts-types.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Équité",
   "q": "À propos du fonctionnement différentiel d'items (DIF) :",
   "a": [
    [
     "Une différence de moyenne entre groupes prouve toujours un biais.",
     false
    ],
    [
     "Les analyses de DIF servent à repérer les biais.",
     true
    ],
    [
     "Un item présente un DIF si deux groupes de même niveau le réussissent différemment.",
     true
    ]
   ],
   "e": "Une différence de moyenne peut avoir d'autres causes. Le DIF compare des personnes de même niveau.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Équité",
   "q": "À propos de l'adaptation locale d'un test :",
   "a": [
    [
     "La langue n'a jamais d'effet sur les résultats.",
     false
    ],
    [
     "Des normes adaptées au contexte (langue, scolarité) sont nécessaires.",
     true
    ],
    [
     "Passer un test dans une langue qui n'est pas la langue maternelle peut sous-estimer les capacités.",
     true
    ]
   ],
   "e": "Un candidat peut échouer à cause de la langue et non du construit mesuré.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Définitions",
   "q": "Tests d'aptitude, de connaissances et de personnalité :",
   "a": [
    [
     "Un test de connaissances évalue ce qui a été appris.",
     true
    ],
    [
     "Un test d'aptitude évalue le potentiel pour réaliser une tâche.",
     true
    ],
    [
     "Un test de personnalité comporte de bonnes et de mauvaises réponses.",
     false
    ]
   ],
   "e": "Les tests de personnalité décrivent des façons d'être : il n'y a pas de bonnes ou de mauvaises réponses.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos du test du dessin du bonhomme de Goodenough :",
   "a": [
    [
     "Florence Goodenough l'a publié en 1926.",
     true
    ],
    [
     "Il estime le niveau de développement à partir des détails du dessin.",
     true
    ],
    [
     "C'est un test destiné aux adultes.",
     false
    ]
   ],
   "e": "Plus l'enfant grandit, plus son dessin est riche et précis.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos de la K-ABC de Kaufman :",
   "a": [
    [
     "Elle évalue des enfants d'environ 2,5 à 12,5 ans.",
     true
    ],
    [
     "Elle est destinée aux adultes de plus de 40 ans.",
     false
    ],
    [
     "Elle distingue traitement simultané et traitement séquentiel.",
     true
    ]
   ],
   "e": "C'est une batterie d'évaluation cognitive pour enfants.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos des échelles de Gesell :",
   "a": [
    [
     "Elles explorent le moteur, l'adaptatif, le langage et le personnel-social.",
     true
    ],
    [
     "Elles ont été conçues par Arnold Gesell.",
     true
    ],
    [
     "Ce sont des tests de QI pour adolescents.",
     false
    ]
   ],
   "e": "Elles décrivent le développement du jeune enfant.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "Dépistage et diagnostic :",
   "a": [
    [
     "Un test de dépistage repère les enfants à risque.",
     true
    ],
    [
     "Un test de dépistage suffit pour poser un diagnostic.",
     false
    ],
    [
     "Un diagnostic demande une évaluation approfondie.",
     true
    ]
   ],
   "e": "Un dépistage positif doit être suivi d'un bilan complet.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos des normes chez l'enfant :",
   "a": [
    [
     "Les normes doivent être adaptées à l'âge.",
     true
    ],
    [
     "Les scores se comparent à ceux d'enfants du même âge.",
     true
    ],
    [
     "Les mêmes normes valent pour tous les âges.",
     false
    ]
   ],
   "e": "Un enfant de 5 ans et un enfant de 10 ans ne se comparent pas avec les mêmes normes.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos de la déficience intellectuelle :",
   "a": [
    [
     "Un QI inférieur à environ 70 est associé à une déficience, avec des difficultés d'adaptation.",
     true
    ],
    [
     "Le diagnostic ne repose pas sur le QI seul.",
     true
    ],
    [
     "Un QI de 90 correspond à une déficience.",
     false
    ]
   ],
   "e": "Le diagnostic croise l'évaluation du fonctionnement intellectuel et celle des difficultés de la vie quotidienne.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Fidélité",
   "q": "À propos de la fidélité inter-juges :",
   "a": [
    [
     "Un kappa de 0 signifie un accord parfait.",
     false
    ],
    [
     "Le kappa de Cohen mesure l'accord corrigé du hasard.",
     true
    ],
    [
     "Elle est importante pour les tests projectifs et les entretiens.",
     true
    ]
   ],
   "e": "Un kappa de 1 signifie un accord parfait. Un kappa proche de 0 correspond à l'accord attendu par hasard.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Fidélité",
   "q": "À propos de l'alpha de Cronbach :",
   "a": [
    [
     "Il dépend du nombre d'items et de leur corrélation.",
     true
    ],
    [
     "Un alpha très élevé garantit la validité du test.",
     false
    ],
    [
     "Une valeur d'au moins 0,70 est souvent jugée acceptable en recherche.",
     true
    ]
   ],
   "e": "Des items presque identiques donnent un alpha élevé, sans pour autant mesurer ce qu'il faut.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Validité",
   "q": "À propos de la validité incrémentale :",
   "a": [
    [
     "Elle est un autre nom de la fidélité.",
     false
    ],
    [
     "Elle apporte une information en plus de celle des méthodes déjà utilisées.",
     true
    ],
    [
     "Elle peut être testée par une régression hiérarchique.",
     true
    ]
   ],
   "e": "On vérifie si ajouter un test améliore la prédiction d'un critère.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité",
   "q": "À propos de la validité écologique :",
   "a": [
    [
     "Une situation de laboratoire peut différer du comportement réel.",
     true
    ],
    [
     "Elle est un synonyme de cohérence interne.",
     false
    ],
    [
     "Elle renvoie à la proximité du test avec la vie réelle.",
     true
    ]
   ],
   "e": "Ce n'est pas parce qu'un enfant réussit en test qu'il réussit pareil en classe.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Statistiques",
   "q": "À propos de la moyenne et de la médiane :",
   "a": [
    [
     "Pour des revenus très inégaux, la médiane est souvent préférée.",
     true
    ],
    [
     "Des valeurs extrêmes influencent davantage la moyenne que la médiane.",
     true
    ],
    [
     "La moyenne n'est jamais influencée par les valeurs extrêmes.",
     false
    ]
   ],
   "e": "Quelques revenus très élevés tirent la moyenne vers le haut.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "Série de scores : 3, 5, 9.",
   "a": [
    [
     "L'étendue est de 6.",
     true
    ],
    [
     "L'étendue est la différence entre le maximum et le minimum.",
     true
    ],
    [
     "L'étendue est égale à la moyenne.",
     false
    ]
   ],
   "e": "9 − 3 = 6, alors que la moyenne vaut 17 ÷ 3, soit environ 5,7.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos du seuil de signification p < 0,05 :",
   "a": [
    [
     "Il indique qu'un résultat aussi extrême serait peu probable si l'hypothèse nulle était vraie.",
     true
    ],
    [
     "p < 0,05 prouve que l'effet est important.",
     false
    ],
    [
     "La taille d'effet complète l'information donnée par p.",
     true
    ]
   ],
   "e": "Un effet peut être significatif mais très petit, surtout avec un grand échantillon.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos des échantillons :",
   "a": [
    [
     "Un échantillon représentatif reflète la population visée.",
     true
    ],
    [
     "Un échantillon de commodité limite la généralisation des résultats.",
     true
    ],
    [
     "Un échantillon de 10 personnes suffit toujours.",
     false
    ]
   ],
   "e": "La taille nécessaire dépend de l'objectif et de la variabilité de ce qu'on mesure.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Étalonnage",
   "q": "À propos des stanines :",
   "a": [
    [
     "L'échelle va de 1 à 9.",
     true
    ],
    [
     "La stanine 9 correspond aux scores les plus faibles.",
     false
    ],
    [
     "La stanine 5 est centrale.",
     true
    ]
   ],
   "e": "La stanine 9 correspond aux scores les plus élevés.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Étalonnage",
   "q": "À propos de la validité dans le temps des normes :",
   "a": [
    [
     "Un étalonnage doit être renouvelé régulièrement.",
     true
    ],
    [
     "Des normes anciennes peuvent surestimer les scores actuels.",
     true
    ],
    [
     "Un étalonnage est valable pour toujours.",
     false
    ]
   ],
   "e": "Les performances moyennes évoluent, comme le montre l'effet Flynn.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Notion de QI",
   "q": "Classification des scores de QI (échelles de Wechsler) :",
   "a": [
    [
     "Un QI de 135 est classé « très supérieur ».",
     true
    ],
    [
     "Un QI de 100 se situe dans la zone moyenne.",
     true
    ],
    [
     "Un QI de 75 est classé « supérieur ».",
     false
    ]
   ],
   "e": "75 est classé « limite », selon la classification de Wechsler.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Notion de QI",
   "q": "À propos de l'effet Flynn :",
   "a": [
    [
     "Il a été observé dans de nombreux pays.",
     true
    ],
    [
     "Il prouve que le QI est entièrement génétique.",
     false
    ],
    [
     "Les scores de QI ont augmenté au fil des générations.",
     true
    ]
   ],
   "e": "Une hausse aussi rapide s'explique surtout par des facteurs d'environnement.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Notion de QI",
   "q": "À propos de l'origine des différences de performance :",
   "a": [
    [
     "L'hérédité joue aussi un rôle.",
     true
    ],
    [
     "L'environnement (nutrition, scolarité) influence les performances.",
     true
    ],
    [
     "L'environnement n'a aucune influence.",
     false
    ]
   ],
   "e": "Les deux types de facteurs interagissent.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Équité",
   "q": "À propos de l'adaptation transculturelle d'un test :",
   "a": [
    [
     "La traduction inverse (back-translation) permet de vérifier la qualité de la traduction.",
     true
    ],
    [
     "Un pré-test auprès de la population locale est recommandé.",
     true
    ],
    [
     "Une traduction mot à mot suffit.",
     false
    ]
   ],
   "e": "Certaines expressions n'ont pas d'équivalent exact d'une culture à l'autre.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Équité",
   "q": "À propos de la menace du stéréotype (Steele et Aronson) :",
   "a": [
    [
     "Elle n'a jamais été étudiée.",
     false
    ],
    [
     "Elle a été étudiée expérimentalement.",
     true
    ],
    [
     "La crainte de confirmer un stéréotype peut réduire la performance.",
     true
    ]
   ],
   "e": "Elle peut fausser l'interprétation d'écarts de scores entre groupes.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Histoire",
   "q": "À propos de l'origine du test de Binet :",
   "a": [
    [
     "Binet a été chargé en 1904 d'aider à repérer les enfants en difficulté scolaire.",
     true
    ],
    [
     "Le test visait à repérer les enfants ayant besoin d'aide.",
     true
    ],
    [
     "Il visait à classer les adultes pour le recrutement militaire.",
     false
    ]
   ],
   "e": "Le recrutement militaire a été à l'origine des tests collectifs, comme l'Army Alpha.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire",
   "q": "À propos de l'histoire du MMPI :",
   "a": [
    [
     "Ses auteurs sont Hathaway et McKinley.",
     true
    ],
    [
     "Il a été publié en 1943.",
     true
    ],
    [
     "Il a été créé par Murray.",
     false
    ]
   ],
   "e": "Murray est l'un des auteurs du TAT.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos du WAIS-IV :",
   "a": [
    [
     "Il comprend huit indices.",
     false
    ],
    [
     "La mémoire de travail est l'un de ses indices.",
     true
    ],
    [
     "Il comprend quatre indices.",
     true
    ]
   ],
   "e": "Compréhension verbale, raisonnement perceptif, mémoire de travail et vitesse de traitement.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos de l'interprétation du QI total :",
   "a": [
    [
     "Un profil hétérogène demande de la prudence dans l'interprétation du QI total.",
     true
    ],
    [
     "Le QI total est toujours la seule information utile.",
     false
    ],
    [
     "On ne doit pas réduire une personne à son QI total.",
     true
    ]
   ],
   "e": "Les forces et faiblesses entre les indices renseignent aussi sur le fonctionnement de la personne.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Définitions",
   "q": "À propos des scores bruts :",
   "a": [
    [
     "Il ne signifie pas grand-chose sans étalonnage.",
     true
    ],
    [
     "Le score brut est le nombre de points obtenus.",
     true
    ],
    [
     "Il permet de comparer directement des tests différents.",
     false
    ]
   ],
   "e": "On convertit le score brut en score standard pour pouvoir le comparer.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Construction de tests",
   "q": "À propos des étapes de construction d'un test :",
   "a": [
    [
     "La définition du construit est l'une des premières étapes.",
     true
    ],
    [
     "Les items sont analysés après un pré-test.",
     true
    ],
    [
     "L'étalonnage se fait avant la rédaction des items.",
     false
    ]
   ],
   "e": "On définit, on écrit, on essaie, on analyse, puis on étudie fidélité, validité et normes.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Construction de tests",
   "q": "À propos des questions à choix multiples :",
   "a": [
    [
     "La réussite par hasard est impossible.",
     false
    ],
    [
     "La cotation est objective.",
     true
    ],
    [
     "Une réussite par hasard est possible.",
     true
    ]
   ],
   "e": "Avec quatre options, on a une chance sur quatre de répondre juste au hasard.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Construction de tests",
   "q": "À propos de la correction de la devinette :",
   "a": [
    [
     "Avec 4 options, la chance de réussir au hasard est de 50 %.",
     false
    ],
    [
     "Une formule corrige le score en pénalisant les erreurs.",
     true
    ],
    [
     "Avec 4 options, la chance de réussir au hasard est de 25 %.",
     true
    ]
   ],
   "e": "1 sur 4 = 25 %.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Construction de tests",
   "q": "À propos de la longueur d'un test :",
   "a": [
    [
     "Un test plus long est toujours plus valide.",
     false
    ],
    [
     "La fatigue limite l'intérêt d'allonger indéfiniment un test.",
     true
    ],
    [
     "Un test plus long, avec des items de qualité, est en général plus fidèle.",
     true
    ]
   ],
   "e": "Allonger augmente la fidélité, pas automatiquement la validité.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Théorie de réponse à l'item",
   "q": "À propos de la théorie de réponse à l'item (TRI) :",
   "a": [
    [
     "Elle est identique à la théorie classique des tests.",
     false
    ],
    [
     "Les paramètres des items y sont, en principe, indépendants de l'échantillon.",
     true
    ],
    [
     "Elle modélise la probabilité de réussir un item selon un trait latent.",
     true
    ]
   ],
   "e": "La TRI et la théorie classique reposent sur des modèles différents.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Théorie de réponse à l'item",
   "q": "À propos du modèle de Rasch :",
   "a": [
    [
     "Il porte le nom de Georg Rasch.",
     true
    ],
    [
     "Il utilise un seul paramètre d'item : la difficulté.",
     true
    ],
    [
     "Il laisse la discrimination libre pour chaque item.",
     false
    ]
   ],
   "e": "La discrimination y est supposée identique pour tous les items.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Théorie de réponse à l'item",
   "q": "À propos de la courbe caractéristique d'un item :",
   "a": [
    [
     "Elle a en général une forme en S.",
     true
    ],
    [
     "Elle relie le niveau de trait à la probabilité de réussite.",
     true
    ],
    [
     "Elle décroît quand le niveau de trait augmente.",
     false
    ]
   ],
   "e": "Plus le niveau de trait est élevé, plus la probabilité de réussir augmente.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Théorie de réponse à l'item",
   "q": "À propos de la fonction d'information :",
   "a": [
    [
     "L'information est identique à tous les niveaux de trait.",
     false
    ],
    [
     "Un item informe surtout autour de son niveau de difficulté.",
     true
    ],
    [
     "Elle indique la précision de mesure à chaque niveau de trait.",
     true
    ]
   ],
   "e": "Un item très facile informe peu sur les personnes de haut niveau.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Théorie de réponse à l'item",
   "q": "À propos des tests adaptatifs (CAT) :",
   "a": [
    [
     "Tout le monde passe exactement les mêmes items.",
     false
    ],
    [
     "Ils réduisent le nombre d'items à précision comparable.",
     true
    ],
    [
     "Les items sont choisis selon les réponses précédentes.",
     true
    ]
   ],
   "e": "Le test s'ajuste au niveau de chaque personne.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Analyse factorielle",
   "q": "À propos de la saturation d'un item :",
   "a": [
    [
     "C'est la relation entre l'item et le facteur.",
     true
    ],
    [
     "Une saturation de 0,10 indique une forte relation.",
     false
    ],
    [
     "Une saturation de 0,70 est forte.",
     true
    ]
   ],
   "e": "0,10 indique que l'item est presque indépendant du facteur.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Analyse factorielle",
   "q": "À propos du nombre de facteurs à retenir :",
   "a": [
    [
     "Le test d'éboulis (scree test) de Cattell sert aussi à choisir.",
     true
    ],
    [
     "Le critère de Kaiser retient les valeurs propres supérieures à 1.",
     true
    ],
    [
     "Il faut toujours retenir tous les facteurs possibles.",
     false
    ]
   ],
   "e": "On cherche le nombre de facteurs qui résume bien les données sans excès.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Analyse factorielle",
   "q": "À propos des rotations :",
   "a": [
    [
     "Varimax est une rotation orthogonale.",
     true
    ],
    [
     "Oblimin est une rotation oblique : elle autorise la corrélation entre facteurs.",
     true
    ],
    [
     "Varimax autorise la corrélation entre facteurs.",
     false
    ]
   ],
   "e": "Une rotation orthogonale garde les facteurs indépendants.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Théorie classique des tests",
   "q": "Modèle classique : X = V + E.",
   "a": [
    [
     "L'erreur est supposée aléatoire, de moyenne nulle.",
     true
    ],
    [
     "Le score observé est la somme du score vrai et de l'erreur.",
     true
    ],
    [
     "L'erreur est toujours positive.",
     false
    ]
   ],
   "e": "L'erreur peut être positive ou négative.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Théorie classique des tests",
   "q": "À propos de la définition de la fidélité :",
   "a": [
    [
     "Elle est égale à la variance d'erreur.",
     false
    ],
    [
     "Elle varie de 0 à 1.",
     true
    ],
    [
     "C'est la part de variance vraie dans la variance observée.",
     true
    ]
   ],
   "e": "Fidélité = variance vraie ÷ variance observée.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Théorie classique des tests",
   "q": "À propos de l'intervalle de confiance d'un score :",
   "a": [
    [
     "Plus le SEM est petit, plus l'intervalle est étroit.",
     true
    ],
    [
     "Score observé ± 1,96 × SEM donne un intervalle d'environ 95 %.",
     true
    ],
    [
     "Un score est une valeur exacte, sans incertitude.",
     false
    ]
   ],
   "e": "Tout score contient une marge d'erreur de mesure.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Analyse d'items",
   "q": "À propos de l'indice de difficulté p :",
   "a": [
    [
     "C'est la proportion de personnes qui réussissent l'item.",
     true
    ],
    [
     "p = 0,10 correspond à un item facile.",
     false
    ],
    [
     "p = 0,90 correspond à un item facile.",
     true
    ]
   ],
   "e": "p = 0,10 : seulement 10 % réussissent, l'item est difficile.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Analyse d'items",
   "q": "À propos de la discrimination d'un item :",
   "a": [
    [
     "Elle mesure la capacité de l'item à distinguer les personnes de niveaux différents.",
     true
    ],
    [
     "Une discrimination négative est un bon signe.",
     false
    ],
    [
     "La corrélation item-total en est un indicateur.",
     true
    ]
   ],
   "e": "Si les meilleurs échouent plus souvent que les faibles, l'item pose problème.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Analyse d'items",
   "q": "À propos de la difficulté idéale des items :",
   "a": [
    [
     "Il est utile de varier les difficultés pour couvrir tout le continuum.",
     true
    ],
    [
     "Une difficulté autour de 0,50 maximise en général la discrimination.",
     true
    ],
    [
     "Tous les items devraient avoir p = 1.",
     false
    ]
   ],
   "e": "Un item que tout le monde réussit n'apporte aucune information.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Statistiques",
   "q": "À propos des erreurs de décision statistique :",
   "a": [
    [
     "L'erreur de type II consiste à ne pas la rejeter alors qu'elle est fausse.",
     true
    ],
    [
     "L'erreur de type I consiste à rejeter l'hypothèse nulle à tort.",
     true
    ],
    [
     "Le seuil α est la probabilité de l'erreur de type II.",
     false
    ]
   ],
   "e": "Le seuil α est la probabilité de l'erreur de type I.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos du coefficient de détermination r² :",
   "a": [
    [
     "Pour r = 0,50, r² est égal à 0,25.",
     true
    ],
    [
     "Il indique la proportion de variance partagée.",
     true
    ],
    [
     "Pour r = 0,50, r² est égal à 0,50.",
     false
    ]
   ],
   "e": "0,50 × 0,50 = 0,25 : 25 % de variance partagée.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Équité",
   "q": "À propos de l'invariance de mesure :",
   "a": [
    [
     "Elle prouve que les moyennes des groupes sont égales.",
     false
    ],
    [
     "L'analyse factorielle confirmatoire multigroupe peut l'étudier.",
     true
    ],
    [
     "Elle vérifie qu'un test mesure le même construit de façon équivalente dans des groupes différents.",
     true
    ]
   ],
   "e": "L'invariance porte sur la façon de mesurer, pas sur le niveau moyen des groupes.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Notion de QI",
   "q": "Un QI de 100 est mesuré avec une erreur standard de mesure de 3 points.",
   "a": [
    [
     "Le score est une estimation, pas une valeur exacte.",
     true
    ],
    [
     "Le QI mesuré est une valeur exacte, sans erreur.",
     false
    ],
    [
     "L'intervalle de confiance à 95 % va d'environ 94 à 106.",
     true
    ]
   ],
   "e": "100 ± 1,96 × 3 ≈ 100 ± 6.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Définitions",
   "q": "À propos de la notion de construit :",
   "a": [
    [
     "On parle aussi de variable latente.",
     true
    ],
    [
     "Un construit est toujours directement visible.",
     false
    ],
    [
     "C'est un concept théorique non directement observable, comme l'anxiété.",
     true
    ]
   ],
   "e": "On l'infère à partir de comportements ou de réponses à des items.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Fidélité",
   "q": "À propos de l'oméga de McDonald :",
   "a": [
    [
     "C'est un estimateur de la fidélité (cohérence interne).",
     true
    ],
    [
     "Il est moins contraignant que l'alpha sur certaines hypothèses.",
     true
    ],
    [
     "Il est égal à la validité.",
     false
    ]
   ],
   "e": "Il n'exige pas que tous les items aient le même poids factoriel.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Fidélité",
   "q": "À propos de la fidélité test-retest :",
   "a": [
    [
     "Un intervalle trop court peut favoriser un effet de mémoire.",
     true
    ],
    [
     "Un intervalle de plusieurs années n'a aucun effet.",
     false
    ],
    [
     "Un intervalle très long peut refléter de vrais changements.",
     true
    ],
    [
     "Elle correspond à la corrélation entre deux passations.",
     true
    ]
   ],
   "e": "L'intervalle doit être assez long pour éviter la mémoire, mais assez court pour que le trait ne change pas.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Validité",
   "q": "À propos de la validité de critère :",
   "a": [
    [
     "Le coefficient de validité est la corrélation entre le test et le critère.",
     true
    ],
    [
     "Un coefficient de 0,00 est excellent.",
     false
    ],
    [
     "Une restriction d'étendue réduit la corrélation observée.",
     true
    ]
   ],
   "e": "0,00 signifie qu'il n'y a aucune relation entre le test et le critère.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité",
   "q": "À propos de la validité conséquentielle (Messick) :",
   "a": [
    [
     "Elle porte sur les conséquences de l'usage des scores.",
     true
    ],
    [
     "Messick propose une conception unifiée de la validité.",
     true
    ],
    [
     "La validité est une propriété fixe du test, indépendante de l'usage.",
     false
    ]
   ],
   "e": "Ce qui se valide, c'est l'interprétation et l'usage des scores, pas le test en soi.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Notion de QI",
   "q": "À propos d'un QI de 130 :",
   "a": [
    [
     "Il ne garantit pas la réussite scolaire.",
     true
    ],
    [
     "La moitié de la population atteint ce score.",
     false
    ],
    [
     "Il correspond à environ 2 % de la population la plus haute.",
     true
    ]
   ],
   "e": "130 = +2 écarts-types : seulement environ 2 % des personnes l'atteignent.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Notion de QI",
   "q": "À propos des notes standard des subtests de Wechsler :",
   "a": [
    [
     "Leur moyenne est de 100.",
     false
    ],
    [
     "Leur écart-type est de 3.",
     true
    ],
    [
     "Les notes standard ont une moyenne de 10.",
     true
    ]
   ],
   "e": "La moyenne de 100 concerne les indices et le QI total.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Étalonnage",
   "q": "À propos des âges équivalents :",
   "a": [
    [
     "Ils sont la mesure la plus précise du niveau d'un enfant.",
     false
    ],
    [
     "Un âge équivalent de 8 ans ne signifie pas que l'enfant raisonne comme un enfant de 8 ans.",
     true
    ],
    [
     "Ils sont critiqués, car le développement n'est pas linéaire.",
     true
    ]
   ],
   "e": "Les scores standard sont plus fiables que les âges équivalents.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Statistiques",
   "q": "À propos de la variance :",
   "a": [
    [
     "Elle se calcule à partir des écarts à la moyenne mis au carré.",
     true
    ],
    [
     "Elle peut être négative.",
     false
    ],
    [
     "Son unité est le carré de l'unité des données.",
     true
    ]
   ],
   "e": "Une somme de carrés ne peut pas être négative.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "Choix d'un test statistique :",
   "a": [
    [
     "Le test t compare les moyennes de deux groupes.",
     true
    ],
    [
     "Le khi-deux sert à comparer deux moyennes.",
     false
    ],
    [
     "L'ANOVA compare les moyennes de plusieurs groupes.",
     true
    ]
   ],
   "e": "Le khi-deux sert à étudier l'association entre variables catégorielles.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos de la régression linéaire simple :",
   "a": [
    [
     "Elle fournit une droite de prédiction.",
     true
    ],
    [
     "La pente indique la variation de y quand x augmente d'une unité.",
     true
    ],
    [
     "Le coefficient r² peut être négatif.",
     false
    ]
   ],
   "e": "r² est un carré : il est compris entre 0 et 1.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos de l'intervalle de confiance d'une moyenne :",
   "a": [
    [
     "Un grand échantillon élargit l'intervalle.",
     false
    ],
    [
     "Passer de 95 % à 99 % de confiance élargit l'intervalle.",
     true
    ],
    [
     "Plus l'échantillon est grand, plus l'intervalle est étroit.",
     true
    ]
   ],
   "e": "Un grand échantillon donne une estimation plus précise.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Histoire",
   "q": "À propos de Thurstone et de Guilford :",
   "a": [
    [
     "Spearman a proposé sept aptitudes mentales primaires.",
     false
    ],
    [
     "Thurstone a décrit des aptitudes mentales primaires, en 1938.",
     true
    ],
    [
     "Guilford a proposé un modèle de l'intellect à très nombreux facteurs.",
     true
    ]
   ],
   "e": "Spearman est le théoricien du facteur g.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire",
   "q": "À propos de l'échelle de Binet-Simon et de ses révisions :",
   "a": [
    [
     "Binet a conçu le MMPI.",
     false
    ],
    [
     "La révision de 1908 a introduit la notion d'âge mental.",
     true
    ],
    [
     "La version de 1905 comptait 30 épreuves.",
     true
    ]
   ],
   "e": "Le MMPI a été conçu par Hathaway et McKinley.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire",
   "q": "À propos de Terman :",
   "a": [
    [
     "Il a lancé en 1921 une étude longitudinale d'enfants surdoués.",
     true
    ],
    [
     "Il a publié la révision américaine du Binet-Simon en 1916.",
     true
    ],
    [
     "Son étude portait sur des adultes de plus de 60 ans.",
     false
    ]
   ],
   "e": "Il a suivi pendant des décennies des enfants à haut QI.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos de ce que mesurent certains subtests de Wechsler :",
   "a": [
    [
     "Code évalue la vitesse de traitement.",
     true
    ],
    [
     "Mémoire des chiffres sollicite la mémoire de travail.",
     true
    ],
    [
     "Vocabulaire évalue le raisonnement visuo-spatial.",
     false
    ]
   ],
   "e": "Vocabulaire relève de la compréhension verbale.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Théories de l'intelligence",
   "q": "À propos de Piaget :",
   "a": [
    [
     "Il a créé le WISC.",
     false
    ],
    [
     "Son approche est développementale, non psychométrique.",
     true
    ],
    [
     "Il décrit quatre stades du développement cognitif.",
     true
    ]
   ],
   "e": "Sensori-moteur, préopératoire, opératoire concret, opératoire formel.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Théories de l'intelligence",
   "q": "À propos de Vygotski :",
   "a": [
    [
     "Il n'accordait aucune place aux interactions sociales.",
     false
    ],
    [
     "Son approche inspire l'évaluation dynamique.",
     true
    ],
    [
     "Il a décrit la zone proche de développement.",
     true
    ]
   ],
   "e": "Pour lui, le développement passe par les interactions avec autrui.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Théories de l'intelligence",
   "q": "À propos des intelligences multiples de Gardner :",
   "a": [
    [
     "La théorie est critiquée pour son manque de preuves empiriques.",
     true
    ],
    [
     "Il décrit au moins huit types d'intelligence.",
     true
    ],
    [
     "Gardner est l'auteur du facteur g.",
     false
    ]
   ],
   "e": "Le facteur g est dû à Spearman.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Équité",
   "q": "À propos des tests dits « culture-fair » :",
   "a": [
    [
     "Ils sont valables partout sans adaptation.",
     false
    ],
    [
     "Ils cherchent à réduire l'influence de la culture.",
     true
    ],
    [
     "Aucun test n'est totalement indépendant de la culture.",
     true
    ]
   ],
   "e": "Même les épreuves non verbales supposent une familiarité avec les tests.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Équité",
   "q": "À propos de l'accessibilité des tests :",
   "a": [
    [
     "Un temps supplémentaire peut être accordé en cas de handicap, si c'est justifié.",
     true
    ],
    [
     "On peut modifier les consignes pour avantager un candidat.",
     false
    ],
    [
     "Il faut éviter un vocabulaire inutilement complexe.",
     true
    ]
   ],
   "e": "Les aménagements visent l'équité, pas un avantage.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Définitions",
   "q": "Tests de vitesse et tests de puissance :",
   "a": [
    [
     "Un test de puissance comporte des items difficiles, avec un temps suffisant.",
     true
    ],
    [
     "Un test de vitesse comporte des items faciles, avec un temps limité.",
     true
    ],
    [
     "Ce sont deux noms pour le même type de test.",
     false
    ]
   ],
   "e": "Dans un test de vitesse, on mesure surtout la rapidité.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos du test de Peabody (PPVT) :",
   "a": [
    [
     "Il mesure le vocabulaire réceptif.",
     true
    ],
    [
     "Il mesure la personnalité.",
     false
    ],
    [
     "L'enfant désigne l'image qui correspond au mot entendu.",
     true
    ]
   ],
   "e": "L'enfant n'a pas besoin de parler : il montre une image parmi quatre.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos de la dyslexie :",
   "a": [
    [
     "Un bilan associe souvent orthophonie et psychologie.",
     true
    ],
    [
     "C'est une difficulté spécifique de lecture.",
     true
    ],
    [
     "La dyslexie équivaut à une déficience intellectuelle.",
     false
    ]
   ],
   "e": "Un enfant dyslexique peut avoir une intelligence normale, voire supérieure.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos de la structure du WAIS-IV :",
   "a": [
    [
     "Il comprend 15 subtests, dont 10 principaux.",
     true
    ],
    [
     "Il fournit quatre indices.",
     true
    ],
    [
     "Il est destiné aux enfants de 6 à 16 ans.",
     false
    ]
   ],
   "e": "Les indices sont la compréhension verbale, le raisonnement perceptif, la mémoire de travail et la vitesse de traitement.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos de l'étendue d'âge et du contenu du WAIS-IV :",
   "a": [
    [
     "Similitudes, Vocabulaire et Information appartiennent à la compréhension verbale.",
     true
    ],
    [
     "Cubes appartient à la compréhension verbale.",
     false
    ],
    [
     "Il s'adresse aux personnes de 16 à 90 ans.",
     true
    ]
   ],
   "e": "Cubes appartient au raisonnement perceptif.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos des indices complémentaires du WISC-V :",
   "a": [
    [
     "Le GAI inclut la vitesse de traitement.",
     false
    ],
    [
     "L'indice de compétence cognitive (CPI) regroupe mémoire de travail et vitesse.",
     true
    ],
    [
     "L'indice d'aptitude générale (GAI) est calculé sans la mémoire de travail ni la vitesse.",
     true
    ]
   ],
   "e": "Ces indices aident à interpréter les profils hétérogènes.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos du WPPSI-IV :",
   "a": [
    [
     "Il s'adresse aux enfants d'environ 2 ans et demi à 7 ans.",
     true
    ],
    [
     "Il comprend deux tranches d'âge.",
     true
    ],
    [
     "Il s'adresse aux adolescents de 16 ans.",
     false
    ]
   ],
   "e": "Il est destiné aux enfants d'âge préscolaire et du début du primaire.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Tests d'intelligence",
   "q": "À propos du Stanford-Binet 5 (facteurs et âges) :",
   "a": [
    [
     "Il évalue chaque facteur à l'aide d'épreuves verbales et non verbales.",
     true
    ],
    [
     "Il mesure cinq facteurs cognitifs.",
     true
    ],
    [
     "Il s'adresse uniquement aux adultes de plus de 60 ans.",
     false
    ]
   ],
   "e": "Il couvre une large étendue d'âge, de 2 ans à plus de 85 ans.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Tests d'intelligence",
   "q": "À propos du Woodcock-Johnson IV :",
   "a": [
    [
     "Il comprend des batteries cognitive, de réussite et de langage oral.",
     true
    ],
    [
     "C'est un test projectif.",
     false
    ],
    [
     "Il s'appuie sur le modèle Cattell-Horn-Carroll.",
     true
    ]
   ],
   "e": "Il combine mesure des aptitudes et mesure des acquis scolaires.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos des Vineland-3 (comportement adaptatif) :",
   "a": [
    [
     "Ils renseignent sur l'autonomie dans les activités de la vie courante.",
     true
    ],
    [
     "Ils mesurent le QI.",
     false
    ],
    [
     "Ils évaluent notamment la communication, la vie quotidienne et la socialisation.",
     true
    ]
   ],
   "e": "Le comportement adaptatif complète le QI dans le repérage d'une déficience intellectuelle.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos de la NEPSY-II :",
   "a": [
    [
     "C'est une batterie d'évaluation neuropsychologique de l'enfant.",
     true
    ],
    [
     "Elle est destinée à des personnes âgées de plus de 70 ans.",
     false
    ],
    [
     "Elle s'adresse à des enfants d'environ 3 à 16 ans.",
     true
    ]
   ],
   "e": "Elle explore l'attention, les fonctions exécutives, le langage, la mémoire et d'autres domaines.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Éthique et normes professionnelles",
   "q": "À propos des Standards for Educational and Psychological Testing :",
   "a": [
    [
     "Ils s'imposent comme loi dans tous les pays.",
     false
    ],
    [
     "Ils fournissent un cadre sur la validité, la fidélité et l'équité.",
     true
    ],
    [
     "Ils sont publiés conjointement par l'AERA, l'APA et le NCME.",
     true
    ]
   ],
   "e": "Ce sont des recommandations professionnelles, pas des lois.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Éthique et normes professionnelles",
   "q": "À propos des lignes directrices de la Commission internationale des tests (ITC) :",
   "a": [
    [
     "Elles portent notamment sur l'adaptation des tests d'une langue à l'autre.",
     true
    ],
    [
     "Elles interdisent toute adaptation d'un test.",
     false
    ],
    [
     "Elles recommandent de valider un test adapté.",
     true
    ]
   ],
   "e": "Elles aident à adapter correctement un test à un nouveau contexte culturel.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Équité",
   "q": "À propos de l'équivalence d'un test adapté :",
   "a": [
    [
     "On peut supposer l'équivalence sans aucune analyse.",
     false
    ],
    [
     "L'équivalence métrique vérifie que les scores ont la même signification.",
     true
    ],
    [
     "Il faut vérifier l'adaptation sur un échantillon local.",
     true
    ]
   ],
   "e": "L'équivalence se démontre par des analyses, pas par une hypothèse.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Fidélité",
   "q": "À propos du coefficient KR-20 :",
   "a": [
    [
     "Il s'applique seulement aux échelles de Likert.",
     false
    ],
    [
     "C'est un cas particulier de l'alpha de Cronbach.",
     true
    ],
    [
     "Il s'applique à des items dichotomiques (réussite ou échec).",
     true
    ]
   ],
   "e": "Kuder et Richardson l'ont proposé pour les items cotés 0 ou 1.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Construction de tests",
   "q": "À propos de la méthode d'Angoff :",
   "a": [
    [
     "Le seuil est un centile fixé sans recours à des experts.",
     false
    ],
    [
     "Elle sert à fixer un seuil de réussite (cut score).",
     true
    ],
    [
     "Des experts estiment la probabilité qu'un candidat tout juste compétent réussisse chaque item.",
     true
    ]
   ],
   "e": "Elle est très utilisée dans les examens de certification.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Construction de tests",
   "q": "À propos de l'équating (équivalence des formes d'un test) :",
   "a": [
    [
     "Il s'appuie souvent sur des items communs, dits d'ancrage.",
     true
    ],
    [
     "Il rend comparables les scores de formes différentes d'un même test.",
     true
    ],
    [
     "Il n'est jamais nécessaire.",
     false
    ]
   ],
   "e": "Sans équating, la forme la plus facile avantagerait ses candidats.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Validité",
   "q": "À propos de l'aire sous la courbe ROC (AUC) :",
   "a": [
    [
     "Une AUC de 0,50 indique une excellente discrimination.",
     false
    ],
    [
     "Une AUC de 1,00 correspond à une discrimination parfaite.",
     true
    ],
    [
     "Une AUC de 0,50 correspond au hasard.",
     true
    ]
   ],
   "e": "Plus l'AUC se rapproche de 1, meilleure est la capacité du test à discriminer.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité",
   "q": "À propos du choix d'un seuil sur une courbe ROC :",
   "a": [
    [
     "Le choix du seuil est un compromis entre sensibilité et spécificité.",
     true
    ],
    [
     "La sensibilité et la spécificité augmentent toujours ensemble.",
     false
    ],
    [
     "Abaisser le seuil de dépistage augmente en général la sensibilité et réduit la spécificité.",
     true
    ]
   ],
   "e": "Dépister plus largement repère plus de cas, mais crée aussi plus de faux positifs.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Fidélité",
   "q": "À propos du coefficient de corrélation intraclasse (CCI) :",
   "a": [
    [
     "Le kappa est plutôt utilisé pour des catégories.",
     true
    ],
    [
     "Il sert uniquement à des variables qualitatives.",
     false
    ],
    [
     "Il sert à estimer l'accord entre juges pour des mesures quantitatives.",
     true
    ]
   ],
   "e": "CCI pour les scores continus, kappa pour les catégories.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Étalonnage",
   "q": "À propos de la qualité des normes :",
   "a": [
    [
     "Un échantillon de 20 personnes suffit pour étalonner un test.",
     false
    ],
    [
     "Plus l'échantillon est grand et représentatif, meilleures sont les normes.",
     true
    ],
    [
     "Il faut un effectif suffisant dans chaque strate (âge, niveau d'études).",
     true
    ]
   ],
   "e": "De petits échantillons donnent des normes instables.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Fidélité",
   "q": "À propos de la stabilité des mesures (traits et états) :",
   "a": [
    [
     "Un trait est plus stable dans le temps qu'un état.",
     true
    ],
    [
     "Dans le STAI, l'anxiété-état varie davantage que l'anxiété-trait.",
     true
    ],
    [
     "L'état et le trait doivent avoir la même stabilité test-retest.",
     false
    ]
   ],
   "e": "Un état est par nature changeant, ce qui réduit la corrélation test-retest.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos de la fidélité des échelles de Wechsler :",
   "a": [
    [
     "Le QI total a une fidélité très élevée.",
     true
    ],
    [
     "Un subtest seul est plus fiable que le QI total.",
     false
    ],
    [
     "Les subtests pris isolément sont moins fiables que le QI total.",
     true
    ]
   ],
   "e": "En combinant plusieurs subtests, on réduit l'erreur de mesure.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos de l'interprétation de différences entre indices :",
   "a": [
    [
     "La fréquence d'une différence dans la population compte aussi.",
     true
    ],
    [
     "Une différence de 5 points est toujours significative.",
     false
    ],
    [
     "On utilise des tables de différences critiques pour juger de leur signification.",
     true
    ]
   ],
   "e": "Une différence peut être statistiquement significative sans être rare.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Tests neuropsychologiques",
   "q": "À propos du Boston Naming Test et de la fluence verbale :",
   "a": [
    [
     "Le Boston Naming Test évalue la dénomination d'images.",
     true
    ],
    [
     "La fluence verbale consiste à produire des mots d'une catégorie ou d'une lettre en temps limité.",
     true
    ],
    [
     "La fluence verbale mesure la force musculaire.",
     false
    ]
   ],
   "e": "Ces épreuves explorent le langage et les fonctions exécutives.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Tests neuropsychologiques",
   "q": "À propos de l'échelle de mémoire de Wechsler (WMS-IV) :",
   "a": [
    [
     "Elle évalue la personnalité.",
     false
    ],
    [
     "Elle permet de comparer rappel immédiat et rappel différé.",
     true
    ],
    [
     "Elle évalue la mémoire auditive et visuelle.",
     true
    ]
   ],
   "e": "Elle est utilisée en neuropsychologie pour explorer les troubles de la mémoire.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Tests d'attention",
   "q": "À propos du Conners CPT (Continuous Performance Test) :",
   "a": [
    [
     "Il évalue l'attention soutenue.",
     true
    ],
    [
     "Il évalue la compréhension verbale.",
     false
    ],
    [
     "Les erreurs de commission renseignent sur l'impulsivité.",
     true
    ]
   ],
   "e": "Le sujet répond à certains stimuli et doit s'abstenir pour d'autres.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos du test VMI (Beery-Buktenica) :",
   "a": [
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il évalue l'intégration visuo-motrice.",
     true
    ],
    [
     "Le sujet copie des figures géométriques de difficulté croissante.",
     true
    ]
   ],
   "e": "Il est proche du Bender dans son principe, avec une cotation standardisée.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Étalonnage",
   "q": "À propos du niveau d'études et des tests cognitifs :",
   "a": [
    [
     "Des normes tenant compte de la scolarité sont utiles.",
     true
    ],
    [
     "Le niveau d'études n'a aucun effet sur les scores.",
     false
    ],
    [
     "Le niveau d'études influence les scores à de nombreux tests.",
     true
    ]
   ],
   "e": "Pour une personne peu scolarisée, des normes générales peuvent sous-estimer ses capacités.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Échelles de Wechsler",
   "q": "À propos des profils intra-individuels :",
   "a": [
    [
     "Elles remplacent toute comparaison avec des normes.",
     false
    ],
    [
     "Ces comparaisons aident à repérer des forces et des faiblesses relatives.",
     true
    ],
    [
     "On peut comparer les résultats d'une personne à sa propre moyenne.",
     true
    ]
   ],
   "e": "Elles complètent les normes sans les remplacer.",
   "p": "Échelles de Wechsler"
  },
  {
   "s": "Histoire",
   "q": "À propos de l'évaluation du comportement adaptatif :",
   "a": [
    [
     "Les Vineland-3 en sont les héritières.",
     true
    ],
    [
     "Doll a créé le test de Rorschach.",
     false
    ],
    [
     "Edgar Doll a publié la Vineland Social Maturity Scale en 1935.",
     true
    ]
   ],
   "e": "Elle a été conçue pour évaluer l'autonomie sociale.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire",
   "q": "À propos de l'histoire des échelles de Wechsler :",
   "a": [
    [
     "Le WISC date de 1990.",
     false
    ],
    [
     "Le WAIS a été publié en 1955.",
     true
    ],
    [
     "Le Wechsler-Bellevue date de 1939.",
     true
    ]
   ],
   "e": "Le WISC date de 1949.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire",
   "q": "À propos de Strong et des intérêts professionnels :",
   "a": [
    [
     "Il a été créé par Holland.",
     false
    ],
    [
     "Il compare les intérêts d'une personne à ceux de professionnels en poste.",
     true
    ],
    [
     "Le Strong Vocational Interest Blank date de 1927.",
     true
    ]
   ],
   "e": "Holland est l'auteur du modèle RIASEC.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des méthodes",
   "q": "À propos de la validité de construit (cadre de 1955) :",
   "a": [
    [
     "Elle se limite à la corrélation avec un seul critère.",
     false
    ],
    [
     "Cronbach et Meehl en ont posé le cadre en 1955.",
     true
    ],
    [
     "Elle repose sur un réseau d'hypothèses théoriques.",
     true
    ]
   ],
   "e": "Il s'agit d'accumuler des preuves convergentes.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des méthodes",
   "q": "À propos de la matrice multitraits-multiméthodes :",
   "a": [
    [
     "Elle ne s'applique qu'aux tests de QI.",
     false
    ],
    [
     "Campbell et Fiske l'ont proposée en 1959.",
     true
    ],
    [
     "Elle croise plusieurs traits et plusieurs méthodes de mesure.",
     true
    ]
   ],
   "e": "Elle sert à étudier validité convergente et discriminante.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des méthodes",
   "q": "À propos du kappa de Cohen :",
   "a": [
    [
     "Cohen l'a proposé en 1960.",
     true
    ],
    [
     "Il mesure la corrélation entre deux variables continues.",
     false
    ],
    [
     "Il mesure l'accord entre juges, corrigé du hasard.",
     true
    ]
   ],
   "e": "Pour des variables continues, on utilise plutôt la corrélation intraclasse.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des méthodes",
   "q": "À propos de l'échelle de Likert (origine) :",
   "a": [
    [
     "Elle mesure des attitudes.",
     true
    ],
    [
     "Likert l'a proposée en 1932.",
     true
    ],
    [
     "Elle date de 1980.",
     false
    ]
   ],
   "e": "Elle est aujourd'hui l'un des formats de réponse les plus courants.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Statistiques",
   "q": "À propos de la corrélation point-bisériale :",
   "a": [
    [
     "Elle s'utilise pour la corrélation entre un item réussi ou raté et le score total.",
     true
    ],
    [
     "Elle peut servir d'indice de discrimination d'un item.",
     true
    ],
    [
     "Elle ne s'applique jamais aux items de test.",
     false
    ]
   ],
   "e": "C'est une version de la corrélation de Pearson.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos de la corrélation tétrachorique :",
   "a": [
    [
     "Elle suppose une variable sous-jacente continue et normale.",
     true
    ],
    [
     "Elle s'applique à des variables continues observées.",
     false
    ],
    [
     "Elle estime la corrélation entre deux variables dichotomisées.",
     true
    ]
   ],
   "e": "Elle est utile en analyse factorielle d'items dichotomiques.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos du rapport F de l'ANOVA :",
   "a": [
    [
     "Un F élevé suggère des différences entre groupes.",
     true
    ],
    [
     "Il compare uniquement deux moyennes.",
     false
    ],
    [
     "Il compare la variance entre groupes à la variance intragroupe.",
     true
    ]
   ],
   "e": "L'ANOVA s'applique à deux groupes ou plus.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos des effets plafond et plancher :",
   "a": [
    [
     "Un effet plafond apparaît quand le test est trop facile pour le groupe.",
     true
    ],
    [
     "Un effet plancher apparaît quand le test est trop difficile.",
     true
    ],
    [
     "Ils améliorent la discrimination des scores.",
     false
    ]
   ],
   "e": "Ils limitent la capacité du test à distinguer les personnes aux extrémités.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Mesure du changement",
   "q": "À propos de l'indice de changement fiable (Jacobson et Truax) :",
   "a": [
    [
     "Il dépend uniquement de la moyenne du groupe.",
     false
    ],
    [
     "Un seuil de 1,96 est couramment utilisé.",
     true
    ],
    [
     "Il permet de juger si un changement dépasse l'erreur de mesure.",
     true
    ]
   ],
   "e": "Il repose sur l'erreur standard de la différence entre deux mesures.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Mesure du changement",
   "q": "À propos du score vrai estimé (formule de Kelley) :",
   "a": [
    [
     "Il corrige le score observé en le rapprochant de la moyenne.",
     true
    ],
    [
     "Il éloigne toujours le score de la moyenne.",
     false
    ],
    [
     "La correction est plus forte quand la fidélité est faible.",
     true
    ]
   ],
   "e": "Un score extrême comporte souvent une part d'erreur : le score vrai estimé est plus modéré.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Éthique et normes professionnelles",
   "q": "À propos des principes généraux du code d'éthique de l'APA :",
   "a": [
    [
     "On y trouve l'intégrité et la justice.",
     true
    ],
    [
     "On y trouve l'obligation de publier les résultats de tous les tests.",
     false
    ],
    [
     "On y trouve la bienfaisance et la non-malfaisance.",
     true
    ]
   ],
   "e": "Les cinq principes comprennent aussi la fidélité et la responsabilité, ainsi que le respect des droits et de la dignité.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos des épreuves de conservation de Piaget :",
   "a": [
    [
     "Elles évaluent si l'enfant comprend qu'une quantité se conserve malgré un changement d'apparence.",
     true
    ],
    [
     "Elles sont réussies vers 7 ans, au stade opératoire concret.",
     true
    ],
    [
     "Elles sont réussies dès 2 ans.",
     false
    ]
   ],
   "e": "Un jeune enfant se laisse guider par l'apparence perceptive.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos de la tâche de Sally et Anne :",
   "a": [
    [
     "Elle évalue la dextérité manuelle.",
     false
    ],
    [
     "Baron-Cohen, Leslie et Frith l'ont utilisée en 1985.",
     true
    ],
    [
     "Elle évalue la compréhension des fausses croyances.",
     true
    ]
   ],
   "e": "Elle est liée à la théorie de l'esprit, développée vers 4 ans.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos du M-CHAT-R/F :",
   "a": [
    [
     "Il remplace un bilan diagnostique.",
     false
    ],
    [
     "Il comporte 20 items.",
     true
    ],
    [
     "C'est un outil de dépistage de l'autisme chez le jeune enfant.",
     true
    ]
   ],
   "e": "Il s'adresse à des enfants d'environ 16 à 30 mois.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos du test de Frostig :",
   "a": [
    [
     "Il évalue la perception visuelle.",
     true
    ],
    [
     "Il explore notamment la coordination oeil-main et la relation figure-fond.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ]
   ],
   "e": "Il a été largement utilisé dans le dépistage des difficultés d'apprentissage.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Fidélité",
   "q": "À propos de la correction d'atténuation (Spearman) :",
   "a": [
    [
     "Elle augmente l'erreur de mesure.",
     false
    ],
    [
     "Elle tient compte de la fidélité des deux mesures.",
     true
    ],
    [
     "Elle estime la corrélation entre deux variables si elles étaient mesurées sans erreur.",
     true
    ]
   ],
   "e": "Une faible fidélité fait mécaniquement baisser les corrélations observées.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Statistiques",
   "q": "Repères de Cohen pour le coefficient de corrélation r :",
   "a": [
    [
     "0,10 est un effet petit.",
     true
    ],
    [
     "0,50 est un effet petit.",
     false
    ],
    [
     "0,30 est un effet moyen.",
     true
    ]
   ],
   "e": "0,50 correspond à un effet grand selon ces repères conventionnels.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos de l'erreur standard d'estimation en régression :",
   "a": [
    [
     "Elle diminue quand la corrélation augmente.",
     true
    ],
    [
     "Elle augmente quand la corrélation se rapproche de 1.",
     false
    ],
    [
     "Elle indique la dispersion des valeurs observées autour de la droite de prédiction.",
     true
    ]
   ],
   "e": "Quand r = 1, la prédiction est parfaite et l'erreur d'estimation est nulle.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Étalonnage",
   "q": "À propos des méthodes d'échantillonnage :",
   "a": [
    [
     "L'échantillon de commodité garantit la représentativité.",
     false
    ],
    [
     "L'échantillon en grappes sélectionne des groupes entiers.",
     true
    ],
    [
     "L'échantillon stratifié respecte la répartition de la population selon certaines caractéristiques.",
     true
    ]
   ],
   "e": "Un échantillon de commodité est facile à obtenir, mais souvent biaisé.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Fidélité",
   "q": "À propos des seuils de fidélité selon l'usage (Nunnally) :",
   "a": [
    [
     "0,50 suffit pour des décisions individuelles importantes.",
     false
    ],
    [
     "Pour des décisions individuelles importantes, on attend au moins 0,90.",
     true
    ],
    [
     "Un coefficient d'environ 0,70 peut suffire pour la recherche exploratoire.",
     true
    ]
   ],
   "e": "Plus la décision est lourde de conséquences, plus la fidélité exigée est élevée.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Validité",
   "q": "À propos de la valeur prédictive positive d'un test de dépistage :",
   "a": [
    [
     "Elle ne dépend jamais de la prévalence.",
     false
    ],
    [
     "Elle dépend de la prévalence du trouble dans la population.",
     true
    ],
    [
     "Pour un même test, elle baisse quand le trouble est rare.",
     true
    ]
   ],
   "e": "Quand un trouble est rare, une grande part des résultats positifs sont de faux positifs.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Étalonnage",
   "q": "Calculs de notes standard :",
   "a": [
    [
     "La note T se calcule par 50 + 10 × z.",
     true
    ],
    [
     "Une note z de 1,5 correspond à une note T de 65.",
     true
    ],
    [
     "Une note z de 1,5 correspond à une note T de 51,5.",
     false
    ]
   ],
   "e": "T = 50 + 10 × 1,5 = 65.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Validité des méthodes de sélection",
   "q": "À propos des critères sans validité prédictive solide :",
   "a": [
    [
     "La graphologie a une validité proche de zéro.",
     true
    ],
    [
     "L'âge du candidat ne prédit pas la performance de façon utile.",
     true
    ],
    [
     "La longueur du nom d'un candidat prédit la performance.",
     false
    ]
   ],
   "e": "Il faut s'appuyer sur des méthodes dont la validité est démontrée.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Étalonnage",
   "q": "Seuils fréquemment utilisés en neuropsychologie :",
   "a": [
    [
     "Un z de −1 correspond au 50ᵉ percentile.",
     false
    ],
    [
     "Un z de −2 correspond environ au 2ᵉ percentile.",
     true
    ],
    [
     "Un z de −1,645 correspond environ au 5ᵉ percentile.",
     true
    ]
   ],
   "e": "z = −1 correspond environ au 16ᵉ percentile.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos du BASC-3 :",
   "a": [
    [
     "Il évalue le comportement et les émotions.",
     true
    ],
    [
     "Il évalue les aptitudes mécaniques.",
     false
    ],
    [
     "Il existe en versions pour les parents, les enseignants et l'enfant.",
     true
    ]
   ],
   "e": "Il couvre un large éventail d'âges, de 2 à 21 ans.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos du système ASEBA d'Achenbach :",
   "a": [
    [
     "Le CBCL est rempli par les parents.",
     true
    ],
    [
     "Le YSR est rempli par les enseignants.",
     false
    ],
    [
     "Le TRF est rempli par les enseignants.",
     true
    ]
   ],
   "e": "Le YSR (Youth Self-Report) est rempli par le jeune lui-même.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos des échelles de langage de Reynell :",
   "a": [
    [
     "Elles évaluent l'attention soutenue.",
     false
    ],
    [
     "Elles évaluent la compréhension et la production du langage.",
     true
    ],
    [
     "Elles s'adressent à de jeunes enfants.",
     true
    ]
   ],
   "e": "Elles servent au repérage de retards de langage.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos de l'ABAS-3 :",
   "a": [
    [
     "Il évalue le comportement adaptatif.",
     true
    ],
    [
     "Il comprend des domaines conceptuel, social et pratique.",
     true
    ],
    [
     "Il évalue la personnalité de l'adulte.",
     false
    ]
   ],
   "e": "Ces trois domaines correspondent à la définition de la déficience intellectuelle.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos du SNAP-IV :",
   "a": [
    [
     "Il évalue l'inattention et l'hyperactivité-impulsivité.",
     true
    ],
    [
     "Il comporte 18 items.",
     true
    ],
    [
     "Il évalue le QI.",
     false
    ]
   ],
   "e": "Il est rempli par les parents ou les enseignants.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Évaluation de l'autisme",
   "q": "À propos de l'ADI-R :",
   "a": [
    [
     "Il porte sur le développement et le comportement de la personne.",
     true
    ],
    [
     "C'est un entretien semi-structuré avec les parents.",
     true
    ],
    [
     "C'est un test de QI.",
     false
    ]
   ],
   "e": "Il est souvent associé à l'ADOS dans l'évaluation.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Évaluation de l'autisme",
   "q": "À propos de la CARS-2 :",
   "a": [
    [
     "Elle comporte 15 items.",
     true
    ],
    [
     "Elle est cotée par un clinicien à partir de l'observation.",
     true
    ],
    [
     "Elle est remplie uniquement par l'enfant.",
     false
    ]
   ],
   "e": "Son score s'étend de 15 à 60.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Validité des performances",
   "q": "À propos du TOMM (Test of Memory Malingering) :",
   "a": [
    [
     "Il comporte 50 items.",
     true
    ],
    [
     "Il vise à repérer une performance non sincère.",
     true
    ],
    [
     "Il évalue le vocabulaire.",
     false
    ]
   ],
   "e": "Sa difficulté est faible : une personne atteinte de troubles mnésiques le réussit généralement.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Validité des performances",
   "q": "À propos du test des 15 items de Rey :",
   "a": [
    [
     "Il s'agit d'un test court d'effort.",
     true
    ],
    [
     "Il utilise 150 items.",
     false
    ],
    [
     "Il utilise 15 items disposés sur trois colonnes.",
     true
    ]
   ],
   "e": "Les items ont une structure très simple, ce qui facilite le rappel.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Évaluation fonctionnelle",
   "q": "À propos de l'EQ-5D :",
   "a": [
    [
     "Il évalue cinq dimensions de la santé.",
     true
    ],
    [
     "Il évalue le QI.",
     false
    ],
    [
     "Il inclut la mobilité et la douleur.",
     true
    ]
   ],
   "e": "Il inclut aussi les soins personnels, les activités habituelles et l'anxiété-dépression.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Évaluation fonctionnelle",
   "q": "À propos du WHODAS 2.0 :",
   "a": [
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Il comprend des domaines comme la cognition et la mobilité.",
     true
    ],
    [
     "Il évalue le fonctionnement et le handicap.",
     true
    ]
   ],
   "e": "Il existe en versions de 36 items et de 12 items.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Évaluation fonctionnelle",
   "q": "À propos de la mesure de l'indépendance fonctionnelle (MIF) :",
   "a": [
    [
     "Elle comporte 18 items.",
     true
    ],
    [
     "Elle évalue la personnalité.",
     false
    ],
    [
     "Chaque item est coté sur 7 niveaux.",
     true
    ]
   ],
   "e": "Elle explore les domaines moteur et cognitif.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Évaluation fonctionnelle",
   "q": "À propos de l'échelle de coma de Glasgow :",
   "a": [
    [
     "Elle comprend l'ouverture des yeux, la réponse verbale et la réponse motrice.",
     true
    ],
    [
     "Son score va de 3 à 15.",
     true
    ],
    [
     "Son score va de 0 à 100.",
     false
    ]
   ],
   "e": "Elle évalue le niveau de conscience.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Évaluation fonctionnelle",
   "q": "À propos des échelles IADL de Lawton et ADL de Katz :",
   "a": [
    [
     "L'ADL de Katz évalue des activités de base comme se laver ou s'habiller.",
     true
    ],
    [
     "Elles évaluent les intérêts professionnels.",
     false
    ],
    [
     "L'IADL évalue des activités instrumentales comme les courses et la gestion des médicaments.",
     true
    ]
   ],
   "e": "Elles sont très utilisées en gériatrie.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Échelles de mesure subjective",
   "q": "À propos de l'échelle visuelle analogique (EVA) de la douleur :",
   "a": [
    [
     "Les extrémités représentent « pas de douleur » et « douleur maximale ».",
     true
    ],
    [
     "Elle évalue la mémoire.",
     false
    ],
    [
     "La personne marque l'intensité de sa douleur sur une ligne de 10 cm.",
     true
    ]
   ],
   "e": "C'est une mesure subjective et rapide.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Échelles de mesure subjective",
   "q": "À propos du questionnaire de la douleur de McGill :",
   "a": [
    [
     "Il décrit les dimensions sensorielle, affective et évaluative de la douleur.",
     true
    ],
    [
     "Il évalue le QI.",
     false
    ],
    [
     "Melzack l'a proposé en 1975.",
     true
    ]
   ],
   "e": "Il permet de décrire la douleur au-delà de son intensité.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Échelles de mesure subjective",
   "q": "À propos de l'échelle de Borg (perception de l'effort) :",
   "a": [
    [
     "Elle évalue l'anxiété.",
     false
    ],
    [
     "Elle évalue l'effort perçu à l'exercice.",
     true
    ],
    [
     "La version classique va de 6 à 20.",
     true
    ]
   ],
   "e": "Elle est utilisée en réadaptation et en physiologie de l'exercice.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Dépistage cognitif",
   "q": "À propos du MMSE :",
   "a": [
    [
     "Il évalue la personnalité.",
     false
    ],
    [
     "Son score maximal est de 30.",
     true
    ],
    [
     "Il explore l'orientation, l'enregistrement, l'attention et le calcul, le rappel et le langage.",
     true
    ]
   ],
   "e": "Il date de 1975, et son interprétation tient compte du niveau d'études.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Dépistage cognitif",
   "q": "À propos du Mini-Cog :",
   "a": [
    [
     "C'est un outil de dépistage rapide.",
     true
    ],
    [
     "Il combine le rappel de 3 mots et le dessin de l'horloge.",
     true
    ],
    [
     "C'est un test de personnalité.",
     false
    ]
   ],
   "e": "Son score va de 0 à 5.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Dépistage cognitif",
   "q": "À propos de l'influence du niveau d'études sur le MMSE :",
   "a": [
    [
     "Le niveau d'études n'a aucune influence sur le score.",
     false
    ],
    [
     "Un faible niveau d'études peut abaisser le score sans trouble cognitif.",
     true
    ],
    [
     "Des normes ajustées à l'éducation sont recommandées.",
     true
    ]
   ],
   "e": "Dans des populations peu scolarisées, un seuil unique peut mal classer les personnes.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Fidélité",
   "q": "Repères d'interprétation du kappa (Landis et Koch) :",
   "a": [
    [
     "Un kappa de 0,10 indique un accord presque parfait.",
     false
    ],
    [
     "Un kappa de 0,61 à 0,80 indique un accord substantiel.",
     true
    ],
    [
     "Un kappa supérieur à 0,80 indique un accord presque parfait.",
     true
    ]
   ],
   "e": "Ce sont des repères conventionnels, à interpréter avec prudence.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Fidélité",
   "q": "À propos d'un alpha de Cronbach très élevé :",
   "a": [
    [
     "Un alpha très élevé n'est pas une preuve de validité.",
     true
    ],
    [
     "Au-delà de 0,95, il peut signaler une redondance d'items.",
     true
    ],
    [
     "Un alpha supérieur à 0,95 est toujours souhaitable.",
     false
    ]
   ],
   "e": "Des items presque identiques augmentent l'alpha sans enrichir la mesure.",
   "p": "Fidélité et théorie classique"
  },
  {
   "s": "Analyse factorielle",
   "q": "À propos de la taille d'échantillon pour une analyse factorielle :",
   "a": [
    [
     "Un échantillon de 20 personnes suffit toujours.",
     false
    ],
    [
     "Une règle courante est d'avoir plusieurs participants par item.",
     true
    ],
    [
     "Un échantillon de 200 personnes ou plus est souvent recommandé.",
     true
    ]
   ],
   "e": "Plus l'échantillon est petit, plus les saturations sont instables.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Tests chez l'enfant",
   "q": "À propos des critères de la déficience intellectuelle (DSM-5) :",
   "a": [
    [
     "Elle suppose des déficits du fonctionnement intellectuel.",
     true
    ],
    [
     "Le QI seul suffit à poser le diagnostic.",
     false
    ],
    [
     "Elle suppose aussi des déficits du comportement adaptatif, débutant pendant la période de développement.",
     true
    ]
   ],
   "e": "Le diagnostic croise le QI et l'évaluation du comportement adaptatif.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Psychométrie avancée",
   "q": "À propos de la théorie de la généralisabilité :",
   "a": [
    [
     "Cronbach et ses collègues l'ont proposée en 1972.",
     true
    ],
    [
     "Elle permet de distinguer plusieurs sources d'erreur, comme les items, les juges et les occasions.",
     true
    ],
    [
     "Elle ne s'applique qu'à une seule source d'erreur.",
     false
    ]
   ],
   "e": "Elle étend la théorie classique, qui regroupe toute l'erreur en un seul terme.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Psychométrie avancée",
   "q": "À propos de la tau-équivalence :",
   "a": [
    [
     "Sans tau-équivalence, l'alpha sous-estime en général la fidélité.",
     true
    ],
    [
     "Elle signifie que tous les items sont indépendants.",
     false
    ],
    [
     "L'alpha de Cronbach suppose des items tau-équivalents.",
     true
    ]
   ],
   "e": "Tau-équivalence : les items mesurent le même trait avec les mêmes saturations.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Psychométrie avancée",
   "q": "À propos du modèle CHC de l'intelligence :",
   "a": [
    [
     "Il comporte trois strates.",
     true
    ],
    [
     "La strate supérieure correspond au facteur g.",
     true
    ],
    [
     "La strate intermédiaire comprend environ 70 aptitudes.",
     false
    ]
   ],
   "e": "La strate intermédiaire compte environ 8 à 10 grandes aptitudes. Les environ 70 aptitudes étroites forment la première strate.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Psychométrie avancée",
   "q": "Aptitudes larges du modèle CHC :",
   "a": [
    [
     "Gc correspond aux connaissances acquises.",
     true
    ],
    [
     "Gs correspond à la mémoire à long terme.",
     false
    ],
    [
     "Gf correspond au raisonnement fluide.",
     true
    ]
   ],
   "e": "Gs correspond à la vitesse de traitement.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Psychométrie avancée",
   "q": "Autres aptitudes larges du modèle CHC :",
   "a": [
    [
     "Gq correspond à la vitesse de traitement.",
     false
    ],
    [
     "Ga correspond au traitement auditif.",
     true
    ],
    [
     "Gv correspond au traitement visuel.",
     true
    ]
   ],
   "e": "Gq correspond aux connaissances quantitatives.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Construction de tests",
   "q": "À propos de la modalité de réponse « neutre » :",
   "a": [
    [
     "Elle améliore toujours la qualité des réponses.",
     false
    ],
    [
     "Un nombre pair de niveaux force le répondant à prendre position.",
     true
    ],
    [
     "Elle peut regrouper des personnes sans opinion et des personnes ambivalentes.",
     true
    ]
   ],
   "e": "Le choix dépend de l'objectif de la mesure.",
   "p": "Construction de tests et analyse d'items"
  },
  {
   "s": "Interprétation de scores",
   "q": "À propos des seuils d'interprétation du GAD-7 :",
   "a": [
    [
     "Un score de 2 suggère une anxiété sévère.",
     false
    ],
    [
     "Un score de 15 ou plus suggère une anxiété sévère.",
     true
    ],
    [
     "Les seuils de 5, 10 et 15 correspondent à une anxiété légère, modérée et sévère.",
     true
    ]
   ],
   "e": "Ces seuils guident la prise en charge, sans poser de diagnostic.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Interprétation de scores",
   "q": "À propos des seuils d'interprétation du BDI-II :",
   "a": [
    [
     "Un score de 14 à 19 correspond à une dépression sévère.",
     false
    ],
    [
     "Un score de 0 à 13 correspond à une dépression minimale.",
     true
    ],
    [
     "Un score de 29 à 63 correspond à une dépression sévère.",
     true
    ]
   ],
   "e": "14 à 19 correspond à une dépression légère.",
   "p": "Étalonnage et notes standard"
  },
  {
   "s": "Usage professionnel des tests",
   "q": "À propos de la classification des tests selon le niveau de qualification (A, B, C) :",
   "a": [
    [
     "Les tests de niveau C demandent une formation plus poussée.",
     true
    ],
    [
     "Elle distingue des tests selon la formation requise pour les utiliser.",
     true
    ],
    [
     "Tous les tests sont accessibles à n'importe qui.",
     false
    ]
   ],
   "e": "Les éditeurs réservent certains outils à des professionnels formés.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Usage professionnel des tests",
   "q": "À propos de la structure d'un rapport psychologique :",
   "a": [
    [
     "Il se limite à une liste de scores sans conclusion.",
     false
    ],
    [
     "Il présente les résultats et une synthèse.",
     true
    ],
    [
     "Il rappelle la demande et le contexte.",
     true
    ]
   ],
   "e": "Il se termine généralement par des recommandations.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Usage professionnel des tests",
   "q": "À propos des conclusions d'un bilan psychologique :",
   "a": [
    [
     "Elles doivent répondre à la question posée au départ.",
     true
    ],
    [
     "Elles reposent sur un seul score isolé.",
     false
    ],
    [
     "Elles s'appuient sur plusieurs sources d'information convergentes.",
     true
    ]
   ],
   "e": "L'entretien, les observations et plusieurs tests se complètent.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Usage professionnel des tests",
   "q": "À propos des sources d'information sur les tests :",
   "a": [
    [
     "Les manuels des tests fournissent les données de fidélité et de validité.",
     true
    ],
    [
     "Les critiques de tests n'existent pas.",
     false
    ],
    [
     "Le Mental Measurements Yearbook de Buros publie des critiques de tests.",
     true
    ]
   ],
   "e": "Buros a lancé cette série en 1938.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Sélection du personnel",
   "q": "À propos des tables de Taylor-Russell :",
   "a": [
    [
     "Elles estiment la proportion de réussites en fonction de la validité, du ratio de sélection et du taux de base.",
     true
    ],
    [
     "Un test peu valide peut être utile si le ratio de sélection est très faible.",
     true
    ],
    [
     "Elles ne dépendent pas de la validité du test.",
     false
    ]
   ],
   "e": "Plus on sélectionne parmi un grand nombre de candidats, plus le test devient utile.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Sélection du personnel",
   "q": "À propos du modèle d'utilité de Brogden-Cronbach-Gleser :",
   "a": [
    [
     "Il tient compte de la validité et de la variabilité de la performance.",
     true
    ],
    [
     "Il ignore le coût du test.",
     false
    ],
    [
     "Il estime le gain financier d'un test de sélection.",
     true
    ]
   ],
   "e": "Le coût du test est retiré du gain estimé.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Sélection du personnel",
   "q": "À propos de la règle des quatre cinquièmes (80 %) :",
   "a": [
    [
     "Elle mesure la fidélité d'un test.",
     false
    ],
    [
     "Le taux de sélection d'un groupe est comparé à celui du groupe le plus sélectionné.",
     true
    ],
    [
     "Elle sert à repérer un effet disproportionné de la sélection sur un groupe.",
     true
    ]
   ],
   "e": "Elle est utilisée dans la réglementation américaine sur l'emploi.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Sélection du personnel",
   "q": "À propos de la préparation aux tests :",
   "a": [
    [
     "La familiarité avec les tests est une source possible d'inégalités.",
     true
    ],
    [
     "Se familiariser avec le format peut augmenter le score.",
     true
    ],
    [
     "La préparation n'a jamais aucun effet.",
     false
    ]
   ],
   "e": "Les épreuves nouvelles pour le candidat sont les plus sensibles à la pratique.",
   "p": "Validité, équité et sélection"
  },
  {
   "s": "Histoire des tests",
   "q": "À propos des éditions successives des échelles de Wechsler :",
   "a": [
    [
     "Le WISC date de 1949 et le WISC-V de 2014.",
     true
    ],
    [
     "Le WAIS-IV date de 2008.",
     true
    ],
    [
     "Le WISC-V date de 1974.",
     false
    ]
   ],
   "e": "Le WISC-R date de 1974.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des tests",
   "q": "À propos de l'histoire du Stanford-Binet :",
   "a": [
    [
     "La cinquième édition date de 2003.",
     true
    ],
    [
     "La cinquième édition date de 1916.",
     false
    ],
    [
     "La révision de Terman date de 1916.",
     true
    ]
   ],
   "e": "Il en existe plusieurs éditions entre ces deux dates.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des tests",
   "q": "À propos de l'histoire du Rorschach :",
   "a": [
    [
     "Le système intégré d'Exner date des années 1970.",
     true
    ],
    [
     "Le Rorschach a été publié en 1960.",
     false
    ],
    [
     "Le R-PAS a été proposé en 2011.",
     true
    ]
   ],
   "e": "Hermann Rorschach l'a publié en 1921.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des tests",
   "q": "À propos de l'histoire des matrices de Raven :",
   "a": [
    [
     "Les matrices standard datent de 1980.",
     false
    ],
    [
     "Les matrices colorées datent de 1947.",
     true
    ],
    [
     "Les matrices progressives standard datent de 1938.",
     true
    ]
   ],
   "e": "Les matrices avancées datent de 1943.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Histoire des tests",
   "q": "À propos de l'histoire du Big Five :",
   "a": [
    [
     "Le Big Five a été proposé en 1900.",
     false
    ],
    [
     "Tupes et Christal ont mis en évidence cinq facteurs en 1961.",
     true
    ],
    [
     "Costa et McCrae ont développé le NEO-PI dans les années 1980.",
     true
    ]
   ],
   "e": "Goldberg a diffusé l'expression « Big Five » en 1981.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Théories de l'intelligence",
   "q": "À propos du modèle hiérarchique de Vernon (1950) :",
   "a": [
    [
     "Il distingue deux grands groupes de facteurs, verbal-éducatif et spatial-mécanique.",
     true
    ],
    [
     "Il place le facteur g au sommet.",
     true
    ],
    [
     "Il rejette l'idée d'un facteur général.",
     false
    ]
   ],
   "e": "C'est l'un des premiers modèles hiérarchiques de l'intelligence.",
   "p": "QI et théories de l'intelligence"
  },
  {
   "s": "Anxiété d'évaluation",
   "q": "À propos de l'anxiété face aux tests :",
   "a": [
    [
     "Il distingue l'inquiétude et l'émotivité.",
     true
    ],
    [
     "L'anxiété d'évaluation n'influence jamais les performances.",
     false
    ],
    [
     "Le Test Anxiety Inventory de Spielberger comporte 20 items.",
     true
    ]
   ],
   "e": "Une anxiété élevée peut perturber l'attention et la mémoire de travail.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Usage professionnel des tests",
   "q": "À propos de la passation d'un test auprès d'une personne bilingue :",
   "a": [
    [
     "Les normes établies auprès de personnes monolingues peuvent ne pas convenir.",
     true
    ],
    [
     "La langue de passation n'a jamais d'importance.",
     false
    ],
    [
     "Le choix de la langue de passation influence les résultats.",
     true
    ]
   ],
   "e": "Il faut interpréter les résultats avec prudence.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Statistiques",
   "q": "À propos des données manquantes :",
   "a": [
    [
     "Supprimer toutes les personnes ayant une donnée manquante peut réduire l'échantillon.",
     true
    ],
    [
     "L'imputation permet de remplacer les valeurs manquantes par des estimations.",
     true
    ],
    [
     "Les données manquantes n'ont jamais d'effet sur les résultats.",
     false
    ]
   ],
   "e": "La méthode choisie dépend de la quantité et de l'origine des données manquantes.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Usage professionnel des tests",
   "q": "À propos des hypothèses convergentes en interprétation :",
   "a": [
    [
     "Un seul résultat suffit à confirmer une hypothèse.",
     false
    ],
    [
     "Une hypothèse est plus solide si plusieurs sources d'information convergent.",
     true
    ],
    [
     "Un résultat isolé peut s'expliquer par un facteur situationnel.",
     true
    ]
   ],
   "e": "On confronte tests, entretien et observations.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Histoire des tests",
   "q": "À propos de l'effet Stroop :",
   "a": [
    [
     "John Ridley Stroop a publié son étude en 1935.",
     true
    ],
    [
     "Il a été décrit en 1900.",
     false
    ],
    [
     "L'effet vient du caractère automatique de la lecture.",
     true
    ]
   ],
   "e": "Nommer la couleur de l'encre est ralenti quand le mot désigne une autre couleur.",
   "p": "Histoire de la psychométrie"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Un test a un écart-type de 15 et une fidélité de 0,91.",
   "a": [
    [
     "L'erreur standard de mesure est de 4,5.",
     true
    ],
    [
     "L'erreur standard de mesure est de 9.",
     false
    ],
    [
     "L'intervalle de confiance à 95 % est d'environ ± 8,8.",
     true
    ]
   ],
   "e": "SEM = 15 × √(1 − 0,91) = 15 × 0,3 = 4,5. Puis 1,96 × 4,5 ≈ 8,8.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Un score de 70 est obtenu dans une distribution de moyenne 50 et d'écart-type 10.",
   "a": [
    [
     "La note z est de 2.",
     true
    ],
    [
     "La note z est de 20.",
     false
    ],
    [
     "La note T est de 70.",
     true
    ]
   ],
   "e": "z = (70 − 50) ÷ 10 = 2, et T = 50 + 10 × 2 = 70.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Conversion en stanines (stanine ≈ 2z + 5).",
   "a": [
    [
     "z = −1,5 correspond à la stanine 8.",
     false
    ],
    [
     "z = 0 correspond à la stanine 5.",
     true
    ],
    [
     "z = 1 correspond à la stanine 7.",
     true
    ]
   ],
   "e": "z = −1,5 donne 2 × (−1,5) + 5 = 2.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Dans un test, 30 personnes sur 40 réussissent l'item 12.",
   "a": [
    [
     "L'item est plutôt facile.",
     true
    ],
    [
     "L'indice de difficulté est de 0,25.",
     false
    ],
    [
     "L'indice de difficulté est de 0,75.",
     true
    ]
   ],
   "e": "30 ÷ 40 = 0,75.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Deux juges s'accordent dans 90 % des cas. Le hasard produirait 50 % d'accords.",
   "a": [
    [
     "Le kappa est de 0,80.",
     true
    ],
    [
     "La formule est (po − pe) ÷ (1 − pe).",
     true
    ],
    [
     "Le kappa est de 0,40.",
     false
    ]
   ],
   "e": "(0,90 − 0,50) ÷ (1 − 0,50) = 0,80.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Un test de dépistage donne 90 vrais positifs, 10 faux négatifs, 80 vrais négatifs et 20 faux positifs.",
   "a": [
    [
     "La sensibilité est de 0,90.",
     true
    ],
    [
     "La spécificité est de 0,80.",
     true
    ],
    [
     "La valeur prédictive positive est de 0,90.",
     false
    ]
   ],
   "e": "VPP = 90 ÷ (90 + 20) ≈ 0,82.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs psychométriques",
   "q": "Une corrélation de 0,6, avec un écart-type de 15 pour y et de 10 pour x.",
   "a": [
    [
     "La pente de régression est de 0,9.",
     true
    ],
    [
     "La formule est b = r × (sy ÷ sx).",
     true
    ],
    [
     "La pente est de 0,6.",
     false
    ]
   ],
   "e": "b = 0,6 × 15 ÷ 10 = 0,9.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Fondements de la psychométrie",
   "q": "À propos de Cronbach (1957) :",
   "a": [
    [
     "Il a décrit deux disciplines de la psychologie scientifique.",
     true
    ],
    [
     "Il a décrit deux types de tests projectifs.",
     false
    ],
    [
     "L'une est expérimentale, l'autre corrélationnelle.",
     true
    ]
   ],
   "e": "Il a plaidé pour une rencontre entre les deux approches.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Fondements de la psychométrie",
   "q": "À propos de Lord et Novick (1968) :",
   "a": [
    [
     "Leur ouvrage a posé des bases de la théorie des tests.",
     true
    ],
    [
     "Ils ont créé le test de Rorschach.",
     false
    ],
    [
     "Ils ont contribué à la formalisation de la théorie de réponse à l'item.",
     true
    ]
   ],
   "e": "Leur livre est un ouvrage de référence en théorie des tests.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Fondements de la psychométrie",
   "q": "À propos de l'approche de la validité de Kane :",
   "a": [
    [
     "Elle se limite à un seul coefficient de corrélation.",
     false
    ],
    [
     "Elle repose sur une argumentation qui relie les scores à leur interprétation.",
     true
    ],
    [
     "Elle demande des preuves pour chaque étape de l'argument.",
     true
    ]
   ],
   "e": "Elle est qualifiée d'approche par argument.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Fondements de la psychométrie",
   "q": "À propos des premiers standards professionnels :",
   "a": [
    [
     "L'APA a publié des recommandations techniques sur les tests en 1954.",
     true
    ],
    [
     "Ces textes sont à l'origine des Standards actuels.",
     true
    ],
    [
     "Les premiers standards datent de 1990.",
     false
    ]
   ],
   "e": "Les Standards ont été révisés à plusieurs reprises depuis.",
   "p": "TRI, analyse factorielle et fondements"
  },
  {
   "s": "Interprétation neuropsychologique",
   "q": "À propos des scores bas dans une longue batterie de tests :",
   "a": [
    [
     "Chez des personnes en bonne santé, quelques scores bas apparaissent souvent.",
     true
    ],
    [
     "Plus on administre de tests, plus la probabilité d'un score bas isolé augmente.",
     true
    ],
    [
     "Un seul score bas prouve toujours un trouble.",
     false
    ]
   ],
   "e": "Il faut interpréter l'ensemble du profil, pas un seul résultat.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Interprétation neuropsychologique",
   "q": "À propos des tests d'estimation du niveau prémorbide :",
   "a": [
    [
     "Ils s'appuient sur la lecture de mots, relativement préservée dans certains troubles.",
     true
    ],
    [
     "Ils évaluent la personnalité.",
     false
    ],
    [
     "Le WTAR et le TOPF en sont des exemples.",
     true
    ]
   ],
   "e": "La lecture de mots irréguliers dépend surtout de connaissances anciennes.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Interprétation neuropsychologique",
   "q": "À propos du Reliable Digit Span :",
   "a": [
    [
     "Il évalue le vocabulaire.",
     false
    ],
    [
     "Il se calcule à partir de l'empan de chiffres à l'endroit et à l'envers.",
     true
    ],
    [
     "Un score bas peut suggérer un manque d'effort.",
     true
    ]
   ],
   "e": "Un score inférieur ou égal à 7 est souvent considéré comme un signal d'alerte.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Langage de l'enfant",
   "q": "À propos de l'ELO (Évaluation du langage oral) :",
   "a": [
    [
     "Elle évalue les aptitudes numériques.",
     false
    ],
    [
     "Elle explore la compréhension et la production.",
     true
    ],
    [
     "Elle évalue le langage oral de l'enfant.",
     true
    ]
   ],
   "e": "Elle a été conçue par Khomsi.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Langage de l'enfant",
   "q": "À propos de la N-EEL :",
   "a": [
    [
     "Elle est d'origine francophone.",
     true
    ],
    [
     "Elle évalue les intérêts professionnels.",
     false
    ],
    [
     "C'est une batterie d'examen du langage de l'enfant.",
     true
    ]
   ],
   "e": "Elle a été conçue notamment par Chevrie-Muller.",
   "p": "Tests chez l'enfant"
  },
  {
   "s": "Dépendances et changement",
   "q": "À propos de l'Addiction Severity Index (ASI) :",
   "a": [
    [
     "Il explore plusieurs domaines de vie, comme la santé, l'emploi et la consommation.",
     true
    ],
    [
     "Il évalue le QI.",
     false
    ],
    [
     "McLellan en est l'auteur.",
     true
    ]
   ],
   "e": "Il comprend sept domaines.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Dépendances et changement",
   "q": "À propos du modèle transthéorique de Prochaska et DiClemente :",
   "a": [
    [
     "Il décrit des stades de développement cognitif de Piaget.",
     false
    ],
    [
     "Il décrit des stades du changement, comme la contemplation et l'action.",
     true
    ],
    [
     "La précontemplation correspond à une absence d'intention de changer.",
     true
    ]
   ],
   "e": "Il est très utilisé en addictologie et en promotion de la santé.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Qualité de vie",
   "q": "À propos de l'EORTC QLQ-C30 :",
   "a": [
    [
     "Il comporte 30 items.",
     true
    ],
    [
     "C'est un questionnaire de qualité de vie en cancérologie.",
     true
    ],
    [
     "Il évalue le QI.",
     false
    ]
   ],
   "e": "Il est utilisé dans de nombreux essais cliniques.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Qualité de vie",
   "q": "À propos du FACT-G :",
   "a": [
    [
     "Il comporte 27 items.",
     true
    ],
    [
     "Il évalue les aptitudes numériques.",
     false
    ],
    [
     "Il évalue la qualité de vie de patients atteints de cancer.",
     true
    ]
   ],
   "e": "Il explore le bien-être physique, social, émotionnel et fonctionnel.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Humeur et fatigue",
   "q": "À propos du Profile of Mood States (POMS) :",
   "a": [
    [
     "Il comporte 65 items.",
     true
    ],
    [
     "Il évalue l'intelligence.",
     false
    ],
    [
     "Il évalue six états d'humeur, dont la tension-anxiété et la fatigue.",
     true
    ]
   ],
   "e": "Il explore aussi la dépression, la colère, la vigueur et la confusion.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Humeur et fatigue",
   "q": "À propos de la Fatigue Severity Scale :",
   "a": [
    [
     "Chaque item se cote de 1 à 7.",
     true
    ],
    [
     "Elle évalue la dextérité.",
     false
    ],
    [
     "Elle comporte 9 items.",
     true
    ]
   ],
   "e": "Krupp et ses collègues l'ont proposée en 1989.",
   "p": "Évaluation clinique, fonctionnelle et neuropsychologique"
  },
  {
   "s": "Statistiques",
   "q": "À propos des scores ipsatifs :",
   "a": [
    [
     "Ils se prêtent mal aux comparaisons directes entre personnes.",
     true
    ],
    [
     "Ils comparent les traits d'une personne entre eux.",
     true
    ],
    [
     "Ils se comparent sans précaution entre candidats.",
     false
    ]
   ],
   "e": "Le format à choix forcé produit souvent des scores ipsatifs.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos d'une distribution bimodale :",
   "a": [
    [
     "Elle présente deux sommets.",
     true
    ],
    [
     "Elle est identique à une distribution normale.",
     false
    ],
    [
     "Elle peut suggérer deux sous-populations.",
     true
    ]
   ],
   "e": "La moyenne peut alors être peu représentative.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Statistiques",
   "q": "À propos des tests de normalité :",
   "a": [
    [
     "Le test de Shapiro-Wilk évalue l'écart à la loi normale.",
     true
    ],
    [
     "Le test de Kolmogorov-Smirnov peut aussi être utilisé.",
     true
    ],
    [
     "Ils évaluent la fidélité d'un test.",
     false
    ]
   ],
   "e": "Une valeur de p faible indique un écart significatif à la normalité.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Standardisation de la passation",
   "q": "À propos de la lecture des consignes d'un test standardisé :",
   "a": [
    [
     "Les consignes se lisent telles qu'elles sont écrites.",
     true
    ],
    [
     "L'examinateur peut les reformuler librement.",
     false
    ],
    [
     "Cela garantit que tous passent le test dans les mêmes conditions.",
     true
    ]
   ],
   "e": "Toute modification peut fausser la comparaison avec les normes.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Standardisation de la passation",
   "q": "À propos des conditions de passation :",
   "a": [
    [
     "Le lieu doit être calme et bien éclairé.",
     true
    ],
    [
     "Le bruit n'a aucun effet sur les résultats.",
     false
    ],
    [
     "Les interruptions doivent être évitées.",
     true
    ]
   ],
   "e": "Les conditions matérielles peuvent influencer les résultats.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Standardisation de la passation",
   "q": "À propos du rapport avec la personne évaluée :",
   "a": [
    [
     "Il faut l'encourager sans lui donner la réponse.",
     true
    ],
    [
     "Il faut mettre la personne à l'aise avant de commencer.",
     true
    ],
    [
     "Il faut lui faire sentir que le test est un jugement sur sa valeur.",
     false
    ]
   ],
   "e": "Un climat de confiance favorise une performance représentative.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Standardisation de la passation",
   "q": "À propos des erreurs de cotation :",
   "a": [
    [
     "Elles n'ont jamais d'effet sur l'interprétation.",
     false
    ],
    [
     "Elles sont fréquentes, notamment dans les additions de points.",
     true
    ],
    [
     "Une double vérification permet de les limiter.",
     true
    ]
   ],
   "e": "Une petite erreur peut déplacer un score dans une autre catégorie.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Standardisation de la passation",
   "q": "Lorsque la passation s'écarte de la procédure standard :",
   "a": [
    [
     "Les résultats doivent être interprétés avec prudence.",
     true
    ],
    [
     "On peut l'ignorer.",
     false
    ],
    [
     "L'écart doit être noté dans le rapport.",
     true
    ]
   ],
   "e": "Par exemple : interruption, fatigue marquée ou aménagement particulier.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Tests emblématiques",
   "q": "À propos des échelles cliniques du MMPI-2 :",
   "a": [
    [
     "Elles comprennent la dépression et la paranoïa.",
     true
    ],
    [
     "Elles sont au nombre de trois.",
     false
    ],
    [
     "Elles sont au nombre de dix.",
     true
    ]
   ],
   "e": "Hs, D, Hy, Pd, Mf, Pa, Pt, Sc, Ma et Si.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Tests emblématiques",
   "q": "À propos de la planche 1 du TAT :",
   "a": [
    [
     "Elle est utilisée dans la plupart des séries.",
     true
    ],
    [
     "Elle représente un paysage sans personnage.",
     false
    ],
    [
     "Elle représente un garçon qui contemple un violon.",
     true
    ]
   ],
   "e": "Elle est souvent la première planche présentée.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Tests emblématiques",
   "q": "À propos de la planche 16 du TAT :",
   "a": [
    [
     "Elle montre un violon.",
     false
    ],
    [
     "Le sujet doit imaginer une scène puis raconter une histoire.",
     true
    ],
    [
     "Elle est une planche blanche.",
     true
    ]
   ],
   "e": "Elle stimule l'imagination sans support visuel.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Choix des tests statistiques",
   "q": "À propos du choix du test statistique (cas courants) :",
   "a": [
    [
     "La corrélation de Pearson relie deux variables continues.",
     true
    ],
    [
     "Pour comparer deux mesures appariées, on utilise un test t apparié.",
     true
    ],
    [
     "Le test t apparié compare deux groupes indépendants.",
     false
    ]
   ],
   "e": "Pour deux groupes indépendants, on utilise un test t pour échantillons indépendants.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Choix des tests statistiques",
   "q": "À propos des tests non paramétriques :",
   "a": [
    [
     "Ils supposent toujours une distribution normale.",
     false
    ],
    [
     "Le test de Mann-Whitney remplace le test t indépendant lorsque les conditions ne sont pas remplies.",
     true
    ],
    [
     "Ils ne supposent pas une distribution normale.",
     true
    ]
   ],
   "e": "Ils s'appuient souvent sur les rangs plutôt que sur les valeurs.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Choix des tests statistiques",
   "q": "À propos des comparaisons post hoc après une ANOVA :",
   "a": [
    [
     "Elles remplacent l'ANOVA.",
     false
    ],
    [
     "Elles précisent quels groupes diffèrent.",
     true
    ],
    [
     "Le test de Tukey en est un exemple.",
     true
    ]
   ],
   "e": "L'ANOVA indique qu'une différence existe, sans dire entre quels groupes.",
   "p": "Statistiques et choix des tests"
  },
  {
   "s": "Éthique et déontologie",
   "q": "À propos de la remise des données brutes d'un test :",
   "a": [
    [
     "Cela protège la sécurité du test et la bonne interprétation.",
     true
    ],
    [
     "Elles peuvent être diffusées librement.",
     false
    ],
    [
     "Elles ne sont communiquées qu'à des professionnels qualifiés.",
     true
    ]
   ],
   "e": "Un profane peut mal interpréter des données brutes.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Éthique et déontologie",
   "q": "À propos de l'évaluation d'un mineur :",
   "a": [
    [
     "L'avis de l'enfant n'a aucune importance.",
     false
    ],
    [
     "Le consentement du représentant légal est requis.",
     true
    ],
    [
     "L'assentiment de l'enfant est recherché selon son âge.",
     true
    ]
   ],
   "e": "Il s'agit de respecter l'enfant autant que le cadre légal.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Éthique et déontologie",
   "q": "À propos de la double fonction en contexte judiciaire :",
   "a": [
    [
     "Il faut éviter d'être à la fois thérapeute et expert pour la même personne.",
     true
    ],
    [
     "Il est recommandé de cumuler les deux rôles.",
     false
    ],
    [
     "Les rôles de soin et d'expertise ont des objectifs différents.",
     true
    ]
   ],
   "e": "Le thérapeute travaille pour la personne, l'expert pour la justice.",
   "p": "Pratique professionnelle et éthique"
  },
  {
   "s": "Calculs de base",
   "q": "Série de scores : 2, 4, 6, 8.",
   "a": [
    [
     "La variance (population) est de 5.",
     true
    ],
    [
     "La moyenne est de 5.",
     true
    ],
    [
     "L'écart-type est de 5.",
     false
    ]
   ],
   "e": "Les écarts au carré sont 9, 1, 1 et 9 : 20 ÷ 4 = 5. L'écart-type vaut √5 ≈ 2,24.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs de base",
   "q": "Sur 200 personnes, 60 obtiennent un score inférieur à celui de Marie.",
   "a": [
    [
     "60 ÷ 200 = 0,30.",
     true
    ],
    [
     "Le rang percentile de Marie est d'environ 60.",
     false
    ],
    [
     "Le rang percentile de Marie est d'environ 30.",
     true
    ]
   ],
   "e": "Le rang percentile correspond à la proportion de scores inférieurs.",
   "p": "Calculs psychométriques"
  },
  {
   "s": "Calculs de base",
   "q": "Test à 20 items cotés 0 ou 1 : 15 items réussis.",
   "a": [
    [
     "Le pourcentage de réussite est de 75 %.",
     true
    ],
    [
     "Le pourcentage de réussite est de 85 %.",
     false
    ],
    [
     "Le score brut est de 15.",
     true
    ]
   ],
   "e": "15 ÷ 20 = 0,75.",
   "p": "Calculs psychométriques"
  }
 ]
};
