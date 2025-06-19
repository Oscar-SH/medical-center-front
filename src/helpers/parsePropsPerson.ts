export const parseMatricula = (matricula: number) => {
    let new_mat = `${matricula}`;
    while (new_mat.length < 4) {
        new_mat = '0' + new_mat;
    }
    return new_mat;
};

export const parsePersonToName = (person: { fullname: string; first_surname: string; second_surname: string; } | null) => {
    let new_name = '';
    if (person) {
        new_name = `${person.first_surname} ${person.second_surname} ${person.fullname}`;
    }
    return new_name;
};