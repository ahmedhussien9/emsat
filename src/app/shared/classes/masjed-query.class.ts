

/**
 * This is a query interface for the masjed module 
 * This should help us to prototype the masjed query 
 */
export interface MasjedQueryI {
    job: number;
    type: number;
    branch: number;
    hifz: number;
}

export interface QueryHandler {
    getFilterQuery(): any;
    resetFilter(): any;
    isEmpty(): boolean;
}
/**
 * This Class will do the following 
 * The masjed module has filter feature
 * We need to do filteration based on 3 things (job - branch - type)
 * So we first define the three properties as undefiend and this is the default values for the fileration 
 * Next we have 3 functions that would help us to setting each property value (job - branch - type)
 * Also we have getFilterQuery function that would help us return the filteration values
 * Finally we have a resetFilter function that would help us to reset the filteration.
 */
export class MasjedQueryClass implements MasjedQueryI, QueryHandler {
    job: number = undefined;
    type: number = undefined;
    branch: number = undefined;
    hifz: number = undefined;
    /**
     * This function should recieve the selected job value 
     * And set it to the job of masjed query object. 
     * @param job 
     */
    setJob(job: number): void {
        if (job) {
            this.job = job;
        }
    }

    /**
     * This function should recieve the selected type value 
     * And set it to the job of masjed query object. 
     * @param type 
     */
    setType(type: number): void {
        this.type = type;
    }

    getType() {
        return this.type;
    }

    /**
     * This function should recieve the selected branch value 
     * And set it to the job of masjed query object.      
     * @param branch 
     */
    setBranch(branch: number): void {
        this.branch = branch;
    }

    setHifz(hifz: number): void {
        this.hifz = hifz;
    }
    /**
     * This will return all class properties job - type - branch as object
     * @returns 
     */
    getFilterQuery() {
        return this;
    }
    /**
     * This will reset the filteration values
     * @returns 
     */
    resetFilter() {
        this.branch = undefined;
        this.job = undefined;
        this.type = undefined;
        this.hifz = undefined;
    }

    isEmpty(): boolean {
        return Object.values(this).every(x => (x === null || x === undefined || x === ''));
    }
}
