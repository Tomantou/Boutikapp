import { HttpErrorResponse, HttpResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthorizeService } from './Shared/authorize.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {

    constructor(public authService: AuthorizeService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has("Authorization") && !request.url.includes("googleapis")) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.authService.getToken()
                }
            });
        }

        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) => event instanceof HttpResponse,
            (error: HttpErrorResponse) => {
                if (error.status === 401) {
                } else if (error.status === 500) {
                }
            }
        ));
    }
}