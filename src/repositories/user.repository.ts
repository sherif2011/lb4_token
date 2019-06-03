import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {TokenDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.tokenDB') dataSource: TokenDbDataSource,
  ) {
    super(User, dataSource);
  }
}
