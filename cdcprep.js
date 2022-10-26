// Marvish Chandra

function requiredImmunizations(age){
    youngI = ["First Vaccination","Second Vaccination","Booster Shot"];
    olderI = ["First Vaccination","Second Vaccination","Booster Shot","Fourth Vaccine"];
    if age > 60:
        for (i in youngI):
            print(i);
    if age < 60:
        for (j in olderI):
            print(j);
}

function bestPractices(practice){
    keyStrategies = ["Staying home when sick","Ventilation","Hand hygiene","cleaning","masking","testing"]
    if practice == keyStrategies[0]:
        print("If required, stay at home for at least a week to two to quarantine.");
    if practice == keyStrategies[1]:
        print("Make sure to have enough exposure to air and be in a clean environment.");
    if practice == keyStrategies[2]:
        print("Use hand sanitizer that kills at least 99.9% of bacteria and frequently wash your hands.");
    if practice == keyStrategies[3]:
        print("Routinely clean your classroom and home areas.");
    if practice == keyStrategies[4]:
        print("Wear an authorized mask being N95 and that your mouth and nose are completely covered.");
    if practice == keyStrategies[5]:
        print("Before students enter your classroom, check for their temperature and make sure that they have masks.");
    else print("Review the key strategies outlined earlier to be safe during the COVID pandemic.");
}