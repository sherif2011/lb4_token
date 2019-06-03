import { DefaultCrudRepository } from '@loopback/repository';
import { RevokedToken } from '../models';
import { RevokedTokenDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class RevokedTokenRepository extends DefaultCrudRepository<
  RevokedToken,
  typeof RevokedToken.prototype.jwt
  > {
  constructor(
    @inject('datasources.revokedToken') dataSource: RevokedTokenDataSource,
  ) {
    super(RevokedToken, dataSource);
  }
}
