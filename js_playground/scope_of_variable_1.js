function marry(man, women) {
    man.wife = women;
    women.husband = man;

    return {
        father: man,
        mother: women
    };
}



var family = marry({name: 'Vasily'}, {name: 'Marya'});

delete family.father;
delete family.mother.husband;

family = null;

console.log(family);
