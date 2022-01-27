function HelloWord( {nome, sobrenome} ) {
    return (
      <p>Hello Word! by {nome} {sobrenome}</p>
    )
};

function DadosPessoais( {idade, cpf, email} ){
    return (
    <p>Idade:{idade} | CPF: {cpf} | Email: {email}</p>
    )
};

export {HelloWord, DadosPessoais};