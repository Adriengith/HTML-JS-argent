argentgagne = 0
totalargent = 0
i = 0
dico = {1:10, 2:20, 3:30, 4:40, 5:50, 6:100, 7:200, 8:400, 9:600, 10:1000}

while i < 1:
    print("Votre argent gagné :",(totalargent),"€")
    cadeau = input("Veux-tu gagner de l'argent ? : ")
    if cadeau=="oui":
        nombre = input("Choisis un nombre entre 1 et 10 et découvres combien tu gagneras :")
        nombre = int(nombre)
        argentgagne = dico[nombre]
        totalargent = totalargent + argentgagne
        print("Tu as choisis le nombre",(nombre),"et tu viens de gagner",(argentgagne),"€ !!!")
    elif cadeau=="non":
        i = 1
        print("Bah dans ce cas tu n'auras plus rien, tampis pour toi !")
    else:
        print("Répond par oui ou par non !")




print("FIN DU PROGRAMME, tu as gagné au total ",(totalargent),"€")