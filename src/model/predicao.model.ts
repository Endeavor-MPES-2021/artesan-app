import { BaseEntity } from 'src/model/base-entity';
import { Lojista } from './lojista.model';

export class Predicao implements BaseEntity {
  constructor(
    public id?: any,
    public probability?: number,
    public tagId?: string,
    public tagName?: string,
    public nomeDaObra?: string,
    public nomeDoArtesao?: string,
    public fotoDeCapaDaObraUrl?: string,
    public fotoDeCapaDoArtesaoUrl?: string,
    public dimensao?: string,
    public origem?: string,
    public descricaoDaObra?: string,
    public descricaoDoArtesao?: string,
    public variacaoDePreco?: string,
    public lojistas?: Lojista[]
) {
  }
}
