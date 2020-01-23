import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

export interface ViniculaState {

}

export const reducers: ActionReducerMap<ViniculaState> = {}

export const metaReducers: MetaReducer<ViniculaState>[] = !environment.production ? [] : [];

const CONFIG_STORE_MODULE = {
    metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true
    }
  }

const CONFIG_STORE_DEV_MODULE = { maxAge: 100, logOnly: environment.production }
const CONFIG_EFFECTS_MODULE = []


@NgModule({
    imports: [
        StoreModule.forRoot(reducers, CONFIG_STORE_MODULE),
        StoreDevtoolsModule.instrument(CONFIG_STORE_DEV_MODULE),
        EffectsModule.forRoot(CONFIG_EFFECTS_MODULE)
    ],
    exports: [StoreModule, StoreDevtoolsModule, EffectsModule]
})
export class ViniculaStoreModule {}