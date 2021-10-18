import { Get, Route, Tags, Post, Body, Path, Delete } from "tsoa";
import { Url } from "../models";
import {
    getUrls,
    createUrl,
    IUrlPayload,
    IUrlResponse,
    //getUrl,
    deleteUrl
} from "../repositories/url";

@Route("urls")
@Tags("Url")
export default class UrlController {

    shortCodeGenerator() {
        var result = '';
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    @Get("/:page/:perPage")
    public async getUrls(@Path() page: string, @Path() perPage: string): Promise<IUrlResponse> {
        return getUrls(Number(page), Number(perPage));
    }

    @Post("/")
    public async createUrl(@Body() body: IUrlPayload): Promise<Url> {
        body.short_code = this.shortCodeGenerator();
        return createUrl(body);
    }

    // @Get("/:id")
    // public async getUrl(@Path() id: string): Promise<Url | null> {
    //     return getUrl(Number(id));
    // }

    @Delete("/")
    public async deleteUrl(@Body() id: string): Promise<String | null> {
        return deleteUrl(Number(id));
    }
}