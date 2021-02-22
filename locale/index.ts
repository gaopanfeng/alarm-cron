import {cloneDeep} from 'lodash';
import en from './en';
import cn from './cn';
const locales = {en,cn};
const current = cloneDeep(en);
current.locale = 'en';
export default current;

export const setLocale = (locale:string)=>{

    const localeObj = locales[locale]||en;
    localeObj.locale = locale;
    Object.assign(current,cloneDeep(localeObj));
}