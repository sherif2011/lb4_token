import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './revoked-token.datasource.json';

export class RevokedTokenDataSource extends juggler.DataSource {
  static dataSourceName = 'revokedToken';

  constructor(
    @inject('datasources.config.revokedToken', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
