import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, switchMap } from "rxjs/operators";
import { VinhoService } from "../services/vinho.service";
import { VinhosAction } from "../_store/modules/cart/cart.action";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Store } from "@ngrx/store";
import { ProductState } from "../models/product.model";

@Injectable()
export class ProductListEffects {
  constructor(
    private actions$: Actions,
    private vinhoService: VinhoService,
    private store: Store<ProductState>
  ) {}

  @Effect()
  getProductsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VinhosAction.loadVinhosEffect),
      map(action => action.payload),
      switchMap(() =>
        this.vinhoService.getProducts().pipe(
          map(products => {
            this.store.dispatch(VinhosAction.add({ payload: products }));
            return null;
          })
        )
      )
    )
  );

  //   @Effect()
  //   edit$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(VinhosAction.ActionTypes.EDIT_EFFECT),
  //       map(action => action["payload"]),
  //       catchError(error => error),
  //       exhaustMap(product =>
  //         this.vinhoService.edit(product).pipe(
  //           map(product => {
  //             VinhosAction.Edit({ payload: product });
  //           })
  //         )
  //       )
  //     )
  //   );

  //   @Effect()
  //   add$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(VinhosAction.ActionTypes.ADD_EFFECT),
  //       map(action => action["payload"]),
  //       catchError(error => error),
  //       exhaustMap(product =>
  //         this.vinhoService.create(product).pipe(
  //           map(product => {
  //             VinhosAction.Add({ payload: product });
  //           })
  //         )
  //       )
  //     )
  //   );

  //   @Effect()
  //   remove$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(VinhosAction.ActionTypes.REMOVE_EFFECT),
  //       map(action => action["payload"]),
  //       catchError(error => error),
  //       exhaustMap(product =>
  //         this.vinhoService.delete(product).pipe(
  //           map(product => {
  //             VinhosAction.Remove({ payload: product });
  //           })
  //         )
  //       )
  //     )
  //   );
}
