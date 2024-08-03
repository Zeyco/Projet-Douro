import math

def palettes(surface):
    try:
        # Conversion de la surface en nombre
        surface = float(surface)
    except ValueError:
        print("Veuillez entrer une surface valide.")
        return None
    
    # Calcul du nombre total de palettes (chaque palette couvre 20 m²)
    nombre_total_palettes = surface / 20
    # Arrondi au nombre entier supérieur
    nombre_total_palettes_result = math.ceil(nombre_total_palettes)
    
    print(f"Il te faudra maximum {nombre_total_palettes_result} palettes en étant seul.")
    
    # Calcul du coût
    coût = nombre_total_palettes_result * 1000
    print(f"Ce chantier te coûtera {coût} euros au total rien que pour toutes les palettes.")
    
    return nombre_total_palettes_result

def jour(surface):
    try:
        # Conversion de la surface en nombre
        surface = float(surface)
    except ValueError:
        print("Veuillez entrer une surface valide.")
        return

    try:
        # Demande à l'utilisateur le nombre de personnes travaillant aujourd'hui
        nbr_de_pers = int(input("Combien de personnes avez-vous à travailler aujourd'hui avec vous : "))
    except ValueError:
        print("Veuillez entrer un nombre valide de personnes.")
        return

    pose = 140
    moyenne_m2_pour2 = 12
    moyenne_m2_pour3 = 18

    if nbr_de_pers == 2:
        total2 = moyenne_m2_pour2 * pose
        print(f"Votre prix moyen par jour pour la pose pour l'ensemble de l'équipe est de {total2} euros.")
        print(f"Le temps moyen pour décharger le nombre de palettes sera de 1.5 heures.")
        tps = surface / moyenne_m2_pour2
        tempsfinal = math.ceil(tps)
        print(f"Il te faudra environ {tempsfinal} jours pour finir le nombre de m² de pierre ")
    elif nbr_de_pers == 3:
        total3 = moyenne_m2_pour3 * pose
        print(f"Votre prix moyen par jour pour la pose pour l'ensemble de l'équipe est de {total3} euros.")
        print(f"Le temps moyen pour décharger le nombre de palettes sera de 1.5 heures.")
        tps = surface / moyenne_m2_pour3
        tempsfinal = math.ceil(tps)
        print(f"Il te faudra environ {tempsfinal} jours pour finir le nombre de m² de pierre.")
    else:
        print("C'est bien, vous avez embauché plus d'employés ou un nombre incorrect de personnes.")

# Demande à l'utilisateur de donner la surface du chantier
surface = input("Donne la surface du chantier pour commencer : ")

nombre_total_palettes_result = palettes(surface)
if nombre_total_palettes_result is not None:
    jour(surface)
