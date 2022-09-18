import { Injectable } from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';

@Injectable()
export class TranslationService extends I18nRequestScopeService {
  async getCurrentLanguage() {
    return this['req']['headers']['accept-language'];
  }
}
