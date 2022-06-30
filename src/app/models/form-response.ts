export class FormResponse {
    
    message: string = "";
    error: string = "";

    setMessage(m: string) {
        this.message = m;
        this.error = "";
    }

    setError(e: string) {
        this.message = "";
        this.error = e;
    }
}
