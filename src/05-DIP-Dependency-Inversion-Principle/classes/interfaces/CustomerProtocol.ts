/* export interface CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
} */ // -> incorreto pelo princípio, pois para casos de PF o CNPJ não é necessário e vise-versa

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
