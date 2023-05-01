import { Request, Response } from "express";
import { RESPONSE_STATUS } from "../resp-handler/constants";
import logger from "../logger";
import {
  sendError,
  sendSuccess,
} from "../resp-handler/respHandler";

export default class BaseController {
  service: any;
  constructor(service: any) {
    this.service = service;
    this.create = this.create.bind(this);
    this.readOne = this.readOne.bind(this);
    this.readAll = this.readAll.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  async readOne(request: Request, response: Response) {
    try { 
      const { params, query } = request;
      let data = await this.service.readOne(params, query);
      return sendSuccess(response, data);
    } catch (err: any) {
      // logger.error(err)
      return sendError(response, err);
    }
  }

  async readAll(request: Request, response: Response) {
    try {
      const { params, query } = request;
      let data = await this.service.readAll(params,query);
      return sendSuccess(response, data);
    } catch (err: unknown) {
      logger.error(err);
      return sendError(response, err);
    }
  }

  async create(request: Request, response: Response) {
    try {
      const { params, query, body } = request;
      let data = await this.service.create(params, query, body);
      return sendSuccess(
        response,
        data,
        RESPONSE_STATUS.SUCCESS_CREATED
      );
    } catch (err: any) {
      return sendError(response, err);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { params, query, body } = request;
      let data = await this.service.update(params, query, body);
      return sendSuccess(response, data);
    } catch (err: unknown) {
      logger.error(err);
      return sendError(response, err);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { params, query, body } = request;
      let data = await this.service.delete(params, query, body);
      return sendSuccess(response, data);
    } catch (err: unknown) {
      logger.error(err);
      return sendError(response, err);
    }
  }
}