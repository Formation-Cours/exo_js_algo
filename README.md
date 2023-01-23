# Exo JS (Algo) du 23 / 01 / 2023

### [lien exo](https://olprog-formation.notion.site/Exo-JavaScript-3769029095374b1e83f98914229cba8b)

<details><summary>1</summary>

  Une séance de cinéma est interdite aux moins de 16 ans.

  Le prix du billet varie avec l’age : les seniors (plus de 65 ans) et les mineurs (moins de 18 ans) paient un tarif réduit, les autres un tarif plein.

  **Écrire** un programme qui demande à un utilisateur de saisir son age et qui lui donne une réponse quant à son autorisation de voir le film ainsi que le tarif du billet.

  > *Exemple : si l’utilisateur saisit 22 , le programme doit afficher « Vous pouvez-voir ce film, le billet est au plein tarif. »*
</details>
<details><summary>2</summary>

  Une année est **bissextile** si elle est divisible par 4 mais non divisible par 100. Les années divisibles par 400 sont également bissextiles.

  **Écrire** un programme qui demande à l’utilisateur de saisir une année, et qui affiche un message pour préciser si cette année est bissextile ou non.
</details>
</details>
<details><summary>3</summary>
    - Écrire un programme qui affiche un triangle de taille ***n*** avec des étoiles.

  > Indication : on peut utiliser la multiplication d’un entier par une chaîne.
  >

  *par exemple, pour n = 3, le programme devra afficher :*

    ```bash
    *
    * *
    * * *
    ```

</details>
<details><summary>4</summary>
  Accepter quatre chaînes de caractères quelconques dans un appel de la fonction lire()
  Ecrivez un programme qui prend quatre noms en entrée d'un utilisateur dans un seul appel de fonction lire().

  Exemple :

    ```bash
    Entrez 4 noms : Benedicte Edith Wafaa Hasnae
    Nom 1 : Benedicte
    Nom 2 : Edith
    Nom 3 : Wafaa
    Nom 4 : Hasnae 
    ```
</details>
<details><summary>5</summary>
  Écrivez un programme pour imprimer le modèle de chiffres suivant en utilisant une boucle.

    ```bash
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5
    ```
</details>
<details><summary>6</summary>
  Écrivez un programme qui utilise une boucle for pour imprimer le modèle de nombres inversés suivant :

    ```bash
    5 4 3 2 1 
    4 3 2 1 
    3 2 1 
    2 1 
    1
    ```
</details>
<details><summary>7</summary>
  La séquence de Fibonacci est une série de nombres. Le nombre suivant est trouvé en additionnant les deux nombres qui le précèdent. Les deux premiers nombres sont 0 et 1.

  Écrivez un programme qui demande à l’utilisateur de rentrer une limite d’affichage de la suite.

  Par exemple, 0, 1, 1, 2, 3, 5, 8, 13, 21. Le nombre suivant dans cette série ci-dessus est 13+21 = 34.

    ```bash
    Séquence Fibonacci:
    0  1  1  2  3  5  8  13  21  34
    ```
</details>
<details><summary>8</summary>
  Écrivez un programme qui utilise la boucle pour trouver la factorielle d'un nombre donné.

  La factorielle (symbole : !) consiste à multiplier tous les nombres entiers à partir du nombre choisi jusqu'à 1.

  Par exemple : calculer la factorielle de 5

    ```bash
    5! = 5 × 4 × 3 × 2 × 1 = 120
    ```
</details>
<details><summary>9</summary>
  Utilisez une boucle pour afficher les éléments d'une liste donnée présents à des positions d'index impaires.

    ```javascript
    const my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    ```

    ```javascript
    # résultat
    20 40 60 80 100
    ```
</details>
<details><summary>10</summary>
  Ecrivez un programme pour calculer la somme de séries jusqu'à n termes.

  Par exemple, si `n = 5`, la série sera 2 + 22 + 222 + 2222 + 22222 = 24690.
</details>
<details><summary>11</summary>
  Écrivez un programme pour créer la fonction calculation() de sorte qu'elle puisse accepter deux variables et calculer l'addition et la soustraction. De plus, elle doit renvoyer l'addition et la soustraction dans un seul appel de retour.

    ```javascript
    function calculation(a, b){
        # Your Code
    }
    
    const res = calculation(40, 10)
    print(res)
    ```

    ```bash
    # Résultat
    (50, 30)
    ```
</details>
<details><summary>12</summary>
  Écrivez un programme pour créer une fonction show_employee() en utilisant les conditions suivantes.

  Elle doit accepter le nom et le salaire de l'employé et les afficher.
  Si le salaire est absent de l'appel de la fonction, attribuez la valeur par défaut 9000 au salaire.

    ```javascript
    show_employee("Ben", 12000)
    show_employee("Jessa")
    ```

    ```bash
    # résultat
    Nom : Ben a un salaire de 12000
    Nom : Jessa a un salaire de 9000
    ```
</details>
<details><summary>13</summary>
  Ecrivez un programme pour ajouter deux listes par index. Créez une nouvelle liste qui contient le 0ème élément d'index des deux listes, puis le 1er élément d'index, et ainsi de suite jusqu'au dernier élément. Tous les éléments restants seront ajoutés à la fin de la nouvelle liste.

    ```javascript
    const list1 = ["M", "na", "i", "Ke"]
    const list2 = ["y", "me", "s", "lly"]
    ```

    ```bash
    # résultat
    ['My', 'name', 'is', 'Kelly']
    ```
</details>
<details><summary>14</summary>
  Étant donné une liste de nombres, écrivez un programme qui transforme chaque élément de la liste en son carré.

    ```javascript
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    ```

    ```bash
    # résultat
    [1, 4, 9, 16, 25, 36, 49]
    ```
</details>
<details><summary>15</summary>
  Étant donné une liste JavaScript, écrivez un programme pour supprimer toutes les occurrences de l'élément 20.

    ```javascript
    const list1 = [5, 20, 15, 20, 25, 50, 20]
    ```

    ```bash
    # résultat
    [5, 15, 25, 50]
    ```
</details>
<details><summary>Bonus</summary>
    - Écrire une [fonction](http://info.blaisepascal.fr/python-fonctions-et-procedures) compter_lettres(texte) ayant pour argument une [chaîne de caractères](http://info.blaisepascal.fr/python-chaines-de-caracteres) et qui renvoie un [dictionnaire](http://info.blaisepascal.fr/python-dictionnaires) qui contient la fréquence de toutes les lettres de la chaîne entrée.

  Exemple, compter_lettres("L'informatique, c'est fantastique !") doit renvoyer :  
    
    ```bash
    {'t': 4, 'n': 2, 'i': 3, ',': 1, 'o': 1, ' ': 3, 'f': 2, 'm': 1, "'": 2, 's': 2, 'L': 1, 'u': 2, 'c': 1, 'r': 1, 'e': 3, '!': 1, 'a': 3, 'q': 2}
    ```
</details>