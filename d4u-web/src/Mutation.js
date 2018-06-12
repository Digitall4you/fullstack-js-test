import { gql } from 'apollo-boost';

const addEmp = gql`
mutation createEmploye($nom:String, $prenom:String,
    $age: Int , $poste: String , $experience:String) {
  createEmploye(nom:$nom, prenom:$prenom,
    age:$age , poste:$poste , experience:$experience){
    id
  }
}
`
const upEmp = gql`mutation updateEmploye($id: ID!,$nom: String,$prenom:String,$age:Int,$poste:String){
    updateEmploye(id:$id , nom:$nom, prenom:$prenom,
      age:$age, poste:$poste){nom}
  }`

const delEmp = gql`mutation deleteEmploye($id:ID!){deleteEmploye(id:$id)}`

const delExp = gql`mutation deleteExperience($id:ID!){deleteExperience(id:$id)}`

const addExp = gql`
mutation createExperience($titre:String!, $description:String) {
        createExperience(titre:$titre , description:$description){
    titre
  }
}
`
export { addEmp, addExp, delEmp, delExp, upEmp }