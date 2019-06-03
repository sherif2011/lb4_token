import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class RevokedToken extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  jwt: string;


  constructor(data?: Partial<RevokedToken>) {
    super(data);
  }
}
