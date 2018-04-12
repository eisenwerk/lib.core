import URLParse from 'url-parse';
import _ from 'underscore-mixin';

export default class Util
{
    static getAlphabeticalComparator()
    {
        if ('localeCompare' in String.prototype)
        {
            return (a, b) => {
                return a.localeCompare(b);
            };
        }
        else
        {
            return this.getNumericComparator(a.order, b.order);
        }
    }

    static getNumericComparator()
    {
        return (a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        };
    }

    static transformCamel(string)
    {
        if (!_.isStringNotEmpty(string))
        {
            return '';
        }

        if (!this._tcRegExp)
        {
            this._tcRegExp = /([A-Z]{1})/g;
        }

        return _.uCFirst(string.replace(this._tcRegExp, ' $1').trim());
    }

    static parseUrl(url)
    {
        url = new URLParse(url);

        const q = url.query;
        url.params = {};
        if (q)
        {
            url.params = q.trim().replace(/^\?/, '').split('&').reduce((result, item) => {
                item = item.split('=');
                result[item[0]] = decodeURIComponent(item[1]);

                return result;
            }, {});
        }

        return url;
    }
}
