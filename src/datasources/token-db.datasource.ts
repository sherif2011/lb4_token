import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './token-db.datasource.json';

export class TokenDbDataSource extends juggler.DataSource {
  static dataSourceName = 'tokenDB';

  constructor(
    @inject('datasources.config.tokenDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
