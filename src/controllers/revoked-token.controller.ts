import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { RevokedToken } from '../models';
import { RevokedTokenRepository } from '../repositories';

export class RevokedTokenController {
  constructor(
    @repository(RevokedTokenRepository)
    public revokedTokenRepository: RevokedTokenRepository,
  ) { }

  @post('/revoked-tokens', {
    responses: {
      '200': {
        description: 'RevokedToken model instance',
        content: { 'application/json': { schema: { 'x-ts-type': RevokedToken } } },
      },
    },
  })
  async create(@requestBody() revokedToken: RevokedToken): Promise<RevokedToken> {
    return await this.revokedTokenRepository.create(revokedToken);
  }

  @get('/revoked-tokens/count', {
    responses: {
      '200': {
        description: 'RevokedToken model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(RevokedToken)) where?: Where<RevokedToken>,
  ): Promise<Count> {
    return await this.revokedTokenRepository.count(where);
  }

  @get('/revoked-tokens', {
    responses: {
      '200': {
        description: 'Array of RevokedToken model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': RevokedToken } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(RevokedToken)) filter?: Filter<RevokedToken>,
  ): Promise<RevokedToken[]> {
    return await this.revokedTokenRepository.find(filter);
  }

  @patch('/revoked-tokens', {
    responses: {
      '200': {
        description: 'RevokedToken PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() revokedToken: RevokedToken,
    @param.query.object('where', getWhereSchemaFor(RevokedToken)) where?: Where<RevokedToken>,
  ): Promise<Count> {
    return await this.revokedTokenRepository.updateAll(revokedToken, where);
  }

  @get('/revoked-tokens/{id}', {
    responses: {
      '200': {
        description: 'RevokedToken model instance',
        content: { 'application/json': { schema: { 'x-ts-type': RevokedToken } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<RevokedToken> {
    return await this.revokedTokenRepository.findById(id);
  }

  @patch('/revoked-tokens/{id}', {
    responses: {
      '204': {
        description: 'RevokedToken PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() revokedToken: RevokedToken,
  ): Promise<void> {
    await this.revokedTokenRepository.updateById(id, revokedToken);
  }

  @put('/revoked-tokens/{id}', {
    responses: {
      '204': {
        description: 'RevokedToken PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() revokedToken: RevokedToken,
  ): Promise<void> {
    await this.revokedTokenRepository.replaceById(id, revokedToken);
  }

  @del('/revoked-tokens/{id}', {
    responses: {
      '204': {
        description: 'RevokedToken DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.revokedTokenRepository.deleteById(id);
  }
}
