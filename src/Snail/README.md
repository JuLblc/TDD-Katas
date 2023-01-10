# Snail

## Definition

Un colimaçon de taille n est un tableau de largeur n, et de longeur n, dont les
cases intérieures sont numérotes de 1 a n\*n sous forme de spirale.

Concrètement, un colimaçon de cote 3 se présente de la façon suivante:

1 2 3

8 9 4

7 6 5

## ToDo

Ecrire une classe Snail comprenant une
méthode statique "render" prenant en argument la taille du colimaçon et
renvoyant la représentation HTML du colimaçon.

La représentation HTLM d'un colimaçon est une table HTML. Une table HTML
commence et se termine par les balises `<table>` et `</table>` et comprend une ou
plusieurs lignes. Une ligne HTML commence et se termine par les balises `<tr>` et
`</tr>` et comprend une ou plusieurs cellules. Une cellule HTML commence et se
termine par les balises `<td>` et `</td>` Afin de bien voir les cases du colimaçon
une bordure de 1 pixel sera rajoute au tableau.

La taille d'un colimaçon est un entier positif. On considère qu'un colimaçon de
taille nulle (0) a une représentation HTML vide ("").

## Exemples

render(1) ==> `<table border=1><tr><td>1</td></tr></table>`

render(2) ==> `<table border=1><tr><td>1</td><td>2</td></tr><tr><td>4</td><td>3</td></tr></table>`

render(3) ==> `<table border=1><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>8</td><td>9</td><td>4</td></tr><tr><td>7</td><td>6</td><td>5</td></tr></table>`
