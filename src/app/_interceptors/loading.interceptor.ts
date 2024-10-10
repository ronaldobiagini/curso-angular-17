import {
  HttpInterceptorFn,
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { OcupadoService } from '../_services/ocupado.service';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private ocupadoService: OcupadoService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.ocupadoService.ocupado();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.ocupadoService.desocupado();
      })
    );
  }
}

/*
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
*/
