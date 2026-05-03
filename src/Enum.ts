//enum
// set of fixed string leteral string ek jaigai rakhe 

type UserRoles = " Admin " | " Editor " | "Viewer";

const canEdit = (role:UserRoles) => {
    if(role === " Admin " || role === " Editor "){
        return true;
    }else return false;
};

const isEditPremissable = canEdit(" Admin ");

console.log(isEditPremissable);
