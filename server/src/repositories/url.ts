import { getRepository } from "typeorm";
import { Url } from "../models";

export interface IUrlPayload {
  url: string;
  short_code: string;
}

export interface IUrlResponse {
  urls: Array<Url>;
  total: number;
  page: number;
  lastPage: number;
}

export const getUrls = async (page: number, perPage:number): Promise<IUrlResponse> => {
  const urlRepository = getRepository(Url);
  const builder = urlRepository.createQueryBuilder('urls');
  builder.offset((page - 1) * perPage).limit(perPage);
  const total = await builder.getCount();
  return {
    urls: await builder.getMany(),
    total: total,
    page: page,
    lastPage: Math.ceil(total / perPage)
  };
  //return urlRepository.find();
};

export const createUrl = async (payload: IUrlPayload): Promise<Url> => {
  const urlRepository = getRepository(Url);
  const url = new Url();
  return urlRepository.save({
    ...url,
    ...payload,
  });
};

// export const getUrl = async (id: number): Promise<Url | null> => {
//   const urlRepository = getRepository(Url);
//   const url = await urlRepository.findOne({ id: id });
//   if (!url) return null;
//   return url;
// };

export const deleteUrl = async (id: number): Promise<String | null> => {
  const urlRepository = getRepository(Url);
  const url = await urlRepository.delete({ id: id });
  if (!url) return null;
  return "Deleted";
};