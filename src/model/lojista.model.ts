import { BaseEntity } from 'src/model/base-entity';

export class Lojista implements BaseEntity {
  constructor(
    public id?: number,
    public cpfCnpj?: string,
    public nome?: string,
    public cep?: string,
    public logradouro?: string,
    public numero?: string,
    public complemento?: string,
    public bairro?: string,
    public cidade?: string,
    public estado?: string,
    public pais?: string,
    public email?: string,
    public telefone?: string,
    public ativo?: boolean,
    public fotoDeCapaUrl?: string,
    public marketplaceUrl?: string,
    public fotoDeCapaArquivoContentType?: string,
    public fotoDeCapaArquivo?: any,
  ) {
    this.ativo = false;
  }
}
