import {
    readFileSync,
    writeFileSync
} from 'fs';

export class dataBase {
    path = '';

    constructor(path: string, auto_init?: boolean) {
        this.path = path;

        if (auto_init) {
            this.init();
        };
    };

    public init() {
        try {
            writeFileSync(this.path, JSON.stringify({}));
        } catch (err) {
            console.error(err);
        };
    };

    public write(content: any) {
        try {
            writeFileSync(this.path, JSON.stringify(content));
        } catch (err) {
            console.error(err);
        };
    };

    /**
     * Reads the JSON file.
     * 
     * @returns {object}
     */

    public read() {
        try {
            const data = readFileSync(this.path, 'utf-8');

            return JSON.parse(data);
        } catch (err) {
            console.error(err);

            return undefined;
        };
    };

    public set(variable: string, value: any) {
        try {
            let data = this.read();

            data[variable] = value;

            this.write(data);
        } catch (err) {
            console.error(err);
        };
    };

    public del(variable: string) {
        try {
            let data = this.read();

            if (variable in data) {
                delete data[variable];
            } else return;

            this.write(data);
        } catch (err) {
            console.error(err);
        };
    };

    public get(variable: string) {
        try {
            let data = this.read();

            if (variable in data) {
                return data[variable];
            } else return undefined;
        } catch (err) {
            console.error(err);
        };
    };

    public cls(variable: string) {
        try {
            let data = this.read();

            if (variable in data) {
                if (typeof data[variable] === 'boolean') {
                    data[variable] = false;
                } else if (typeof data[variable] === 'bigint') {
                    data[variable] = 0;
                } else if (typeof data[variable] === 'number') {
                    data[variable] = 0;
                } else if (typeof data[variable] === 'object') {
                    data[variable] = {};
                } else if (typeof data[variable] === 'string') {
                    data[variable] = '';
                } else if (Array.isArray(data[variable])) {
                    data[variable] = [];
                } else return;
            } else return;

            this.write(data);
        } catch (err) {
            console.error(err);
        };
    };

};